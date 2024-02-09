// init
const express = require('express');
const PORT = 3000;
const app = express();

// boilerplate middleware "JUS"
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//temp test
app.get('/',(req,res) => {
    res.status(200).json({message: "Hello World v2"})
});

// listen
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });