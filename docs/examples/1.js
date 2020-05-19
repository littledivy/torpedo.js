var Torpedo = require('torpedo.js');
var { get, post } = new Torpedo({ name: "my-app" });

get('/').send('Hello, World!');