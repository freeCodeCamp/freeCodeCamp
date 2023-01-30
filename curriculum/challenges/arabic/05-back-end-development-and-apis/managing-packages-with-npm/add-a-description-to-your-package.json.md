---
id: 587d7fb3367417b2b2512bfc
title: إضافة وصف (Description) إلى package.json
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

إن الجزء التالي من ملف package.json الجيد يكون خانة `description`؛ حيث يوجد وصف قصير ولكن زاخر بالمعلومات حول مشروعك.

إذا خطط في يوم ما أن تنشر حزمة إلى npm، فهذا هو المقطع النصي الذي يشرح فكرتك للمستخدمون عندما يقررون تثبيت حزمتك أو لا. بالإضافة هذا ليس الاستخدام الوحيد لذلك الوصف. إنه طريقة رائعة لتلخيص وظيفة المشروع. وأيضا في أي مشروع Node.js فهو مهما بنفس القدر لمساعدة المطورين الآخرين، أو المشرفين في المستقبل، أو حتى لفهمك الخاص للمشروع بسرعة.

بغض النظر عن ما تخطط لمشروعك، فإن الوصف موصى به بكل تأكيد. إليك مثال:

```json
"description": "A project that does something awesome",
```

# --instructions--

أضف خانة الوصف `description` إلى ملف package.json لمشروعك.

**ملاحظة:** تذكر أن تستخدم علامات الاقتباس المزدوجة لأسماء الخانات، (") والفواصل (,) للفصل ما بينهم.

# --hints--

يجب أن يحتوي package.json على هوية "description" صحيحة

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
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
