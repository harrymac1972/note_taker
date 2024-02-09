// init
const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

// boilerplate middleware "JUS"
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// temp data
let dbData = {"name":"Harry",
                "role":"Dude"}

// routes
app.get('/data',(req,res)=>{
    res.json(dbData)
});

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/notes.html'))
});


// listen
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });