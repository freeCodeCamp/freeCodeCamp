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

In the dependencies section of your `package.json` file, change the version of `@freecodecamp/example` to match MAJOR version 1, MINOR version 2 and PATCH version 13

# --hints--

`"dependencies"` should include `"@freecodecamp/example"`.

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

`"@freecodecamp/example"` version should be `"1.2.13"`.

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
