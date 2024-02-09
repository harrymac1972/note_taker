// jcrud = JSON CRUD functions for our "data-base".

const fs = require("fs");


function dbAppend(savedNote) {
    dbDataArr = dbGetData();
    dbDataArr.push(savedNote);
    dbWrite(dbDataArr);
}

function dbDelete(noteID) {
    dbDataArr = dbGetData();
    let newDataArr = dbDataArr.filter(obj => obj.id !== noteID);
    dbWrite(newDataArr);
}

function dbGetData() {    
    return JSON.parse(fs.readFileSync('./db/db.json','utf8'))
}

function dbWrite(noteArr) {    
  fs.writeFileSync('./db/db.json',JSON.stringify(noteArr));
}


module.exports = { dbAppend,dbDelete,dbGetData };