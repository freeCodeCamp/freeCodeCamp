---
id: 587d7b7e367417b2b2512b22
title: استخدام وظيفة parseInt مع Radix
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

تحلل وظيفة `parseInt()` مقطع وتعيد منه عدداً صحيحاً. وهو يأخذ حجة Radix ثاني الذي يحدد أساس الرقم في مقطع. يمكن أن يكون Radix عدداً صحيحاً بين 2 و 36.

يكون استدعاء الوظيفة كالتالي:

```js
parseInt(string, radix);
```

إليك مثال:

```js
const a = parseInt("11", 2);
```

يشير Radix أن `11` هو رقم في النظام عد ثنائي، أو أساس 2. هذا المثال يحول المقطع المكون من `11` إلى عدد صحيح `3`.

# --instructions--

استخدم `parseInt()` في وظيفة اسمها `convertToInteger` بحيث تحول الرقم الثنائي إلى عدد صحيح وتعيده.

# --hints--

يجب أن يستخدم `convertToInteger` وظيفة `parseInt()`

```js
assert(/parseInt/g.test(code));
```

يجب أن ينتج `convertToInteger("10011")` رقماً

```js
assert(typeof convertToInteger('10011') === 'number');
```

يجب أن ينتج `convertToInteger("10011")` رَقَم 19

```js
assert(convertToInteger('10011') === 19);
```

يجب أن ينتج `convertToInteger("111001")` رَقَم 57

```js
assert(convertToInteger('111001') === 57);
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

convertToInteger("10011");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```
