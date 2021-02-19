---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

The <dfn>remainder</dfn> operator `%` gives the remainder of the division of two numbers.

**Example**

<blockquote>5 % 2 = 1 because<br>Math.floor(5 / 2) = 2 (Quotient)<br>2 * 2 = 4<br>5 - 4 = 1 (Remainder)</blockquote>

**Usage**  
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by `2`.

<blockquote>17 % 2 = 1 (17 is Odd)<br>48 % 2 = 0 (48 is Even)</blockquote>

**Note:** The <dfn>remainder</dfn> operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

# --instructions--

Set `remainder` equal to the remainder of `11` divided by `3` using the <dfn>remainder</dfn> (`%`) operator.

# --hints--

The variable `remainder` should be initialized

```js
assert(/var\s+?remainder/.test(code));
```

The value of `remainder` should be `2`

```js
assert(remainder === 2);
```

You should use the `%` operator

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(y){return 'remainder = '+y;})(remainder);
```

## --seed-contents--

```js
// Only change code below this line

var remainder;
```

# --solutions--

```js
var remainder =  11 % 3;
```
