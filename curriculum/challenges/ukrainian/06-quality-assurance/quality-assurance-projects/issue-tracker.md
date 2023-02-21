---
id: 587d8249367417b2b2512c42
title: Відстеження проблем
challengeType: 4
forumTopicId: 301569
dashedName: issue-tracker
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://issue-tracker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://issue-tracker.freecodecamp.rocks/</a>. Робота над цим проєктом передбачає написання коду за допомогою одного з наступних методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-issuetracker" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення». За бажанням введіть посилання на початковий код проєкту в полі «Посилання на GitHub».

# --instructions--

-   Завершіть необхідні маршрути у `/routes/api.js`
-   Створіть усі функціональні тести у `tests/2_functional-tests.js`
-   Скопіюйте файл `sample.env` до `.env` та відповідно встановіть змінні
-   Щоб провести тести, розкоментуйте `NODE_ENV=test` у своєму файлі `.env`
-   Щоб запустити тести на консолі, використайте команду `npm run test`. Щоб відкрити консоль Replit, натисніть Ctrl+Shift+P (Cmd на Mac) та введіть «open shell»

Напишіть наступні тести в `tests/2_functional-tests.js`:

-   Створіть проблему з кожним полем: запит POST до `/api/issues/{project}`
-   Створіть проблему лише з необхідними полями: запит POST до `/api/issues/{project}`
-   Створіть проблему з відсутніми необхідними полями: запит POST до `/api/issues/{project}`
-   Перегляньте проблеми проєкту: запит GET до `/api/issues/{project}`
-   Перегляньте проблеми проєкту з одним фільтром: запит GET до `/api/issues/{project}`
-   Перегляньте проблеми проєкту з декількома фільтрами: запит GET до `/api/issues/{project}`
-   Оновіть одне поле проблеми: запит PUT до `/api/issues/{project}`
-   Оновіть декілька полів проблеми: запит PUT до `/api/issues/{project}`
-   Оновіть проблему з відсутнім `_id`: запит PUT до `/api/issues/{project}`
-   Оновіть проблему з неоновлювальними полями: запит PUT до `/api/issues/{project}`
-   Оновіть проблему з недійсним `_id`: запит PUT до `/api/issues/{project}`
-   Видаліть проблему: запит DELETE до `/api/issues/{project}`
-   Видаліть проблему з недійсним `_id`: запит DELETE до `/api/issues/{project}`
-   Видаліть проблему з відсутнім `_id`: запит DELETE до `/api/issues/{project}`

# --hints--

Ви можете надати власний проєкт, а не URL-адресу прикладу.

