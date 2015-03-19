var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');
var secrets = require('../config/secrets');
var Schema = mongoose.Schema;

var PairUserSchema = new mongoose.Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    username: String,
    comment: {type: String, default: "Come pair with me."},
    tags: {type:[String], default: []},
    timeOnline: {type:Date, default: null}

    
});



module.exports = mongoose.model('PairUser', PairUserSchema);
