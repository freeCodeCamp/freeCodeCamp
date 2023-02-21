---
id: 5a8b073d06fa14fcfde687aa
title: Übungs-Tracker
challengeType: 4
forumTopicId: 301505
dashedName: exercise-tracker
---

# --description--

Erstelle eine vollständige JavaScript-Anwendung, die eine ähnliche Funktionalität wie <a href="https://exercise-tracker.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://exercise-tracker.freecodecamp.rocks</a> aufweist. Bei der Arbeit an diesem Projekt musst du deinen Code mit einer der folgenden Methoden schreiben:

-   Klone <a href="https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/" target="_blank" rel="noopener noreferrer nofollow">dieses GitHub Repo</a> und schließe dein Projekt lokal ab.
-   Benutze <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-exercisetracker" target="_blank" rel="noopener noreferrer nofollow">unser Replit Starter Projekt</a>, um dein Projekt fertigzustellen.
-   Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

Wenn du Replit verwendest, dann folge diesen Schritten, um das Projekt einzurichten:

-   Beginne, indem du das Projekt in Replit importierst.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` aus und klicke die `Done`-Schaltfläche.

Wenn du fertig bist, stelle sicher, dass eine funktionierende Demo deines Projekts irgendwo öffentlich gehostet wird. Then submit the URL to it in the Solution Link field. Optionally, also submit a link to your project's source code in the GitHub Link field.

# --instructions--

Deine Antworten sollten die folgenden Strukturen haben.

Übung:

```js
{
  username: "fcc_test",
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}
```

Nutzer:

```js
{
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}
```

Log:

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

**Hinweis:** Für die `date`-Eigenschaft kann die `toDateString`-Methode der `Date`-API verwendet werden, um die erhoffte Ausgabe zu erhalten.

# --hints--

Du solltest dein eigenes Projekt angeben, nicht die Beispiel-URL.

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(
    !/.*\/exercise-tracker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Du kannst einen `POST` an `/api/users` mit Formulardaten `username` senden, um einen neuen Benutzer zu erstellen.

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

Die übermittelte Antwort von `POST /api/users` mit Formulardaten `username` wird ein Objekt mit `username` und `_id`-Eigenschaften sein.

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

Du kannst eine `GET`-Anfrage an `/api/users` stellen, um eine Liste aller Nutzer zu erhalten.

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

Die `GET`-Anfrage an `/api/users` gibt ein Array zurück.

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

Jedes Element in dem Array, das von `GET /api/users` zurückgegeben wurde, ist ein Objektliteral, das den `username` und die `_id` eines Nutzers enthält.

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

`POST`-Anfragen an `/api/users/:_id/exercises` können die Formulardaten `description`, `duration` und optional auch `date` enthalten. Wird kein Datum angegeben, wird das aktuelle Datum verwendet.

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

Die von `POST /api/users/:_id/exercises` zurückgegebene Antwort besteht aus dem Nutzerobjekt, dem die Übungsfelder hinzugefügt wurden.

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

Du kannst eine `GET`-Anfrage an `/api/users/:_id/logs` übermitteln, um ein vollständiges Übungsprotokoll eines beliebigen Nutzers abzurufen.

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

Eine an `GET /api/users/:_id/logs` gestellte Anfrage eines Nutzerprotokolls gibt ein Nutzerobjekt mit der `count`-Eigenschaft zurück, die die Anzahl der Übungen darstellt, die zu diesem Nutzer gehören.

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

Eine `GET`-Anfrage an `/api/users/:_id/logs` wird das Nutzerobjekt mit einem `log`-Array aller hinzugefügten Übungen zurückgeben.

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

Jedes Element im `log`-Array, das von `GET /api/users/:_id/logs` zurückgegeben wurde, ist ein Objekt, das `description`-, `duration`- und `date`-Eigenschaften haben sollte.

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

Die `description`-Eigenschaft eines beliebigen Objekts im `log` Array, das von `GET /api/users/:_id/logs` zurückgegeben wurde, sollte eine Zeichenfolge sein.

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

Die `duration`-Eigenschaft eines beliebigen Objekts im `log`-Array, das von `GET /api/users/:_id/logs` zurückgegeben wurde, sollte eine Zahl sein.

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

Die `date`-Eigenschaft eines beliebigen Objekts im `log`-Array, das von `GET /api/users/:_id/logs` zurückgegeben wurde, sollte eine Zeichenfolge sein. Verwende das `dateString`-Format der `Date`-API.

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

Du kannst einer `GET /api/users/:_id/logs`-Anfrage `from`-, `to`- und `limit`-Parameter hinzufügen, um Protokollteile eines beliebigen Benutzers abzurufen. `from` und `to` sind Daten im `yyyy-mm-dd`-Format. `limit` ist ein Integer, der angibt, wie viele Protokolle zurückgegeben werden sollen.

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
