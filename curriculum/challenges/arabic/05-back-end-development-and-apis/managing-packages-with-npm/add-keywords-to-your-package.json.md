---
id: 587d7fb4367417b2b2512bfd
title: إضافة المصطلحات (keywords) إلى package.json
challengeType: 2
forumTopicId: 301526
dashedName: add-keywords-to-your-package-json
---

# --description--

يمكنك الإضافة في خانة `keywords` وصف لمشروعك باستخدام مصطلحات مرتبطة. إليك مثال:

```json
"keywords": [ "descriptive", "related", "words" ],
```

كما ترون، هذه الخانة منظمة مثل قائمة من النصوص المزدوجة الاقتباس.

# --instructions--

أضف قائمة من النصوص المقطعية المناسبة إلى خانة `keywords` في ملف package.json الخاص بمشروعك.

وينبغي أن تكون إحدى المصطلحات "freecodecamp".

# --hints--

يجب أن يحتوي package.json على هوية "keywords" صحيحة

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.keywords, '"keywords" is missing');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

يجب أن تكون خانة "keywords" قائمة

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.isArray(packJson.keywords, '"keywords" is not an array');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

يجب أن تحتوي "keywords" على "freecodecamp"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.include(
        packJson.keywords,
        'freecodecamp',
        '"keywords" does not include "freecodecamp"'
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
