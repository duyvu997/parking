const calculateCharge = function (parkingTime) {
    const feeForFirst2Hour = 10;
    return 10 * Math.round((parkingTime - 2)) + feeForFirst2Hour;
}

module.exports.calculateCharge = calculateCharge;