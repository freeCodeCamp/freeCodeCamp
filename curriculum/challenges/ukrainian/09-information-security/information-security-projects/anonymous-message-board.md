---
id: 587d824a367417b2b2512c45
title: Анонімна дошка повідомлень
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://anonymous-message-board.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://anonymous-message-board.freecodecamp.rocks/</a>.

Робота над цим проєктом бути включати написання кода одним із таких методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-messageboard/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для завершення проєкту використайте вибраний вами розробник сайтів. Не забудьте включити всі файли із нашого репозиторію GitHub.

Коли ви завершили, переконайтеся, що ця демоверсія вашого проекту розміщена у відкритому доступі. Потім введіть URL-адресу проекту у поле `Solution Link`. За бажанням також введіть посилання на вихідний код проєкту у полі `GitHub Link`.

# --instructions--

1.  Встановити `NODE_ENV` на перевірку без лапок, коли вона буде готова до написання тестів і БД до рядка підключення бази даних (в `.env`)
2.  Рекомендується створювати контролери/обробники і проводити сам процес в `routes/api.js`
3.  Ви додасте будь-які функції безпеки на `server.js`

Створюйте усі функціональні тести в `tests/2_functional-tests.js`:

-   Створення нової теми: POST запит на `/api/threads/{board}`
-   Перегляд 10 останніх тем з 3 відповідями на кожну: GET запит на `/api/threads/{board}`
-   Видалення теми з неправильним паролем: DELETE запит на `/api/threads/{board}` з неприпустимим `delete_password`
-   Видалення теми з правильним паролем: DELETE запит на `/api/threads/{board}` з припустимим `delete_password`
-   Звітувати про тему: PUT запит на `/api/threads/{board}`
-   Створення нової відповіді: POST запит на `/api/replies/{board}`
-   Перегляд однієї теми з усіма відповідями до неї: GET запит на `/api/replies/{board}`
-   Видалення відповіді з неправильним паролем: DELETE запит на `/api/replies/{board}` з неприпустимим `delete_password`
-   Видалення відповіді з правильним паролем: DELETE запит на `/api/replies/{board}` з припустимим `delete_password`
-   Звітувати про відповідь: PUT запит на `/api/replies/{board}`

# --hints--

Ви можете вказати свій власний проєкт, а не приклад URL.

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Дозволити вашому сайту тільки завантажувати його в iFrame на власних сторінках.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

Не дозволяти передумову DNS для роботи.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

Дозволити вашому сайту надсилати реферал лише для ваших власних сторінок.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

Ви можете надіслати POST запит на сторінку `/api/threads/{board}` з даними форми, включаючи `text` і `delete_password`. Збереження запису до бази даних буде мати принаймі поля `_id`, `text`, `created_on`(date & time), `bumped_on`(date & time, починається так само, як `created_on`), `reported` (boolean), `delete_password`, & `replies` (array).

