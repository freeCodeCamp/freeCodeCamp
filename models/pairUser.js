var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PairUserSchema = new mongoose.Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    username: String,
    comment: {type: String, default: "Come pair with me."},
    // Tags are a feature we might add later.
    // tags: {type:[String], default: []},
    timeOnline: {type:Date, default: null},
    userGit: String
    
});



module.exports = mongoose.model('PairUser', PairUserSchema);
