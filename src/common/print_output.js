const initParkinglot = function (capacity) {
    console.log(`Created parking lot with ${capacity} slots`);
}
const allocatedACar = function (slotToBeAllocated) {
    console.log("Allocated slot number: ", slotToBeAllocated);
}
module.exports.initParkinglot = initParkinglot;
module.exports.allocatedACar = allocatedACar;
