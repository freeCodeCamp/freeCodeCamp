---
id: 56105e7b514f539506016a5e
title: العد إلى الوراء باستخدام الحلقة التكرارية (Count Backwards With a For Loop)
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

يمكن لحلقة التكرارية (for loop) أن تعد للوراء أيضا، مادام تستطيع تحديد الشروط الصحيحة.

من أجل التراجع بمقدار اثنين في كل دورة (iteration)، سنحتاج إلى تغيير البادئ (initialization) و الشرط (condition) و التعبير الأخير (final expression).

سنبدأ عند `i = 10` وتكرر مادام `i > 0`. خفض `i` بمقدار 2 مع كل تكرار باستخدام `i -= 2`.

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

سوف تحتوي `ourArray` الآن على `[10, 8, 6, 4, 2]`. غير التعبير البادئ (initialization) و التعبير الأخير (final expression) حتى نتمكن من العد إلى الوراء بمقدار اثنين لإنشاء قائمة (array) من الأعداد التنازلية الفردية.

# --instructions--

اضغط الأرقام الفردية من 9 إلى 1 إلى `myArray` باستخدام الحلقة التكرارية `for`.

# --hints--

يجب أن تستخدم الحلقة التكرارية `for`.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

يجب أن تستخدم طريقة للقائمة (array method) باسم `push`.

```js
assert(code.match(/myArray.push/));
```

يجب أن تساوي `myArray` قيمة `[9, 7, 5, 3, 1]`.

```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
