---
id: 6733aa9b006d29f4d11307a5
title: What Are Some Examples of Common JavaScript Errors?
challengeType: 19
dashedName: what-are-some-examples-of-common-javascript-errors
---

# --description--

As you've been programming in JavaScript, you've inevitably run into error messages. Understanding common error messages will help you debug more effectively and develop into a stronger programmer. The four common types of error messages are `SyntaxError`, `ReferenceError`, `TypeError`, and `RangeError`.

A `SyntaxError` happens when you write something incorrectly in your code, like missing a parenthesis, or a bracket. Think of it like a grammar mistake in a sentence. Here is a common mistake developers make when creating arrays:

```js
const arr = ["Beau", "Quincy" "Tom"]
```

Each array element needs to be separated by a comma otherwise it will result in an error message.

The second common JavaScript error is a `ReferenceError`. There are several types of `ReferenceError`s, triggered in different ways. The first type of `ReferenceError` would be not defined variables.

```js
console.log(price);
```

In this example, we are trying to log the `price` variable to the console but it hasn’t been defined. This is will result in a `ReferenceError`.

Another example of a `ReferenceError` is trying to access a variable, declared with `let` or `const`, before it has been defined:

```js
console.log(b);
const b = 50;
```

The example above will result in a `Cannot access 'b' before initialization` error. 

The third common error would be a `TypeError`. These errors occur when you try to perform an operation on the wrong type. Here is an example of trying to use the `map` method on an object:

```js
const developerObj = {
  name: "Jessica",
  country: "USA",
  isEmployed: true
};

developerObj.map()
```

This example will result in a `developerObj.map is not a function` error because the `map` method is used for arrays and not objects. 

The last common error we will look at is the `RangeError`.

A `RangeError` happens when your code tries to use a value that’s outside the range of what JavaScript can handle. Here is an example of assigning an invalid value to an array's length:

```js
const arr = [];
arr.length = -1; 
```

Since an array's `length` has to be a non-negative integer, setting it to `-1` triggers a `RangeError`.

As you continue to program in JavaScript, just be aware of these different types of errors you will probably encounter and why they are happening.

# --questions--

## --text--

What causes a `SyntaxError` in JavaScript?

## --answers--

Trying to call a variable like a function.

### --feedback--

It's like grammar for your code.

---

Trying to use a value that's out of range.

### --feedback--

It's like grammar for your code.

---

Writing something incorrectly in your code, like missing a parenthesis or semicolon.

---

Accessing a variable before it's declared.

### --feedback--

It's like grammar for your code.

## --video-solution--

3

## --text--

What will happen if you try to call a variable that holds a number as if it were a function?

## --answers--

`SyntaxError`

### --feedback--

The error happens because the variable is being treated like a function when it's not.

---

`ReferenceError`

### --feedback--

The error happens because the variable is being treated like a function when it's not.

---

`TypeError`

---

`RangeError`

### --feedback--

The error happens because the variable is being treated like a function when it's not.

## --video-solution--

3

## --text--

Which error occurs when you assign an invalid value, such as `-1`, to an array's `length`?

## --answers--

`TypeError`

### --feedback--

This error is related to using a value outside the valid range.

---

`ReferenceError`

### --feedback--

This error is related to using a value outside the valid range.

---

`RangeError`

---

`SyntaxError`

### --feedback--

This error is related to using a value outside the valid range.

## --video-solution--

3
