---
id: bd7993c9c69feddfaeb8bdef
title: تخزين قيم متعددة في متغير واحد باستخدام قائمات JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

بواسطة المتغيرات من نوع `array` في JavaScript، يمكننا تخزين عدة قطع من البيانات في مكان واحد.

تبدأ إعلان القائمة (array) بأقواس مربعه (square bracke) وتنهيها بأقواس مربعه، ووضع فاصلة بين كل إدخال، مثال:

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

عدِّل الـقائمة الجديدة `myArray` بحيث تحتوي على string ورقم في نفس الوقت (بهذا الترتيب).

# --hints--

`myArray` يجب أن يكون array.

```js
assert(typeof myArray == 'object');
```

العنصر الأول في `myArray` يجب أن يكون string.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

العنصر الثاني في `myArray` يجب أن يكون رقما.

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
