---
id: 587d7fb1367417b2b2512bf1
title: Передавання JSON за певним маршрутом
challengeType: 2
forumTopicId: 301517
dashedName: serve-json-on-a-specific-route
---

# --description--

У той час як HTML сервер передає HTML, API передає дані. <dfn>REST</dfn> (REpresentational State Transfer) API дозволяє обмінюватися даними простим способом, без необхідності, щоб клієнти знали будь-які деталі про сервер. Клієнту лише потрібно знати, де знаходиться ресурс (URL-адреса), та дію, яку він хоче на ньому виконати (дієслово). Дієслово GET використовується, коли ви отримуєте деяку інформацію, нічого не змінюючи. У наші часи JSON є найкращим форматом даних для переміщення інформації через інтернет. Простіше кажучи, JSON - це зручний спосіб представити об’єкт JavaScript у вигляді рядка, тому його можна легко передати.

Створімо простий API, створивши маршрут, який відповідає JSON на шляху `/json`. Ви можете це зробити, як зазвичай, за допомогою метода `app.get()`. Усередині обробника маршруту використовуйте метод `res.json()`, передаючи об'єкт як аргумент. Це метод закриває цикл запит-відповідь, повертаючи дані. По суті, він перетворює дійсний об’єкт JavaScript object у рядок, потім встановлює відповідні заголовки, щоб повідомити браузеру, що ви використовуєте JSON, і надсилає дані назад. Допустимий об'єкт має звичайну структуру `{key: data}`. `data` може бути числом, рядком, вкладеним об'єктом або масивом. `data` також може бути змінною або результатом виклику функції, в цьому випадку вони будуть оцінені перед перетворенням у рядок.

# --instructions--

Передайте об'єкт `{"message": "Hello json"}` у форматі JSON як відповідь на GET-запити до маршруту `/json`. Потім вказуючи вашому браузері `your-app-url/json`, ви повинні побачити повідомлення на екрані.

# --hints--

Кінцева точка `/json` має використовувати json-об'єкт `{"message": "Hello json"}`

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
