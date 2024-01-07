---
id: 587d7fb5367417b2b2512c04
title: إزالة حزمة (Package) من تبعياتك (Dependency)
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

لقد اختبرت الآن بعض الطرق الذي يمكنك بها إدارة التبعيات لمشروعك باستخدام قسم التبعيات في package.json. لقد قمت أيضا بإدراج حزم خارجية عن طريق إضافتها إلى الملف وأخبرت npm ما هي أنواع الإصدارات التي تريدها، باستخدام أحرف خاصة مثل tilde (~) أو caret (^).

ولكن ماذا لو أردت إزالة حزمة خارجية لم تعد بحاجة إليها؟ ربما قد خمنتها فعلًا، عليك فقط أن تزيل زوج key-value المقابل لتلك الحزمة من تبعياتك (dependencies).

تنطبق نفس الطريقة على إزالة الخانات الأخرى في package.json أيضا.

# --instructions--

أزل حزمة `@freecodecamp/example` من تبعياتك.

**ملاحظة:** تأكد من أن لديك العدد الصحيح من الفواصل بعد إزالتها.

# --hints--

يجب ألا تتضمن `"dependencies"` مقطع `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.notProperty(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" still includes "@freecodecamp/example"'
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
