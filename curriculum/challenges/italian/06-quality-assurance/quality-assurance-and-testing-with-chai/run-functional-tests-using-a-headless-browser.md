---
id: 587d8250367417b2b2512c5d
title: Eseguire test funzionali utilizzando un browser senza intestazione
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Nella pagina c'è un modulo di inserimento. Esso invia i dati all'endpoint `PUT /travellers` come richiesta AJAX.

Quando la richiesta è completata con successo, il codice client aggiunge al DOM un `<div>` contenente le informazioni nella risposta.

Ecco un esempio di come usare Zombie.js per interagire con il modulo:

```js
test('Submit the surname "Polo" in the HTML form', function (done) {
  browser.fill('surname', 'Polo').then(() => {
    browser.pressButton('submit', () => {
      browser.assert.success();
      browser.assert.text('span#name', 'Marco');
      browser.assert.text('span#surname', 'Polo');
      browser.assert.elements('span#dates', 1);
      done();
    });
  });
});
```

Per prima cosa, il metodo `fill` dell'oggetto `browser` compila il campo `surname` del modulo con il valore `'Polo'`. `fill` restituisce una promessa, quindi `then` viene incatenato fuori.

All'interno della callback `then`, il metodo `pressButton` dell'oggetto `browser` viene utilizzato per invocare l'event listener `submit` del modulo. Il metodo `pressButton` è asincrono.

Poi, una volta ricevuta una risposta dalla richiesta AJAX, vengono fatte alcune asserzioni confermando:

1.  Lo stato della risposta è `200`
2.  Il testo all'interno dell'elemento `<span id='name'></span>` corrisponde a `'Marco'`
3.  Il testo all'interno dell'elemento `<span id='surname'></span>` corrisponde a `'Polo'`
4.  C'è `1` elemento `<span id='dates'></span>`.

Infine, viene invocata la callback `done`, che è necessaria a causa del test asincrono.

# --instructions--

All'interno di `tests/2_functional-tests.js`, nel test `'Submit the surname "Colombo" in the HTML form'` (`// #5`), automatizza quanto segue:

1.  Compila il modulo con il cognome `Colombo`
2.  Premi il pulsante submit

E all'interno della callback `pressButton`:

1.  Asserisci che lo stato sia OK `200`
2.  Asserisci che il testo all'interno dell'elemento `span#name` sia `'Cristoforo'`
3.  Asserisci che il testo all'interno dell'elemento `span#surname` sia `'Colombo'`
4.  Asserisci che gli elementi `span#dates` esistono e il loro conteggio è `1`

Non dimenticare di rimuovere la chiamata `assert.fail()`.

# --hints--

Tutti i test dovrebbero essere superati.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti asserire che la richiesta dell'headless browser sia riuscita.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti asserire che il testo all'interno dell'elemento `span#name` è `'Cristoforo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti asserire che il testo all'interno dell'elemento `span#surname` è `'Colombo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Colombo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti affermare che l'elemento `span#dates` esiste e il suo conteggio è 1.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.elements');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
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
