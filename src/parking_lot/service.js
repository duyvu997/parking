const utils = require("../common/utils");
const ParkingStatus = {
    AVAILABLE = "AVAILABLE",
    UNAVAILABLE =  "UNAVAILABLE"
}
const genarateInitData = function (capacity) {
    const data = []
    for (let i = 1; i <= capacity; i++) {
        data.push({ position: i, status: parkingLotData.AVAILABLE })
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
    const { capacity, parkingLotData } = parkArea;
    if (utils.isFull(capacity, parkingLotData)) {
        console.log("Sorry, parking lot is full");
        return;
    };
    const carId = event[1];
    const position = parkingLotData.length + 1;
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

