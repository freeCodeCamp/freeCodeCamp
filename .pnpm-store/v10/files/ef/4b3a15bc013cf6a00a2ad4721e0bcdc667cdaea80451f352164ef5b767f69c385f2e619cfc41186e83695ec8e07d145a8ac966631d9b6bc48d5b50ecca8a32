var defaults = require('./'),
    test = require('tap').test;

test("ensure options is an object", function(t) {
  var options = defaults(false, { a : true });
  t.ok(options.a);
  t.end()
});

test("ensure defaults override keys", function(t) {
  var result = defaults({}, { a: false, b: true });
  t.ok(result.b, 'b merges over undefined');
  t.equal(result.a, false, 'a merges over undefined');
  t.end();
});

test("ensure defined keys are not overwritten", function(t) {
  var result = defaults({ b: false }, { a: false, b: true });
  t.equal(result.b, false, 'b not merged');
  t.equal(result.a, false, 'a merges over undefined');
  t.end();
});

test("ensure defaults clone nested objects", function(t) {
  var d = { a: [1,2,3], b: { hello : 'world' } };
  var result = defaults({}, d);
  t.equal(result.a.length, 3, 'objects should be clones');
  t.ok(result.a !== d.a, 'objects should be clones');

  t.equal(Object.keys(result.b).length, 1, 'objects should be clones');
  t.ok(result.b !== d.b, 'objects should be clones');
  t.end();
});

