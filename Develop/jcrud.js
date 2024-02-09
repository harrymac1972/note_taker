
const fs = require("fs");


function readDB() {    
    return JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
}


function updateDB(savedNote) {
    oldData = readDB();
    console.log(oldData);
    oldData.push(savedNote);
    console.log("=======");
    console.log(oldData);

}

let savedNote = {
    "title":"Groceries",
    "text":"at Safeway"
}
updateDB(savedNote);

module.exports = { readDB };