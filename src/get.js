function init(arg) {
    var app = arg;
    return {
        get: (path) => {
            return {
                pass: () => {
                    app.get(path, function (req, res, next) {
                        return res.end();
                    })
                },
                wait: (cb, time) => {
                    app.get(path, function (req, res, next) {
                        setTimeout(() => {
                            cb(req, res, next)
                        },time)
                    })
                },
                send: (toSend) => {
                     app.get(path, function (req, res, next) {
                        return res.send(toSend);
                    })
                },
                sendFile: (loc) => {
                    app.get(path, (req, res, next) => {
                        res.sendFile(loc);
                    })
                },
                do: (smth) => {
                    if (typeof smth == "function") {
                        app.get(path, smth);
                    }
                    else {
                        app.get(path, (req, res, next) => {
                            res.send(smth);
                        })
                    }
                },
                status: (number) => {
                    if (typeof number == "number") {
                        app.get(path, (req, res, next) => {
                            res.send(`HTTP Status ${number}`).status(number);
                        })
                    }
                },
                redirect: (dest) => {
                    app.get(path, (req, res, next) => {
                        res.redirect(dest);
                    })
                }
            }
        }
    }
}

// Add other functions ----> TODOO
/** 
class get  {
    constructor(path) {
        this.path = path;
    }
    pass() {
        
    }
    send(toSend) {
        app.get(this.path, function (req, res, next) {
            return res.send(toSend);
        })
    }
    sendFile(filePath) {
        app.get(this.path, function (req, res, next) {
            return res.sendFile(filePath);
        })
    }
    do(cb) {
        app.get(this.path, function (req, res, next) {
            if (typeof cb == "function") cb(req, res, next);
            else res.send(cb)
        })
	
    }
} **/
module.exports = init;
