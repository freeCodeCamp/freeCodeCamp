var fs = require('fs');
var getChallenges = require('./getChallenges');

var challengeSpecs = getChallenges();

fs.writeFileSync('seed/challenge-bundle.json', JSON.stringify(challengeSpecs));

I apologize for this
