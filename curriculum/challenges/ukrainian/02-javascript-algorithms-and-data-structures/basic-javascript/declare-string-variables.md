---
id: bd7123c9c444eddfaeb5bdef
title: Оголошення рядкових змінних
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

Раніше ви використовували цей код, щоб оголосити змінну:

```js
var myName;
```

Але рядкову змінну можна оголосити ще так:

```js
var myName = "your name";
```

`"your name"` називається <dfn>рядковим</dfn> <dfn>літералом</dfn>. Рядковий літерал, або рядок – це послідовність нуля або більше символів, записаних в одинарних чи подвійних лапках.

# --instructions--

Створіть дві нові рядкові змінні: `myFirstName` та `myLastName`, і надайте їм значення своїх імені та прізвища.

# --hints--

`myFirstName` повинна бути рядком з принаймні одним символом.

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

`myLastName` повинна бути рядком з принаймні одним символом.

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
