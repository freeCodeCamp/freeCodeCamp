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

**Примітка:** Не всі дійсні числа можуть бути віднесені до <dfn>рухомої коми</dfn>. Це може призвести до помилок заокруглення. [Детальніше Тут](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems).

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
