---
id: 6606cfbf41669416f1f9fcbc
title: Introducing else statements
challengeType: 1
dashedName: else-st
---

# --description--

When a condition for an `if` statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an `else` statement, an alternate block of code can be executed.

Jab kisi `if` statement ki shart true hoti hai, uske baad wale code block ko execute kiya jata hai. Lekin agar wo shart false hai, to normally kuch nahi hota. `else` statement ke saath, ek alternate code block ko execute kiya ja sakta hai.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

Combine the `if` statements into a single `if/else` statement.

# --hints--

You should only have one `if` statement in the editor

```js
assert(code.match(/if/g).length === 1);
```

You should use an `else` statement

```js
assert(/else/g.test(code));
```

`testElse(4)` should return the string `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)` should return the string `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)` should return the string `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)` should return the string `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

You should not change the code above or below the specified comments.

```js
assert(/let result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
```

# --solutions--

```js
function testElse(val) {
  let result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```
