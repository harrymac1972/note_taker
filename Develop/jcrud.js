
const fs = require("fs");


function dbAppend(savedNote) {
    dbData = dbGetData();
    dbData.push(savedNote);
    console.log(dbData);
    dbWrite(dbData);
}

function dbGetData() {    
    return JSON.parse(fs.readFileSync('./db/db.json','utf8'))
}

function dbWrite(noteArr) {    
  fs.writeFileSync('./db/db.json',JSON.stringify(noteArr));
}




// ==========================================


// let savedNote = {
//     "title":"Groceries",
//     "text":"at Safeway"
// }
// dbAppend(savedNote);

// ==========================================

module.exports = { dbGetData };