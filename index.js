class get {
  constructor(app) {
    if (!app || !app.settings.port)
      throw new Error("App is a required parameter!");
    this.app = app;
  }
  pass(path) {
    this.app.get(path, function(req, res, next) {
      return res.end();
    });
  }
  send(path, toSend) {
    this.app.get(path, function(req, res, next) {
      return res.send(toSend);
    });
  }
  sendFile(path, filePath) {
    this.app.get(path, function(req, res, next) {
      return res.sendFile(filePath);
    });
  }
  do(path, cb) {
    this.app.get(path, function(req, res, next) {
      cb(req, res, next);
    });
  }
  add(path, run) {
    if (typeof run == "function") {
      this.app.get(path, run);
    } else {
      this.app.get(this.path, function(req, res, next) {
        return res.send(run);
      });
    }
  }
}
module.exports = get;
