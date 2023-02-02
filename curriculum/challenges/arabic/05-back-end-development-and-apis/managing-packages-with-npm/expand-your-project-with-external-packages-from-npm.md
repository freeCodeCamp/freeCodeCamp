---
id: 587d7fb4367417b2b2512c00
title: توسيع مشروعك مع الحزم الخارجية من npm
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

إحدى الأسباب الأكبر لاستخدام مدير الحزم هي إدارة تبعياتك القوية. بدلاً من أن تتأكد يدوياً أنك حصلت على جميع التبعيات كلما أعددت مشروع على جهاز كمبيوتر جديد، npm يقوم بتثبيت كل شيء لك تلقائياً. ولكن كيف يعرف npm احتياجات مشروعك بالضبط؟ تعرَّف إلى قسم التبعيات `dependencies` من ملف package.json الخاص بك.

في هذا القسم، يخزن اسم الحزم الذي يتطلبها مشروعك باستخدام التنسيق التالي:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

Add version `1.1.0` of the `@freecodecamp/example` package to the `dependencies` field of your `package.json` file.

**ملاحظة:** إن `@freecodecamp/example` حزمة زائفة تستخدم كأداة للتعلم.

# --hints--

`"dependencies"` يجب أن تتضمن `"@freecodecamp/example"`.

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

يجب أن يكون إصدار `"@freecodecamp/example"` بقيمة `"1.1.0"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^[\^\~]?1\.1\.0/,
        'Wrong version of "@freecodecamp/example" installed. It should be 1.1.0'
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
