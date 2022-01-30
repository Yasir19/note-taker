const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);

class Note {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }
    write(note){
        return writeFileSync('db/db.json' , JSON.stringify(note , null , 2));

    }
    viewNotes() {
        return this.read().then((notes)=>{
            let parsedNotes;
            try {
                parsedNotes =[].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        })
    }
}