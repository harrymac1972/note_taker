
// server generic
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');
const api = require('./routes/index');

// boilerplate middleware "JUS"
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));


// routes start ----------------

app.use('/api', api); // sub-routes for all '/api'

app.get('/data',(req,res)=>{
    res.json(dbData)
});

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/notes.html'))
});

// routes end ----------------


// listen
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });