---
id: 587d824a367417b2b2512c43
title: Особиста бібліотека
challengeType: 4
forumTopicId: 301571
dashedName: personal-library
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://personal-library.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://personal-library.freecodecamp.rocks/</a>. Робота над цим проєктом бути включати написання коду одним із таких методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для завершення проєкту використайте вибраний вами розробник сайтів. Не забудьте включити всі файли із нашого репо-сервера GitHub.

Коли ви завершили, переконайтеся, ця демоверсія вашого проєкту розміщена у відкритому місці. Потім введіть URL-адресу у поле `Solution Link`. Додатково, також вкажіть посилання на вхідний код вашого проєкту у полі `GitHub Link`.

# --instructions--

1.  Додайте рядок підключення MongoDB до `.env` без дужок як `DB` Приклад: `DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2.  У вашому файлі `.env` встановіть`NODE_ENV` на `test` без дужок
3.  Вам потрібно створити усі маршрути в межах `routes/api.js`
4.  Ви створите усі функціональні тести в `tests/2_functional-tests.js`

# --hints--

Ви можете застосувати свій власний проєкт, а не URL-посилання прикладу.

```js
(getUserInput) => {
  assert(
    !/.*\/personal-library\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Ви можете відправити запит <b>POST</b> на `/api/books` з `title` як частину форми даних, щоб додати книгу.  Зворотною відповіддю буде об'єкт з `title` та унікальним `_id` як ключі доступу.  Якщо `title` не включений у запит, то відповідь повинна бути рядком `missing required field title`.

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

Ви можете надіслати запит <b>GET</b> до `/api/books` та отримати відповідь JSON у вигляді усіх книг. Відповідь JSON буде масивом об'єктів з кожним об'єктом (книгою), який складається з `title`, `_id` та `commentcount`.

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

Ви можете надіслати запит <b>GET</b> до `/api/books/{_id}`, щоб отримати один об'єкт в книзі, який містить властивості `title`, `_id` та `comments` (пустий масив, якщо немає коментарів). Якщо не знайдено книги, поверніться в рядок `no book exists`.

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

Ви можете надіслати запит <b>POST</b>, який містить `comment`, як частину корпусу даних до `/api/books/{_id}`, щоб додати коментар до книжки. Отримана відповідь - об'єкт книги, аналогічний до <b>GET</b> `/api/books/{_id}`, запиту в попередньому тесті. Якщо `comment` не включено в запит, поверніться до рядка `missing required field comment`. Якщо не знайдено книги, поверніться до рядка `no book exists`.

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

Ви можете надіслати запит <b>DELETE</b> до `/api/books/{_id}`, щоб видалити книги з колекції. Отримана відповідь - рядок `delete successful`, якщо видалено успішно. Якщо книги не знайдено, поверніться до рядка `no book exists`.

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

Ви можете надіслати запит <b>DELETE</b> до `/api/books`, щоб видалити усі книги з інформаційної бази. Отримана відповідь - рядок `'complete delete successful`, якщо видалено успішно.

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

Усі 10 необхідних функціональних тестів завершено й успішно здано.

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
