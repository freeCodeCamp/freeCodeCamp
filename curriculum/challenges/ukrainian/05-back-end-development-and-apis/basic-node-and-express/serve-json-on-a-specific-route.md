---
id: 587d7fb1367417b2b2512bf1
title: Обслуговування JSON на певному маршруті
challengeType: 2
forumTopicId: 301517
dashedName: serve-json-on-a-specific-route
---

# --description--

У той час як сервер HTML обслуговує HTML, API обслуговує дані. <dfn>REST</dfn> (REpresentational State Transfer) API дозволяє обмінюватися даними простим способом, без необхідності, щоб клієнти знали будь-які деталі про сервер. Клієнту лише потрібно знати, де знаходиться ресурс (URL-адреса), та дію, яку він хоче на ньому виконати (дієслово). Дієслово GET використовується, щоб вибрати деяку інформацію, нічого не змінюючи. У наші часи JSON є найкращим форматом даних для переміщення інформації через інтернет. Простіше кажучи, JSON – це зручний спосіб представити об’єкт JavaScript у вигляді рядка, щоб його легко передати.

Створімо простий API, створивши маршрут, який відповідає із JSON на шляху `/json`. Це можна зробити, як зазвичай, за допомогою методу `app.get()`. Всередині обробника маршруту використайте метод `res.json()`, передавши об'єкт як аргумент. Цей метод закриває цикл «запит-відповідь», повертаючи дані. По суті, він перетворює дійсний об’єкт JavaScript у рядок, потім встановлює відповідні заголовки, аби повідомити браузеру, що ви використовуєте JSON, і надсилає дані назад. Дійсний об'єкт має звичайну структуру `{key: data}`. `data` можуть бути числом, рядком, вкладеним об'єктом або масивом. `data` також можуть бути змінною або результатом виклику функції; в цьому випадку вони будуть оцінені перед перетворенням у рядок.

# --instructions--

Обслужіть об'єкт `{"message": "Hello json"}` у форматі JSON як відповідь на запити GET до маршруту `/json`. Потім вкажіть свій браузер на `your-app-url/json`, та ви повинні побачити повідомлення на екрані.

# --hints--

Кінцева точка `/json` повинна обслуговувати об'єкт JSON `{"message": "Hello json"}`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/json').then(
    (data) => {
      assert.equal(
        data.message,
        'Hello json',
        "The '/json' endpoint does not serve the right data"
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
