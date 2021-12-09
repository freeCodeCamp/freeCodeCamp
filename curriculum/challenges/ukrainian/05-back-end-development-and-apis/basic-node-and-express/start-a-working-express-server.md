---
id: 587d7fb0367417b2b2512bee
title: Запуск робочого експрес-серверу
challengeType: 2
forumTopicId: 301519
dashedName: start-a-working-express-server
---

# --description--

У перших двох рядках файлу `myApp.js`, ви можете побачити, як легко створити об’єкт програми Express. Цей об’єкт має кілька методів, і ви багато із них вивчите за допомогою цих завдань. Одним із фундаментальних методів є `app.listen(port)`. Він повідомляє вашому серверу прослуховувати певний порт, переводячи його в робочий стан. З міркувань тестування нам потрібно, щоб програма працювала у фоновому режимі, тому ми для вас додали цей метод у файл `server.js`.

Давайте обслужимо наш перший рядок! В Express маршрути мають наступну структуру:`app.METHOD(PATH, HANDLER)`. METHOD - це метод http у нижньому регістрі. PATH - це відносний шлях на сервері (це може бути рядок або навіть регулярний вираз). HANDLER - це функція, яка викликає Express при узгодженні маршруту. Обробники приймають форму `function(req, res) {...}`, де req - об'єкт запиту, а res - об'єкт відповіді. Наприклад, обробник

```js
function(req, res) {
  res.send('Response String');
}
```

буде обслуговувати рядок 'Рядок відповіді'.

# --instructions--

Використовуйте метод `app.get()`, щоб обслужити рядок "Hello Express" для GET запитів, які відповідають шляху `/` (root). Переконайтеся, що ваш код працює, переглянувши журнали, а потім перегляньте результати у попередньому перегляді, якщо ви використовуєте Replit.

**Примітка:** Весь код для цих уроків слід додати між кількома рядками коду, з яких ми починали.

# --hints--

Ваш додаток має обслуговувати рядок "Hello Express"

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
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
