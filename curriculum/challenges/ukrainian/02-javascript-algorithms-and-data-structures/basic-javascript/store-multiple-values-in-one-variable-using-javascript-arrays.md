---
id: bd7993c9c69feddfaeb8bdef
title: Зберігання кількох значень в одній змінній, використовуючи масиви JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

Зі змінними масивів `array` JavaScript, ми можемо зберігати частини даних в одному місці.

Ви починаєте оголошення масиву з відкритої квадратної дужки, а завершуєте його закриваючи квадратною дужкою і ставлячи кому між кожним елементом приблизно так:

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

Першим елементом у масиві `myArray` має бути рядок.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

Другий пункт в `myArray` має бути числом.

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
