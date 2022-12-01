---
id: 587d7fb5367417b2b2512c01
title: Керуйте залежностями npm, розуміючи семантичне версіонування
challengeType: 2
forumTopicId: 301529
dashedName: manage-npm-dependencies-by-understanding-semantic-versioning
---

# --description--

`Versions` пакетів npm у розділі залежностей вашого файлу package.json відповідають тому, що називається семантичним версіонуванням (SemVer), галузевим стандартом керування версій програмного забезпечення, спрямованим на спрощення керування залежностями. Бібліотеки, фреймворки чи інші інструменти, опубліковані на npm, повинні використовувати SemVer, щоб чітко повідомляти, що може змінитись у проєктах, якщо вони оновляться.

Знання SemVer може бути корисним при розробці програмного забезпечення, яке використовує зовнішні залежності (що ви майже завжди і робите). Одного дня знання цих цифр захистить вас від випадкового внесення кардинальних змін у свій проєкт без розуміння, чому речі, які працювали вчора, раптово не працюють сьогодні. Ось як працює семантичне версіонування згідно з інформацією на офіційному вебсайті:

```json
"package": "MAJOR.MINOR.PATCH"
```

Версія MAJOR має збільшуватися, коли ви вносите несумісні зміни в API. Версія MINOR має збільшуватися, коли ви додаєте функціональності у зворотно-сумісному порядку. Версія PATCH повинна збільшуватись, коли ви виконуєте виправлення помилок зі зворотною сумісністю. Це означає, що PATCH – це виправлення помилок, а MINOR додають нові функції, але жодна з них не порушує те, що функціонувало раніше. Зрештою, версії MAJOR додають зміни, не сумісні з попередніми версіями.

# --instructions--

У секції залежностей свого файлу `package.json` змініть версію `@freecodecamp/example`, щоб вона відповідала версії MAJOR 1, версії MINOR 2 та версії PATCH 13

# --hints--

`"dependencies"` повинні містити `"@freecodecamp/example"`.

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

Версією `"@freecodecamp/example"` повинна бути `"1.2.13"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.equal(
        packJson.dependencies["@freecodecamp/example"],
        '1.2.13',
        'Wrong version of "@freecodecamp/example". It should be 1.2.13'
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
