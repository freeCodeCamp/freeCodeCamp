---
id: 587d7fb4367417b2b2512bfe
title: Додайте ліцензію до вашого package.json
challengeType: 2
forumTopicId: 301523
dashedName: add-a-license-to-your-package-json
---

# --description--

Поле `license` дозволяє інформувати користувачів, які дії вони можуть виконувати з вашим проектом.

Деякі загальні ліцензії для проектів з відкритим кодом містять MIT та BSD. Ліцензійна інформація не являється обов'язковою і закони про авторські права в більшості країн дадуть вам право власності на те, що ви створюєте за замовчуванням. Проте завжди рекомендується чітко вказувати дії, які користувачам дозволено і не дозволено виконувати. Нижче наведено приклад, як виглядає поле ліцензії:

```json
"license": "MIT",
```

# --instructions--

Заповніть поле `license` для файлу package.json вашого проєкту, як вважаєте за потрібне.

# --hints--

package.json повинен містити допустимий ключ ліцензії

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
