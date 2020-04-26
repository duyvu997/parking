const isFull = require("../common/utils").isFull;
const init = function (event, isCreated) {
    if (isCreated) {
        throw new Error("Parking lot has been created")
    }
    const capacity = event[1];
    // todo: check valid of capacity value;
    console.log(`Created parking lot with ${capacity} slots`);
    return { capacity, parkingLotData: [] };
}
const park = function (event, parkArea) {
    const { capacity, parkingLotData } = parkArea;
    if (isFull(capacity, parkingLotData)) {
        console.log("Sorry, parking lot is full");
        return;
    };
    const carId = event[1];
    const position = parkingLotData.length + 1;
    parkingLotData.push({ position, carId });
    return parkArea;

}
const leave = function () {

}
const status = function () {

}

module.exports.init = init;
module.exports.park = park;

