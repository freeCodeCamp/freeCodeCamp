var resources = require('./resources');

module.exports = {
  randomPhrase: randomPhrase,
  randomVerb: randomVerb,
  randomCompliment: randomCompliment,
  whichEnvironment: whichEnvironment
};

function randomPhrase() {
    var phrases = resources.phrases;
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function randomVerb() {
    var verbs = resources.verbs;
    return verbs[Math.floor(Math.random() * verbs.length)];
}

function randomCompliment() {
    var compliments = resources.compliments;
    return compliments[Math.floor(Math.random() * compliments.length)];
}

function whichEnvironment() {
    return process.env.NODE_ENV;
}
