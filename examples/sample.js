var Torpedo = require('../dist/');

var { get } = Torpedo.default({
  name: 'sample-app',
  port: 8080
})

get('/').wait(4000).do((req, res, next) => {
  res.send('Torpedo is rocking!')
});
