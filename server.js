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

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Server
app.listen(1337, ()=> console.log('Server running at 1337'))