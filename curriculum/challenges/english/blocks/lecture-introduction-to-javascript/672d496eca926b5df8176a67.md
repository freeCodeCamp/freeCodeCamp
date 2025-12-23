---
id: 672d496eca926b5df8176a67
title: What Is a Data Type, and What Are the Different Data Types in JavaScript?
challengeType: 19
dashedName: what-is-a-data-type
---

# --interactive--

In JavaScript, a data type is the kind of value you store like a number or piece of text.

A variable is a named container that stores a value of a specific data type, allowing you to reference and manipulate it throughout your code. 

You might remember in math class working with variables like this:

```md
x = 2
y = 4

x + y
```

You were able to create variables like `x` and `y` and then reference those throughout your program and do mathematical operations like addition. It is a similar concept in programming. You can create your own variable names and assign values to them. These values will be different data types.

Data types help the program understand the kind of data it's working with, whether it's a number, text, or something else.

JavaScript has several basic data types that you'll use in your programs. We'll explore each data type in greater detail in future lessons. For now, here is a brief introduction of the different data types in JavaScript.

The first data type we will look at is the `Number` type.

A `Number` represents both integers and floating-point values. Examples of integers include `7`, `19`, and `90`. 

**NOTE**: `console.log()` is a function that outputs information to the console, which is a part of your web browser used for debugging code. You will learn more about `console.log()` in future lessons. Also, the `//` symbols are used to add comments in your code. Comments are notes for yourself or other programmers that are ignored when the code runs.

Enable the interactive editor and try changing some of the integers to see it update in the console.

:::interactive_editor

```js
// Examples of integers
console.log(3);
console.log(5);
console.log(-67);
```

:::

A floating point number is a number with a decimal point. Examples of floating point numbers include `3.14` and `5.2`. 

:::interactive_editor

```js
// Examples of floating point numbers
console.log(3.14);
console.log(7.2);
console.log(-14.5);
```

:::

The next data type is a `String`.

A `String` is a sequence of characters, or text, enclosed in quotes. Here is an example string using double quotes: 

:::interactive_editor

```js
console.log("I love to code!");
```

:::

Here is an example using single quotes:

:::interactive_editor

```js
console.log('I love to code!');
```

:::

Oftentimes you will use strings to represent names, labels, alert messages, etc.

Another data type used in JavaScript is the `Boolean` type.

A `Boolean` represents one of two values: `true` or `false`. For example, a program might check whether a user is logged in (`true`) or not (`false`) and change the page based on that. If the user is logged in, you probably want to show them the dashboard page. Otherwise, you will want to show them the login page.

The next two data types used in JavaScript are `undefined` and `null`.

`undefined` means a variable has been declared but hasn't been given a value yet. You will learn more about this in the next lesson.

`null` means the variable has been intentionally set to "nothing" and does not hold any value. We will explore more on how this works in future lessons.

The last three data types are more complex in nature. These are objects, symbols and `BigInt`. 

An `Object` is a collection of key-value pairs. 

```js
{
  name: "Alice",
  age: 30
};
```

Objects are great for grouping related information together. You will learn more about how to work with objects in a future module.

A `Symbol` is a special type of value in JavaScript that is always unique and cannot be changed. It's often used to create unique labels or identifiers for properties:

```js
Symbol('mySymbol');
```

`BigInt` is used for very large numbers that exceed the limit of the `Number` type:

```js
1234567890123456789012345678901234567890n;
```

In this example, we create a `BigInt` by adding `n` at the end of a very large number.

`Symbol` and `BigInt` are two types that are less commonly used, but they are still important to know about.

Understanding these data types helps you handle and work with various kinds of data in your programs, as each type has its own characteristics and behaviors.

# --questions--

## --text--

Which of the following is a string data type?

## --answers--

`"Hello!"`

---

`42`

### --feedback--

Think about which data type is enclosed in quotes.

---

`false`

### --feedback--

Think about which data type is enclosed in quotes.

---

`null`

### --feedback--

Think about which data type is enclosed in quotes.

## --video-solution--

1

## --text--

What data type represents a value that is either `true` or `false`?

## --answers--

`Number`

### --feedback--

This data type is often used in logical statements.

---

`String`

### --feedback--

This data type is often used in logical statements.

---

`Boolean`

---

`Undefined`

### --feedback--

This data type is often used in logical statements.

## --video-solution--

3

## --text--

If a variable has been declared but not assigned a value, what is its data type?

## --answers--

`String`

### --feedback--

This data type represents an unassigned variable.

---

`Number`

### --feedback--

This data type represents an unassigned variable.

---

`Undefined`

---

`Null`

### --feedback--

This data type represents an unassigned variable.

## --video-solution--

3
