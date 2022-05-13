var mongoose = require('mongoose');

module.exports = function() {
    var findOrCreate = require('mongoose-findorcreate');
    /*var schema = mongoose.Schema({
        login: {
        type: String,
        required: true,
        index: {
        unique: true
        }
        },
        nome: {
        type: String,
        required: true,
        },
        inclusao: {
        type: Date,
        default: Date.now
        }
    });*/
    schema.plugin(findOrCreate);
    return mongoose.model('Usuario', schema);
};