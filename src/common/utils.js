const constant = require("../common/constant");

const isValidCapacity = function (capacity) {
    const numberParsed = parseInt(capacity, 10)
    return numberParsed > 0 && numberParsed < constant.MAX_ACCEPTABLE_CAPACITY
}
const transformAndValidateInitEvent =  function(event) {
    if(event.length < 2){
        throw new Error("invalid create parking lot event");
    };
    const capacity = event[1];
    if (!isValidCapacity(capacity)) {
        throw new Error("Create the parking lot failed, capacity is invalid !!!")
    }
    return capacity;
}

const transformAndValidateParkEvent =  function(event) {
    
}

const transformAndValidateLeaveEvent =  function(event) {
    
}
module.exports.isValidCapacity = isValidCapacity;
module.exports.transformAndValidateInitEvent =  transformAndValidateInitEvent;
