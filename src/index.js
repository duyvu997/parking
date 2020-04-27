const constant = require('./common/constant')
const fileService = require("./common/io_services");
const parkingLot = require("../src/parking_lot/service")

const main = () => {
    try {
        const dataProcessed = fileService.readInputFile(process.argv[2]);
        let isCreated = false;
        let parkArea = {};
        dataProcessed.forEach(event => {
            switch (event[0]) {
                case constant.INIT:
                    parkArea = parkingLot.init(event, isCreated);
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
                    isCreated ? parkingLot.status(parkArea) :
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