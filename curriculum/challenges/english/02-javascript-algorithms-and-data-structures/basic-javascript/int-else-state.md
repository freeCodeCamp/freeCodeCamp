---
id: 6612ed8ab22861085436c4d7
title: Introducing else Statements
challengeType: 1
dashedName: int-else-state
---

# --description--

When a condition for an `if` statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an `else` statement, an alternate block of code can be executed.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

Combine the `if` statements into a single `if/else` statement.

<h2>Hinglish</h2>

Jab kisi `if` statement ki condition true hoti hai, to uske baad wale code block ko execute kiya jata hai. Lekin agar wo condition false hoti hai, to normally kuch nahi hota. `else` statement ke saath, ek alternate code block execute kiya ja sakta hai.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

`if` statements ko ek single `if/else` statement mein combine karo.


# --hints--

You should only have one `if` statement in the editor

```js
assert(__helpers.removeJSComments(code).match(/if/g).length === 1);
```

You should use an `else` statement

```js
assert(/else/g.test(__helpers.removeJSComments(code)));
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
assert(/let result = "";/.test(__helpers.removeJSComments(code)) && /return result;/.test(__helpers.removeJSComments(code)));
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
