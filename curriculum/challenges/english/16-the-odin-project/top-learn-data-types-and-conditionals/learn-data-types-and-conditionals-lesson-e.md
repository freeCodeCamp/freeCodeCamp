---
id: 65e97260484dd50f720e6fea
title: Learn Data Types and Conditionals Lesson E
challengeType: 15
dashedName: learn-data-types-and-conditionals-lesson-e
---
# --description--

Strings defined using backticks are called template literals. They are a new way to define strings in JavaScript. They allow you to embed expressions within the string. This is done by wrapping the expression in `${}`.

For example, the following code:

```javascript
let name = "John";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
```

will result in the `greeting` variable containing the string "Hello, my name is John and I am 25 years old."

# --question--

## --text--

Which of the following is the correct way to define a template literal in JavaScript?

## --answers--

``` `Hello, my name is ${name} and I am ${age} years old.` ```

---

``` `Hello, my name is `name` and I am `age` years old.` ```

---

``` `Hello, my name is {name} and I am {age} years old.` ```

---

``` `Hello, my name is $name and I am $age years old.` ```

## --video-solution--

1
