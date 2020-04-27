const constant = require("../common/constant");

const isValidCapacity = function (capacity) {
    const numberParsed = parseInt(capacity, 10)
    return numberParsed > 0 && numberParsed < constant.MAX_ACCEPTABLE_CAPACITY
}
module.exports.isValidCapacity = isValidCapacity;
