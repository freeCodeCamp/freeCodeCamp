---
id: 67329fbcfaf5ff5cdaa38a42
title: What Is the var Keyword, and Why Is It No Longer Suggested to Use It?
challengeType: 11
videoId: Ae4bq5IcDfI
dashedName: what-is-the-var-keyword-and-why-is-it-no-longer-suggested-to-use-it
---

# --description--

Watch the video or read the transcript and answer the questions below.

# --transcript--

What is the `var` keyword and why is it no longer suggested to use it?

The `var` keyword in JavaScript is one of the original ways to declare variables. It has been part of the language since its inception and for many years it remained the primary method for creating variables. However as JavaScript evolved and developers gained more experience with the language, certain drawbacks of using `var` became apparent leading to the introduction of `let` and `const` in 2015.

When you declare a variable with `var`, it becomes function-scoped or globally-scoped. This means that if you declare a variable inside a function using `var` it's only accessible within that function. However if you declare it outside any function, it becomes a global variable accessible throughout your entire script. This behavior can sometimes lead to unexpected results and make your code harder to reason about.

A problem with `var` is that it allows you to redeclare the same variable multiple times without throwing an error. This can lead to accidental overwrites and make debugging more difficult.

```js
var num = 5;

// This is allowed and doesn't throw an error
var num = 10;
```

The most significant issue with `var` is its lack of block scoping. Variables declared with `var` inside a block like an `if` statement or a `for` loop are still accessible outside that block. 

```js
if (true){
  var num = 5;
}
console.log(num); // 5
```

This behaviour can lead to unintended variable leaks and make your code more prone to bugs.

Due to this issues, modern JavaScript development has largely moved away from `var` in favor of `let` and `const`. These keywords provide block scoping which aligns more closely with how scoping works in many other programming languages.

They also don't allow redeclaration within the same scope helping to prevent accidental overrides.

While `var` is still part of JavaScript and works in all browsers, it's generally recommended to use `let` and `const` in modern JavaScript development. They provide clear scoping rules help prevent common pitfalls and make your code's behavior more predictable.

# --questions--

## --text--

What is the scope of a variable declared with `var` outside of any function?

## --answers--

Block scope.

### --feedback--

Think about where a `var` variable declared outside a function can be accessed.

---

Function scope.

### --feedback--

Think about where a `var` variable declared outside a function can be accessed.

---

Global scope.

---

Module scope.

### --feedback--

Think about where a `var` variable declared outside a function can be accessed.

## --video-solution--

3

## --text--

What will be the output of the following code?

```js
var x = 10;

if (true) {
  var x = 20;
  console.log(x);
}

console.log(x);
```

## --answers--

```js
10
10
```

### --feedback--

Remember that `var` is function-scoped or globally-scoped, and it allows redeclaration within the same scope.

---

```js
20
20
```

---

```js
10
20
```

### --feedback--

Remember that `var` is function-scoped or globally-scoped, and it allows redeclaration within the same scope.

---

```js
20
10
```

### --feedback--

Remember that `var` is function-scoped or globally-scoped, and it allows redeclaration within the same scope.

## --video-solution--

2

## --text--

Which of the following is NOT a reason to avoid using `var` in modern JavaScript?

## --answers--

`var` allows redeclaration of variables in the same scope.

### --feedback--

Consider which statement is false about `var`'s behavior or support.

---

`var` is not supported in modern browsers.

---

`var` variables are function-scoped, not block-scoped.

### --feedback--

Consider which statement is false about `var`'s behavior or support.

---

`var` variables are hoisted.

### --feedback--

Consider which statement is false about `var`'s behavior or support.

## --video-solution--

2
