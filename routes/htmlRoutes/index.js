const router = require('express').Router();
const path = require('path');

// direction to index.html page 
router.get('/',(req, res)=>{
    res.sendFile(path.join(__dir, '../../public/index.html'));
});
// direction to notes.html page
router.get('/notes',(req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/notes.html'));
});
// direction to index.html for any other request
router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});

module.exports = router;




