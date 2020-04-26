const MAX_ACCEPTABLE_CAPACITY = 100000;
const isFull = function (capacity, data) {
    return data.length == capacity;
}
const isValidCapacity = function (capacity) {
    const numberParsed = parseInt(capacity, 10)
    return numberParsed > 0 && numberParsed < MAX_ACCEPTABLE_CAPACITY
}
module.exports.isFull = isFull;
module.exports.isValidCapacity = isValidCapacity;
