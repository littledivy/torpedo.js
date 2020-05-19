//=============================================================================
// index.ts v0.2
//=============================================================================

//=============================================================================


import GetInstance from "./lib/get";

import * as path from "path";
import * as express from "express";
// @ts-ignore
import * as logger from "morgan";
import * as bodyParser from "body-parser";

interface Route {
  path: string;
  file: string;
}

interface Options {
  name: string;
  port?: number;
  public?: string;
  routes?: Route[];
}


/**
 * Main Torpedo class for initializing the application.
 * @class Torpedo
 * @constructor
 * @param {Options} options - Base configurations for the Torpedo application
 */
class Torpedo {
  public express: express.Application;
  public get: any;
  public post: any;

  public options: Options = {
    name: "Torpedo",
    port: 8080
  };

  constructor(options: Options) {
    this.express = express();
    this.get = new GetInstance(this.express).init();
  //  this.post = new PostInstance(this.express).init();
    this.options = options;
    this.middleware();
    this.listen();
    //if(this.options.routes.length > 0) this.routes();
    return this;
  }

  private middleware = () => {
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.options.public && this.express.use(express.static(this.options.public));
    this.express.use(bodyParser.urlencoded({ extended: false }));
  };

  private routes = () => {
    this.options.routes.forEach((route: Route) => {
      this.express.use(route.path, require(route.file));
    });
  }

  public listen = () => {
    this.express.listen(this.options.port || 8080);
  };
}

export default Torpedo;
