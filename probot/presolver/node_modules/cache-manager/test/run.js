#!/usr/bin/env node
process.env.NODE_ENV = 'test';
require('../index');

var Mocha = require('mocha');
var optimist = require('optimist');
var walkDir = require('./support').walkDir;

var argv = optimist
.usage("Usage: $0 -t [types] --reporter [reporter] --timeout [timeout]")['default'](
    {types: 'unit,functional', reporter: 'spec', timeout: 6000})
    .describe('types', 'The types of tests to run, separated by commas. E.g., unit,functional,acceptance')
    .describe('reporter', 'The mocha test reporter to use.')
    .describe('timeout', 'The mocha timeout to use per test (ms).')
    .boolean('help')
    .alias('types', 'T')
    .alias('timeout', 't')
    .alias('reporter', 'R')
    .alias('help', 'h')
    .argv;

var mocha = new Mocha({timeout: argv.timeout, reporter: argv.reporter, ui: 'bdd'});

var validTestTypes = ['unit', 'functional', 'acceptance', 'integration'];
var requestedTypes = argv.types.split(',');
var typesToUse = [];

validTestTypes.forEach(function(validTestType) {
    if (requestedTypes.indexOf(validTestType) !== -1) {
        typesToUse.push(validTestType);
    }
});

if (argv.help || typesToUse.length === 0) {
    console.log('\n' + optimist.help());
    process.exit();
}

var isValidFile = function(file) {
    if (file.match(/buster/)) {
        return false;
    }

    for (var i = 0; i < typesToUse.length; i++) {
        var testType = typesToUse[i];
        var ext = testType + ".js";

        if (file.indexOf(ext) !== -1) {
            return true;
        }
    }

    return false;
};

function run(cb) {
    walkDir('test', isValidFile, function(err, files) {
        if (err) { return cb(err); }

        files.forEach(function(file) {
            mocha.addFile(file);
        });

        cb();
    });
}

run(function(err) {
    if (err) { throw err; }
    mocha.run(function(failures) {
        process.exit(failures);
    });
});
