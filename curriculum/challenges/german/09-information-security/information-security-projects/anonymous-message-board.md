---
id: 587d824a367417b2b2512c45
title: Anonymes Nachrichtenbrett
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

Erstelle eine vollständige JavaScript-Anwendung, die eine ähnliche Funktionalität wie <a href="https://anonymous-message-board.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://anonymous-message-board.freecodecamp.rocks/</a> aufweist.

Bei der Arbeit an diesem Projekt musst du deinen Code mit einer der folgenden Methoden schreiben:

-   Klone <a href="https://github.com/freeCodeCamp/boilerplate-project-messageboard/" target="_blank" rel="noopener noreferrer nofollow">diese GitHub-Repo</a> und schließe dein Projekt lokal ab.
-   Benutze <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard" target="_blank" rel="noopener noreferrer nofollow">unser Replit-Starter-Projekt</a>, um dein Projekt fertigzustellen.
-   Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

Wenn du Replit verwendest, folge diesen Schritten, um das Projekt einzurichten:

-   Beginne, indem du das Projekt in Replit importierst.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` und klicke auf die `Done`-Schaltfläche.

Wenn du fertig bist, stelle sicher, dass eine funktionierende Demo deines Projekts irgendwo öffentlich gehostet wird. Then submit the URL to it in the Solution Link field. Optionally, also submit a link to your project's source code in the GitHub Link field.

# --instructions--

1.  Set `NODE_ENV` to test without quotes when ready to write tests and DB to your databases connection string (in `.env`)
2.  Es wird empfohlen, Controller/Handler zu erstellen und das Routing in `routes/api.js` durchzuführen
3.  Füge alle Security-Features zu `server.js` hinzu

Schreibe die folgenden Tests in `tests/2_functional-tests.js`:

-   Erstellung eines neuen Threads: POST-Anfrage an `/api/threads/{board}`
-   Die 10 neuesten Threads mit je 3 Antworten anzeigen: GET-Anfrage an `/api/threads/{board}`
-   Löschen eines Threads mit falschem Passwort: DELETE-Anfrage an `/api/threads/{board}` mit ungültigem `delete_password`
-   Löschen eines Threads mit richtigem Passwort: DELETE-Anfrage an `/api/threads/{board}` mit gültigem `delete_password`
-   Melden eines Threads: PUT-Anfrage an `/api/threads/{board}`
-   Erstellen einer neuen Antwort: POST-Anfrage an `/api/replies/{board}`
-   Anzeigen eines einzigen Threads mit allen Antworten: GET-Anfrage an `/api/replies/{board}`
-   Löschen einer Antwort mit falschem Passwort: DELETE-Anfrage an `/api/replies/{board}` mit ungültigem `delete_password`
-   Löschen einer Antwort mit richtigem Passwort: DELETE-Anfrage an `/api/replies/{board}` mit gültigem `delete_password`
-   Melden einer Antwort: PUT-Anfrage an `/api/replies/{board}`

# --hints--

Du kannst dein eigenes Projekt angeben, nicht die Beispiel-URL.

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Erlaube deiner Webseite nur, in einem iFrame geladen zu werden, wenn es sich um eigene Seiten handelt.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

DNS-Prefetching nicht zulassen.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

Erlaube nur deiner Website, den Referrer für deine eigenen Seiten zu senden.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

Du kannst eine POST-Anfrage an `/api/threads/{board}` mit Formulardaten wie `text` und `delete_password` übermitteln. Der gespeicherte Datensatz enthält mindestens die Felder `_id`, `text`, `created_on`(Datum & Zeit), `bumped_on`(Datum & Zeit, startet wie `created_on`), `reported` (Boolean), `delete_password`, & `replies` (Array).

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

Du kannst eine POST-Anfrage an `/api/replies/{board}` mit Formulardaten übermitteln, die `text`, `delete_password`, & `thread_id` enthalten. Dadurch wird das `bumped_on` Datum auf das Datum des Kommentars aktualisiert. In dem `replies`-Array des Threads wird ein Objekt gespeichert, das mindestens die Eigenschaften `_id`, `text`, `created_on`, `delete_password`, & `reported` enthält.

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

Du kannst eine GET-Anfrage an `/api/threads/{board}` übermitteln. Zurückgegeben wird eine Anordnung der letzten 10 Bumped Threads des Boards mit nur den letzten 3 Antworten für jeden. Die Felder `reported` und `delete_password` werden nicht an den Client gesendet.

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

Du kannst eine GET-Anfrage an `/api/replies/{board}?thread_id={thread_id}` übermitteln. Zurückgegeben wird der gesamte Thread mit all seinen Antworten, wobei dieselben Felder des Clients wie beim vorherigen Test ausgeschlossen werden.

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

Du kannst eine DELETE-Anfrage an `/api/threads/{board}` übermitteln und dieser die Argumente `thread_id` & `delete_password` übergeben, um den Thread zu löschen. Zurückgegeben wird der String `incorrect password` oder `success`.

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

Du kannst eine DELETE-Anfrage an `/api/replies/{board}` übermitteln und dieser die Argumente `thread_id`, `reply_id` & `delete_password` übergeben. Zurückgegeben wird die Zeichenkette `incorrect password` oder `success`. Bei Erfolg wird der Text `reply_id` in `[deleted]` geändert.

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

Du kannst eine PUT-Anfrage an `/api/threads/{board}` übermitteln und dieser das Argument `thread_id` übergeben. Zurückgegeben wird der String `reported`. Der `reported`-Wert der `thread_id` wird auf `true` geändert.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  let res = await fetch(`${url}/api/threads/fcc_test`);
  const threads = await res.json();
  const thread_id = threads[0]._id;
  const data = { thread_id };

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

Du kannst eine PUT-Anfrage an `/api/replies/{board}` übermitteln und dieser `thread_id` & `reply_id` übergeben. Der String `reported` wird zurückgegeben. Der `reported`-Wert der `reply_id` wird auf `true` geändert.

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

Alle 10 Funktionstests sind abgeschlossen und bestanden.

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
