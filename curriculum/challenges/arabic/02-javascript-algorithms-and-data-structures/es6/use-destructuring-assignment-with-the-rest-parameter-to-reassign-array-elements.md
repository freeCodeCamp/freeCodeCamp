---
id: 587d7b8a367417b2b2512b4c
title: >-
  Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
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

المتغيرات `a` و `b` تأخذ القيم الأولى والثانية من الـ array. بعد ذلك، بسبب وجود rest parameter، الـ `arr` يحصل على بقية القيم في شكل array. يعمل العنصر rest بشكل صحيح فقط كآخر متغير في القائمة. بمعني انه لا يمكنك استخدام rest parameter لالتقاط subarray (اي array فرعية) تترك العنصر الأخير من الـ array الأصلية.

# --instructions--

استخدم destructuring assignment مع rest parameter لأداء `Array.prototype.slice()` بحيث يكون `arr` هو sub-array من الـ array الأصلية `source` مع حذف العنصرين الأولين.

# --hints--

`arr` يجب أن يكون `[3,4,5,6,7,8,9,10]`

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` يجب ان يكون `[1,2,3,4,5,6,7,8,9,10]`

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
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
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
