---
id: 587d7b85367417b2b2512b38
title: استخدام مشغل التعيين بدلاً من مشغل المساواة (Catch Use of Assignment Operator Instead of Equality Operator)
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

البرامج المتفرعة، أي تلك الذي تقوم بأشياء مختلفة إذا تم الوفاء بشروط معينة، تعتمد على بيانات `if`, و `else if`, و `else` في JavaScript. يأخذ الشرط أحيانًا شكل اختبار ما إذا كانت النتيجة مساوية لقيمة.

هذا المنطق ينطق (باللغة الإنجليزية، على الأقل) كـ "... if x equals y, then" الذي يمكن ترجمته حرفية إلى كود باستخدام `=` أو مشغل التعيين. هذا يؤدي إلى جعل برنامجك يعمل بشكل غير متوقع.

كما تم تغطيته في التحديات السابقة، يقوم مشغل التعيين (`=`) في JavaScript بإسناد قيمة إلى اسم متغير. و يقوم المشغلون `==` و `===` بالتحقق من المساواة (الثلاثية `===` تتحقق من المساواة الصارمة بمعنى أن كل من القيمة والنوع يطبقان).

الكود أدناه يعين `x` ليكون 2، الذي يقيّم إلى `true`. تقريبا كل قيمة بنفسها في JavaScript تقيّم إلى `true`، باستثناء ما يعرف بقيم falsy أو "كاذبة": `false`, و `0`, و `""` (مقطع فارغ), و `NaN`, و `undefined`, و `null`.

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

في هذا المثال، الكود داخل `if` سيتم تشغيله لأي قيمة بقدار `y`، إلا إذا كان `y` أصلا كاذب (falsy). أما `else` التي تتوقع أن تعمل هنا, لن تعمل في الواقع.

# --instructions--

قم بإصلاح الشرط حتى يقوم البرنامج بتشغيل الفرع الصحيح، ويتم تعيين القيمة المناسبة إلى النتيجة `result`.

# --hints--

يجب أن يصلح الكود الخاص بك الشرط حتى يتحقق من المساواة، بدلاً من استخدام التعيين.

```js
assert(result == 'Not equal!');
```

يجب أن يستخدم الشرط إما `==` أو `===` لاختبار المساواة.

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
