var notes = require('../controllers/notes.js')
module.exports = function(app){    ///this is what you need to modularize
	
	app.get('/notes', (req,res) =>{
		notes.show(req,res)
	})
	
	app.post("/notes", (req,res,next) =>{
		notes.create(req,res)
	})

	app.all("*", (req,res,next) =>{
		res.sendfile(path.resolve('./public/dist/index.html'))
	})

}