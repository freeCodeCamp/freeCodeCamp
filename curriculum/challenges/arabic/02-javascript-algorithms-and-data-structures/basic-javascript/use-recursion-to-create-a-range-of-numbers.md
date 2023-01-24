---
id: 5cc0bd7a49b71cb96132e54c
title: استخدم التكرار لإنشاء نطاق من الأرقام (Use Recursion to Create a Range of Numbers)
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

مع الاستمرار في التحدي السابق، نوفر لك فرصة لحل مشكلة أخرى باستخدام الوظيفة المتكررة.

# --instructions--

لقد حددنا وظيفة (function) تسمى `rangeOfNumbers` مع اثنين من الوسائط (parameters). يجب أن تنتج الوظيفة قائمة من الأعداد الصحيحة التي تبدأ بعدد يمثله وسيط `startNum` وتنتهي بعدد يمثله وسيط `endNum` الآخرة. سيكون رقم البداية دائماً أقل من أو يساوي رقم النهاية. يجب أن تستخدم الوظيفة التكرار بواسطة تفعيل نفسها، ويجب ألا تستخدم الحلَقات من أي نوع. يجب أن تعمل أيضا في الحالات التي يكون فيها كل من `startNum` و `endNum` متماثلين.

# --hints--

يجب أن تنتج الوظيفة قيمة القائمة.

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

لا ينبغي أن يعتمد الكود الخاص بك على أي نوع من الحلَقات سواءً (`for`, أو `while`, أو وظائف ذو مستوي عالى التجريد مثل `forEach`, أو `map`, أو `filter`, أو `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

يجب أن يستخدم `rangeOfNumbers` التكرار (استدعاء نفسه) لحل هذا التحدي.

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

يجب أن ينتج `rangeOfNumbers(1, 5)` قائمة `[1, 2, 3, 4, 5]`.

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

يجب أن ينتج `rangeOfNumbers(6, 9)` قائمة `[6, 7, 8, 9]`.

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

يجب أن ينتج `rangeOfNumbers(4, 4)` قائمة `[4]`.

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

لا ينبغي استخدام المتغيرات الشاملة (Global variables) للتخزين المؤقت للقائمة (array).

```js
rangeOfNumbers(1, 3)
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
