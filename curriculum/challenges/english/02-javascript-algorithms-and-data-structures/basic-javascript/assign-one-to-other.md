---
id: 6612634a986f69f85acd948c
title: Assigning the Value of One Variable to Another
challengeType: 1
dashedName: assign-one-to-other
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

<h2>Hinglish</h2>

Ek bar ek variable ko ek value <dfn>assignment</dfn> operator ka upyog karke assign kar diya jata hai, tab aap us variable ki value ko doosre variable ko assign karne ke liye bhi <dfn>assignment</dfn> operator ka upyog kar sakte hain.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

Upar diya gaya code `myVar` variable ko bina kisi value ke declare karta hai, phir isko value `5` assign karta hai. Agla, ek variable `myNum` declare kiya jata hai bina kisi value ke. Fir, `myVar` ke content (jo `5` hai) ko variable `myNum` mein assign kiya jata hai. Ab, `myNum` mein bhi `5` ki value hai.

# --instructions--

Assign the contents of `a` to variable `b`.

`a` ke content ko variable `b` mein assign karen.

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
