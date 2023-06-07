---
id: bd7993c9c69feddfaeb8bdef
title: Зберігання декількох значень в одній змінній за допомогою масивів JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

Ми можемо зберігати деякі дані в одному місці завдяки змінним `array` у JavaScript.

Оголошення масиву починається з початкової квадратної дужки, закінчується кінцевою квадратною дужкою, а між кожним елементом ставиться кома:

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

Змініть масив `myArray` так, щоб він містив і рядок, і число (у цьому порядку).

# --hints--

`myArray` повинен бути масивом.

```js
assert(typeof myArray == 'object');
```

Першим елементом у `myArray` повинен бути рядок.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

Другим елементом у `myArray` повинне бути число.

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```
