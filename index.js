var Spring = require('js-spring');

var log = console.log;
class init {
	constructor(opt) {
		this.app = new Spring(opt).app;
		this.get = require('./src/get')(this.app).get;
	   module.exports = this;
	}
}
module.exports = init;