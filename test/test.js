var Torpedo = require('../');
var { get } = new Torpedo({ name: "test" });
var path = require("path");

describe('Torpedo', () => {
    it("Require Module", done => {
        if (Torpedo) return done();
    })
    it("Create new instance", done => {
        if (get) return done();
    })
  
})

describe('HTTP Get', () => {
    it("send()", done => {
        get('/').send("Hello");
        done();
    });
    it("wait()", done => {
        get('/wait').wait((req, res) => {
            res.send('/wait')
        }, 1000);
        done();
    })
    it("redirect()", done => {
        get('/redirect').redirect("/");
        done();
    })
    it("status()", done => {
        get('/status').status(404);
        done();
    })
    it("do()", done => {
        get('/do_simple').do("Hello");
        get('/do').do((req, res, next) => {
            res.send("Hello")
        })
        done();
    })
    it("pass()", done => {
        get('/pass').pass();
        done();
    })
    it("sendFile()", done => {
      get('/sendFile').sendFile(path.join(__dirname, './test.js'));
      done();
    })
    
        
});

