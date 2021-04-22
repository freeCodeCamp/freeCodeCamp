---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

Previously we have used the code

```js
var myName = "your name";
```

`"your name"` is called a <dfn>string</dfn> <dfn>literal</dfn>. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

# --instructions--

Create two new string variables: `myFirstName` and `myLastName` and assign them the values of your first and last name, respectively.

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
