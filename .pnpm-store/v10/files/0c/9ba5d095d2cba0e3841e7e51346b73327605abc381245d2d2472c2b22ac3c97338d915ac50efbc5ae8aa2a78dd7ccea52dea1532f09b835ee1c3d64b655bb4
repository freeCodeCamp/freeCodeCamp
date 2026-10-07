var filename = process.argv[2] || './format.js'
  , format = require(filename)
  , printf = format.printf
  ;

function desc(x, indentLevel) {
  indentLevel = indentLevel || 0;
  var indent = new Array(indentLevel).join('  ');
  if (typeof x == 'string' || (x && x.__proto__ == String.prototype)) {
    return indent + '"' + x + '"';
  }
  else if (Array.isArray(x)) {
    return indent + '[ ' + x.map(desc).join(', ') + ' ]';
  }
  else {
    return '' + x;
  }
}

function assertFormat(args, expected) {
  var fmt = args[0];
  var result = format.format.apply(format, args);
  if (result !== expected) {
    console.log('FORMAT: "' + fmt + '"');
    console.log('ARGS:   ' + desc(args.slice(1)));
    console.log('RESULT: "' + result + '"');
    throw new Error('assertion failed, ' + result + ' !== ' + expected);
  }
}

console.log('Testing format:');

var tests = [
  [['hello'], 'hello'],
  [['hello %s', 'sami'], 'hello sami'],
  [
    ['b: %b\nc: %c\nd: %d\nf: %f\no: %o\ns: %s\nx: %x\nX: %X', 42, 65, 42*42, 42*42*42/1000000000, 255, 'sami', 0xfeedface, 0xc0ffee],
    "b: 101010\nc: A\nd: 1764\nf: 0.000074\no: 0377\ns: sami\nx: 0xfeedface\nX: 0xC0FFEE"
  ],
  [['%.2f', 3.14159], '3.14'],
  [['%0.2f', 3.14159], '3.14'],
  [['%.2f', 0.1234], '.12'],
  [['%0.2f', 0.1234], '0.12'],
  [['foo %j', 42], 'foo 42'],
  [['foo %j', '42'], 'foo "42"']
];
tests.forEach(function(spec) {
  var args = spec[0];
  var expected = spec[1];
  assertFormat(args, expected);
  console.log('pass (format ' + args[0] + ' == ' + expected + ')');
});

console.log('all passed');
