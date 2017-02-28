/*
 * The (approved) proposal for const in Harmony wiki:
 *   http://wiki.ecmascript.org/doku.php?id=harmony:const
 *
 * These tests reflect v8's current implementation of const they can be ran in `node` or they
 * can ran by using the test runner.
 */

function assert (a, b) {
    if (a !== b) {
        console.log("fail:", a, b);
    }
}

// Setting up the tests.
const immutable = "foo";
const immutable2 = 6;
const immutable3 = false;

// Perfectly valid but useless.
const immutable4;

// Objects are mutable: one can modify it's properties but can't redeclare as something other than
// this object.
const immutable5 = { foo: "bar" };
immutable5.foo = "not bar";

// Functions can be constant
const immutable6 = function () {
  return "foo";
};

// Arrays are mutable as well, with the same rules apply as for Object.
const immutable7 = ["foo"];
immutable7.pop();

// Comma separated is ok.
const immutable8 = "testing", immutable9 = true;

// immutable9 has block scope.
for (var i = 0; i < 1; i += 1) {
  const immutable9 = false;
}

// In scope
(function () {
  // Valid
  const immutable4 = "foobar"; // immutable4 is in it's own scope so it can be redeclared.
  const immutable5 = "w00t";

  const immutable6 = true, immutable7 = ["bar"];

  // Tests
  assert(immutable3, false);
  assert(immutable4, "foobar");
  assert(immutable5, "w00t");
  assert(immutable6, true);
  assert(immutable7.shift(), "bar");
  assert(immutable7.length, 0);
}());

// Tests
assert(immutable, "foo");
assert(immutable2, 6);
assert(immutable3, false);
assert(immutable4, undefined);
assert(immutable5.foo, "not bar");
assert(typeof immutable6, "function");
assert(immutable7.length, 0);
assert(immutable8, "testing");
assert(immutable9, true);