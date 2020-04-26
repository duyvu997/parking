const init = function (event, isCreated) {
    const capacity =  event[1];
    if (isCreated) {
        throw new Error("Parking lot has been created")
    }
    console.log(`Created parking lot with ${capacity} slots`);
    return new Array(capacity);
}
const park = function () {

}
const leave = function () {

}
const status = function () {

}

module.exports.init = init;
