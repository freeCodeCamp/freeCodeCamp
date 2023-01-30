---
id: 587d7fb5367417b2b2512c03
title: استخدم رمز Caret لاستخدام أحدث نسخة ثانوي من التبعية
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

شبيهة بالطريقة التي تعلمنا بها عن tilde في التحدي الأخير وكيف يسمح لـ npm بتثبيت أحدث PATCH للاعتماد، يسمح رمز caret (`^`) إلى npm تثبيت التحديثات المستقبلية أيضًا. إن الفرق سيسمح رمز caret لكل من التحديثات من MINOR و PATCH.

يجب أن يكون إصدار `@freecodecamp/example` الخاص بك الحالي من "~1.2.13" الذي يسمح npm بتثبيت أحدث إصدار 1.2.x. إذا كنت ستستخدم caret (^) كبادئة إصدار بدلاً من ذلك، سيسمح لـ npm بالتحديث إلى أي إصدار x.x.1.

```json
"package": "^1.3.8"
```

وهذا سيسمح بالتحديث إلى إي نسخة 1.x.x من الحزمة.

# --instructions--

استخدم رمز (`^`) لبادئة رَقَم إصدار `@freecodecamp/example` في تبعياتك (dependencies). ذلك يسمح ل npm بتحديثها إلى أي إصدار جديد نوع MINOR.

**ملاحظة:** لا تغيير أرقام الإصدار نفسها.

# --hints--

يجب أن تتضمن `"dependencies"` مقطع `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" does not include "@freecodecamp/example"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

يجب أن تطابق `"@freecodecamp/example"` إصدارها `"^1.x.x"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\^1\./,
        'Wrong version of "@freecodecamp/example". It should be ^1.2.13'
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
