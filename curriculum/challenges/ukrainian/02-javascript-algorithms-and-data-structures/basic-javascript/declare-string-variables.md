---
id: bd7123c9c444eddfaeb5bdef
title: Оголошення типу змінних string
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

Але ви також можете оголосити рядковий тип змінним ось так:

```js
var myName = "your name";
```

`"your name"` називається <dfn>string</dfn> <dfn>literal</dfn>. string literal — це послідовність символів від нуля до нескінченності, записаних в одинарних чи подвійних лапках.

# --instructions--

Створіть дві нові змінні рядкового типу: `myFirstName` (моє ім'я) та `myLastName` (моє прізвище) та надайте їм значення вашого імені та прізвища.

# --hints--

`myFirstName` має бути рядком з хоча б одним символом всередині.

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

`myLastName` має бути рядком з хоча б одним символом всередині.

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
