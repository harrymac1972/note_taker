// init
const express = require('express');
const PORT = 3000;
const app = express();

// //temp test
// app.get('/',(req,res) => {
//     res.status(200).json({message: "Hello World v2"})
// });

// boilerplate middleware "JUS"
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// listen
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });