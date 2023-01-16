---
id: 5a8b073d06fa14fcfde687aa
title: Трекер вправ
challengeType: 4
forumTopicId: 301505
dashedName: exercise-tracker
---

# --description--

Створіть повний пакет додатку JavaScript, який функціонально схожий до <a href="https://exercise-tracker.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://exercise-tracker.freecodecamp.rocks</a>. Робота над цим проєктом передбачає написання коду за допомогою одного з наступних методів:

-   Клонуйте <a href="https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/" target="_blank" rel="noopener noreferrer nofollow">цей репозиторій GitHub</a> та виконайте свій проєкт локально.
-   Використайте <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-exercisetracker" target="_blank" rel="noopener noreferrer nofollow">наш стартовий проєкт Replit</a> для виконання свого проєкту.
-   Для виконання проєкту використайте конструктор сайту на власний вибір. Переконайтеся, що приєднали усі файли з нашого репозиторію GitHub.

Якщо ви використовуєте Replit, виконайте наступні кроки для налаштування проєкту:

-   Почніть з імпорту проєкту на Replit.
-   Потім ви побачите вікно `.replit`.
-   Оберіть `Use run command` та натисніть кнопку `Done`.

Після завершення переконайтеся, що демоверсія проєкту розміщена у відкритому доступі. Потім введіть URL-адресу проєкту в полі «Посилання на рішення». За бажанням введіть посилання на початковий код проєкту в полі «Посилання на GitHub».

# --instructions--

Ваші відповіді повинні мати наступну структуру.

Вправа:

```js
{
  username: "fcc_test",
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}
```

Користувач:

```js
{
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}
```

Дані:

```js
{
  username: "fcc_test",
  count: 1,
  _id: "5fb5853f734231456ccb3b05",
  log: [{
    description: "test",
    duration: 60,
    date: "Mon Jan 01 1990",
  }]
}
```

**Підказка:** щоб отримати очікуваний результат властивості `date`, можна використати метод `toDateString` від `Date` API.

# --hints--

Ви повинні надати власний проєкт, а не URL-адресу прикладу.

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(
    !/.*\/exercise-tracker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Ви можете зробити запит `POST` до `/api/users` із даними форми `username`, щоб створити нового користувача.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substring(0, 29)
  });
  assert.isTrue(res.ok);
  if(!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  };
};
```

Відповіддю від `POST /api/users` із даними форми `username` буде об'єкт з властивостями `username` та `_id`.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substring(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    assert.exists(_id);
    assert.exists(username);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Ви можете зробити запит `GET` до `/api/users`, щоб отримати список всіх користувачів.

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users');
  assert.isTrue(res.ok);
  if(!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  };
};
```

Запит `GET` до `/api/users` повертає масив.

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users');
  if(res.ok){
    const users = await res.json();
    assert.isArray(users);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

Кожен елемент у масиві, який повернувся з `GET /api/users`, є літералом об'єкта з `username` та `_id` користувача.

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users');
  if(res.ok){
    const users = await res.json();
    const user = users[0];
    assert.exists(user);
    assert.exists(user.username);
    assert.exists(user._id);
    assert.isString(user.username);
    assert.isString(user._id);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

Ви можете виконати запит `POST` до `/api/users/:_id/exercises` із даними форми `description`, `duration` та додатково `date`. Якщо дата не вказана, буде використовуватись поточна дата.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substring(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: 'Mon Jan 01 1990'
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}&date=1990-01-01`
    });
  assert.isTrue(addRes.ok);
  if(!addRes.ok) {
    throw new Error(`${addRes.status} ${addRes.statusText}`)
  };
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Відповіддю від `POST /api/users/:_id/exercises` буде об'єкт-користувач з доданими полями вправ.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substring(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: 'Mon Jan 01 1990'
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}&date=1990-01-01`
    });
    if (addRes.ok) {
      const actual = await addRes.json();
      assert.deepEqual(actual, expected);
      assert.isString(actual.description);
      assert.isNumber(actual.duration);
      assert.isString(actual.date);
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Ви можете зробити запит `GET` до `/api/users/:_id/logs`, щоб отримати всі вправи будь-якого користувача.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substring(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if (addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
    assert.isTrue(logRes.ok);
    if(!logRes.ok) {
      throw new Error(`${logRes.status} ${logRes.statusText}`)
    };
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Запит до вправ користувача `GET /api/users/:_id/logs` повертає об'єкта-користувача разом з властивістю `count`, яка представляє кількість вправ цього користувача.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substring(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if (addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if (logRes.ok) {
        const { count } = await logRes.json();
        assert(count);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Запит `GET` до `/api/users/:_id/logs` повертає об'єкта-користувача з масивом `log`, де наявні всі вправи.

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=fcc_test_${Date.now()}`.substring(0, 29)
  })
  if(res.ok){
    const {_id, username} = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok){
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok) {
        const {log} = await logRes.json();
        assert.isArray(log);
        assert.equal(1, log.length);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`)
  };
};
```

Кожен елемент у масиві `log`, який повернувся з `GET /api/users/:_id/logs`, є об'єктом, який повинен мати властивості `description` `duration` та `date`.

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + `/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=fcc_test_${Date.now()}`.substring(0, 29)
  });
  if(res.ok) {
    const {_id, username} = await res.json();
     const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok) {
        const {log} = await logRes.json();
        const exercise = log[0];
        assert.exists(exercise);
        assert.exists(exercise.description);
        assert.exists(exercise.duration);
        assert.exists(exercise.date);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      };
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`)
  };
};
```

Властивість `description` будь-якого об'єкту в масиві `log`, що повернувся з `GET /api/users/:_id/logs`, повинна бути рядком.

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=fcc_test_${Date.now()}`.substring(0,29)
  });
  if(res.ok) {
    const {_id, username} = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok){
        const {log} = await logRes.json();
        const exercise = log[0];
        assert.isString(exercise.description);
        assert.equal(exercise.description, expected.description);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

Властивість `duration` будь-якого об'єкту в масиві `log`, що повернувся з `GET /api/users/:_id/logs`, повинна бути числом.

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=fcc_test_${Date.now()}`.substring(0,29)
  });
  if(res.ok) {
    const {_id, username} = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok){
        const {log} = await logRes.json();
        const exercise = log[0];
        assert.isNumber(exercise.duration);
        assert.equal(exercise.duration, expected.duration);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

Властивість `date` будь-якого об'єкту в масиві `log`, що повернувся з `GET /api/users/:_id/logs`, повинна бути рядком. Використайте формат `dateString` від `Date` API.

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=fcc_test_${Date.now()}`.substring(0,29)
  });
  if(res.ok) {
    const {_id, username} = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok){
        const {log} = await logRes.json();
        const exercise = log[0];
        assert.isString(exercise.date);
        assert.equal(exercise.date, expected.date);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

Ви можете додати параметри `from`, `to` та `limit` до запиту `GET /api/users/:_id/logs`, щоб отримати дані будь-якого користувача. `from` та `to` є датами у форматі `yyyy-mm-dd`. `limit` – ціле число інформації, яку потрібно надіслати назад.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substring(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addExerciseRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}&date=1990-01-01`
    });
    const addExerciseTwoRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}&date=1990-01-03`
    });
    if (addExerciseRes.ok && addExerciseTwoRes.ok) {
      const logRes = await fetch(
        url + `/api/users/${_id}/logs?from=1989-12-31&to=1990-01-04`
      );
      if (logRes.ok) {
        const { log } = await logRes.json();
        assert.isArray(log);
        assert.equal(2, log.length);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
      const limitRes = await fetch(
        url + `/api/users/${_id}/logs?limit=1`
      );
      if (limitRes.ok) {
        const { log } = await limitRes.json();
        assert.isArray(log);
        assert.equal(1, log.length);
      } else {
        throw new Error(`${limitRes.status} ${limitRes.statusText}`);
      }
      const filterDateBeforeLimitRes = await fetch(
        url + `/api/users/${_id}/logs?from=1990-01-02&to=1990-01-04&limit=1`
      );
      if (filterDateBeforeLimitRes.ok) {
        const { log } = await filterDateBeforeLimitRes.json();
        assert.isArray(log);
        assert.equal(1, log.length);
      } else {
        throw new Error(`${filterDateBeforeLimitRes.status} ${filterDateBeforeLimitRes.statusText}`);
      }
    } else {
      throw new Error(`${res.status} ${res.statusText}`);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
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
