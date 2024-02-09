
const router = require('express').Router();
const jcrud = require('../jcrud');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
    dbData = jcrud.dbGetData();
    res.json(dbData);
  });

router.post('/notes', (req, res) => {
    let savedNote = req.body;
    savedNote.id = uuidv4();
    jcrud.dbAppend(savedNote);
    res.json(savedNote);
  });
  
router.delete('/notes/:id', (req, res) => {
    let noteID = req.params.id;
    jcrud.dbDelete(noteID);
    res.json({ message:'Note Deleted' });
  });
  

module.exports = router;