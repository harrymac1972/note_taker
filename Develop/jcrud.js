
const fs = require("fs");

function updateDB(savedNote) {
    oldData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
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