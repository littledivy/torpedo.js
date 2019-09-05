function init(arg) {
    var app = arg;
    return {
        post: (path) => {
            return {
                pass: () => {
                    app.post(path, function (req, res, next) {
                        return res.end();
                    })
                },
                wait: (cb, time) => {
                    app.post(path, function (req, res, next) {
                        setTimeout(() => {
                            cb(req, res, next)
                        },time)
                    })
                },
                send: (toSend) => {
                     app.post(path, function (req, res, next) {
                        return res.send(toSend);
                    })
                },
                sendFile: (loc) => {
                    app.post(path, (req, res, next) => {
                        res.sendFile(loc);
                    })
                },
                do: (smth) => {
                    if (typeof smth == "function") {
                        app.post(path, smth);
                    }
                    else {
                        app.post(path, (req, res, next) => {
                            res.send(smth);
                        })
                    }
                },
                status: (number) => {
                    if (typeof number == "number") {
                        app.post(path, (req, res, next) => {
                            res.send(`HTTP Status ${number}`).status(number);
                        })
                    }
                },
                redirect: (dest) => {
                    app.post(path, (req, res, next) => {
                        res.redirect(dest);
                    })
                }
            }
        }
    }
}

module.exports = init;
