---
id: 587d7fb3367417b2b2512bfc
title: Додати опис до вашого package.json
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

Наступна частина хорошого файлу package.json - це `description` поля, якому належить короткий, але інформативний опис вашого проєкту.

If some day you plan to publish a package to npm, this is the string that should sell your idea to the user when they decide whether to install your package or not. Однак, це не єдиний випадок використання для опису, це чудовий спосіб узагальнити те, що робить проект. Це також важливо в будь-якому проєкті Node.js, щоб допомогти іншим розробникам, майбутнім творцям чи навіть самому собі швидко зрозуміти проєкт.

Незалежно від того, що ви плануєте для свого проєкту, опис є безумовно рекомендованим. Ось приклад:

```json
"description": "A project that does something awesome",
```

# --instructions--

Додайте `description` до файлу package.json вашого проєкту.

**Примітка:** Пам'ятайте: використовувати подвійні лапки для полів (") і коми (,) для розділення полів.

# --hints--

package.json повинен мати дійсний ключ "опис"

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
