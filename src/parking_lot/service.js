const utils = require("../common/utils");
const constant = require("../common/constant");
const chargeService =  require("./parking_fee_services");
const genarateInitData = function (capacity) {
    const data = []
    for (let i = 1; i <= capacity; i++) {
        data.push({ position: i, status: constant.ParkingStatus.AVAILABLE })
    }
    return data;
}

const init = function (event, isCreated) {
    // todo: add one service to check valid input

    if (isCreated) {
        throw new Error("Parking lot has been created")
    }
    const capacity = event[1];
    if (!utils.isValidCapacity(capacity)) {
        throw new Error("Create the parking lot failed, capacity is invalid !!!")
    }
    const parkingLotData = genarateInitData(capacity);
    // todo: make  an one service handle print something;
    console.log(`Created parking lot with ${capacity} slots`);
    return { capacity, parkingLotData };
}

const park = function (event, parkArea) {
    // todo: add one service to check valid input
    const carId = event[1];

    const { parkingLotData } = parkArea;
    const indexOfAvailableSlot = parkingLotData.findIndex((item) =>
        (item.status == constant.ParkingStatus.AVAILABLE)
    );
    if (indexOfAvailableSlot == -1) {
        console.log("Sorry, parking lot is full");
        return parkArea;
    }

    console.log("available slot: ", parkingLotData[indexOfAvailableSlot].position)
    parkingLotData[indexOfAvailableSlot].status = carId;
    // todo: make  an one service handle print something;
    console.log("Allocated slot number: ", parkingLotData[indexOfAvailableSlot].position);
    console.log(parkingLotData)
    return parkArea;

}
const leave = function (event, parkArea) {
    // todo: add one service to check valid input
    const carId = event[1];
    const parkingTime = event[2];
    const charge = chargeService.calculateCharge(parkingTime);
    const { parkingLotData } = parkArea;
    const idxOfCar = parkingLotData.findIndex((item) =>
        (item.status == carId)
    );
    if (idxOfCar == -1) {
        console.log(`Registration number ${carId} not found`);
        return parkArea;
    }
    parkingLotData[idxOfCar].status = constant.ParkingStatus.AVAILABLE;
    console.log(`Registration number ${carId} with Slot Number ${parkingLotData[idxOfCar].position} is free with Charge ${charge}`);
    // todo: make  an one service handle print something;
    return parkArea;

}
const status = function () {
    // todo: add one service to check valid input


}

module.exports.init = init;
module.exports.park = park;
module.exports.leave = leave;


