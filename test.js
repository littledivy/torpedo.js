const torpedo = require("./index");
const fetch = require("node-fetch");

function test(path, cb) {
  fetch(path)
    .then(res => res.text())
    .then(data => cb(null, data))
    .catch(err => cb(err));
}

describe("Torpedo", function() {
  it("pass", function(done) {
    new torpedo("/pass").pass();
    test("http://localhost:8080/pass", function(err) {
      if (err) done(err);
      else done();
    });
  });
  it("send", function(done) {
    new torpedo("/send").send("Hello, World!");
    test("http://localhost:8080/send", function(err, data) {
      if (err) return done(err);
      if (data == "Hello, World!") return done();
      done("Data was incorrect");
    });
  });
  it("send file", function(done) {
    new torpedo("/file").sendFile(__dirname + "/index.js");
    test("http://localhost:8080/file", function(err, data) {
      if (err) done(err);
      else done();
    });
  });
  it("do", function(done) {
    new torpedo("/").do(function(req, res, next) {
      res.send("Hello");
    });
    test("http://localhost:8080/", function(err, data) {
      if (err) return done(err);
      if (data == "Hello") return done();
      done("Data was incorrect");
    });
  });
  it("add", function(done) {
    new torpedo("/add").add(function(req, res, next) {
      res.send("Hello");
    });
    test("http://localhost:8080/add", function(err, data) {
      if (err) return done(err);
      if (data == "Hello") return done();
      done("Data was incorrect");
    });
  });
});
