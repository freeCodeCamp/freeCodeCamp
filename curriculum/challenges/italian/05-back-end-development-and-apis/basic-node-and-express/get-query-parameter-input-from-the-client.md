---
id: 587d7fb2367417b2b2512bf6
title: Ottenere l'input del parametro query dal client
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

Un altro modo comune per ottenere input dal client è codificare i dati dopo il percorso della rotta, utilizzando una stringa di interrogazione (query). La stringa di query è delimitata da un punto interrogativo (?), e include le coppie campo=valore. Ogni coppia è separata da un simbolo &. Express può analizzare i dati dalla stringa di query e popolare l'oggetto `req.query`. Alcuni caratteri, come la percentuale (%), non possono essere presenti negli URL e devono essere codificati in un formato diverso prima di poterli inviare. Se accedi all'API da JavaScript, puoi usare metodi specifici per codificare/decodificare questi caratteri.

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Costruisci un endpoint API, montato su `GET /name`. Rispondi con un documento JSON, usando la struttura `{ name: 'firstname lastname'}`. I parametri del nome e del cognome devono essere codificati in una stringa di query, ad esempio `?first=firstname&last=lastname`.

**Nota:** Nel seguente esercizio riceverai i dati da una richiesta POST, allo stesso percorso `/name`. Se vuoi, puoi usare il metodo `app.route(path).get(handler).post(handler)`. Questa sintassi consente di concatenare diversi gestori di verbi sullo stesso percorso. Puoi risparmiare un po' di digitazione, e avere un codice più pulito.

# --hints--

Test 1 : il tuo endpoint API dovrebbe rispondere con `{ "name": "Mick Jagger" }` quando l'endpoint `/name` è chiamato con `?first=Mick&last=Jagger`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Test 2 : il tuo endpoint API dovrebbe rispondere con `{ "name": "Keith Richards" }` quando l'endpoint `/name` è chiamato con `?first=Keith&last=Richards`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
