---
id: 58a25bcef9fc0f352b528e7c
title: Розуміння функції BCrypt
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

У наступних завданнях ви будете працювати з новим початковим проєктом, який відрізняється від попереднього. Ви можете знайти новий початковий проект на [Replit](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt)або скопіювати його з [GitHub](https://github.com/freeCodeCamp/boilerplate-bcrypt/).

Функція BCrypt відзначається своєю надійністю. Хеш - це, по суті, "відбиток" початкових даних, який завжди лишається унікальним. Така функція виконується шляхом введення початкових даних в алгоритм і виведення фіксованого результату довжини. Щоб ускладнити процес і зробити його безпечнішим, ви можете застосувати випадково згенерований модифікатор *salt* для хешу. Випадкова генерація хешу включає в себе додавання випадкових даних до початкових даних перед процесом хешування, що ускладнює крадіжку хешу.

Функція BCrypt завжди виглядає як код `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm`, що має структуру. Перший невеликий біт даних `$2a` визначає, який алгоритм хешу був використаний. Наступна частина `$13` визначає *cost*. Cost показує наскільки важко вичислити хеш. Цей елемент розміщений на логарифмічній шкалі 2^cost і визначає скільки разів дані проходять крізь алгоритм хешування. Наприклад, якщо cost дорівнює 10, ви можете перетворити 10 паролів за секунду на середньостатистичному комп'ютері, однак при значенні cost 15 - це займе 3 секунди за один результат... і, відповідно, при значенні 31, процес займе кілька днів, щоб отримати готовий хеш. Значення cost 12 вважається найбезпечнішим на сьогодні. Остання частина хешу `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` виглядає як один великий рядок чисел, періодів і букв, але насправді це дві окремі деталі. Перші 22 символи це згенерований модифікатор у вигляді простого тексту, решта - перетворений пароль!

# --instructions--

Щоб почати використовувати BCrypt, додайте його як пакет у код вашого проєкту і запускайте його за допомогою значення 'bcrypt' на вашому сервері.

Додайте весь ваш код для цих уроків в файл `server.js` між рядками коду, з якого ми почали. Не змінюйте і не видаляйте код, який ми додали для вас.

Підтвердіть свою сторінку, коли зрозумієте, що все працює коректно.

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
