var Spring = require('js-spring');
var log = console.log;
class init {
	constructor(opt) {
		if(opt.get && opt.post) {
			console.log("Configuring js-spring and torpedo.js");
			this.get = require('./src/get')(opt).get;
			this.post = require('./src/post')(opt).post;
		} else {
		var instance = new Spring(opt);
		this.app = instance.app;
		this.options = instance.options;
		for (var x in opt) {
		   this[x] = (set) => {
				instance.options[x] = set;
				return true;
			}	
		}		
		this.get = require('./src/get')(this.app).get;
		this.post = require('./src/post')(this.app).post;
		this.use = this.app.use;
		this.socket = instance.socket;
		if(opt.mongo) this.mongo = require('./src/mongo')(opt.mongo);
		if(opt.client) this.socket = require('socket.io-client')
		}
	   module.exports = this;
	}
}
module.exports = init;
