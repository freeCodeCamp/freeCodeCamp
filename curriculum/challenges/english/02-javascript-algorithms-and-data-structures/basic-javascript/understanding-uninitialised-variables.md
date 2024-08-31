---
id: 6606caa003b026122d3796cc
title: Understanding Uninitialized variables
challengeType: 1
dashedName: understanding-uninitialised-variables
---

# --description--

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means <dfn>"Not a Number"</dfn>. If you concatenate a string with an `undefined` variable, you will get a <dfn>string</dfn> of `undefined`.

# --instructions--

Initialize the three variables `a`, `b`, and `c` with `5`, `10`, and `"I am a"` respectively so that they will not be `undefined`.

<h2>Hinglish</h2>

Jab JavaScript variables declare kiye jaate hain, to unka initial value hota hai `undefined`. Agar aap ek `undefined` variable par mathematical operation karte hain, to aapka result `NaN` hoga, jo <dfn>"Not a Number"</dfn> ka matlab hai. Agar aap ek string ko ek `undefined` variable ke saath concatenate karte hain, to aapko ek `undefined` string milegi.

`a`, `b`, aur `c` teen variables ko `5`, `10`, aur `"I am a"` ke saath initialize karo taki wo `undefined` na rahein.


# --hints--

`a` should be defined and have a final value of `6`.

```js
assert(typeof a === 'number' && a === 6);
```

`b` should be defined and have a final value of `15`.

```js
assert(typeof b === 'number' && b === 15);
```

`c` should not contain `undefined` and should have a final value of the string `I am a String!`

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

You should not change code below the specified comment.

```js
assert(
  /a = a \+ 1;/.test(__helpers.removeJSComments(code)) &&
    /b = b \+ 5;/.test(__helpers.removeJSComments(code)) &&
    /c = c \+ " String!";/.test(__helpers.removeJSComments(code))
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
