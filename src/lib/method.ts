//=============================================================================
// method.ts v0.2
//=============================================================================

//=============================================================================


import * as express from 'express';

/**
 * The HTTPMethod class for all methods within Torpedo.
 * @class HTTPMethod
 * @constructor
 * @param {express.Application} appInstance - Express application instance
 * @private true
 */
class HTTPMethod {
  public path: string;
  public app: express.Application;
  constructor(appInstance: express.Application) {
    this.app = appInstance;
  }
  init() {
    return function (path: string) {
      this.path = path;
      return this;
    }
  }
}

export default HTTPMethod;
