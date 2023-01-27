---
id: 587d824a367417b2b2512c43
title: Особиста бібліотека
challengeType: 4
forumTopicId: 301571
dashedName: personal-library
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://personal-library.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://personal-library.freecodecamp.rocks/</a>. Робота над цим проєктом передбачає написання коду за допомогою одного з наступних методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення». За бажанням введіть посилання на початковий код проєкту в полі «Посилання на GitHub».

# --instructions--

1.  Додайте свій рядок з'єднання MongoDB до `.env` без лапок як `DB` Приклад: `DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2.  Встановіть `NODE_ENV` на `test` у своєму файлі `.env`, без лапок
3.  Ви повинні створити усі маршрути в межах `routes/api.js`
4.  Ви створюватимете усі функціональні тести в `tests/2_functional-tests.js`

# --hints--

Ви можете надати власний проєкт, а не URL-адресу прикладу.

```js
(getUserInput) => {
  assert(
    !/.*\/personal-library\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Ви можете надіслати запит <b>POST</b> до `/api/books` із `title` як частиною даних форми, щоб додати книжку.  Поверненою відповіддю буде об'єкт із `title` та унікальним `_id` як ключі.  Якщо `title` немає у запиті, поверненою відповіддю повинен бути рядок `missing required field title`.

```js
async (getUserInput) => {
  try {
    let data1 = await $.post(getUserInput('url') + '/api/books', {
      title: 'Faux Book 1'
    });
    assert.isObject(data1);
    assert.property(data1, 'title');
    assert.equal(data1.title, 'Faux Book 1');
    assert.property(data1, '_id');
    let data2 = await $.post(getUserInput('url') + '/api/books');
    assert.isString(data2);
    assert.equal(data2, 'missing required field title');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Ви можете надіслати запит <b>GET</b> до `/api/books` та отримати відповідь JSON із представленням усіх книжок. Відповіддю JSON буде масив об'єктів, де кожен об'єкт (книжка) містить властивості `title`, `_id` та `commentcount`.

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let a = $.post(url, { title: 'Faux Book A' });
    let b = $.post(url, { title: 'Faux Book B' });
    let c = $.post(url, { title: 'Faux Book C' });
    await Promise.all([a, b, c]).then(async () => {
      let data = await $.get(url);
      assert.isArray(data);
      assert.isAtLeast(data.length, 3);
      data.forEach((book) => {
        assert.isObject(book);
        assert.property(book, 'title');
        assert.isString(book.title);
        assert.property(book, '_id');
        assert.property(book, 'commentcount');
        assert.isNumber(book.commentcount);
      });
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Ви можете надіслати запит <b>GET</b> до `/api/books/{_id}`, щоб отримати книжку, яка містить властивості `title`, `_id` та масив `comments` (порожній масив, якщо коментарі відсутні). Якщо книжки не знайдено, поверніть рядок `no book exists`.

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let noBook = await $.get(url + '/5f665eb46e296f6b9b6a504d');
    assert.isString(noBook);
    assert.equal(noBook, 'no book exists');
    let sampleBook = await $.post(url, { title: 'Faux Book Alpha' });
    assert.isObject(sampleBook);
    let bookId = sampleBook._id;
    let bookQuery = await $.get(url + '/' + bookId);
    assert.isObject(bookQuery);
    assert.property(bookQuery, 'title');
    assert.equal(bookQuery.title, 'Faux Book Alpha');
    assert.property(bookQuery, 'comments');
    assert.isArray(bookQuery.comments);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Ви можете надіслати запит <b>POST</b>, який містить `comment` як дані форми до `/api/books/{_id}`, щоб додати коментар до книжки. Поверненою відповіддю будуть книжки, схоже до запиту <b>GET</b> `/api/books/{_id}` раніше. Якщо `comment` немає у запиті, поверніть рядок `missing required field comment`. Якщо книжки не знайдено, поверніть рядок `no book exists`.

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let commentTarget = await $.post(url, { title: 'Notable Book' });
    assert.isObject(commentTarget);
    let bookId = commentTarget._id;
    let bookCom1 = await $.post(url + '/' + bookId, {
      comment: 'This book is fab!'
    });
    let bookCom2 = await $.post(url + '/' + bookId, {
      comment: 'I did not care for it'
    });
    assert.isObject(bookCom2);
    assert.property(bookCom2, '_id');
    assert.property(bookCom2, 'title');
    assert.property(bookCom2, 'comments');
    assert.lengthOf(bookCom2.comments, 2);
    bookCom2.comments.forEach((comment) => {
      assert.isString(comment);
      assert.oneOf(comment, ['This book is fab!', 'I did not care for it']);
    });
    let commentErr = await $.post(url + '/' + bookId);
    assert.isString(commentErr);
    assert.equal(commentErr, 'missing required field comment');
    let failingComment = await $.post(url + '/5f665eb46e296f6b9b6a504d', {
      comment: 'Never Seen Comment'
    });
    assert.isString(failingComment);
    assert.equal(failingComment, 'no book exists');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Ви можете надіслати запит <b>DELETE</b> до `/api/books/{_id}`, щоб видалити книжку з колекції. Поверненою відповіддю буде рядок `delete successful`, якщо все успішно. Якщо книжки не знайдено, поверніть рядок `no book exists`.

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let deleteTarget = await $.post(url, { title: 'Deletable Book' });
    assert.isObject(deleteTarget);
    let bookId = deleteTarget._id;
    let doDelete = await $.ajax({ url: url + '/' + bookId, type: 'DELETE' });
    assert.isString(doDelete);
    assert.equal(doDelete, 'delete successful');
    let failingDelete = await $.ajax({
      url: url + '/5f665eb46e296f6b9b6a504d',
      type: 'DELETE'
    });
    assert.isString(failingDelete);
    assert.equal(failingDelete, 'no book exists');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Ви можете надіслати запит <b>DELETE</b> до `/api/books`, щоб видалити всі книжки у базі даних. Поверненою відповіддю буде рядок `complete delete successful`, якщо все успішно.

```js
async (getUserInput) => {
  try {
    const deleteAll = await $.ajax({
      url: getUserInput('url') + '/api/books',
      type: 'DELETE'
    });
    assert.isString(deleteAll);
    assert.equal(deleteAll, 'complete delete successful');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Усі 10 функціональних тестів завершено та успішно пройдено.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    assert.isAtLeast(getTests.length, 10, 'At least 10 tests passed');
    getTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