```js
async (getUserInput) => {
  const date = new Date();
  const text = `fcc_test_${date}`;
  const deletePassword = 'delete_me';
  const data = { text, delete_password: deletePassword };
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(url + '/api/threads/fcc_test');
    const parsed = await checkData.json();
    try {
      assert.equal(parsed[0].text, text);
      assert.isNotNull(parsed[0]._id);
      assert.equal(new Date(parsed[0].created_on).toDateString(), date.toDateString());
      assert.equal(parsed[0].bumped_on, parsed[0].created_on);
      assert.isArray(parsed[0].replies);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Ви можете надіслати POST запит на сторінку `/api/replies/{board}` з даними форми, включаючи `text` і `delete_password`, & `thread_id`. Це оновить дату ` bumped_on` до дати коментаря. У масиві `replies` теми буде збережено об'єкт як мінімум з властивостями `_id`, `text`, `created_on`, `delete_password`, & `reported`.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const body = await fetch(url + '/api/threads/fcc_test');
  const thread = await body.json();

  const date = new Date();
  const text = `fcc_test_reply_${date}`;
  const delete_password = 'delete_me';
  const thread_id = thread[0]._id;
  const replyCount = thread[0].replies.length;

  const data = { text, delete_password, thread_id };
  const res = await fetch(url + '/api/replies/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(`${url}/api/replies/fcc_test?thread_id=${thread_id}`);
    const parsed = await checkData.json();
    try {
      assert.equal(parsed.replies.length, replyCount + 1);
      assert.equal(parsed.replies[0].text, text);
      assert.equal(parsed._id, thread_id);
      assert.equal(parsed.bumped_on, parsed.replies[0].created_on);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Ви можете відправити GET запит на `/api/threads/{board}`. Буде повернено масив з 10 останніми темами на сторінці лише з 3 останніми відповідями для кожної теми. Поля `reported` та `delete_password` не будуть відправлятися клієнту.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test');

  if (res.ok) {
    const threads = await res.json();
    try {
      assert.equal(res.status, 200);
      assert.isAtMost(threads.length, 10);
      for (let i = 0; i < threads.length; i++) {
        assert.containsAllKeys(threads[i], ["_id", "text", "created_on", "bumped_on", "replies"]);
        assert.isAtMost(threads[i].replies.length, 3);
        assert.notExists(threads[i].delete_password);
        assert.notExists(threads[i].reported);
        for (let j = 0; j < threads[i].replies.length; j++) {
          assert.notExists(threads[i].replies[j].delete_password);
          assert.notExists(threads[i].replies[j].reported);
        }
      }
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Ви можете надіслати запит GET до `/api/replies/{board}?thread_id={thread_id}`. Повернено буде всю тему з усіма відповідями в ній, а також всі поля з попереднього тесту не буде враховано.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  let res = await fetch(url + '/api/threads/fcc_test');
  const threads = await res.json();
  const thread_id = threads[0]._id;
  res = await fetch(`${url}/api/replies/fcc_test?thread_id=${thread_id}`);

  if (res.ok) {
    const thread = await res.json();
    try {
      assert.equal(res.status, 200);
      assert.isObject(thread);
      assert.containsAllKeys(thread, ["_id", "text", "created_on", "bumped_on", "replies"]);
      assert.isArray(thread.replies);
      assert.notExists(thread.delete_password);
      assert.notExists(thread.reported);
      for (let i = 0; i < thread.replies.length; i++) {
        assert.notExists(thread.replies[i].delete_password);
        assert.notExists(thread.replies[i].reported);
      }
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Ви можете надіслати DELETE запит на `/api/threads/{board}` та передати `thread_id` & `delete_password` для видалення теми. Повернено буде рядок `incorrect password` або `success`.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  let res = await fetch(url + '/api/threads/fcc_test');
  const threads = await res.json();
  const thread_id = threads[0]._id;
  let data = { thread_id, delete_password: "wrong_password" };
  const res_invalid = await fetch(url + '/api/threads/fcc_test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  data = { thread_id, delete_password: "delete_me" };
  res = await fetch(url + '/api/threads/fcc_test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const deleted = await res.text();
    const not_deleted = await res_invalid.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(deleted, "success");
      assert.equal(not_deleted, "incorrect password");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Ви можете надіслати DELETE запит на `/api/replies/{board}` і передати `thread_id`, `reply_id`, & `delete_password`. Повернено буде рядок `incorrect password` або `success`. У разі успіху текст `reply_id` буде змінено на `[deleted]`.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  const thread_data = {
    text: "fcc_test_thread",
    delete_password: "delete_me",
  };
  await fetch(`${url}/api/threads/fcc_test`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(thread_data)
  });
  let res = await fetch(`${url}/api/threads/fcc_test`);
  let threads = await res.json();
  const thread_id = threads[0]._id;

  const reply_data = { thread_id, text: "fcc_test_reply", delete_password: "delete_me" };
  await fetch(`${url}/api/replies/fcc_test`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reply_data)
  });
  res = await fetch(`${url}/api/threads/fcc_test`);
  threads = await res.json();
  const reply_id = threads[0].replies[0]._id;

  const data = { thread_id, reply_id, delete_password: "delete_me" };
  res = await fetch(url + '/api/replies/fcc_test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const deleted = await res.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(deleted, "success");
      res = await fetch(`${url}/api/replies/fcc_test?thread_id=${thread_id}`);
      const thread = await res.json();
      assert.equal(thread._id, thread_id);
      assert.equal(thread.replies[0]._id, reply_id);
      assert.equal(thread.replies[0].text, "[deleted]");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Ви можете надіслати PUT запит на `/api/threads/{board}` і передати далі `thread_id`. Буде повернено рядок `reported`. Значення `reported` в `thread_id` буде змінено на `true`.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  let res = await fetch(`${url}/api/threads/fcc_test`);
  const threads = await res.json();
  const report_id = threads[0]._id;
  const data = { report_id };

  res = await fetch(`${url}/api/threads/fcc_test`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const reported = await res.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(reported, "reported");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Ви можете надіслати PUT запит на `/api/replies/{board}` і передати далі `thread_id` & `reply_id`. Буде повернено рядок `reported`. Значення `reported` в `reply_id` буде змінено на `true`.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  let res = await fetch(`${url}/api/threads/fcc_test`);
  const threads = await res.json();
  const thread_id = threads[0]._id;
  const reply_id = threads[0].replies[0]._id;
  const data = { thread_id, reply_id };

  res = await fetch(`${url}/api/replies/fcc_test`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const reported = await res.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(reported, "reported");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Усі 10 функціональних тести завершено і здано.

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 10);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
    assert.isAtLeast(test.assertions.length, 1);
  });
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
