var test = require('tape');
var github = require('../');
var packages = {
    a : require('./a.json'),
    b : require('./b.json'),
    c : require('./c.json'),
    d : require('./d.json'),
    e : require('./e.json')
};

test(function (t) {
    t.plan(5);
    var url = 'https://github.com/substack/beep-boop';
    t.equal(url, github(packages.a), 'a.json comparison');
    t.equal(url, github(packages.b), 'b.json comparison');
    t.equal(url, github(packages.c), 'c.json comparison');
    t.equal(url, github(packages.d), 'd.json comparison');
    t.equal(url, github(packages.e), 'e.json comparison');
});
