---
id: 587d7fb0367417b2b2512bee
title: بدء سيرفر Express مُفعل
challengeType: 2
forumTopicId: 301519
dashedName: start-a-working-express-server
---

# --description--

في السطر الأول من الملف `myApp.js`، يمكنك أن ترى مدى سهولة إنشاء كائن تطبيق Express. هذا الكائن لديه العديد من الطرق، وسوف تتعلم الكثير منها في هذه التحديات. إحدى الطرق الأساسية هي `app.listen(port)`. إنه يخبر سيرفرك أن يستمع إلى منفذ (port) معين، وأن يضعه في حالة تشغيل. لأسباب الاختبار، نحن بحاجة إلى أن يكون التطبيق قيد التشغيل في الخلفية لذلك أضفنا لك هذه الطريقة في ملف `server.js`.

هيا نمدد المقطع النصي الأول! في Express، تأخذ المسارات البنية التالية: `app.METHOD(PATH, HANDLER)`. إن METHOD طريقة http مكتوبة بحروف صغيرة. إن PATH المنفذ نسبي في السيرفر (يمكن أن يكون مقطع نصي أو حتى عبارة (expression) عادية). إن HANDLER وظيفة معالجة ينفذها Express عند مطابقة ال route. تكتب تلك الوظائف المعالجة مثل `function(req, res) {...}`، حيث req هو كائن الطلب، و res هو كائن الاستجابة. على سبيل المثال المعالج

```js
function(req, res) {
  res.send('Response String');
}
```

سوف يمدد المقطع النصي 'Response String'.

# --instructions--

استخدم طريقة `app.get()` لتمديد المقطع "Hello Express" إلى طلبات GET المطابقة للمسار `/` (منفذ المصدر). أنظر إلى السجلات لتتأكد من أن الكود يعمل، ثم شاهد النتائج في علامة تبويب preview إذا كنت تستخدم Replit.

**ملاحظة:** يجب إضافة كل الكود لهذه الدروس بين سطور الكود التي بدأنا بها.

# --hints--

يجب أن يخدم تطبيقك المقطع النصي 'Hello Express'

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
