// init
const jcrud = require('./jcrud');
const { v4: uuidv4 } = require('uuid');

// server generic
const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

// boilerplate middleware "JUS"
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


// routes start ================================================

app.get('/data',(req,res)=>{
    res.json(dbData)
});

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    dbData = jcrud.dbGetData();
    res.json(dbData);
  });

app.post('/api/notes', (req, res) => {
    let savedNote = req.body;
    savedNote.id = uuidv4();
    console.log(savedNote.id);
    jcrud.dbAppend(savedNote);
    res.json(savedNote);
  });
  
// routes end ================================================


// listen
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });