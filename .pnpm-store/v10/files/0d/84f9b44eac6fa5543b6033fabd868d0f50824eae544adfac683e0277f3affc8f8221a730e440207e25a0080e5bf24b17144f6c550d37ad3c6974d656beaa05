import curry = require("./index");

function add(a: number, b: number, c: number) {
  return a + b + c;
}

// OK
curry(add);
curry(add)(1);
curry(add)(1)(2);
curry(add)(1)(2)(3);

curry(add, 1);
curry(add, 1)(1);
curry(add, 1)(1)(2);
curry(add, 1)(1)(2)(3);

// not OK
// @ts-expect-error
curry();
// @ts-expect-error
curry(add, {});
// @ts-expect-error
curry(add, 'abc')(1);
// @ts-expect-error
curry(1);
// @ts-expect-error
curry('hello');
// @ts-expect-error
curry({});
// @ts-expect-error
curry().a();
