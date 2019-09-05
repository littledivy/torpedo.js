var mongoose = require('mongoose');

module.exports = (opt) => {
    mongoose.connect(opt,  {
        useNewUrlParser: true
    });
    return {
        schema: (collection, data) => {
            var dbSchema = mongoose.Schema(data);
            return mongoose.model(collection, dbSchema);
        }
    }
}