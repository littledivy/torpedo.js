var Spring = require('../spring.js')

var { app } = new Spring({
  name:'test'
})

var log = console.log;

class get {
    constructor(path) {
	this.path = path;
    }
    pass() {
	app.get(this.path, function(req, res, next) {
		return res.end();
	})
    }	
    send(toSend) {
	app.get(this.path, function(req, res, next) {
		return res.send(toSend);
	})
    }
    sendFile(filePath) {
	app.get(this.path, function(req, res, next) {
		return res.sendFile(filePath);
	})	
    }
    do(cb) {
	app.get(this.path, function(req, res, next) {
		cb(req, res, next);
	})
    }	
	
}

new get('/pass').pass();
new get('/send').send('Hello, World!');
new get('/file').sendFile(__dirname+'/index.js');
new get('/').do(function(req, res, next) { res.send('Hello') });
