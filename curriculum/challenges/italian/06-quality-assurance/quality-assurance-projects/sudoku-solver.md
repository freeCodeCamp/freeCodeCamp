---
id: 5e601bf95ac9d0ecd8b94afd
title: Risolutore di sudoku
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

Costruisci un'app JavaScript full-stack che sia funzionalmente simile a questa: <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://sudoku-solver.freecodecamp.rocks/</a>. Lavorare su questo progetto ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

-   Clonare <a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">questo repository GitHub</a> e completare il tuo progetto localmente.
-   Usare <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">la nostra bozza di progetto su Replit</a> per completare il tuo progetto.
-   Usare un costruttore di siti a tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Se utilizzi Replit, segui questi passaggi per impostare il progetto:

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo Link alla soluzione. Facoltativamente, invia anche un link al codice sorgente del tuo progetto nel campo Link GitHub.

# --instructions--

- Tutta la logica puzzle può andare in `/controllers/sudoku-solver.js`
  - La funzione `validate` dovrebbe prendere una data stringa rompicapo e controllarla per vedere se ha 81 caratteri validi per l'ingresso.
  - Le funzioni `check` dovrebbero convalidare un posizionamento rispetto allo stato *corrente* della scheda.
  - La funzione `solve` dovrebbe gestire la risoluzione di qualsiasi stringa di puzzle valida, non solo gli input e le soluzioni di test. Ci si aspetta che sia tu a scrivere la logica per risolvere questo problema.
- Tutta la logica di routing può entrare in `/routes/api.js`
- Vedi il file `puzzle-strings.js` in `/controllers` per alcuni puzzle di esempio che la tua applicazione dovrebbe risolvere
- Per eseguire i test su questa pagina, imposta `NODE_ENV` a `test` senza virgolette nel file `.env`
- Per eseguire i test nella console, utilizza il comando `npm run test`. Per aprire la console di Replit, premi Ctrl+Maiusc+P (Cmd se su un Mac) e digita "open shell"

Scrivi i seguenti test in `tests/1_unit-tests.js`:

-   La logica gestisce una stringa rompicapo valida di 81 caratteri
-   La logica gestisce una stringa rompicapo con caratteri non validi (non 1-9 o `.`)
-   La logica gestisce una stringa rompicapo che non è di 81 caratteri di lunghezza
-   La logica gestisce un posizionamento di riga valido
-   La logica gestisce un posizionamento di riga non valido
-   La logica gestisce un posizionamento di colonna valido
-   La logica gestisce un posizionamento di colonna non valido
-   La logica gestisce un posizionamento di regione (griglia 3x3) valido
-   La logica gestisce un posizionamento di regione (griglia 3x3) non valido
-   Le stringhe rompicapo valide passano il risolutore
-   Le stringhe rompicapo non valide vengono rifiutate dal risolutore
-   Il risolutore restituisce la soluzione prevista per un puzzle incompleto

Scrivi i seguenti test in `tests/2_functional-tests.js`

-   Risolvi un puzzle con stringa rompicapo valida: richiesta POST a `/api/solve`
-   Risolvi un puzzle con stringa rompicapo mancante: richiesta POST a `/api/solve`
-   Risolvi un puzzle con stringa rompicapo non valida: richiesta POST a `/api/solve`
-   Risolvi un puzzle di lunghezza sbagliata: richiesta POST a `/api/solve`
-   Risolvi un puzzle che non può essere risolto: richiesta POST a `/api/solve`
-   Controlla un posizionamento del puzzle con tutti i campi: richiesta POST a `/api/check`
-   Controlla un posizionamento del puzzle con un singolo conflitto di posizionamento: richiesta POST a `/api/check`
-   Controlla un posizionamento del puzzle con conflitti multipli di posizionamento: richiesta POST a `/api/check`
-   Controlla un posizionamento del puzzle con tutti i conflitti di posizionamento: richiesta POST a `/api/check`
-   Controlla un posizionamento del puzzle con i campi richiesti mancanti: richiesta POST a `/api/check`
-   Controlla un posizionamento del puzzle con caratteri non validi: richiesta POST a `/api/check`
-   Controlla un posizionamento del puzzle di lunghezza sbagliata: richiesta POST a `/api/check`
-   Controlla un posizionamento del puzzle con coordinate non valide: richiesta POST a `/api/check`
-   Controlla un posizionamento del puzzle di valore non valido: richiesta POST a `/api/check`

