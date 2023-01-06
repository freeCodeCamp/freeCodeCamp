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
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArrWORemoved_.every((e, i) => e === i + 3) && testArrWORemoved_.length === 3);
```

يجب ألا يعدل `removeFirstTwo()` قائمة `list`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArr_.every((e, i) => e === i + 1) && testArr_.length === 5);
```

`Array.slice()` لا ينبغي استخدامه.

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

يجب استخدام Destructuring علي `list`.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.shorterList\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
