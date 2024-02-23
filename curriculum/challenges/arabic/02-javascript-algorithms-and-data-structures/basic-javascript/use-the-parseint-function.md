---
id: 587d7b7e367417b2b2512b23
title: استخدام وظيفة تحليل العدد الصحيح (Use the parseInt Function)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

تحلل وظيفة `parseInt()` مقطع وتعيد منه عدداً صحيحاً. إليك مثال:

```js
const a = parseInt("007");
```

هذا المثال يحول مقطع المكون من `007` إلى العدد الصحيح `7`. إذا كان الرمز الأول في مقطع لا يمكن تحويله إلى عدد، فإنه يرجع `NaN`.

# --instructions--

استخدم `parseInt()` في وظيفة اسمها `convertToInteger` لتخول قيمة المقطع النصي `str` إلى عدد صحيح, وتنتجه.

# --hints--

يجب أن يستخدم `convertToInteger` وظيفة `parseInt()`

```js
assert(/parseInt/g.test(code));
```

يجب أن ينتج `convertToInteger("56")` رقماً

```js
assert(typeof convertToInteger('56') === 'number');
```

يجب أن ينتج `convertToInteger("56")` رَقَم 56

```js
assert(convertToInteger('56') === 56);
```

يجب أن ينتج `convertToInteger("77")` رَقَم 77

```js
assert(convertToInteger('77') === 77);
```

يجب أن يرجع `convertToInteger("JamesBond")` كلمة `NaN`

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
