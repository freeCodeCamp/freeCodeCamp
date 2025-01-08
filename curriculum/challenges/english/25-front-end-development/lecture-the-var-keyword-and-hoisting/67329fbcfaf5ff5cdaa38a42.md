---
id: 67329fbcfaf5ff5cdaa38a42
title: What Is the var Keyword, and Why Is It No Longer Suggested to Use It?
challengeType: 11
videoId: Ae4bq5IcDfI
dashedName: what-is-the-var-keyword-and-why-is-it-no-longer-suggested-to-use-it
---

# --description--

Watch the video lecture and answer the questions below.

# --questions--

## --text--

What is the scope of a variable declared with `var` outside of any function?

## --distractors--

Block scope.

### --feedback--

Think about where a `var` variable declared outside a function can be accessed.

---

Function scope.

### --feedback--

Think about where a `var` variable declared outside a function can be accessed.

---

Module scope.

### --feedback--

Think about where a `var` variable declared outside a function can be accessed.

## --answer--

Global scope.

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

## --distractors--

```js
10
10
```

### --feedback--

Remember that `var` is function-scoped or globally-scoped, and it allows redeclaration within the same scope.

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

## --answer--

```js
20
20
```

## --text--

Which of the following is NOT a reason to avoid using `var` in modern JavaScript?

## --distractors--

`var` allows redeclaration of variables in the same scope.

### --feedback--

Consider which statement is false about `var`'s behavior or support.

---

`var` variables are function-scoped, not block-scoped.

### --feedback--

Consider which statement is false about `var`'s behavior or support.

---

`var` variables are hoisted.

### --feedback--

Consider which statement is false about `var`'s behavior or support.

## --answer--

`var` is not supported in modern browsers.

