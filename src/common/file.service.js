const fs = require('fs');
const path = require('path');
const readInputFile = function (fileName) {
    const filePath = path.join(__dirname, `../../input/${fileName}`);
    const contents = fs.readFileSync(filePath, 'utf8');
    const data = contents.split('\n'); // TODO: change to readline by line. if the contents is too big, readfileSync will load all to RAM. not good
    return data.map(item => item.split(" "));
}
module.exports.readInputFile = readInputFile