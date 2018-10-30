var parse = require('../');
var test = require('tape');

test('parse args', function (t) {
    t.deepEqual(
        parse([ '--no-moo' ]),
        { moo : false, _ : [] },
        'no'
    );
    t.deepEqual(
        parse([ '-v', 'a', '-v', 'b', '-v', 'c' ]),
        { v : ['a','b','c'], _ : [] },
        'multi'
    );
    t.end();
});
 
test('comprehensive', function (t) {
    t.deepEqual(
        parse([
            '--name=meowmers', 'bare', '-cats', 'woo',
            '-h', 'awesome', '--multi=quux',
            '--key', 'value',
            '-b', '--bool', '--no-meep', '--multi=baz',
            '--', '--not-a-flag', 'eek'
        ]),
        {
            c : true,
            a : true,
            t : true,
            s : 'woo',
            h : 'awesome',
            b : true,
            bool : true,
            key : 'value',
            multi : [ 'quux', 'baz' ],
            meep : false,
            name : 'meowmers',
            _ : [ 'bare', '--not-a-flag', 'eek' ]
        }
    );
    t.end();
});

test('nums', function (t) {
    var argv = parse([
        '-x', '1234',
        '-y', '5.67',
        '-z', '1e7',
        '-w', '10f',
        '--hex', '0xdeadbeef',
        '789'
    ]);
    t.deepEqual(argv, {
        x : 1234,
        y : 5.67,
        z : 1e7,
        w : '10f',
        hex : 0xdeadbeef,
        _ : [ 789 ]
    });
    t.deepEqual(typeof argv.x, 'number');
    t.deepEqual(typeof argv.y, 'number');
    t.deepEqual(typeof argv.z, 'number');
    t.deepEqual(typeof argv.w, 'string');
    t.deepEqual(typeof argv.hex, 'number');
    t.deepEqual(typeof argv._[0], 'number');
    t.end();
});

test('flag boolean', function (t) {
    var argv = parse([ '-t', 'moo' ], { boolean: 't' });
    t.deepEqual(argv, { t : true, _ : [ 'moo' ] });
    t.deepEqual(typeof argv.t, 'boolean');
    t.end();
});

test('flag boolean value', function (t) {
    var argv = parse(['--verbose', 'false', 'moo', '-t', 'true'], {
        boolean: [ 't', 'verbose' ],
        default: { verbose: true }
    });
    
    t.deepEqual(argv, {
        verbose: false,
        t: true,
        _: ['moo']
    });
    
    t.deepEqual(typeof argv.verbose, 'boolean');
    t.deepEqual(typeof argv.t, 'boolean');
    t.end();
});

test('flag boolean default false', function (t) {
    var argv = parse(['moo'], {
        boolean: ['t', 'verbose'],
        default: { verbose: false, t: false }
    });
    
    t.deepEqual(argv, {
        verbose: false,
        t: false,
        _: ['moo']
    });
    
    t.deepEqual(typeof argv.verbose, 'boolean');
    t.deepEqual(typeof argv.t, 'boolean');
    t.end();

});

test('boolean groups', function (t) {
    var argv = parse([ '-x', '-z', 'one', 'two', 'three' ], {
        boolean: ['x','y','z']
    });
    
    t.deepEqual(argv, {
        x : true,
        y : false,
        z : true,
        _ : [ 'one', 'two', 'three' ]
    });
    
    t.deepEqual(typeof argv.x, 'boolean');
    t.deepEqual(typeof argv.y, 'boolean');
    t.deepEqual(typeof argv.z, 'boolean');
    t.end();
});

test('newlines in params' , function (t) {
    var args = parse([ '-s', "X\nX" ])
    t.deepEqual(args, { _ : [], s : "X\nX" });
    
    // reproduce in bash:
    // VALUE="new
    // line"
    // node program.js --s="$VALUE"
    args = parse([ "--s=X\nX" ])
    t.deepEqual(args, { _ : [], s : "X\nX" });
    t.end();
});

test('strings' , function (t) {
    var s = parse([ '-s', '0001234' ], { string: 's' }).s;
    t.equal(s, '0001234');
    t.equal(typeof s, 'string');
    
    var x = parse([ '-x', '56' ], { string: 'x' }).x;
    t.equal(x, '56');
    t.equal(typeof x, 'string');
    t.end();
});

