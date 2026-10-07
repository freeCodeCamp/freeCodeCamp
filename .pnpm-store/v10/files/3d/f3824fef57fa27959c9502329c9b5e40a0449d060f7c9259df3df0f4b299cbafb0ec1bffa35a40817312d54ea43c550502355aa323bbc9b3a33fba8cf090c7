var test = require('tape');
var ErrorWithCause = require('error-cause/Error');

var inspect = require('../');

test('type error', function (t) {
    t.plan(1);
    var aerr = new TypeError();
    aerr.foo = 555;
    aerr.bar = [1, 2, 3];

    var berr = new TypeError('tuv');
    berr.baz = 555;

    var cerr = new SyntaxError();
    cerr.message = 'whoa';
    cerr['a-b'] = 5;

    var withCause = new ErrorWithCause('foo', { cause: 'bar' });
    var withCausePlus = new ErrorWithCause('foo', { cause: 'bar' });
    withCausePlus.foo = 'bar';
    var withUndefinedCause = new ErrorWithCause('foo', { cause: undefined });
    var withEnumerableCause = new Error('foo');
    withEnumerableCause.cause = 'bar';

    var obj = [
        new TypeError(),
        new TypeError('xxx'),
        aerr,
        berr,
        cerr,
        withCause,
        withCausePlus,
        withUndefinedCause,
        withEnumerableCause
    ];
    t.equal(inspect(obj), '[ ' + [
        '[TypeError]',
        '[TypeError: xxx]',
        '{ [TypeError] foo: 555, bar: [ 1, 2, 3 ] }',
        '{ [TypeError: tuv] baz: 555 }',
        '{ [SyntaxError: whoa] message: \'whoa\', \'a-b\': 5 }',
        'cause' in Error.prototype ? '[Error: foo]' : '{ [Error: foo] [cause]: \'bar\' }',
        '{ [Error: foo] ' + ('cause' in Error.prototype ? '' : '[cause]: \'bar\', ') + 'foo: \'bar\' }',
        'cause' in Error.prototype ? '[Error: foo]' : '{ [Error: foo] [cause]: undefined }',
        '{ [Error: foo] cause: \'bar\' }'
    ].join(', ') + ' ]');
});
