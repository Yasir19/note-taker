const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const notes = require('../../db/db');
const uuid = require('../../utils/uuid');
//endpoint to get the stored notes
router.get('/notes', (req,res)=>{
    fs.readFile('./db/db.json', 'utf8', (err,data)=>{
        if (err){
            res.send(404);
        }else {
        let reviews = JSON.parse(data);
        res.json(reviews);
        }
    });
});
// endpoint to post new notes 
router.post('/notes',(req, res)=>{
    const {title, text } = req.body;
    if(title && text) {
        const newNote ={
            title,
            text,
            id: uuid(),
        };
        fs.readFile('./db/db.json', 'utf8', (err,data)=>{
            if (err) {
              console.error(err);
             } else { 

         //convert string into JSON object 
         const parsedNotes = JSON.parse(data);

          //add a new review
         parsedNotes.push(newNote);
 
        fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 2),
        (writeERR) => 
        writeERR
        ?console.error(writeERR)
        :console.info('successfully updated reviews')
        );
    }
});
const response = {
    status: 'success',
    body: newNote,
};
console.log(response);
res.json(response);
    } else {
        res.json({
            message:'Error in posting notes'
        });
    }
});
router.delete('/notes/:id',(req,res)=>{
     console.log("req params", req.params.id)
     const deletedItem = notes.filter(({ id }) => id != req.params.id);
     fs.writeFile('./db/db.json', JSON.stringify(deletedItem, null, 2),
     (writeERR) =>
     writeERR
     ?console.error(writeERR)
     :console.info('successfull update notes')
     );
     res.json(deletedItem)
});
    


module.exports = router;