const initParkinglot = function (capacity) {
    console.log(`Created parking lot with ${capacity} slots`);
}
const allocatedACar = function (slotToBeAllocated) {
    console.log("Allocated slot number: ", slotToBeAllocated);
}
const aCarLeaved = function (carId, slot, charge) {
    console.log(`Registration number ${carId} with Slot Number ${slot} is free with Charge ${charge}`);
}
const parkingStatus = function (parkArea) {
    console.log("Slot No. \t Registration No.");
    parkArea.parkingLotData.forEach(element => {
        console.log(`${element.position} \t ${element.status}`)
    });
}

module.exports.initParkinglot = initParkinglot;
module.exports.allocatedACar = allocatedACar;
module.exports.aCarLeaved = aCarLeaved;
module.exports.parkingStatus = parkingStatus;


