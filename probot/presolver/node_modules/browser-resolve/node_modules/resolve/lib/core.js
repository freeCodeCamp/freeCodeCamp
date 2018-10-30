module.exports = require('./core.json').reduce(function (acc, x) {
    acc[x] = true;
    return acc;
}, {});
