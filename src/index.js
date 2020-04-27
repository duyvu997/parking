const constant = require('./common/constant')
const fileService = require("./common/io_services");
const parkingLot = require("../src/parking_lot/service")

const main = () => {
    try {

        const dataProcessed = fileService.readInputFile(process.argv[2]);
        console.log("dataProcessed: ", dataProcessed);
        let isCreated = false;
        let parkArea = {};
        dataProcessed.forEach(event => {
            switch (event[0]) {
                case constant.INIT:
                    parkArea = parkingLot.init(event, isCreated);
                    console.log("parkArea: ", parkArea);
                    isCreated = true;
                    break;
                case constant.PARK:
                    isCreated ? parkArea = parkingLot.park(event, parkArea) :
                        console.log("please input the create parking lot first")
                    break;
                case constant.LEAVE:
                    isCreated ?
                        parkArea = parkingLot.leave(event, parkArea) :
                        console.log("please input the create parking lot first")

                    break;
                case constant.STATUS:
                    isCreated ?
                        console.log(`
                Slot No.        Registration No.
                1                KA-01-HH-1234
                2                KA-01-HH-9999
                3                KA-01-BB-0001
                4                KA-01-HH-7777
                5                KA-01-HH-2701`) :
                        console.log("please input the create parking lot first")

                    break;
                default:
                    console.log("please input a valid event:  create_parking_lot | park | leave | status")
            }
        });
    } catch (error) {
        console.log("Something went wrong: ", error)
    }
}

main();