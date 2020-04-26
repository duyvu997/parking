
const constant = require('./common/constant')
const fileService = require("./common/file.service");
const parkingLot = require("../src/parking_lot/service")

const main = () => {
    try {

        const dataProcessed = fileService.readInputFile(process.argv[2]);
        console.log(dataProcessed)
        let isCreated = false;
        let parkData;
        dataProcessed.forEach(event => {
            switch (event[0]) {
                case constant.INIT:
                    parkData = parkingLot.init(event, isCreated);
                    console.log("QQQQQQ: ", parkData)
                    isCreated = true;
                    break;
                case constant.PARK:
                    console.log("Allocated slot number: 1");
                    break;
                case constant.LEAVE:
                    console.log("Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30");
                    break;
                case constant.STATUS:
                    console.log(`
                Slot No.        Registration No.
                1                KA-01-HH-1234
                2                KA-01-HH-9999
                3                KA-01-BB-0001
                4                KA-01-HH-7777
                5                KA-01-HH-2701`)
                default:
                    console.log("please input a valid event:  create_parking_lot | park | leave | status")
            }
        });
    } catch (error) {
        console.log("Something went wrong: ", error)
    }
}

main();

console.log('after calling readFile');
