var assert = require('assert');
var Int64 = require('./Int64');

exports.setUp = function(done) {
  done();
};

exports.testBufferToString = function(test) {
  var int = new Int64(0xfffaffff, 0xfffff700);
  test.equal(
    int.toBuffer().toString('hex'),
    'fffafffffffff700',
    'Buffer to string conversion'
  );
  test.done();
};

exports.testBufferCopy = function(test) {
  var src = new Int64(0xfffaffff, 0xfffff700);
  var dst = new Buffer(8);

  src.copy(dst);

  test.deepEqual(
    dst,
    new Buffer([0xff, 0xfa, 0xff, 0xff, 0xff, 0xff, 0xf7, 0x00]),
    'Copy to buffer'
  );

  test.done();
};

exports.testValueRepresentation = function(test) {
  var args = [
    [0],                     '0000000000000000', 0,
    [1],                     '0000000000000001', 1,
    [-1],                    'ffffffffffffffff', -1,
    [1e18],                  '0de0b6b3a7640000', 1e18,
    ['0001234500654321'],    '0001234500654321',     0x1234500654321,
    ['0ff1234500654321'],    '0ff1234500654321',   0xff1234500654300, // Imprecise!
    [0xff12345, 0x654321],   '0ff1234500654321',   0xff1234500654300, // Imprecise!
    [0xfffaffff, 0xfffff700],'fffafffffffff700',    -0x5000000000900,
    [0xafffffff, 0xfffff700],'affffffffffff700', -0x5000000000000800, // Imprecise!
    ['0x0000123450654321'],  '0000123450654321',      0x123450654321,
    ['0xFFFFFFFFFFFFFFFF'],  'ffffffffffffffff', -1
  ];

  // Test constructor argments

  for (var i = 0; i < args.length; i += 3) {
    var a = args[i], octets = args[i+1], number = args[i+2];

    // Create instance
    var x = new Int64();
    Int64.apply(x, a);

    test.equal(x.toOctetString(), octets, 'Constuctor with ' + args.join(', '));
    test.equal(x.toNumber(true), number);
  }

  test.done();
};

exports.testBufferOffsets = function(test) {
  var sourceBuffer = new Buffer(16);
  sourceBuffer.writeUInt32BE(0xfffaffff, 2);
  sourceBuffer.writeUInt32BE(0xfffff700, 6);

  var int = new Int64(sourceBuffer, 2);
  assert.equal(
    int.toBuffer().toString('hex'), 'fffafffffffff700',
    'Construct from offset'
  );

  var targetBuffer = new Buffer(16);
  int.copy(targetBuffer, 4);
  assert.equal(
    targetBuffer.slice(4, 12).toString('hex'), 'fffafffffffff700',
    'Copy to offset'
  );

  test.done();
};

exports.testInstanceOf = function(test) {
  var x = new Int64();
  assert(x instanceof Int64, 'Variable is not instance of Int64');
  var y = {};
  assert(!(y instanceof Int64), 'Object is an instance of Int64');
  test.done();
};

exports.testCompare = function(test) {
  var intMin = new Int64(2147483648, 0);
  var intMinPlusOne = new Int64(2147483648, 1);
  var zero = new Int64(0, 0);
  var intMaxMinusOne = new Int64(2147483647, 4294967294);
  var intMax = new Int64(2147483647, 4294967295);
  assert(intMin.compare(intMinPlusOne) < 0, "INT64_MIN is not less than INT64_MIN+1");
  assert(intMin.compare(zero) < 0, "INT64_MIN is not less than 0");
  assert(intMin.compare(zero) < intMax, "INT64_MIN is not less than INT64_MAX");
  assert(intMax.compare(intMaxMinusOne) > 0, "INT64_MAX is not greater than INT64_MAX-1");
  assert(intMax.compare(zero) > 0, "INT64_MAX is not greater than 0");
  assert(intMax.compare(intMin) > 0, "INT64_MAX is not greater than INT_MIN");
  test.done();
};

exports.testEquals = function(test) {
  var intMin = new Int64(2147483648, 0);
  var zero = new Int64(0, 0);
  var intMax = new Int64(2147483647, 4294967295);
  assert(intMin.equals(intMin), "INT64_MIN !== INT64_MIN");
  assert(intMax.equals(intMax), "INT64_MAX !== INT64_MAX");
  assert(zero.equals(zero), "0 !== 0");
  assert(!intMin.equals(zero), "INT64_MIN === 0");
  assert(!intMin.equals(intMax), "INT64_MIN === INT64_MAX");
  assert(!intMax.equals(zero), "INT64_MAX === 0");
  assert(!intMax.equals(intMin), "INT64_MAX === INT64_MIN");
  test.done();
};
