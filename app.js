var Torpedo = require('./');
var { get } = new Torpedo({ name: "Hello" });
//console.log(get)
get('/').send("Hello")

