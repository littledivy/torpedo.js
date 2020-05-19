const Torpedo = require('../dist/');

var GET;

describe("constructor()", function () {
  it("should create a Torpedo instance", function () {
      var { get } = Torpedo.default({ name: 'bruh', port:8080 });
      GET = get;
  });
});

describe("get()", function () {
  it("should register `.send()`", function () {
    GET('/').send('Hello, World!');
  });
  it("should register `.sendFile()`", function () {
    GET('/').send('index.html');
  });
  it("should register `.wait()`", function () {
    GET('/').wait(1000).send('Oops, I\'m late');
  });
  it("should register `.do()`", function () {
    GET('/').do((req, res, next) => {
      res.send('woops')
    })
  });
});
