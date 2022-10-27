---
id: 587d8249367417b2b2512c42
title: Issue-Tracker
challengeType: 4
forumTopicId: 301569
dashedName: issue-tracker
---

# --description--

Erstelle eine vollständige JavaScript-Anwendung, die eine ähnliche Funktionalität wie <a href="https://issue-tracker.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://issue-tracker.freecodecamp.rocks/</a> aufweist. Bei der Arbeit an diesem Projekt schreibst du deinen Code mit einer der folgenden Methoden:

-   Klone <a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/" target="_blank" rel="noopener noreferrer nofollow">diese GitHub-Repo</a> und schließe dein Projekt lokal ab.
-   Verwende<a href="https://replit.com/github/freeCodeCamp/boilerplate-project-issuetracker" target="_blank" rel="noopener noreferrer nofollow"> dieses Replit-Starterprojekt</a>, um dein Projekt fertigzustellen.
-   Verwende einen Site-Builder deiner Wahl, um das Projekt fertigzustellen. Be sure to incorporate all the files from our GitHub repo.

Wenn du fertig bist, stelle sicher, dass dein Projekt öffentlich zugänglich gehostet ist. Gib dann die URL in das `Solution Link`-Feld ein. Füge optional einen Link zum Quellcode deines Projekts in das `GitHub Link`-Feld ein.

# --instructions--

-   Erfülle die notwendigen Pfade in `/routes/api.js`
-   Create all of the functional tests in `tests/2_functional-tests.js`
-   Copy the `sample.env` file to `.env` and set the variables appropriately
-   Entkommentiere `NODE_ENV=test` in deiner `.env`-Datei, um die Tests durchzuführen
-   Verwende den Befehl `npm run test`, um die Tests in deiner Konsole durchzuführen. Drücke Strg+Umschalt+P (Cmd auf Mac) und gib "open shell" ein, um die Replit-Konsole zu öffnen

Schreibe die folgenden Tests in `tests/2_functional-tests.js`:

-   Erstelle ein Issue mit jedem Feld: POST-Request an `/api/issues/{project}`
-   Erstelle ein Issue mit nur erforderlichen Feldern: POST-Request an `/api/issues/{project}`
-   Erstelle ein Issue mit erforderlichen fehlenden Feldern: POST-Request an `/api/issues/{project}`
-   Issues in einem Projekt anzeigen: GET-Request an `/api/issues/{project}`
-   Anzeigen von Issues in einem Projekt mit einem Filter: GET-Request an `/api/issues/{project}`
-   Anzeigen von Issues in einem Projekt mit mehreren Filtern: GET-Request an `/api/issues/{project}`
-   Ein Feld für ein Issue aktualisieren: PUT-Request an `/api/issues/{project}`
-   Aktualisiere mehrere Felder mit einem Issue: PUT-Request an `/api/issues/{project}`
-   Aktualisiere ein Problem mit fehlender `_id`: PUT-Request an `/api/issues/{project}`
-   Aktualisieren eines Issues ohne zu aktualisierende Felder: PUT-Request an `/api/issues/{project}`
-   Aktualisieren eines Issues mit einer ungültigen `_id`: PUT-Request an `/api/issues/{project}`
-   Löschen eines Issues: DELETE-Request an `/api/issues/{project}`
-   Löschen eines Issues mit einer ungültigen `_id`: DELETE-Request an `/api/issues/{project}`
-   Löschen eines Issues mit fehlender `_id`: DELETE-Request an `/api/issues/{project}`

# --hints--

Du kannst dein eigenes Projekt angeben, nicht die Beispiel-URL.

```js
(getUserInput) => {
  assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

Du kannst eine `POST`-Anfrage mit Formulardaten an `/api/issues/{projectname}` senden. Die Formulardaten benötigen die Felder `issue_title`, `issue_text`, `created_by`, und optional `assigned_to` sowie `status_text`.

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

Die `POST`-Anfrage an `/api/issues/{projectname}` gibt das erstellte Objekt zurück und muss alle übermittelten Felder enthalten. Ausgeschlossene optionale Felder werden als leere Strings zurückgegeben. Inkludiere zusätzlich `created_on` (Datum/Uhrzeit), `updated_on` (Datum/Uhrzeit), `open` (Boolean, `true` für offen - Standardwert, `false` für geschlossen), sowie `_id`.

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

Wenn du eine `POST`-Anfrage ohne die erforderlichen Felder an `/api/issues/{projectname}` schickst, wird ein Fehler `{ error: 'required field(s) missing' }` zurückgegeben

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

Du kannst eine `GET`-Anfrage an `/api/issues/{projectname}` für einen Array aller Issues des spezifischen `projectname` senden, wobei alle Felder für jedes Issue vorhanden sind.

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

Du kannst eine `GET`-Anfrage an `/api/issues/{projectname}` senden und die Anfrage filtern, indem du jedes Feld und Wert als Query (ie. `/api/issues/{project}?open=false`) übergibst. Du kannst ein oder mehrere Feld/Wert-Paare auf einmal übergeben.

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

Du kannst einen `PUT`-Request an `/api/issues/{projectname}` mit einer `_id` und mindestens einem Feld zum updaten schicken. Bei Erfolg, sollte das Feld `updated_on` aktualisiert werden und `{  result: 'successfully updated', '_id': _id }` zurückgeben.

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

Wenn die `PUT`-Anfrage, die an `/api/issues/{projectname}` übermittelt wird, keine `_id` enthält, beträgt der Rückgabewert `{ error: 'missing _id' }`.

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

Wenn die `PUT`-Anfrage, die an `/api/issues/{projectname}` übermittelt wird, keine Aktualisierungsfelder enthält, beträgt der Rückgabewert `{ error: 'no update field(s) sent', '_id': _id }`. Bei jedem anderen Fehler ist der Rückgabewert `{ error: 'could not update', '_id': _id }`.

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

Du kannst eine `DELETE`-Anfrage an `/api/issues/{projectname}` mit der `_id` übermitteln, um ein Issue zu löschen. Wenn keine `_id` übermittelt wird, ist der Rückgabewert `{ error: 'missing _id' }`. Bei Erfolg ist der Rückgabewert `{ result: 'successfully deleted', '_id': _id }`. Bei einem Fehler ist der Rückgabewert `{ error: 'could not delete', '_id': _id }`.

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

Alle 14 Funktionstests sind abgeschlossen und bestanden.

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
