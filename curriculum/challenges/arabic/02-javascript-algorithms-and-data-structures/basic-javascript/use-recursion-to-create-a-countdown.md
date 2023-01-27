---
id: 5cd9a70215d3c4e65518328f
title: استخدم التكرار لإنشاء العد التنازلي (Use Recursion to Create a Countdown)
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

في <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion" target="_blank" rel="noopener noreferrer nofollow">تحدي سابق</a>، تعلمت كيفية استخدام التكرار لاستبدال حلقة `for`. الآن، أنطر إلى وظيفة أكثر تعقيدا تنتج قائمة من الأعداد الصحيحة المتتالية بدءاً من `1` إلى الرقم الذي تم تمريره إلى الوظيفة.

كما ذكر في التحدي السابق، سيكون هناك <dfn>base case (حالة أساسية)</dfn>. الحالة أساسية تخبر الوظيفة المكررة في أي حالة لا تحتاج إلى استدعاء نفسها مرة أخرى. وهذه حالة بسيطة تكون فيها القيمة المنتجة معروفة فعلًا. سيكون هناك أيضًا <dfn>recursive call (استدعاء متكرر)</dfn> الذي ينفذ الوظيفة الأصلية بحجج مختلفة. إذا كانت الوظيفة مكتوبة بشكل صحيح، سيتم الوصول إلى الحالة أساسية في النهاية.

على سبيل المثال، قل أنك تريد كتابة وظيفة مكررة تُرجع قائمة تحتوي على الأعداد من `1` إلى `n`. هذه الوظيفة ستحتاج إلى قَبُول حجة هو `n`، الذي يمثل الرقم النهائي. ثم ستحتاج إلى استدعاء نفسها مع قيم أصغر تدريجياً من `n` حتى تصل إلى `1`. يمكنك كتابة الوظيفة على النحو التالي:

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

سيتم عرض القيمة `[1, 2, 3, 4, 5]` في الوحدة التحكم.

في البداية، يبدو هذا غير بديهي لأن قيمة `n` *تنخفض*، لكن القيم في القائمة النهائية *تزداد*. ويحدث هذا لأن الزيادة تحدث في نهاية، بعد تفعيل المتكررة. فعند النقطة التي يتم فيها إضافة `n` إلى القائمة، يكون قد تم تقييم `countup(n - 1)` فعلًا وتم إعادة `[1, 2, ..., n - 1]`.

# --instructions--

لقد عرفنا وظيفة تسمى `countdown` مع وسيط (parameter) واحدة (`n`). يجب أن تستخدم الوظيفة التكرار (recursion) لتنتج قائمة (array) تحتوي على الأعداد من `n` إلى `1` استنادًا إلى وسيط (parameter) مسمى `n`. إذا تم تفعيل الوظيفة بعدد أقل من 1، يجب أن تنتج قائمة فارغة. على سبيل المثال، استدعاء هذه الوظيفة مع `n = 5` يجب أن تنتج القائمة التالية `[5, 4, 3, 2, 1]`. يجب أن تستخدم الوظيفة التكرار بواسطة تفعيل نفسها، ويجب ألا تستخدم الحلقات من أي نوع.

# --hints--

يجب أن ينتج `countdown(-1)` قائمة فارغة.

```js
assert.isEmpty(countdown(-1));
```

يجب أن ينتج `countdown(10)` قائمة `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

يجب أن ينتج `countdown(5)` قائمة `[5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

لا ينبغي أن يعتمد الكود الخاص بك على أي نوع من الحلَقات سواء (`for`, أو `while`, أو وظائف ذو مستوي عالى التجريد مثل `forEach`, أو `map`, أو `filter`, أو `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

يجب عليك استخدام التكرار لحل هذه المشكلة.

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

لا ينبغي استخدام المتغيرات الشاملة (Global variables) للتخزين المؤقت للقائمة (array).

```js
countdown(1)
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
