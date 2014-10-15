var mongoose = require('mongoose');
var secrets = require('../config/secrets');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var challenges = require('../seed_data/challenges.json');

console.log(challenges);

var challengeSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    source: String,
    solution: String,
    link: String,
    image: String, default: "http://modernweb.com/wp-content/uploads/2013/12/keep-calm-and-learn-javascript.jpg?e6778f",
    time: Number,
    directions: Array
});

var Challenge = module.exports = mongoose.model('Challenge', challengeSchema);

if (require.main === module) {
    mongoose.connect(secrets.db);
    Challenge.create(challenges, function(err, data) {
        if (err) console.log(err);
        else console.log('Saved ', data );
        process.exit(0);
    });
}