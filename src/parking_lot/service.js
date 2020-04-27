const utils = require("../common/utils");
const constant = require("../common/constant");
const chargeService = require("./parking_fee_services");
const printOutput =  require("../common/print_output");
const genarateInitData = function (capacity) {
    const data = []
    for (let i = 1; i <= capacity; i++) {
        data.push({ position: i, status: constant.ParkingStatus.AVAILABLE })
    }
    return data;
}

const init = function (event, isCreated) {
    const capacity = utils.transformAndValidateInitEvent(event);
    if (isCreated) {
        throw new Error("Parking lot has been created")
    }
    const parkingLotData = genarateInitData(capacity);
    printOutput.initParkinglot(capacity);
    return { capacity, parkingLotData };
}

const park = function (event, parkArea) {
    
    const carId = utils.transformAndValidateParkEvent(event);
    const { parkingLotData } = parkArea;
    const indexOfAvailableSlot = parkingLotData.findIndex((item) =>
        (item.status == constant.ParkingStatus.AVAILABLE)
    );
    if (indexOfAvailableSlot == -1) {
        console.log("Sorry, parking lot is full");
        return parkArea;
    }
    parkingLotData[indexOfAvailableSlot].status = carId;
    printOutput.allocatedACar(parkingLotData[indexOfAvailableSlot].position)
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


