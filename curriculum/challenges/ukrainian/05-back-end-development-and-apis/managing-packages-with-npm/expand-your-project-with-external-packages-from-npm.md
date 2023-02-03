---
id: 587d7fb4367417b2b2512c00
title: Розширте свій проєкт зовнішніми пакетами із npm
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

Однією з найважливіших причин для використання менеджера пакетів є потужне управління залежностями. Npm автоматично встановлює всі необхідні елементи під час встановлення проєкту на новому комп'ютері і позбавляє вас необхідності встановлювати все вручну. Але як npm може точно знати, чого потребує ваш проєкт? Знайдіть розділ `dependencies` у своєму файлі package.json.

У цьому розділі зберігаються пакети, необхідні для вашого проєкту, в наступному форматі:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

Додайте версію `1.1.0` пакета `@freecodecamp/example` до поля `dependencies` свого файлу `package.json`.

**Примітка:** `@freecodecamp/example` є фальшивим пакетом, який використовується як навчальний інструмент.

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

Версією `"@freecodecamp/example"` повинна бути `"1.1.0"`.

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
