var safe = require('../');
var test = require('tape');

var good = [
    /\bOakland\b/,
    /\b(Oakland|San Francisco)\b/i,
    /^\d+1337\d+$/i,
    /^\d+(1337|404)\d+$/i,
    /^\d+(1337|404)*\d+$/i,
    RegExp(Array(26).join('a?') + Array(26).join('a')),
];

test('safe regex', function (t) {
    t.plan(good.length);
    good.forEach(function (re) {
        t.equal(safe(re), true);
    });
});


var bad = [
    /^(a?){25}(a){25}$/,
    RegExp(Array(27).join('a?') + Array(27).join('a')),
    /(x+x+)+y/,
    /foo|(x+x+)+y/,
    /(a+){10}y/,
    /(a+){2}y/,
    /(.*){1,32000}[bc]/
];

test('unsafe regex', function (t) {
    t.plan(bad.length);
    bad.forEach(function (re) {
        t.equal(safe(re), false);
    });
});

var invalid = [
    '*Oakland*',
    'hey(yoo))',
    'abcde(?>hellow)',
    '[abc'
];

test('invalid regex', function (t) {
    t.plan(invalid.length);
    invalid.forEach(function (re) {
        t.equal(safe(re), false);
    });
});
