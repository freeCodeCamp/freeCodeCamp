---
id: 587d7fb5367417b2b2512c02
title: استخدم رمز Tilde لاستخدام أحدث نسخة patch من التبعية دائما
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

في التحدي الأخير، أخبرت npm أن يتضمن نسخة محددة فقط من الحزمة. هذه طريقة مفيدة لتجميد التبعية إذا كنت بحاجة إلى التأكد من أن أجزاء مختلفة من مشروعك تبقى متوافقة مع بعضها البعض. ولكن في معظم حالات الاستخدام، لا ترد أن تفوتك إصلاحات الأخطاء لأنها غالباً ما تتضمن التصحيحات الأمنية الهامة ومن الآمل أنها لا تتسبب لتخريب تطبيقك بذلك.

للسماح للتبعية npm للتحديث إلى أحدث إصدار PATCH، يمكنك أن تضيف رمز (`~`) في بداية الإصدار للتبعية. إليك مثال على كيفية السماح بالتحديثات لأي إصدار 1.3.x.

```json
"package": "~1.3.8"
```

# --instructions--

في ملف package.json، القاعدة الحالية لكيفية لترقية `@freecodecamp/example` بواسطة npm هي استخدام إصدار محدد (1.2.13). لكن الآن، تريد أن تسمح بأحدث إصدار 1.2.x.

استخدم رمز (`~`) لبادئة رقم إصدار `@freecodecamp/example` في تبعياتك (dependencies). ذلك يسمح ل npm بتحديثها إلى أي إصدار _patch_ جديد.

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

يجب أن تطابق `"@freecodecamp/example"` إصدارها `"~1.2.13"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\~1\.2\.13/,
        'Wrong version of "@freecodecamp/example". It should be ~1.2.13'
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
