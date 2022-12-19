---
id: 587d7fb4367417b2b2512bfd
title: Додайте ключові слова до свого package.json
challengeType: 2
forumTopicId: 301526
dashedName: add-keywords-to-your-package-json
---

# --description--

У полі `keywords` можна описати свій проєкт, використовуючи відповідні ключові слова. Ось приклад:

```json
"keywords": [ "descriptive", "related", "words" ],
```

Як бачите, це поле структуровано як масив подвійних цитованих рядків.

# --instructions--

Додайте масив відповідних рядків до поля `keywords` у файлі package.json свого проєкту.

Одним з ключових слів має бути «freecodecamp».

# --hints--

package.json повинен мати дійсний ключ «keywords»

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

Поле «keywords» повинне бути масивом

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

«keywords» повинні містити «freecodecamp»

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
