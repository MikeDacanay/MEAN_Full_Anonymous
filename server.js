//Express
let express = require('express');
let app = express();
const path = require('path');

//Body Parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Database
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notesSchema');
let NoteSchema = new mongoose.Schema({
	note: { type: String, require: true}
});
mongoose.model('Note', NoteSchema); //setter
let User = mongoose.model('Note', NoteSchema); //getter

//Static Folder
app.use(express.static(__dirname+'/public/dist'));

//Routes

app.all("*", (req,res,next) =>{
	res.sendfile(path.resolve('./public/dist/index.html'))
})

// Server
app.listen(1337, ()=> console.log('Server running at 1337'))