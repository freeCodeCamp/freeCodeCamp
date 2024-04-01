---
id: 6606cc932d3660142b585e31
title: Finding remainder with Javascript
challengeType: 1
dashedName: find-remainder
---

# --description--

The <dfn>remainder</dfn> operator `%` gives the remainder of the division of two numbers.

**Example**

<pre>
5 % 2 = 1
5 / 2 = 2 remainder 1
2 * 2 = 4
5 - 4 = 1
</pre>

**Usage**  
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by `2`. Even numbers have a remainder of `0`, while odd numbers a remainder of `1`.

<pre>
17 % 2 = 1
48 % 2 = 0
</pre>

**Note:** The <dfn>remainder</dfn> operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.


"The <dfn>remainder</dfn> operator `%` deta hai two numbers ke division ka remainder.

**Example**

<pre>
5 % 2 = 1
5 / 2 = 2 remainder 1
2 * 2 = 4
5 - 4 = 1
</pre>

**Usage**  
Mathematics mein, ek number ko even ya odd check karne ke liye number ko `2` se divide karne ka remainder dekha ja sakta hai. Even numbers ka remainder hota hai `0`, jabki odd numbers ka remainder hota hai `1`.

<pre>
17 % 2 = 1
48 % 2 = 0
</pre>

**Note:** The <dfn>remainder</dfn> operator kabhi-kabhi incorrectly modulus operator ke roop mein refer kiya jata hai. Ye modulus ke bahut similar hai, lekin negative numbers ke saath sahi tarah se kaam nahi karta."

# --instructions--

Set `remainder` equal to the remainder of `11` divided by `3` using the <dfn>remainder</dfn> (`%`) operator.

Set `remainder` equal to the remainder of `11` divided by `3` using the <dfn>remainder</dfn> (`%`) operator.

# --hints--

The variable `remainder` should be initialized

```js
assert(/(const|let|var)\s+?remainder/.test(code));
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
(function (y) {
  return 'remainder = ' + y;
})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```
