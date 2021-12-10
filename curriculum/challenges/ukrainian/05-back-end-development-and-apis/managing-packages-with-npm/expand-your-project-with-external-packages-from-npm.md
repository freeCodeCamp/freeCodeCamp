---
id: 587d7fb4367417b2b2512c00
title: Розпакуйте ваш проєкт із зовнішніми пакетами через npm
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

Однією з найважливіших підстав для використання менеджера пакетів є їх потужне управління залежностями. Npm автоматично встановлює всі необхідні елементи під час встановлення проекту на новому комп'ютер і позбавляє вас необхідності встановлювати все кожного разу вручну. Але як npm може отримати інформацію, чого потребує ваш проєкт? Знайдіть розділ `dependencies` у вашому файлі package.json.

У цьому розділі зберігаються пакети, необхідні для вашого проєкту, в наступному форматі:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

Додайте версію пакету "2.14.0" у поле `dependencies` вашого файлу package.json.

**Примітка:** Момент - це зручна бібліотека для дій з часом і днями.

# --hints--

"взаємозв'язки" повинні включати "момент"

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

версія "момент" повинна бути "2.14.0"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^[\^\~]?2\.14\.0/,
        'Wrong version of "moment" installed. It should be 2.14.0'
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
