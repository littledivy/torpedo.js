var Spring = require("js-spring");

var { app } = new Spring({
  name: "torpedo"
});

class get {
  constructor(path) {
    this.path = path;
  }
  pass() {
    app.get(this.path, function(req, res, next) {
      return res.end();
    });
  }
  send(toSend) {
    app.get(this.path, function(req, res, next) {
      return res.send(toSend);
    });
  }
  sendFile(filePath) {
    app.get(this.path, function(req, res, next) {
      return res.sendFile(filePath);
    });
  }
  do(cb) {
    app.get(this.path, function(req, res, next) {
      cb(req, res, next);
    });
  }
  add(run) {
    if (typeof run == "function") {
      app.get(this.path, run);
    } else {
      app.get(this.path, function(req, res, next) {
        return res.send(run);
      });
    }
  }
}
module.exports = get;
