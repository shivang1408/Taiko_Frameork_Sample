const fs = require('fs');
let map = new Map();
var tcName;

class obAction {

    async settcName(testcaseName) {
        tcName = testcaseName;
    }

    async executeQuery(page) {
        const data = fs.readFileSync('./tests/TestData/TestData.json');
        var jsonParsed = JSON.parse(data);
        var sheetlevel = jsonParsed[page];
        var Tcnames = sheetlevel[tcName];
        for (let k of Object.keys(Tcnames)) {
            map.set(k, Tcnames[k]);
        }
    }

    async executeQueryIteration(page, iteration) {
        const data = fs.readFileSync('./tests/TestData/TestData.json');
        var jsonParsed = JSON.parse(data);
        var sheetlevel = jsonParsed[page];
        var Tcnames = sheetlevel[ tcName + '_' + iteration];
        for (let k of Object.keys(Tcnames)) {
            map.set(k, Tcnames[k]);
        }
    }

    async getData(value) {
        let obval;
        for (var m of map.entries()) {
            if (m[0] === value) {
                obval = m[1];
            }
        }
        console.log(obval);
        return obval;
    }
}

module.exports = new obAction();