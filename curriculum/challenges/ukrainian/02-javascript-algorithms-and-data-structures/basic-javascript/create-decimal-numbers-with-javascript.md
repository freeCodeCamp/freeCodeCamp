---
id: cf1391c1c11feddfaeb4bdef
title: Створення десяткових чисел з JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

Ми можемо зберігати десяткові числа також і у змінних. Десяткові числа іноді називаються числами <dfn>floating point</dfn> або <dfn>floats</dfn>.

**Note:** when you compute numbers, they are computed with finite precision. Operations using floating points may lead to different results than the desired outcome. If you are getting one of these results, open a topic on the <a href="https://forum.freecodecamp.org/" target="_blank" rel="noopener noreferrer nofollow">freeCodeCamp forum</a>.

# --instructions--

Створіть змінну `myDecimal` і надайте їй десяткове значення з дробовою частиною (наприклад, `5.7`).

# --hints--

`myDecimal` повинне бути числом.

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` повинне мати десяткову кому

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
const ourDecimal = 5.7;

// Only change code below this line

```

# --solutions--

```js
const myDecimal = 9.9;
```
