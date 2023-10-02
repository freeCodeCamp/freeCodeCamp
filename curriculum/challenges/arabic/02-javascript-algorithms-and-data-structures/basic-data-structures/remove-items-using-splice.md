---
id: 587d78b2367417b2b2512b10
title: أستخدم splice() لإزالة عناصر
challengeType: 1
forumTopicId: 301166
dashedName: remove-items-using-splice
---

# --description--

حسنًا، لقد تعلمنا كيفية إزالة العناصر من بداية ونهاية arrays باستخدام `shift()` و `pop()`، ولكن ماذا لو أردت إزالة عنصر من مكان ما في المنتصف؟ أم إزالة أكثر من عنصر واحد في المرة الواحدة؟ هنا يأتي دور `splice()`. `splice()` تسمح لنا بالقيام بما يلي: **إزالة أي عدد من العناصر المتتالية** من أي مكان في array.

يمكن أن يأخذ `splice()` ما يصل من 3 وسائط (parameters)، ولكن في الوقت الحالي، سنركز على أول 2. يكون أول ثاني وسائط في `splice()` أعداد صحيحة تمثل ترتيب (indexes) العناصر، أو أماكن العناصر في قائمة (array) الذي `splice()` تم تفعيلها. وتذكر أن arrays هم *zero-indexed*، بحيث لنشير إلى العنصر الأول في array، سوف تستخدم `0`. يمثل أول وسيط في `splice()` الترتيب (index) في قائمة التي تبدأ منها إزالة العناصر، بينما الوسيط الثاني يشير إلى عدد العناصر المراد حذفها. على سبيل المثال:

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
```

هنا تزل عنصرين بدءاً بالعنصر الثالث (عند index ٢). سيكون `array` بقيمة `['today', 'was', 'great']`.

لا يعدل `splice()` القائمة فقط الذي يتم استدعاؤها فحسب، بل تقوم أيضًا بإنتاج array جديدة تحتوي على قيمة العناصر المُزالة:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

`newArray` لديه القيمة `['really', 'happy']`.

# --instructions--

لقد قمنا بتهيئة array بأسم `arr`. استخدم `splice()` لإزالة العناصر من `arr`، بحيث لا تحتوي إلا على عناصر نتيجة جمعها يكون `10`.

# --hints--

لا ينبغي تغيير السطر الأصلي `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/constarr=\[2,4,5,1,7,5,2,1\];?/)
);
```

`arr` يجب أن يحتوي فقط على عناصر مجموعها يكون `10`.

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

يجب أن يستخدم التعلميات البرمجية الخاص بك وظيفة `splice()` علي `arr`.

```js
assert(__helpers.removeWhiteSpace(code).match(/arr\.splice\(/));
```

يجب فقط إزالة العناصر من `arr` وعدم إضافة أي عناصر إضافية إلى `arr`.

```js
assert(
  !__helpers.removeWhiteSpace(code).match(/arr\.splice\(\d+,\d+,\d+.*\)/g)
);
```

# --seed--

## --seed-contents--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
```

# --solutions--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```
