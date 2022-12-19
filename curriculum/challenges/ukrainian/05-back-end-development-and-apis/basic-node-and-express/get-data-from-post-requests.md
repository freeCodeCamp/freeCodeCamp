---
id: 587d7fb2367417b2b2512bf8
title: Отримання даних із запитів POST
challengeType: 2
forumTopicId: 301511
dashedName: get-data-from-post-requests
---

# --description--

Встановіть обробник POST на шляху `/name`. Це той самий шлях, що і раніше. Ми підготували форму на головній сторінці html. Вона надсилатиме такі ж дані, як і у вправі 10 (рядок запиту). Якщо body-parser налаштований правильно, ви повинні знайти параметри в об’єкті `req.body`. Гляньте на звичайний приклад з бібліотеки:

<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&#x26;bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote>

Надайте відповідь з тим же об’єктом JSON, що й раніше: `{name: 'firstname lastname'}`. Перевірте, чи ваша кінцева точка працює з використанням html-форми, яку ми надали на головній сторінці додатку.

Важливо: є декілька інших способів http, окрім GET та POST. І за конвенцією існує відповідність між дієсловом http та операцією, яку ви будете виконувати на сервері. Стандартне мапування наступне:

POST (іноді PUT): створити новий ресурс, використовуючи інформацію, що надсилається з запитом,

GET: прочитати наявний ресурс, не змінюючи його,

PUT або PATCH (іноді POST): оновити ресурс за допомогою відправлених даних,

DELETE => видалити ресурс.

Існують й інші методи, які використовуються для узгодження зв'язку з сервером. За винятком GET, всі інші перераховані вище методи можуть мати корисне навантаження (тобто дані на вміст запиту). Проміжне програмне забезпечення body-parser також працює з цими методами.

# --hints--

Тест 1: ваша кінцева точка API повинна співпадати з правильним іменем

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/name', { first: 'Mick', last: 'Jagger' }).then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "POST /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Тест 2: ваша кінцева точка API повинна співпадати з правильним іменем

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/name', {
    first: 'Keith',
    last: 'Richards'
  }).then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "POST /name" route does not behave as expected'
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
