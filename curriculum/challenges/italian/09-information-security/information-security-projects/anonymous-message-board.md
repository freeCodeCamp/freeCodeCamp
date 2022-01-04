---
id: 587d824a367417b2b2512c45
title: Bacheca anonima
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

Costruisci un'app JavaScript full-stack che sia funzionalmente simile a questa: <https://anonymous-message-board.freecodecamp.rocks/>.

Lavorare su questo progetto ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

-   Clonare [questo repository GitHub](https://github.com/freeCodeCamp/boilerplate-project-messageboard/) e completare il tuo progetto localmente.
-   Usare [la nostra bozza di progetto su Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard) per completare il tuo progetto.
-   Usare un costruttore di siti a tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo `Solution Link`. Facoltativamente, invia anche un link al codice sorgente del tuo progetto nel campo `GitHub Link`.

# --instructions--

1.  Imposta `NODE_ENV` a test senza virgolette quando sei pronto a scrivere i test, e DB alla stringa di connessione ai database (in `.env`)
2.  Consigliamo di creare i controllers/handlers e gestire il routing in `routes/api.js`
3.  Aggiungerai tutte le funzionalità di sicurezza a `server.js`

Scrivi i seguenti test in `tests/2_functional-tests.js`:

-   Creazione di un nuovo thread: richiesta POST a `/api/threads/{board}`
-   Visualizzazione delle 10 conversazioni più recenti con 3 risposte ciascuna: richiesta GET a `/api/threads/{board}`
-   Eliminazione di una discussione con password errata: richiesta DELETE a `/api/threads/{board}` con una `delete_password` non valida
-   Eliminazione di una discussione con password corretta: richiesta DELETE a `/api/threads/{board}` con una `delete_password` valida
-   Segnalazione di un thread: richiesta PUT a `/api/threads/{board}`
-   Creazione di una nuova risposta: richiesta POST a `/api/replies/{board}`
-   Visualizzazione di un singolo thread con tutte le risposte: richiesta GET a `/api/replies/{board}`
-   Eliminazione di una risposta con la password errata: richiesta DELETE a `/api/replies/{board}` con una `delete_password` non valida
-   Eliminazione di una risposta con la password corretta: richiesta DELETE a `/api/replies/{board}` con una `delete_password` valida
-   Segnalare una risposta: richiesta PUT a `/api/replies/{board}`

# --hints--

È necessario fornire il proprio progetto, non l'URL di esempio.

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Consenti solo al tuo sito di essere caricato in un iFrame sulle tue pagine.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

Non consentire il precaricamento DNS.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

Permetti solo al tuo sito di inviare il referrer per le tue pagine.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

Puoi inviare una richiesta POST a `/api/threads/{board}` con i dati del modulo che includono un `text` e una password `delete_password`. Il record salvato sul databse avrà almeno i campi `_id`, `text`, `created_on`(data & ora), `bumped_on` (data & ora, all'inizo sarà lo stesso valore di `created_on`), `reported` (boolean), `delete_password`, & `replies` (array).

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

Puoi inviare una richiesta POST a `/api/replies/{board}` con i dati del modulo che includono un testo `text`, una password `delete_password`, & `thread_id`. Questo aggiornerà la data `bumped_on` alla data del commento. Nell'array `replies` del thread, sarà salvato un oggetto con almeno le proprietà `_id`, `text`, `created_on`, `delete_password`, & `reported`.

```js

```

Puoi inviare una richiesta GET a `/api/threads/{board}`. Sarà restituito un array dei 10 thread modificati più di recente sulla piattaforma con le 3 risposte più recenti per ciascuno. I campi `reported` e `delete_password` non verranno inviati al client.

```js

```

Puoi inviare una richiesta GET a `/api/replies/{board}?thread_id={thread_id}`. Sarà restituito l'intero thread con tutte le sue risposte, anche qui escludendo gli stessi campi dal client del test precedente.

```js

```

Puoi inviare una richiesta DELETE a `/api/threads/{board}` e passarle `thread_id` & `delete_password` per eliminare il thread. Sarà restituita la stringa `incorrect password` o `success`.

```js

```

Puoi inviare una richiesta DELETE a `/api/replies/{board}` e passarle `thread_id`, `reply_id`, & `delete_password`. Sarà restituita la stringa `incorrect password` o `success`. Al successo, il testo del `reply_id` sarà cambiato in `[deleted]`.

```js

```

Puoi inviare una richiesta PUT a `/api/threads/{board}` e passarle il `thread_id`. Sarà restituita la stringa `success`. Il valore `reported` del `thread_id` sarà cambiato in `true`.

```js

```

Puoi inviare una richiesta PUT a `/api/replies/{board}` e passarle `thread_id`, `reply_id`. Sarà restituita la stringa `success`. Il valore `reported` di `reply_id` sarà cambiato in `true`.

```js

```

Tutti i 10 test funzionali sono completi e superati.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
