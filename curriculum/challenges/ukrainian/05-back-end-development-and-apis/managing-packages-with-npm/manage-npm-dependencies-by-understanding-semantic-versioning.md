---
id: 587d7fb5367417b2b2512c01
title: Керування залежностями npm шляхом розуміння семантичної версії
challengeType: 2
forumTopicId: 301529
dashedName: manage-npm-dependencies-by-understanding-semantic-versioning
---

# --description--

Версії `Versions` пакетів npm у розділі залежностей вашого файлу package.json відповідають тому, що називається семантичним керуванням версій (SemVer), галузевим стандартом керування версій програмного забезпечення, спрямованим на спрощення керування залежностями. Бібліотеки, фреймворки чи інші інструменти, опубліковані на npm, повинні використовувати SemVer, щоб чітко повідомляти, що може змінитись у проєктах, якщо вони оновляться.

Знання SemVer може бути корисним при розробці програмного забезпечення, яке використовує зовнішні залежності (що ви майже завжди і робите). Одного дня ваше розуміння цих цифр захистить вас від випадкового внесення кардинальних змін у ваш проєкт без розуміння, чому речі, які працювали вчора, раптово не працюють сьогодні. Ось як працює керування семантичними версіями, згідно з інформацією на офіційному веб-сайті:

```json
"package": "MAJOR.MINOR.PATCH"
```

ОСНОВНА версія має збільшуватися, коли ви вносите несумісні зміни в API. ДРУГОРЯДНА версія має збільшуватися, коли ви додаєте функціональні можливості у зворотно сумісному порядку. Версія PATCH повинна збільшуватись, коли ви робите виправлення помилок зі зворотною сумісністю. Це означає, що ПАТЧІ - це виправлення помилок, а ДРУГОРЯДНІ версії додають нові функції, але жодна з них не порушує те, що функціонувало раніше. Нарешті, ОСНОВНІ версії додають зміни, не сумісні з попередніми версіями.

# --instructions--

У розділі залежностей вашого файлу package.json, змініть версію моменту `version`, щоб вона відповідала ОСНОВНІЙ версії 2, ДРУГОРЯДНІЙ версії 10 та версії ПАТЧА 2

# --hints--

"dependencies" повинні містити "moment"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'moment',
        '"dependencies" does not include "moment"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

версія "moment" повинна бути "2.10.2"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.equal(
        packJson.dependencies.moment,
        '2.10.2',
        'Wrong version of "moment". It should be 2.10.2'
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
