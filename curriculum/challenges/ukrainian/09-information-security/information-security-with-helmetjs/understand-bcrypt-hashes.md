---
id: 58a25bcef9fc0f352b528e7c
title: Розуміння функції BCrypt
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

У наступних завданнях ви будете працювати з новим початковим проєктом, який відрізняється від попереднього. You can find the new starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or clone it from <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Функція BCrypt відзначається своєю надійністю. Хеш - це, по суті, "відбиток" початкових даних, який завжди лишається унікальним. Така функція виконується шляхом введення початкових даних в алгоритм і виведення фіксованого результату довжини. Щоб ускладнити процес і зробити його безпечнішим, ви можете застосувати випадково згенерований модифікатор *salt* для хешу. Випадкова генерація хешу включає в себе додавання випадкових даних до початкових даних перед процесом хешування, що ускладнює крадіжку хешу.

BCrypt hashes will always look like `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` which does have a structure. Перший невеликий біт даних `$2a` визначає, який алгоритм хешу був використаний. Наступна частина `$13` визначає *cost*. Cost показує наскільки важко вичислити хеш. Цей елемент розміщений на логарифмічній шкалі 2^cost і визначає скільки разів дані проходять крізь алгоритм хешування. For example, at a cost of 10 you are able to hash 10 passwords a second on an average computer, however at a cost of 15 it takes 3 seconds per hash... and to take it further, at a cost of 31 it would take multiple days to complete a hash. Значення cost 12 вважається найбезпечнішим на сьогодні. Остання частина хешу `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` виглядає як один великий рядок чисел, періодів і букв, але насправді це дві окремі деталі. Перші 22 символи це згенерований модифікатор у вигляді простого тексту, решта - перетворений пароль!

# --instructions--

Add all your code for these lessons in the `server.js` file between the code we have started you off with. Do not change or delete the code we have added for you.

BCrypt has already been added as a dependency, so require it as `bcrypt` in your server.

Відправте свою сторінку коли впевнились, що все правильно.

# --hints--

BCrypt повинен бути пакетом в коді.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Потрібно правильно запустити BCrypt.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /bcrypt.*=.*require.*('|")bcrypt('|")/gi,
        'You should correctly require and instantiate socket.io as io.'
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
