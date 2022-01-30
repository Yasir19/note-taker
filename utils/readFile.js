const notes = require("../db/db.json");
const fs = require("fs");

const crudOperation = () =>{
const {title, text } = req.body;

if(title && text) {
    const newNote ={
        title,
        text,
        id: uuid(),
    };
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      //convert string into JSON object
      const parsedNotes = JSON.parse(data);

      //add a new review
      parsedNotes.push(newNote);

      fs.writeFile(
        "./db/db.json",
        JSON.stringify(parsedNotes, null, 2),
        (writeERR) =>
          writeERR
            ? console.error(writeERR)
            : console.info("successfully updated reviews")
      );
    }
  });
}
module.exports = crudOperation;

