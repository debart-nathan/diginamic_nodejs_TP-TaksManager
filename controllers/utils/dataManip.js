const { writeFileSync } = require("fs")
const { resolve } = require("path");

exports.updateJSON = (data) => {
    console.log(JSON.stringify(data));
    writeFileSync(
        resolve('db', 'db.json'),
        JSON.stringify(data,null,2)
    );
}