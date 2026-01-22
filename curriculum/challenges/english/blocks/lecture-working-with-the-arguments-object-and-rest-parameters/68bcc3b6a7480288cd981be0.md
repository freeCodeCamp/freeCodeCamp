---
id: 68bcc3b6a7480288cd981be0
title: What is the arguments Object?
challengeType: 19
dashedName: what-is-the-arguments-object
---

# --interactive--

As you recall from earlier lessons and workshops, you can create functions with a number of parameters and call that function with arguments.

Here is a reminder:

```js
// function definition
function getSum(num1, num2) {
  return num1 + num2;
}

// function call
getSum(3, 4); // 7
```

But what if you have a function that is called with more arguments than it was defined to accept?

:::interactive_editor

```js
// function definition
function getSum(num1, num2) {
  return num1 + num2;
}

// function call with extra argument
console.log(getSum(3, 4, 5)); // 7
```

:::

JavaScript will not throw an error in this case. It will instead ignore the extra argument and just add the numbers `3` and `4` together. Functions that accept a variable number of arguments are known as <dfn>variadic functions</dfn>.

If you are working with variadic functions, then you can utilize the `arguments` object. This array-like object contains the values of the arguments passed into the function.

Here is an example:

:::interactive_editor

```js
function logArgs() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);
// result:
// 1
// 2
// 3

logArgs("example"); // "example"
```

:::

Since the `arguments` object is array-like, you can access an argument at a specific index like this:

:::interactive_editor

```js
function getArg() {
  return arguments[1];
}

console.log(getArg(2, 4, 6)); // 4
```

:::

You can also use the `length` property like this to get the number of arguments the function was called with:

:::interactive_editor

```js
function getArgs() {
  return arguments.length;
}

console.log(getArgs("Example")); // 1
console.log(getArgs("Another", "Example")); // 2
```

:::

Even though the `arguments` object appears to act like a real array, it does not have built in `Array` methods like `includes` or `push`. To have access to those methods, you would need to first convert the `arguments` object to a real array using something like `slice`, `Array.from()` or the spread operator:

:::interactive_editor

```js
function hasCat() {
  return [...arguments].includes("cat");
}

console.log(hasCat("dog", "chicken", "cat")); // true
console.log(hasCat("dog", "chicken", "horse")); // false
```

:::

While it is possible to work with the `arguments` object for variadic functions, modern JavaScript applications will normally use rest parameter syntax. You will learn more about that in a future lesson.

# --questions--

## --text--

What is a variadic function?

## --answers--

Functions that accept two arguments.

### --feedback--

Refer to the beginning of the lesson for the answer.

---

Functions that accept a variable number of arguments.

---

Functions that accept a single argument.

### --feedback--

Refer to the beginning of the lesson for the answer.

---

Functions that accept more than three arguments.

### --feedback--

Refer to the beginning of the lesson for the answer.

## --video-solution--

2

## --text--

What is the `arguments` object?

## --answers--

A special dictionary that contains the values of the arguments passed into a function.

### --feedback--

Refer to the beginning of the lesson for the answer.

---

An array-like object that contains the values of the arguments passed into a function.

---

A variable that contains only the first argument passed into a function.

### --feedback--

Refer to the beginning of the lesson for the answer.

---

A true array that automatically updates when function parameters are reassigned.

### --feedback--

Refer to the beginning of the lesson for the answer.

## --video-solution--

2

## --text--

Why can't you use built in `Array` methods like `includes` or `push` on the `arguments` object?

## --answers--

The `arguments` object is always empty unless explicitly initialized.

### --feedback--

Refer to the end of the lesson for the answer.

---

JavaScript automatically blocks method calls on the `arguments` object for performance reasons.

### --feedback--

Refer to the end of the lesson for the answer.

---

The `includes` or `push` methods unreliably work on the `arguments` object so those methods should be avoided.

### --feedback--

Refer to the end of the lesson for the answer.

---

The `arguments` object is not a real array so it doesn't have those built in methods.

## --video-solution--

4