# --hints--

È necessario fornire il proprio progetto, non l'URL di esempio.

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

È possibile fare una richiesta `POST` a `/api/solve` con i dati del modulo contenente `puzzle` che sarà una stringa contenente una combinazione di numeri (1-9) e punti `.` per rappresentare spazi vuoti. L'oggetto restituito conterrà una proprietà `solution` con il puzzle risolto.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output =
    '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'solution');
  assert.equal(parsed.solution, output);
};
```

Se l'oggetto sottoposto a `/api/solve` non ha il `puzzle`, il valore restituito sarà `{ error: 'Required field missing' }`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Required field missing';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notpuzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Se il rompicapo sottoposto a `/api/solve` contiene valori che non sono numeri o punti, il valore restituito sarà `{ error: 'Invalid characters in puzzle' }`

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Se il rompicapo sottoposto a `/api/solve` ha lunghezza maggiore o minore di 81 caratteri, il valore restituito sarà `{ error: 'Expected puzzle to be 81 characters long' }`

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Se il puzzle sottoposto a `/api/solve` non è valido o non può essere risolto, il valore restituito sarà `{ error: 'Puzzle cannot be solved' }`

```js
async (getUserInput) => {
  const input =
    '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Puzzle cannot be solved';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Puoi fare una richiesta `POST` a `/api/check` con un oggetto contenente `puzzle`, `coordinate`, e `value` dove la coordinata `coordinate` è la lettera A-I che indica la riga, seguita da un numero 1-9 che indica la colonna, e `value` è un numero compreso tra 1 e 9.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '7';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

Il valore di ritorno della richiesta `POST` a `/api/check` sarà un oggetto contenente una proprietà `valid`, che sarà `true` se il numero può essere posto alla coordinata fornita e `false` se non può. Se falso, l'oggetto restituito conterrà anche una proprietà `conflict` che è un array contenente le stringhe `"row"`, `"column"`, e/o `"region"` a seconda di quale rende il posizionamento non valido.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const conflict = ['row', 'column'];
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isFalse(parsed.valid);
  assert.property(parsed, 'conflict');
  assert.include(parsed.conflict, 'row');
  assert.include(parsed.conflict, 'column');
};
```

Se il valore `value` sottoposto a `/api/check` è già posizionato sul `puzzle` a quella `coordinate`, il valore restituito sarà un oggetto contenente una proprietà `valid` con `true` se `value` non dà conflitto.

```js
async (getUserInput) => {
  const input =
  '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'C3';
  const value = '2';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

Se il puzzle sottoposto a `/api/check` contiene valori che non sono numeri o punti, il valore restituito sarà `{ error: 'Invalid characters in puzzle' }`

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Se il rompicapo sottoposto a `/api/check` ha lunghezza maggiore o minore di 81 caratteri, il valore restituito sarà `{ error: 'Expected puzzle to be 81 characters long' }`

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const coordinate = 'A1';
  const value = '1';
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Se all'oggetto sottoposto a `/api/check` manca `puzzle`, `coordinate` o `value`, il valore restituito sarà `{ error: 'Required field(s) missing' }`

```js
async (getUserInput) => {
  const inputs = [
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      value: '1',
    },
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      coordinate: 'A1',
    },
    {
      coordinate: 'A1',
      value: '1'
    }
  ];
  for (const input of inputs) {
    const output = 'Required field(s) missing';
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Se la coordinata inviata a `api/check` non punta a una cella della griglia esistente, il valore restituito sarà `{ error: 'Invalid coordinate'}`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid coordinate';
  const coordinates = ['A0', 'A10', 'J1', 'A', '1', 'XZ18'];
  const value = '7';
  for (const coordinate of coordinates) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Se il valore `value` inviato a `/api/check` non è un numero compreso tra 1 e 9, il valore restituito sarà `{ error: 'Invalid value' }`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid value';
  const coordinate = 'A1';
  const values = ['0', '10', 'A'];
  for (const value of values) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Tutti i 12 test funzionali richiesti sono completati e superati.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit\s*Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 12, 'At least 12 tests passed');
    unitTests.forEach((test) => {
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

Tutti i 14 test funzionali richiesti sono completati e superati.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional\s*Tests/gi);
    });
    assert.isAtLeast(functTests.length, 14, 'At least 14 tests passed');
    functTests.forEach((test) => {
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
