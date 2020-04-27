const utils = require("../common/utils");
const constant =  require("../common/constant");
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
    if (utils.isFull(parkingLotData)) {
        console.log("Sorry, parking lot is full");
        return;
    };
    
    parkingLotData.push({ position, carId });
    // todo: make  an one service handle print something;
    console.log("Allocated slot number: ", position)
    return parkArea;

}
const leave = function (event, parkArea) {
    // todo: add one service to check valid input
    // const cardId = event[1];
    // const parkingTime = event[2];
    // const charge = chargeService.calculate(parkingTime);
    // todo: make  an one service handle print something;

}
const status = function () {
    // todo: add one service to check valid input


}

module.exports.init = init;
module.exports.park = park;

