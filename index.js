var log = console.log;
class init {
	constructor(instance,opt) {
		this.app = instance;
		/** Do Not Delete
                this.options = instance.options;
		for (var x in opt) {
		   this[x] = (set) => {
				instance.options[x] = set;
				return true;
			}	
	        } **/	
		this.get = require('./src/get')(this.app).get;
		this.post = require('./src/post')(this.app).post;
		if(opt.mongo) this.mongo = require('./src/mongo')(opt.mongo);
		if(opt.client) this.socket = require('socket.io-client')
	   module.exports = this;
	}
}
module.exports = init;
