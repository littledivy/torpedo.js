import HTTPMethod from "./method";
import * as express from "express";

class Get extends HTTPMethod {
  public path: string;
  public delay: number = 0;
  constructor(applicationInstance: express.Application) {
    super(applicationInstance);
    // this.app is the express Instance
  }
  init() {
    return (path: string) => {
      this.path = path;
      return this;
    }
  }
  do(cb: any) {
    this.app.get(this.path, (req, res, next) => {
      setTimeout(() => {
        cb(req, res, next)
      }, this.delay);
    });
    return this;
  }
  send(str: string) {
    this.app.get(this.path, (req, res) => {
      setTimeout(() => {
        res.send(str)
      }, this.delay);
    });
    return this;
  }
  wait(t: number) {
    this.delay = t;
    return this;
  }
  sendFile(str: string) {
    this.app.get(this.path, (req, res) => {
      setTimeout(() => {
        res.sendFile(str)
      }, this.delay);
    });
    return this;
  }
}

export default Get;
