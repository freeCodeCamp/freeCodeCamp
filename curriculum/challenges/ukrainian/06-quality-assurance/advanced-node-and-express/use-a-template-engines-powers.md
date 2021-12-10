---
id: 5895f70bf9fc0f352b528e64
title: Використовуйте можливості шаблонного рушія
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

Одна з головних переваг використання шаблонного рушія – це можливість передавати змінні з сервера в файл шаблону перед його візуалізацією в HTML.

У вашому файлі Pug ви можете використовувати змінну, посилаючись на ім'я змінної як `#{variable_name}` в рядку з іншим текстом в елементі або використовуючи знак рівності в елементі без пробілу, наприклад, `p=variable_name`, що присвоює значення змінної тексту елемента p.

Ми рекомендуємо вивчити синтаксис і структуру Pug [тут](https://github.com/pugjs/pug) у README GitHub. Файл Pug націлений на використання прогалин і вкладок для зображення гніздових елементів і скорочення обсягу коду, необхідного для створення красивого сайту.

Коли йдеться про наш файл pug «index.pug», включений у ваш проєкт, ми використовували змінні *title* і *message*.

Щоб передати їх з нашого сервера, вам потрібно буде додати об'єкт як другий аргумент у ваш *res.render* зі змінними та їх значеннями. Наприклад, передайте цьому об'єкту установку змінних для індексного перегляду: `{title: 'Hello', message: 'Please login'}`

Це має мати наступний вигляд: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});` Тепер оновіть свою сторінку. Під час перегляду ви повинні побачити ці значення у потрібному місці, як зазначено у файлі index.pug!

Якщо вам вдалося, запустіть сторінку. Якщо ви зіткнулися з помилками, можете перевірити завершений до цього етапу проєкт [тут](https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871).

# --hints--

Файл Pug повинен правильно відображати змінні.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-variable("|')>Please login/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
