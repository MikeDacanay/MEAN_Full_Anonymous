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
	memo: { type: String, require: true}
});
// mongoose.model('Note', NoteSchema); //setter
let Note = mongoose.model('Note', NoteSchema); //getter

//Static Folder
app.use(express.static(__dirname+'/public/dist'));

//Routes

app.get('/notes', (req,res) =>{
	Note.find({}, function(err, notes){
		console.log(notes[0].memo);
		res.json(notes);
	});
	// console.log(Note.find({}).pretty());

	})
app.post("/note", (req,res,next) =>{
	var note = new Note();
	note.memo = req.body.memo;
	console.log(note.memo);
	note.save();
	console.log(note);
	res.json('notes saved');
	// console.log("Server post got here");
})

app.all("*", (req,res,next) =>{
	res.sendfile(path.resolve('./public/dist/index.html'))
})



// Server
app.listen(1337, ()=> console.log('Server running at 1337'))