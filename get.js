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
                send: (toSend) => {
                     app.get(path, function (req, res, next) {
                        return res.send(toSend);
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
