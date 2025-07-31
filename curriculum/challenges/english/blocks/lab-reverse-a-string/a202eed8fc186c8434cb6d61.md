---
id: a202eed8fc186c8434cb6d61
title: Build a String Inverter
challengeType: 26
dashedName: build-a-string-inverter
---

# --description--

In this lab, you will build a simple string inverter that reverses the characters of a given string.

For example, `"hello"` should become `"olleh"`.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a function named `reverseString` that takes a string as an argument.
2. The function should return the reversed string.

# --hints--

You should have a function named `reverseString`.

```js
assert.isFunction(reverseString);
```

`reverseString` should take a string as an argument.

```js
assert.match(reverseString.toString(), /\s*function\s+reverseString\s*\(\s*\w+\s*\)/);
```

`reverseString("hello")` should return a string.

```js
assert.isString(reverseString('hello'));
```

`reverseString("hello")` should return the string `olleh`.

```js
assert.strictEqual(reverseString('hello'), 'olleh');
```

`reverseString("Howdy")` should return the string `ydwoH`.

```js
assert.strictEqual(reverseString('Howdy'), 'ydwoH');
```

`reverseString("Greetings from Earth")` should return the string `htraE morf sgniteerG`.

```js
assert.strictEqual(
  reverseString('Greetings from Earth'),
  'htraE morf sgniteerG'
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');
```
