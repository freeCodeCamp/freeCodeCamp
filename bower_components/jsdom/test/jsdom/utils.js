"use strict";

var utils = require("../../lib/jsdom/utils");

exports["defineSetter defines a setter"] = function (t) {
  var o = {};
  var called = false;
  var expected = 'bar';
  var actual;

  utils.defineSetter(o, 'foo', function (val) {
    called = true;
    actual = val;
  });

  o.foo = expected;
  t.equal(called, true);
  t.equal(actual, expected);

  t.done();
};

exports["defineSetter replaces existing setters"] = function (t) {
  var o = {};
  var originalCalled = false;
  var newCalled = false;

  utils.defineSetter(o, 'foo', function (val) {
    originalCalled = true;
  });

  utils.defineSetter(o, 'foo', function (val) {
    newCalled = true;
  });

  o.foo = true;
  t.equal(originalCalled, false);
  t.equal(newCalled, true);

  t.done();
};

exports["defineSetter does not remove existing getters"] = function (t) {
  var o = {};
  var called = false;
  var expected = 'bar';
  var actual;

  utils.defineGetter(o, 'foo', function () {
    called = true;
    return expected;
  });

  utils.defineSetter(o, 'foo', function (val) { /* NOP */ });

  actual = o.foo;
  t.equal(called, true);
  t.equal(actual, expected);

  t.done();
};

exports["defineGetter defines a getter"] = function (t) {
  var o = {};
  var called = false;
  var expected = 'bar';
  var actual;

  utils.defineGetter(o, 'foo', function () {
    called = true;
    return expected
  });

  actual = o.foo;
  t.equal(called, true);
  t.equal(actual, expected);

  t.done();
};

exports["defineGetter replaces existing getters"] = function (t) {
  var o = {};
  var originalCalled = false;
  var newCalled = false;

  utils.defineGetter(o, 'foo', function (val) {
    originalCalled = true;
  });

  utils.defineGetter(o, 'foo', function (val) {
    newCalled = true;
  });

  var actual = o.foo;
  t.equal(originalCalled, false);
  t.equal(newCalled, true);

  t.done();
};

exports["defineGetter does not remove existing setters"] = function (t) {
  var o = {};
  var called = false;
  var expected = 'bar';
  var actual;

  utils.defineSetter(o, 'foo', function (val) {
    called = true;
    actual = val;
  });

  utils.defineGetter(o, 'foo', function () { /* NOP */ });

  o.foo = expected;
  t.equal(called, true);
  t.equal(actual, expected);

  t.done();
};

exports.createFrom = {
  "returns an object with the given [[Prototype]]": function (t) {
    var proto = {};

    var o = utils.createFrom(proto);
    t.strictEqual(Object.getPrototypeOf(o), proto);

    t.done();
  },
  "createFrom returns an object extended with the given properties":
    function (t) {
      var properties = {
        get accessor () {},
        set accessor (value) {},
        foo: 'bar'
      };

      Object.defineProperties(properties, {
        frozen: {
          value: 'brrr',
          configurable: false,
          writable: false
        },
        hidden: {
          value: 'shhh',
          enumerable: false
        }
      });

      var o = utils.createFrom({}, properties);

      Object.getOwnPropertyNames(o).
        forEach(function (name) {
          t.deepEqual(Object.getOwnPropertyDescriptor(o, name),
            Object.getOwnPropertyDescriptor(properties, name),
            name + ' descriptors should be deeply equal'
          );
        });

      t.done();
    }
};

exports.inheritFrom = {
  "sets Subclass.prototype to an object w/ [[Prototype]] Superclass.prototype":
    function (t) {
      function Subclass(){}
      function Superclass(){}

      utils.inheritFrom(Superclass, Subclass);

      t.strictEqual(Object.getPrototypeOf(Subclass.prototype),
        Superclass.prototype);

      t.done();
    },
    "sets Subclass.prototype.constructor to Subclass": function (t) {
      function Subclass(){}
      function Superclass(){}

      utils.inheritFrom(Superclass, Subclass);

      t.strictEqual(Subclass.prototype.constructor, Subclass);

      t.done();
    },
    "extends Subclass.prototype with the given properties": function (t) {
      function Subclass(){}
      function Superclass(){}
      var properties = {
        get accessor () {},
        set accessor (value) {},
        foo: 'bar'
      };

      Object.defineProperties(properties, {
        frozen: {
          value: 'brrr',
          configurable: false,
          writable: false
        },
        hidden: {
          value: 'shhh',
          enumerable: false
        }
      });

      utils.inheritFrom(Superclass, Subclass, properties);

      Object.getOwnPropertyNames(Subclass.prototype).
        forEach(function (name) {
          t.deepEqual(
            Object.getOwnPropertyDescriptor(Subclass.prototype, name),
            Object.getOwnPropertyDescriptor(properties, name),
            name + ' descriptors should be deeply equal'
          );
        });

      t.done();
    }
};
