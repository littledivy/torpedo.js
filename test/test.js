var Torpedo = require('../');
var instance = new Torpedo({ name: "test" });
var { get, post } = instance;
var path = require("path");

describe('Torpedo', () => {
    it("Require Module", done => {
        if (Torpedo) return done();
    })
    it("Create new instance", done => {
        if (get) return done();
    });
    it("Change configuration", done => {
        instance.name("Hi");
        done(instance.options.name == "Hi");
    })
  
})

describe('HTTP: Get', () => {
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

describe('HTTP: Post', () => {
    it("send()", done => {
        post('/').send("Hello");
        done();
    });
    it("wait()", done => {
        post('/wait').wait((req, res) => {
            res.send('/wait')
        }, 1000);
        done();
    })
    it("redirect()", done => {
        post('/redirect').redirect("/");
        done();
    })
    it("status()", done => {
        post('/status').status(404);
        done();
    })
    it("do()", done => {
        post('/do_simple').do("Hello");
        post('/do').do((req, res, next) => {
            res.send("Hello")
        })
        done();
    })
    it("pass()", done => {
        post('/pass').pass();
        done();
    })
    it("sendFile()", done => {
      post('/sendFile').sendFile(path.join(__dirname, './test.js'));
      done();
    })
    
        
});