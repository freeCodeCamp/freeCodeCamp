---
id: 587d7fb4367417b2b2512bfe
title: إضافة ترخيص (License) إلى package.json
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

إن خانة `license` المكان الذي تقوم فيه بإبلاغ المستخدمين بما يسمح لهم بفعله بمشروعك.

وتشمل بعض التراخيص الشائعة للمشاريع المفتوحة المصدر (open source) ترخيص معهد ماساتشوستس للتكنولوجيا (MIT) وبرنامج بي اس دي (BSD). معلومات الترخيص غير مطلوبة، وقوانين حقوق التأليف والنشر (copyright laws) في معظم البلدان ستعطيك ملكية لما تنشئه بشكل افتراضي. ولكن يستحسن دائما أن نذكر صراحة ما يمكن للمستخدمين القيام به وما لا يمكنهم القيام به. إليك مثال لخانة الترخيص:

```json
"license": "MIT",
```

# --instructions--

املأ خانة `license` في ملف package.json لمشروعك بما تجده مناسبا.

# --hints--

يجب أن يحتوي package.json على هوية "license" صحيحة

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.license, '"license" is missing');
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
