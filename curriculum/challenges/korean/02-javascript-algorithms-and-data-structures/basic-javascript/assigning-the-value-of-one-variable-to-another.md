---
id: 5ee127a03c3b35dd45426493
title: Assigning the Value of One Variable to Another
challengeType: 1
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

After a value is assigned to a variable using the <dfn>assignment</dfn> operator, you can assign the value of that variable to another variable using the <dfn>assignment</dfn> operator.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

The above declares a `myVar` variable with no value, then assigns it the value `5`. Next, a variable named `myNum` is declared with no value. Then, the contents of `myVar` (which is `5`) is assigned to the variable `myNum`. Now, `myNum` also has the value of `5`.

# --instructions--

Assign the contents of `a` to variable `b`.

# --hints--

You should not change code above the specified comment.

```js
assert(/var a;/.test(__helpers.removeJSComments(code)) && /a = 7;/.test(__helpers.removeJSComments(code)) && /var b;/.test(__helpers.removeJSComments(code)));
```

`b` should have a value of `7`.

```js
assert(typeof b === 'number' && b === 7);
```

`a` should be assigned to `b` with `=`.

```js
assert(/b\s*=\s*a\s*/g.test(__helpers.removeJSComments(code)));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
