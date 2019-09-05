var Spring = require('js-spring');

var log = console.log;
class init {
	constructor(opt) {
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
	   module.exports = this;
	}
}
module.exports = init;