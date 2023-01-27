---
id: 5e601c0d5ac9d0ecd8b94afe
title: Traduttore Americano Britannico
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

Costruisci un'app JavaScript full-stack che sia funzionalmente simile a questa: <a href="https://american-british-translator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://american-british-translator.freecodecamp.rocks/</a>. Lavorare su questo progetto ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

-   Clonare <a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow">questo repository GitHub</a> e completare il tuo progetto localmente.
-   Usare <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator" target="_blank" rel="noopener noreferrer nofollow">la nostra bozza di progetto su Replit</a> per completare il tuo progetto.
-   Usare un costruttore di siti a tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Se utilizzi Replit, segui questi passaggi per impostare il progetto:

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo Link alla soluzione. Facoltativamente, invia anche un link al codice sorgente del tuo progetto nel campo Link GitHub.

# --instructions--

-   Tutta la logica può stare in `/components/translator.js`
-   Completa la rotta `/api/translate` in `/routes/api.js`
-   Crea tutti i test delle unità/funzionali in `tests/1_unit-tests.js` e `tests/2_functional-tests.js`
-   Vedi i file JavaScript in `/components` per la diversa ortografia e i termini che la tua applicazione dovrebbe tradurre
-   Per eseguire i test su Replit, imposta `NODE_ENV` a `test` senza virgolette nel file `.env`
-   Per eseguire i test nella console, utilizza il comando `npm run test`. Per aprire la console di Replit, premi Ctrl+Maiusc+P (Cmd se su un Mac) e digita "open shell"

Scrivi i seguenti test in `tests/1_unit-tests.js`:

-   Traduci `Mangoes are my favorite fruit.` in inglese britannico
-   Traduci `I ate yogurt for breakfast.` in inglese britannico
-   Traduci `We had a party at my friend's condo.` in inglese britannico
-   Traduci `Can you toss this in the trashcan for me?` in inglese britannico
-   Traduci `The parking lot was full.` in inglese britannico
-   Traduci `Like a high tech Rube Goldberg machine.` in inglese britannico
-   Traduci `To play hooky means to skip class or work.` in inglese britannico
-   Traduci `No Mr. Bond, I expect you to die.` in inglese britannico
-   Traduci `Dr. Grosh will see you now.` in inglese britannico
-   Traduci `Lunch is at 12:15 today.` in inglese britannico
-   Traduci `We watched the footie match for a while.` in inglese americano
-   Traduci `Paracetamol takes up to an hour to work.` in inglese americano
-   Traduci `First, caramelise the onions.` in inglese americano
-   Traduci `I spent the bank holiday at the funfair.` in inglese americano
-   Traduci `I had a bicky then went to the chippy.` in inglese americano
-   Traduci `I've just got bits and bobs in my bum bag.` in inglese americano
-   Traduci `The car boot sale at Boxted Airfield was called off.` in inglese americano
-   Traduci `Have you met Mrs Kalyani?` in inglese americano
-   Traduci `Prof Joyner of King's College, London.` in inglese americano
-   Traduci `Tea time is usually around 4 or 4.30.` in inglese americano
-   Evidenzia la traduzione in `Mangoes are my favorite fruit.`
-   Evidenzia la traduzione in `I ate yogurt for breakfast.`
-   Evidenzia la traduzione in `We watched the footie match for a while.`
-   Evidenzia la traduzione in `Paracetamol takes up to an hour to work.`

Scrivi i seguenti test in `tests/2_functional-tests.js`:

-   Traduzione con i campi testo e localizzazione: richiesta POST a `/api/translate`
-   Traduzione con i campi testo e localizzazione non validi: richiesta POST a `/api/translate`
-   Traduzione con il campo testo mancante: richiesta POST a `/api/translate`
-   Traduzione con il campo localizzazione mancante: richiesta POST a `/api/translate`
-   Traduzione con il testo vuoto: richiesta POST a `/api/translate`
-   Traduzione con testo che non ha bisogno di traduzione: richiesta POST a `/api/translate`

# --hints--

Dovresti fornire il tuo progetto, non l'URL di esempio.

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Puoi fare una richiesta `POST` a `/api/translate` con un corpo contenente `text` con il testo da tradurre e `locale` con `american-to-british` (da americano a britannico) o `british-to-american` (da britannico ad americano). L'oggetto restituito dovrebbe contenere il testo inviato (`text`) e la traduzione (`translation`).

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

Il percorso `/api/translate` dovrebbe gestire la differenza di come l'ora è scritta in inglese americano o britannico. Per esempio l'orario dieci e trenta è scritto "10.30" in inglese britannico e "10:30" in inglese americano. L'elemento `span` dovrebbe racchiudere tutta la stringa del tempo, per esempio `<span class="highlight">10:30</span>`.

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

Il percorso `/api/translate` dovrebbe gestire anche la differenza di come i titoli onorifici sono abbreviati in inglese americano o britannico. Per esempio, Doctor Wright è appreviato come "Dr Wright" in inglese britannico e "Dr. Wright" in inglese americano. Vedi `/components/american-to-british-titles.js` per sapere quali titoli la tua applicazione dovrebbe essere in grado di gestire.

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

Racchiudi ogni traduzione di spelling o termini con tag `<span class="highlight">...</span>` affinché appaiano in verde.

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

Se uno o più dei campi richiesti è mancante, restuisci `{ error: 'Required field(s) missing' }`.

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

Se `text` è vuoto restituisci `{ error: 'No text to translate' }`

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

Se `locale` non corrisponde a uno dei due locale specificati, restituisci `{ error: 'Invalid value for locale field' }`.

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

Se `text` non richiede traduzione, restituisci `"Everything looks good to me!"` per il valore `translation`.

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

Tutti i 24 test unitari sono completati e superati.

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

Tutti i 6 test funzionali sono completati e superati.

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
