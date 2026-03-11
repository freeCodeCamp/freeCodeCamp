---
id: 67327217e70ee0db7913b255
title: What Is the Math Object in JavaScript, and What Are Some Common Methods?
challengeType: 19
dashedName: what-is-the-math-object-in-javascript-and-what-are-some-common-methods
---

# --interactive--

When diving into JavaScript, you'll quickly discover that performing mathematical operations is a common task. While basic arithmetic operators can handle simple calculations, JavaScript offers a built-in `Math` object to tackle more complex math challenges.

This handy tool provides a variety of methods that make it easier to perform advanced calculations and manipulate numbers. Let's explore these methods and see how they can simplify your coding experience.

The `Math.random()` method generates a random floating-point number between `0` (inclusive) and `1` (exclusive). This means the possible output can be `0`, but it will never actually reach `1`. Here is an example working with the `Math.random()` method:

:::interactive_editor

```js
const randomNum = Math.random();

console.log(randomNum);
// any number between 0 and 1 – 0 inclusive and 1 exclusive
```

:::

`Math.min()` and `Math.max()` both take a set of numbers and return the minimum and maximum value, respectively. Here is an example of working both of those methods:

:::interactive_editor

```js
const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9
```

:::

The first `console.log()` will log the number `1`, since `1` is the smallest in that list of numbers. And the second `console.log()` will log the number `9`, since `9` is the largest numbers in that list.

If you wanted to round numbers up or down to the nearest whole integer, you could use the `Math.ceil()` and `Math.floor()` methods.  Here is an example of working with `Math.ceil()`:

:::interactive_editor

```js
console.log(Math.ceil(4.3)); // 5
```

:::

`Math.ceil()` will round `4.3` up to the nearest whole integer, which is `5` in this case. Now, let's take a look at rounding a number down:

:::interactive_editor

```js
console.log(Math.floor(4.7)); // 4
```

:::

`Math.floor()` will round `4.7` down to the nearest whole integer, which is `4` in this case. `Math.round()` is the hybrid of `Math.ceil()` and `Math.floor()`. It rounds a number to its nearest integer, taking the decimal point into account:

:::interactive_editor

```js
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
```

:::

So, if the decimal point is less than `5`, the number is rounded down. And if the decimal point is `5` or greater, the number is rounded up. A practical application of `Math.floor()` and `Math.random()` is to generate a random number between two whole numbers. Here's the syntax for that:

:::interactive_editor

```js
const max = 10;
const min = 5;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
```

:::

Generating a random number between `20` and `1` would look like this:

:::interactive_editor

```js
const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);
```

:::

Another helpful `Math` method would be the `Math.trunc()` method. `Math.trunc()` removes the decimal part of a number, returning only the integer portion, without rounding:

:::interactive_editor

```js
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9
```

:::

If you need to get the square root or cube root of a number, you can use the `Math.sqrt()` and `Math.cbrt()` methods, respectively:

:::interactive_editor

```js
console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3
```

:::

The first log statement, will log `9` because the square root of `81` is `9`, while the second log statement will log `3` because the cube root of `27` is `3`. If you need to get the absolute value of a number, you can use the `Math.abs()` method:

:::interactive_editor

```js
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
```

:::

`Math.abs()` returns the absolute value of a number, turning negatives into positives. The last method we will look at will be the `Math.pow()` method:

:::interactive_editor

```js
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64
```

:::

`Math.pow()` takes two numbers and raise the first to the power of the second. There are many more methods that belong to the `Math` object, that you can explore on your own. However, these are just a few of the more commonly used ones found in JavaScript codebases.

# --questions--

## --text--

What does the `Math.floor()` function do?

## --answers--

Rounds a number up to the nearest integer.

### --feedback--

Think about how this function always rounds towards the lower integer.

---

Rounds a number down, regardless of the decimal point.

---

Rounds a number to the nearest even integer.

### --feedback--

Think about how this function always rounds towards the lower integer.

---

Rounds a number based on the value of the decimal point.

### --feedback--

Think about how this function always rounds towards the lower integer.

## --video-solution--

2

## --text--

Why is `Math.round()` considered a hybrid of `Math.ceil()` and `Math.floor()`?

## --answers--

It only rounds numbers up like `Math.ceil()`.

### --feedback--

Think about how it chooses to round up or down based on the decimal value.

---

It rounds numbers down like `Math.floor()`.

### --feedback--

Think about how it chooses to round up or down based on the decimal value.

---

It rounds numbers to the nearest integer, using both rounding up and down depending on the decimal.

---

It ignores the decimal point.

### --feedback--

Think about how it chooses to round up or down based on the decimal value.

## --video-solution--

3

## --text--

What's the difference between `Math.min()` and `Math.max()`?

## --answers--

`Math.min()` returns the maximum value, and `Math.max()` returns the minimum value.

### --feedback--

Think about how these functions work with a set of numbers.

---

`Math.min()` returns the smallest number, and `Math.max()` returns the largest number from a set.

---

Both return the same value.

### --feedback--

Think about how these functions work with a set of numbers.

---

`Math.min()` rounds numbers down, and `Math.max()` rounds numbers up.

### --feedback--

Think about how these functions work with a set of numbers.

## --video-solution--

2
