---
id: 58a25bcef9fc0f352b528e7c
title: Розуміння хешів BCrypt
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

У наступних завданнях ви будете працювати з новим початковим проєктом, який відрізняється від попереднього. Ви можете знайти новий початковий проєкт на <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> або клонувати його з <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Хеші BCrypt відзначаються своєю надійністю. Хеш – це «відбиток» початкових даних, який завжди унікальний. Така функція виконується шляхом введення початкових даних в алгоритм і виведення фіксованого результату довжини. Щоб ускладнити процес і зробити його безпечнішим, можна *посолити* свій хеш. Соління хешу – це додавання випадкових даних до початкових даних перед процесом хешування, що ускладнює злам хешу.

Хеші BCrypt завжди виглядатимуть як `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm`, що має структуру. Перша частинка даних `$2a` визначає, який тип хеш-алгоритму був використаний. Наступна частина `$13` визначає *вартість*. Вартість показує, скільки потрібно сили для вичислення хешу. Вона розміщена в логарифмічній шкалі 2^вартість і визначає, скільки разів дані пропускаються через алгоритм хешування. Наприклад, якщо вартість дорівнює 10, ви можете хешувати 10 паролів за секунду на середньостатистичному комп'ютері, однак при вартості 15 це займе 3 секунди для одного хешування... і, відповідно, при вартості 31, процес займе декілька днів, щоб отримати готовий хеш. Сьогодні значення вартості 12 вважається найбезпечнішим. Остання частина хешу `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` виглядає як один великий рядок чисел, крапок і букв, але насправді це дві окремі частини інформації. Перші 22 символи є сіллю сухого тексту, а решта – хешований пароль!

# --instructions--

Додайте весь свій код з цих уроків у файл `server.js` між рядками коду, з якого ми почали. Не змінюйте та не видаляйте код, який ми додали для вас.

BCrypt вже додано як залежність, тому вимагайте його як `bcrypt` на своєму сервері.

Відправте свою сторінку коли впевнились, що все правильно.

# --hints--

BCrypt повинен бути залежністю.

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

BCrypt потрібно правильно вимагати.

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
