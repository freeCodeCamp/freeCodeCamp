#!/usr/bin/env node

var mkdirp = require('../');
var minimist = require('minimist');
var fs = require('fs');

var argv = minimist(process.argv.slice(2), {
    alias: { m: 'mode', h: 'help' },
    string: [ 'mode' ]
});
if (argv.help) {
    fs.createReadStream(__dirname + '/usage.txt').pipe(process.stdout);
    return;
}

var paths = argv._.slice();
var mode = argv.mode ? parseInt(argv.mode, 8) : undefined;

(function next () {
    if (paths.length === 0) return;
    var p = paths.shift();
    
    if (mode === undefined) mkdirp(p, cb)
    else mkdirp(p, mode, cb)
    
    function cb (err) {
        if (err) {
            console.error(err.message);
            process.exit(1);
        }
        else next();
    }
})();
