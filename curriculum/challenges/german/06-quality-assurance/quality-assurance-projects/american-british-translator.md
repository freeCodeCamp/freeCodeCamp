---
id: 5e601c0d5ac9d0ecd8b94afe
title: Amerikanisch-Britischer Übersetzer
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

Erstelle eine vollständige JavaScript-Anwendung, die eine ähnliche Funktionalität wie <a href="https://american-british-translator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://american-british-translator.freecodecamp.rocks/</a> aufweist. Working on this project will involve you writing your code using one of the following methods:

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow">this GitHub repo</a> and complete your project locally.
-   Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow">our Gitpod starter project</a> to complete your project.
-   Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

# --instructions--

-   Die gesamte Logik kann in `/components/translator.js` untergebracht werden
-   Vervollständige die `/api/translate`-Route in `/routes/api.js`
-   Erstelle alle Unit/Funktionstests in `tests/1_unit-tests.js` und `tests/2_functional-tests.js`
-   In den JavaScript-Dateien unter `/components` findest du die verschiedenen Schreibweisen und Begriffe, die deine Anwendung übersetzen soll
-   To run the tests automatically, set `NODE_ENV` to `test` without quotes in the `.env` file
-   Um die Tests in der Konsole auszuführen, verwendest du den Befehl `npm run test`.

Schreibe die folgenden Tests in `tests/1_unit-tests.js`:

-   Übersetze `Mangoes are my favorite fruit.` in Britisches Englisch
-   Übersetze `I ate yogurt for breakfast.` in Britisches Englisch
-   Übersetze `We had a party at my friend's condo.` in Britisches Englisch
-   Übersetze `Can you toss this in the trashcan for me?` in Britisches Englisch
-   Übersetze `The parking lot was full.` in Britisches Englisch
-   Übersetze `Like a high tech Rube Goldberg machine.` in Britisches Englisch
-   Übersetze `To play hooky means to skip class or work.` in Britisches Englisch
-   Übersetze `No Mr. Bond, I expect you to die.` in Britisches Englisch
-   Übersetze `Dr. Grosh will see you now.` in Britisches Englisch
-   Übersetzen Sie `Lunch is at 12:15 today.` in Britisches Englisch
-   Übersetze `We watched the footie match for a while.` in Amerikanisches Englisch
-   Übersetze `Paracetamol takes up to an hour to work.` in Amerikanisches Englisch
-   Übersetze `First, caramelise the onions.` in Amerikanisches Englisch
-   Übersetze `I spent the bank holiday at the funfair.` in Amerikanisches Englisch
-   Übersetze `I had a bicky then went to the chippy.` in Amerikanisches Englisch
-   Übersetze `I've just got bits and bobs in my bum bag.` in Amerikanisches Englisch
-   Übersetze `The car boot sale at Boxted Airfield was called off.` in Amerikanisches Englisch
-   Übersetze `Have you met Mrs Kalyani?` in Amerikanisches Englisch
-   Übersetze `Prof Joyner of King's College, London.` in Amerikanisches Englisch
-   Übersetze `Tea time is usually around 4 or 4.30.` in Amerikanisches Englisch
-   Übersetzung hervorheben in `Mangoes are my favorite fruit.`
-   Übersetzung hervorheben in `I ate yogurt for breakfast.`
-   Übersetzung hervorheben in `We watched the footie match for a while.`
-   Übersetzung hervorheben in `Paracetamol takes up to an hour to work.`

Schreibe die folgenden Tests in `tests/2_functional-tests.js`:

-   Translation with text and locale fields: POST request to `/api/translate`
-   Translation with text and invalid locale field: POST request to `/api/translate`
-   Translation with missing text field: POST request to `/api/translate`
-   Translation with missing locale field: POST request to `/api/translate`
-   Translation with empty text: POST request to `/api/translate`
-   Translation with text that needs no translation: POST request to `/api/translate`

# --hints--

You should provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

You can `POST` to `/api/translate` with a body containing `text` with the text to translate and `locale` with either `american-to-british` or `british-to-american`. Das zurückgegebene Objekt sollte den übermittelten `text` und die `translation` mit dem übersetzten Text enthalten.

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Die `/api/translate`-Route sollte die Schreibweise der Zeit im amerikanischen und britischen Englisch berücksichtigen. So wird zum Beispiel "10 thirty" im britischen Englisch als "10.30" und im amerikanischen Englisch als "10:30" geschrieben. The `span` element should wrap the entire time string, i.e. `<span class="highlight">10:30</span>`.

```js
async (getUserInput) => {
  try {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

The `/api/translate` route should also handle the way titles/honorifics are abbreviated in American and British English. Zum Beispiel wird Doktor Wright im britischen Englisch als "Dr Wright" und im amerikanischen Englisch als "Dr. Wright" abgekürzt. Siehe `/components/american-to-british-titles.js` für die verschiedenen Titel, die deine Anwendung verarbeiten sollte.

```js
async (getUserInput) => {
  try {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: '<span class="highlight">Dr</span> Grosh will see you now.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Umschließe alle übersetzten Schreibweisen oder Begriffe mit `<span class="highlight">...</span>`-Tags, damit sie in grüner Farbe erscheinen.

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Wenn eines oder mehrere der erforderlichen Felder fehlen, wird `{ error: 'Required field(s) missing' }` zurückgegeben.

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Wenn `text` leer ist, gib `{ error: 'No text to translate' }` zurück

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: '', locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'No text to translate');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Wenn `locale` mit keiner der beiden angegebenen Sprachumgebungen übereinstimmt, wird `{ error: 'Invalid value for locale field' }` zurückgegeben.

```js
async (getUserInput) => {
  try {
    const text = "Ceci n'est pas une pipe";
    const locale = 'french-to-american';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Invalid value for locale field');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Wenn `text` keine Übersetzung erfordert, wird `"Everything looks good to me!"` als `translation`-Wert zurückgegeben.

```js
async (getUserInput) => {
  try {
    const locale = 'british-to-american';
    const output = {
      text: 'SaintPeter and nhcarrigan give their regards!',
      translation: 'Everything looks good to me!'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: output.text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

All 24 unit tests are complete and passing.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 24, 'At least 24 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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

All 6 functional tests are complete and passing.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 6, 'At least 6 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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
