---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

تدور Functional programming حول إنشاء واستخدام functions غير متغيرة.

قدم التحدي الأخير `concat` كطريقة لدمج بين القائمات (arrays) إلى قائمة (array) واحدة جديدة دون تغيير القائمات (arrays) الأصلية. قارن `concat` بـ `push`. يضيف `push` عنصر إلى نهاية قائمة (array) ذاتها التي تفعيل الطريقة عليها، التي تغير تلك القائمة (array). على سبيل المثال:

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

ستكون `arr` لها قيمة معدلة `[1, 2, 3, 4, 5, 6]`, وهي ليست طريقة البرمجة الوظيفة (functional).

يوفر`concat` طريقة لإضافة عناصر جديدة إلى نهاية قائمة (array) دون أي تأثيرات جانبية متغيرة.

# --instructions--

غيّر وظيفة `nonMutatingPush` بحيث تستخدم `concat` لإضافة `newItem` إلى نهاية `original` دون تغير قائمات `original` أو `newItem`. يجب أن تعيد الدالة array.

# --hints--

يجب أن يستخدم الكود الخاص بك دالة `concat`.

```js
assert(code.match(/\.concat/g));
```

يجب ألا يستخدم الكود الخاص بك دالة `push`.

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

يجب ألا تتغير مصفوفة `first`.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

يجب ألا تتغير مصفوفة `second`.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` يجب أن ترجع `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
```
