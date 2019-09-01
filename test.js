const spring = require("js-spring");
const { app } = new spring({ name: "test" });

const Torpedo = require("./index");
const torpedo = new Torpedo(app);

const fetch = require("node-fetch");

function test(path, cb) {
  fetch(path)
    .then(res => res.text())
    .then(data => cb(null, data))
    .catch(err => cb(err));
}

describe("Torpedo", function() {
  it("pass", function(done) {
    torpedo.pass("/pass");
    test("http://localhost:8080/pass", function(err) {
      if (err) done(err);
      else done();
    });
  });
  it("send", function(done) {
    torpedo.send("/send", "Hello, World!");
    test("http://localhost:8080/send", function(err, data) {
      if (err) return done(err);
      if (data == "Hello, World!") return done();
      done("Data was incorrect");
    });
  });
  it("send file", function(done) {
    torpedo.sendFile("/file", __dirname + "/index.js");
    test("http://localhost:8080/file", function(err, data) {
      if (err) done(err);
      else done();
    });
  });
  it("do", function(done) {
    torpedo.do("/", function(req, res, next) {
      res.send("Hello");
    });
    test("http://localhost:8080/", function(err, data) {
      if (err) return done(err);
      if (data == "Hello") return done();
      done("Data was incorrect");
    });
  });
  it("add", function(done) {
    torpedo.add("/add", function(req, res, next) {
      res.send("Hello");
    });
    test("http://localhost:8080/add", function(err, data) {
      if (err) return done(err);
      if (data == "Hello") return done();
      done("Data was incorrect");
    });
  });
});