test('stringArgs', function (t) {
    var s = parse([ '  ', '  ' ], { string: '_' })._;
    t.same(s.length, 2);
    t.same(typeof s[0], 'string');
    t.same(s[0], '  ');
    t.same(typeof s[1], 'string');
    t.same(s[1], '  ');
    t.end();
});

test('empty strings', function(t) {
    var s = parse([ '-s' ], { string: 's' }).s;
    t.equal(s, '');
    t.equal(typeof s, 'string');

    var str = parse([ '--str' ], { string: 'str' }).str;
    t.equal(str, '');
    t.equal(typeof str, 'string');

    var letters = parse([ '-art' ], {
        string: [ 'a', 't' ]
    });

    t.equal(letters.a, '');
    t.equal(letters.r, true);
    t.equal(letters.t, '');

    t.end();
});


test('slashBreak', function (t) {
    t.same(
        parse([ '-I/foo/bar/baz' ]),
        { I : '/foo/bar/baz', _ : [] }
    );
    t.same(
        parse([ '-xyz/foo/bar/baz' ]),
        { x : true, y : true, z : '/foo/bar/baz', _ : [] }
    );
    t.end();
});

test('alias', function (t) {
    var argv = parse([ '-f', '11', '--zoom', '55' ], {
        alias: { z: 'zoom' }
    });
    t.equal(argv.zoom, 55);
    t.equal(argv.z, argv.zoom);
    t.equal(argv.f, 11);
    t.end();
});

test('multiAlias', function (t) {
    var argv = parse([ '-f', '11', '--zoom', '55' ], {
        alias: { z: [ 'zm', 'zoom' ] }
    });
    t.equal(argv.zoom, 55);
    t.equal(argv.z, argv.zoom);
    t.equal(argv.z, argv.zm);
    t.equal(argv.f, 11);
    t.end();
});

test('nested dotted objects', function (t) {
    var argv = parse([
        '--foo.bar', '3', '--foo.baz', '4',
        '--foo.quux.quibble', '5', '--foo.quux.o_O',
        '--beep.boop'
    ]);
    
    t.same(argv.foo, {
        bar : 3,
        baz : 4,
        quux : {
            quibble : 5,
            o_O : true
        }
    });
    t.same(argv.beep, { boop : true });
    t.end();
});

test('boolean and alias with chainable api', function (t) {
    var aliased = [ '-h', 'derp' ];
    var regular = [ '--herp',  'derp' ];
    var opts = {
        herp: { alias: 'h', boolean: true }
    };
    var aliasedArgv = parse(aliased, {
        boolean: 'herp',
        alias: { h: 'herp' }
    });
    var propertyArgv = parse(regular, {
        boolean: 'herp',
        alias: { h: 'herp' }
    });
    var expected = {
        herp: true,
        h: true,
        '_': [ 'derp' ]
    };
    
    t.same(aliasedArgv, expected);
    t.same(propertyArgv, expected); 
    t.end();
});

test('boolean and alias with options hash', function (t) {
    var aliased = [ '-h', 'derp' ];
    var regular = [ '--herp', 'derp' ];
    var opts = {
        alias: { 'h': 'herp' },
        boolean: 'herp'
    };
    var aliasedArgv = parse(aliased, opts);
    var propertyArgv = parse(regular, opts);
    var expected = {
        herp: true,
        h: true,
        '_': [ 'derp' ]
    };
    t.same(aliasedArgv, expected);
    t.same(propertyArgv, expected);
    t.end();
});

test('boolean and alias using explicit true', function (t) {
    var aliased = [ '-h', 'true' ];
    var regular = [ '--herp',  'true' ];
    var opts = {
        alias: { h: 'herp' },
        boolean: 'h'
    };
    var aliasedArgv = parse(aliased, opts);
    var propertyArgv = parse(regular, opts);
    var expected = {
        herp: true,
        h: true,
        '_': [ ]
    };

    t.same(aliasedArgv, expected);
    t.same(propertyArgv, expected); 
    t.end();
});

// regression, see https://github.com/substack/node-optimist/issues/71
test('boolean and --x=true', function(t) {
    var parsed = parse(['--boool', '--other=true'], {
        boolean: 'boool'
    });

    t.same(parsed.boool, true);
    t.same(parsed.other, 'true');

    parsed = parse(['--boool', '--other=false'], {
        boolean: 'boool'
    });
    
    t.same(parsed.boool, true);
    t.same(parsed.other, 'false');
    t.end();
});