```js
(getUserInput) => {
  assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

Ви можете надіслати запит `POST` до `/api/issues/{projectname}` з даними форми, включно з обов'язковими полями `issue_title`, `issue_text`, `created_by` і додатковими `assigned_to` та `status_text`.

```js
async (getUserInput) => {
  try {
    let test_data = {
      issue_title: 'Faux Issue Title',
      issue_text: 'Functional Test - Required Fields Only',
      created_by: 'fCC'
    };
    const data = await $.post(
      getUserInput('url') + '/api/issues/fcc-project',
      test_data
    );
    assert.isObject(data);
    assert.nestedInclude(data, test_data);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Запит `POST` до `/api/issues/{projectname}` поверне створений об'єкт, та повинен містити всі введені поля. Вилучені необов'язкові поля будуть повернені як порожні рядки. Додатково включіть `created_on` (дата/час), `updated_on` (дата/час), `open` (булеве, значення за замовчуванням `true` для відкритого і `false` для закритого) та `_id`.

```js
async (getUserInput) => {
  try {
    let test_data = {
      issue_title: 'Faux Issue Title 2',
      issue_text: 'Functional Test - Every field filled in',
      created_by: 'fCC',
      assigned_to: 'Chai and Mocha'
    };
    const data = await $.post(
      getUserInput('url') + '/api/issues/fcc-project',
      test_data
    );
    assert.isObject(data);
    assert.nestedInclude(data, test_data);
    assert.property(data, 'created_on');
    assert.isNumber(Date.parse(data.created_on));
    assert.property(data, 'updated_on');
    assert.isNumber(Date.parse(data.updated_on));
    assert.property(data, 'open');
    assert.isBoolean(data.open);
    assert.isTrue(data.open);
    assert.property(data, '_id');
    assert.isNotEmpty(data._id);
    assert.property(data, 'status_text');
    assert.isEmpty(data.status_text);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Якщо ви надішлете запит `POST` до `/api/issues/{projectname}` без необхідних полів, повернеться помилка `{ error: 'required field(s) missing' }`

```js
async (getUserInput) => {
  try {
    let test_data = { created_by: 'fCC' };
    const data = await $.post(getUserInput('url') + '/api/issues/fcc-project', {
      created_by: 'fCC'
    });
    assert.isObject(data);
    assert.property(data, 'error');
    assert.equal(data.error, 'required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Ви можете надіслати запит `GET` до `/api/issues/{projectname}` для масиву проблем конкретного `projectname`, з усіма наявними полями кожної проблеми.

```js
async (getUserInput) => {
  try {
    let test_data = { issue_text: 'Get Issues Test', created_by: 'fCC' };
    const url =
      getUserInput('url') +
      '/api/issues/get_issues_test_' +
      Date.now().toString().substring(7);
    const data1 = await $.post(
      url,
      Object.assign(test_data, { issue_title: 'Faux Issue 1' })
    );
    assert.isObject(data1);
    const data2 = await $.post(
      url,
      Object.assign(test_data, { issue_title: 'Faux Issue 2' })
    );
    assert.isObject(data2);
    const data3 = await $.post(
      url,
      Object.assign(test_data, { issue_title: 'Faux Issue 3' })
    );
    assert.isObject(data3);
    const getIssues = await $.get(url);
    assert.isArray(getIssues);
    assert.lengthOf(getIssues, 3);
    let re = new RegExp('Faux Issue \\d');
    getIssues.forEach((issue) => {
      assert.property(issue, 'issue_title');
      assert.match(issue.issue_title, re);
      assert.property(issue, 'issue_text');
      assert.property(issue, 'created_by');
      assert.property(issue, 'assigned_to');
      assert.property(issue, 'status_text');
      assert.property(issue, 'open');
      assert.property(issue, 'created_on');
      assert.property(issue, 'updated_on');
      assert.property(issue, '_id');
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Ви можете надіслати запит `GET` до `/api/issues/{projectname}` та відфільтрувати запит, передавши будь-яке поле та значення як запит URL (тобто `/api/issues/{project}?open=false`). Ви можете одночасно передати одну чи більше пар поле/значення.

```js
async (getUserInput) => {
  try {
    let test_data = {
      issue_title: 'To be Filtered',
      issue_text: 'Filter Issues Test'
    };
    const url =
      getUserInput('url') +
      '/api/issues/get_issues_test_' +
      Date.now().toString().substring(7);
    const data1 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Bob' })
    );
    const data2 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Bob' })
    );
    const data3 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Eric' })
    );
    const data4 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Carol', assigned_to: 'Eric' })
    );
    const getSingle = await $.get(url + '?created_by=Alice');
    assert.isArray(getSingle);
    assert.lengthOf(getSingle, 3);
    const getMultiple = await $.get(url + '?created_by=Alice&assigned_to=Bob');
    assert.isArray(getMultiple);
    assert.lengthOf(getMultiple, 2);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Ви можете надіслати запит `PUT` до `/api/issues/{projectname}` із `_id` та одним чи більше оновлювальним полем. Якщо все успішно, поле `updated_on` оновиться та повернеться `{  result: 'successfully updated', '_id': _id }`.

```js
async (getUserInput) => {
  try {
    let initialData = {
      issue_title: 'Issue to be Updated',
      issue_text: 'Functional Test - Put target',
      created_by: 'fCC'
    };
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const itemToUpdate = await $.post(url, initialData);
    const updateSucccess = await $.ajax({
      url: url,
      type: 'PUT',
      data: { _id: itemToUpdate._id, issue_text: 'New Issue Text' }
    });
    assert.isObject(updateSucccess);
    assert.deepEqual(updateSucccess, {
      result: 'successfully updated',
      _id: itemToUpdate._id
    });
    const getUpdatedId = await $.get(url + '?_id=' + itemToUpdate._id);
    assert.isArray(getUpdatedId);
    assert.isObject(getUpdatedId[0]);
    assert.isAbove(
      Date.parse(getUpdatedId[0].updated_on),
      Date.parse(getUpdatedId[0].created_on)
    );
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Якщо надісланий запит `PUT` до `/api/issues/{projectname}` не містить `_id`, поверненим значенням буде `{ error: 'missing _id' }`.

```js
async (getUserInput) => {
  try {
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const badUpdate = await $.ajax({ url: url, type: 'PUT' });
    assert.isObject(badUpdate);
    assert.property(badUpdate, 'error');
    assert.equal(badUpdate.error, 'missing _id');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Якщо надісланий запит `PUT` `/api/issues/{projectname}` не містить оновлювальні поля, поверненим значенням буде `{ error: 'no update field(s) sent', '_id': _id }`. При іншій помилці поверненим значенням буде `{ error: 'could not update', '_id': _id }`.

```js
async (getUserInput) => {
  try {
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const badUpdate = await $.ajax({
      url: url,
      type: 'PUT',
      data: { _id: '5f665eb46e296f6b9b6a504d' }
    });
    assert.deepEqual(badUpdate, {
      error: 'no update field(s) sent',
      _id: '5f665eb46e296f6b9b6a504d'
    });
    const badIdUpdate = await $.ajax({
      url: url,
      type: 'PUT',
      data: { _id: '5f665eb46e296f6b9b6a504d', issue_text: 'New Issue Text' }
    });
    assert.deepEqual(badIdUpdate, {
      error: 'could not update',
      _id: '5f665eb46e296f6b9b6a504d'
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Ви можете надіслати запит `DELETE` до `/api/issues/{projectname}` із `_id`, щоб видалити проблему. Якщо `_id` не надіслано, поверненим значенням буде `{ error: 'missing _id' }`. Якщо все успішно, поверненим значенням буде `{ result: 'successfully deleted', '_id': _id }`. При помилці поверненим значенням буде `{ error: 'could not delete', '_id': _id }`.

```js
async (getUserInput) => {
  try {
    let initialData = {
      issue_title: 'Issue to be Deleted',
      issue_text: 'Functional Test - Delete target',
      created_by: 'fCC'
    };
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const itemToDelete = await $.post(url, initialData);
    assert.isObject(itemToDelete);
    const deleteSuccess = await $.ajax({
      url: url,
      type: 'DELETE',
      data: { _id: itemToDelete._id }
    });
    assert.isObject(deleteSuccess);
    assert.deepEqual(deleteSuccess, {
      result: 'successfully deleted',
      _id: itemToDelete._id
    });
    const noId = await $.ajax({ url: url, type: 'DELETE' });
    assert.isObject(noId);
    assert.deepEqual(noId, { error: 'missing _id' });
    const badIdDelete = await $.ajax({
      url: url,
      type: 'DELETE',
      data: { _id: '5f665eb46e296f6b9b6a504d', issue_text: 'New Issue Text' }
    });
    assert.isObject(badIdDelete);
    assert.deepEqual(badIdDelete, {
      error: 'could not delete',
      _id: '5f665eb46e296f6b9b6a504d'
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Усі 14 функціональних тестів завершено та успішно пройдено.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    assert.isAtLeast(getTests.length, 14, 'At least 14 tests passed');
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
