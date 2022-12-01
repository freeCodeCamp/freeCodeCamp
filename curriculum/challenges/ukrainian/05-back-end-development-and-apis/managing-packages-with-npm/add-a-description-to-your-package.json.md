---
id: 587d7fb3367417b2b2512bfc
title: Додайте опис до свого package.json
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

Наступною частиною файлу package.json є поле `description`, куди належить короткий, але інформативний опис вашого проєкту.

Якщо ви плануєте колись опублікувати пакет на npm, то цей рядок повинен продати вашу ідею користувачам, коли вони вирішуватимуть встановлювати ваш пакет чи ні. Однак він існує не лише для опису, але й для того, щоб узагальнити те, що робить проєкт. Як і в будь-якому проєкті Node.js, важливо допомагати іншим розробникам, майбутнім творцям чи навіть самому собі швидко зрозуміти проєкт.

Незалежно від того, що ви плануєте для свого проєкту, опис є безумовно рекомендованим. Ось приклад:

```json
"description": "A project that does something awesome",
```

# --instructions--

Додайте `description` до файлу package.json свого проєкту.

**Примітка:** не забудьте використовувати подвійні лапки для полів (") і коми для розділення полів (,).

# --hints--

package.json повинен мати дійсний ключ «descriprion»

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
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
