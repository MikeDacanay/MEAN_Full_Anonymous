let mongoose = require('mongoose'); ///this is what you need to modularize
let Note = mongoose.model('Note'); ///this is what you need to modularize
module.exports = {
	show: function(req, res) {
		Note.find({}, function(err, notes){
		return res.json(notes);
		})	
	},
	create: function(req, res){
		var note = new Note();
		note.memo = req.body.memo;
		note.save();;
		return res.json(note);
	}
}