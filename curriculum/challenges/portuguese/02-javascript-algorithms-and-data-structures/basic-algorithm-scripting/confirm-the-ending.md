---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
challengeType: 5
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

This challenge *can* be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

# --hints--

`confirmEnding("Bastian", "n")` should return `true`.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` should return `true`.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` should return `false`.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` should return `false`.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` should return `true`.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` should return `true`.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` should return `false`.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` should return `false`.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` should return `false`.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` should return `true`.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

Your code should not use the built-in method `.endsWith()` to solve the challenge.

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --seed--

## --seed-contents--

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# --solutions--

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```
