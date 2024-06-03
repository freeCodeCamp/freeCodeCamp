---
id: 587d7b8a367417b2b2512b4c
title: >-
  التفكيك عن طريق عناصر rest
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

في بعض المواقف التي تتضمن array destructuring، قد نرغب في تجميع باقي العناصر في array منفصلة.

النتيجة مشابهة لـ `Array.prototype.slice()`، كما هو موضح أدناه:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

ستعرض وحدة التحكم القيم `1, 2` و `[3, 4, 5, 7]`.

المتغيرات `a` و `b` تأخذ القيم الأولى والثانية من الـ array. بعد ذلك، بسبب وجود الثلاثة نقاط التي تدعى rest، سوف يحصل المتغير `arr` على بقية القيم في شكل قائمة (array). يعمل العنصر rest بشكل صحيح فقط كآخر متغير في القائمة. بمعني، انه لا يمكنك استخدام rest للحصول على قائمة فرعية (subarray) التي لا تحتوي غلى العنصر الأخير من القائمة الأصلية.

# --instructions--

استخدم تشكيل rest لتعيين التركبي (destructuring assignment) لمحاكاة سلوك `Array.prototype.slice()`. يجب أن ينتج `removeFirstTwo()` قائمة فرعية (sub-array) من قائمة `list` الأصلية دون العنصرين الأولين.

# --hints--

يجب أن ينتج `removeFirstTwo([1, 2, 3, 4, 5])` قائمة `[3, 4, 5]`

```js
assert.deepEqual(removeFirstTwo([1, 2, 3, 4, 5]), [3, 4, 5]);
```

يجب ألا يعدل `removeFirstTwo()` قائمة `list`

```js
const _testArr = [1, 2, 3, 4, 5];
removeFirstTwo(_testArr);
assert.deepEqual(_testArr, [1, 2, 3, 4, 5])
```

`Array.slice()` لا ينبغي استخدامه.

```js
assert(!__helpers.removeJSComments(code).match(/\.\s*slice\s*\(/));
```

You should use the rest syntax.

```js
assert.match(code, /\.\.\./);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  // comment with 'slice' to check comments are removed in tests
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
