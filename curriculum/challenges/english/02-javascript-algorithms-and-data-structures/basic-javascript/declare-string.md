---
id: 6606ca7c680cf9120606740b
title: Declare string variables
challengeType: 1
dashedName: declare-string
---

# --description--

Previously you used the following code to declare a variable:

```js
var myName;
```

But you can also declare a string variable like this:

```js
var myName = "your name";
```

`"your name"` is called a <dfn>string</dfn> <dfn>literal</dfn>. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.



# --instructions--

Create two new string variables: `myFirstName` and `myLastName` and assign them the values of your first and last name, respectively.


<h2>Hinglish</h2>

Pehle aapne variable declare karne ke liye ye code istemal kiya tha:

```js
var myName;
```

Lekin aap ek string variable is tarah se bhi declare kar sakte hain:

```js
var myName = "your name";
```

`"your name"` ko ek <dfn>string</dfn> <dfn>literal</dfn> kehte hain. Ek string literal, ya string, ek series hoti hai jisme zero ya zyada characters single ya double quotes mein hote hain.


Do naye string variables banayein: `myFirstName` aur `myLastName` aur unhein aapke first aur last name ke values assign karein.



# --hints--

`myFirstName` should be a string with at least one character in it.

```js
assert(
  (function () {
    if (
      typeof myFirstName !== 'undefined' &&
      typeof myFirstName === 'string' &&
      myFirstName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

`myLastName` should be a string with at least one character in it.

```js
assert(
  (function () {
    if (
      typeof myLastName !== 'undefined' &&
      typeof myLastName === 'string' &&
      myLastName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myFirstName !== "undefined" && typeof myLastName !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myFirstName = "Alan";
var myLastName = "Turing";
```
