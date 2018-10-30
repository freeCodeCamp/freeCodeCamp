var spawn = require('child_process').spawn;
var test = require('tap').test;

test('dotSlashEmpty', testCmd('./bin.js', []));

test('dotSlashArgs', testCmd('./bin.js', [ 'a', 'b', 'c' ]));

test('nodeEmpty', testCmd('node bin.js', []));

test('nodeArgs', testCmd('node bin.js', [ 'x', 'y', 'z' ]));

test('whichNodeEmpty', function (t) {
    var which = spawn('which', ['node']);
    
    which.stdout.on('data', function (buf) {
        t.test(
            testCmd(buf.toString().trim() + ' bin.js', [])
        );
        t.end();
    });
    
    which.stderr.on('data', function (err) {
        assert.error(err);
        t.end();
    });
});

test('whichNodeArgs', function (t) {
    var which = spawn('which', ['node']);

    which.stdout.on('data', function (buf) {
        t.test(
            testCmd(buf.toString().trim() + ' bin.js', [ 'q', 'r' ])
        );
        t.end();
    });
    
    which.stderr.on('data', function (err) {
        t.error(err);
        t.end();
    });
});

function testCmd (cmd, args) {

    return function (t) {
        var to = setTimeout(function () {
            assert.fail('Never got stdout data.')
        }, 5000);
        
        var oldDir = process.cwd();
        process.chdir(__dirname + '/_');
        
        var cmds = cmd.split(' ');
        
        var bin = spawn(cmds[0], cmds.slice(1).concat(args.map(String)));
        process.chdir(oldDir);
        
        bin.stderr.on('data', function (err) {
            t.error(err);
            t.end();
        });
        
        bin.stdout.on('data', function (buf) {
            clearTimeout(to);
            var _ = JSON.parse(buf.toString());
            t.same(_.map(String), args.map(String));
            t.end();
        });
    };
}
