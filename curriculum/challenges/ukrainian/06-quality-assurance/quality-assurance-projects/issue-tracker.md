---
id: 587d8249367417b2b2512c42
title: Система відстеження помилок
challengeType: 4
forumTopicId: 301569
dashedName: issue-tracker
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://issue-tracker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://issue-tracker.freecodecamp.rocks/</a>. Робота над цим проєктом передбачає написання коду з використанням одного з наступних метод:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-issuetracker" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для завершення проєкту, використайте вибраний вами розробник сайту. Переконайтеся, що зберегли усі файли з нашого репозиторію GitHub.

Коли ви завершили, переконайтеся, що ця демоверсія вашого проєкту розміщена у відкритому доступі. Потім введіть URL-адресу в поле `Solution Link`. При необхідності, також введіть посилання на джерело коду вашого проєкту у полі`GitHub Link`.

# --instructions--

-   Завершіть необхідні маршрути в `/routes/api.js`
-   Створіть усі функціональні тести в `tests/2_functional-tests.js`
-   Скопіюйте файл `sample.env` до `.env` та встановіть відповідні змінні
-   Щоб розпочати тест розкоментуйте `NODE_ENV=test` у вашому файлі `.env`
-   Щоб розпочати тести на консолі, використайте команду `npm run test`. Щоб відкрити консоль Replit, натисніть сполучення клавіш Ctrl+Shift+P (Cmd, якщо на Mac) та наберіть "open shell"

Напишіть наступні тести в `tests/2_functional-tests.js`:

-   Створіть запитання в кожному полі: запит POST на `/api/issues/{project}`
-   Створіть запитання тільки в необхідних полях: запит POST на `/api/issues/{project}`
-   Створіть запитання в пропущених необхідних полях: запит POST на `/api/issues/{project}`
-   Подивіться запитання проєкту: запит GET на `/api/issues/{project}`
-   Подивіться запитання проєкту з одним фільтром: запит GET на `/api/issues/{project}`
-   Подивіться запитання проєкту з декількома фільтрами: запит GET на `/api/issues/{project}`
-   Оновіть одне поле на запитанні: запит PUT на `/api/issues/{project}`
-   Оновіть декілька полів на запитанні: запит PUT на `/api/issues/{project}`
-   Оновіть запитання з пропущеним `_id`: запит PUT на `/api/issues/{project}`
-   Оновіть запитання з полями для оновлення: запит PUT на `/api/issues/{project}`
-   Оновіть запитання з недопустимим `_id`: запит PUT на `/api/issues/{project}`
-   Видаліть запитання: запит DELETE на `/api/issues/{project}`
-   Видаліть запитання з недопустимим `_id`: запит DELETE на `/api/issues/{project}`
-   Видаліть запитання з пропущеним `_id`: запит DELETE на `/api/issues/{project}`

# --hints--

Ви можете застосувати свій власний проєкт, а не URL-посилання прикладу.

```js
(getUserInput) => {
  assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

Ви можете надіслати запит `POST` на `/api/issues/{projectname}` з формою даних, яка містить необхідні поля `issue_title`, `issue_text`, `created_by` і при необхідності `assigned_to` та `status_text`.

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

Запит `POST` на `/api/issues/{projectname}` повертає створений об'єкт і повинен включати усі подані поля. Виключені поля будуть повертатися як порожні рядки. Додатково, включіть `created_on` (дата/час), `updated_on` (дата/час), `open` (boolean, `true` для відкритого - значення за змовчуванням, `false` для закритого) та `_id`.

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

Якщо ви відправите запит `POST` на `/api/issues/{projectname}` без необхідних полів, то буде помилка `{ error: 'required field(s) missing' }`

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

Ви можете надіслати запит `GET` на `/api/issues/{projectname}` для масиву усіх запитань для конкретного `projectname` з усіма цими полями для кожного запитання.

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

Ви можете надіслати запит `GET` на `/api/issues/{projectname}` та фільтрувати запит, також передавши будь-яке поле і значення як запит URL (наприклад, `/api/issues/{project}?open=false`). Ви також можете одночасно передати одне чи декілька полів/значень.

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

Ви можете надіслати запит `PUT` на `/api/issues/{projectname}` з `_id` та з одним чи більше полем для оновлення. Якщо все зроблено успішно, поле `updated_on` повинне оновитися і повернутися у вигляді `{  result: 'successfully updated', '_id': _id }`.

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

Коли запит `PUT` надіслати на `/api/issues/{projectname}` не включаючи `_id`, зворотне значення `{ error: 'missing _id' }`.

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

Коли запит `PUT` надіслати на `/api/issues/{projectname}` не включаючи оновлені поля, зворотне значення `{ error: 'no update field(s) sent', '_id': _id }`. При іншій помилці, зворотне значення буде `{ error: 'could not update', '_id': _id }`.

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

Ви можете надіслати запит `DELETE` на `/api/issues/{projectname}` з `_id`, щоб видалити помилку. Якщо не надіслано жодного `_id`, зворотне значення буде `{ error: 'missing _id' }`. Якщо успішно, зворотне значення - `{ result: 'successfully deleted', '_id': _id }`. Якщо невдало, зворотне значення - `{ error: 'could not delete', '_id': _id }`.

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
