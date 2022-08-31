---
id: 587d824f367417b2b2512c5c
title: Імітувати дії з використанням Headless Browser
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

Нагадуємо, що цей проєкт створюється на основі наступного стартового проєкту на <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонований з <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

У наступних завданнях ви зможете імітувати взаємодію людини зі сторінкою за допомогою браузера без графічного інтерфейсу.

Headless browsers - це веб-браузери без GUI (графічного інтерфейсу). Вони можуть візуалізувати та інтерпретувати HTML, CSS та JavaScript так само і звичайний браузер, що робить їх надзвичайно корисними для тестування веб-сторінок.

Для вирішення наступних завдань ви будете використовувати Zombie.js - це легкий браузер без графічного інтерфейсу, який не покладається на встановлення додаткових бінарних файлів. Ця функція робить його придатним для використання в обмежених середовищах, таких як Replit. Але є ще багато інших потужніших опцій браузера без графічного інтерфейсу.

Mocha дозволяє вам запустити певний код перед виконанням будь-якого реального тесту. Це може бути корисним для таких дій, як додавання записів до бази даних, які будуть використовуватися в решті тестів.

У headless браузері перед запуском тестів вам потрібно **відвідати** сторінку, яку ви тестуватимете.

Хук `suiteSetup` виконується лише один раз, на початку тестового набору.

Існує кілька інших типів хуків, які можуть виконувати код перед кожним тестом, після кожного тесту або в кінці набору тестів. Для більш детальної інформації перегляньте документацію Mocha.

# --instructions--

У межах `test/2_functional-tests.js` одразу після оголошення `Browser` додайте URL-адресу свого проєкту до властивості `site` змінної:

```js
Browser.site = 'https://boilerplate-mochachai.your-username.repl.co'; // Your URL here
```

Потім на кореневому рівні `'Functional Tests with Zombie.js'`, створіть екземпляр нового об'єкта `Browser` з наступним кодом:

```js
const browser = new Browser();
```

І використовуйте хук `suiteSetup`, щоб направити `browser` до маршруту `/` за наступним кодом:

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

Необхідно пройти всі тести.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
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
