var Spring = require('../spring.js');

var log = console.log;
class init {
	constructor(opt) {
		this.app = new Spring(opt).app;
		this.get = require('./get')(this.app).get;
	   module.exports = this;
	}
}
module.exports = init;	
/**
new get('/pass').pass();
new get('/send').send('Hello, World!');
new get('/file').sendFile(__dirname+'/index.js');
new get('/').do(function(req, res, next) { res.send('Hello') });
new get('/do_simple').do('Hello Man')
**/ 