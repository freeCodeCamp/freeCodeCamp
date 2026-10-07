---
description: 'Disallow the use of `eval()`-like methods.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-implied-eval** for documentation.

It's considered a good practice to avoid using `eval()`. There are security and performance implications involved with doing so, which is why many linters recommend disallowing `eval()`. However, there are some other ways to pass a string and have it interpreted as JavaScript code that have similar concerns.

The first is using `setTimeout()`, `setInterval()`, `setImmediate` or `execScript()` (Internet Explorer only), all of which can accept a string of code as their first argument

```ts
setTimeout('alert(`Hi!`);', 100);
```

or using `new Function()`

```ts
const fn = new Function('a', 'b', 'return a + b');
```

This is considered an implied `eval()` because a string of code is
passed in to be interpreted. The same can be done with `setInterval()`, `setImmediate()` and `execScript()`. All interpret the JavaScript code in the global scope.

The best practice is to avoid using `new Function()` or `execScript()` and always use a function for the first argument of `setTimeout()`, `setInterval()` and `setImmediate()`.

## Examples

This rule aims to eliminate implied `eval()` through the use of `new Function()`, `setTimeout()`, `setInterval()`, `setImmediate()` or `execScript()`.

<!--tabs-->

### ❌ Incorrect

```ts
/* eslint @typescript-eslint/no-implied-eval: "error" */

setTimeout('alert(`Hi!`);', 100);

setInterval('alert(`Hi!`);', 100);

setImmediate('alert(`Hi!`)');

execScript('alert(`Hi!`)');

window.setTimeout('count = 5', 10);

window.setInterval('foo = bar', 10);

const fn = '() = {}';
setTimeout(fn, 100);

const fn = () => {
  return 'x = 10';
};
setTimeout(fn(), 100);

const fn = new Function('a', 'b', 'return a + b');
```

### ✅ Correct

```ts
/* eslint @typescript-eslint/no-implied-eval: "error" */

setTimeout(function () {
  alert('Hi!');
}, 100);

setInterval(function () {
  alert('Hi!');
}, 100);

setImmediate(function () {
  alert('Hi!');
});

execScript(function () {
  alert('Hi!');
});

const fn = () => {};
setTimeout(fn, 100);

const foo = {
  fn: function () {},
};
setTimeout(foo.fn, 100);
setTimeout(foo.fn.bind(this), 100);

class Foo {
  static fn = () => {};
}

setTimeout(Foo.fn, 100);
```

## When Not To Use It

If you want to allow `new Function()` or `setTimeout()`, `setInterval()`, `setImmediate()` and `execScript()` with string arguments, then you can safely disable this rule.
