var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PairUserSchema = new mongoose.Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    comment: {type: String, default: "Come pair with me."},
    tags: {type:[String], default: []}

    
});



module.exports = mongoose.model('PairUser', PairUserSchema);
