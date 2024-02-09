// init
const express = require('express');
const PORT = 3000;
const app = express();

// boilerplate middleware "JUS"
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// listen
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });