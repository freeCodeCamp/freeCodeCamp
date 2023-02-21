---
id: 587d7fb4367417b2b2512bfe
title: Додайте ліцензію до свого package.json
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

Поле `license` інформує користувачів про дії, які вони можуть виконувати з вашим проєктом.

До поширених ліцензій для проєктів з відкритим кодом належать MIT та BSD. Ліцензійна інформація не являється обов'язковою і закони про авторські права в більшості країн за замовчуванням дадуть право власності на те, що ви створюєте. Проте краще чітко вказати дії, які користувачам дозволено і не дозволено виконувати. Нижче наведено приклад, як виглядає поле ліцензії:

```json
"license": "MIT",
```

# --instructions--

Заповніть поле `license` у файлу package.json свого проєкту як вважаєте за потрібне.

# --hints--

package.json повинен мати дійсний ключ «license»

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.license, '"license" is missing');
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
