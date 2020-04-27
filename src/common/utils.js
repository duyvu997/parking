const constant = require("../common/constant");
const isFull = function (data) {
    return data.find(item => (item.status == constant.ParkingStatus.AVAILABLE)) ? false : true;
}
const isValidCapacity = function (capacity) {
    const numberParsed = parseInt(capacity, 10)
    return numberParsed > 0 && numberParsed < constant.MAX_ACCEPTABLE_CAPACITY
}
module.exports.isFull = isFull;
module.exports.isValidCapacity = isValidCapacity;
