---
id: 5f8884f4c46685731aabfc41
title: Eseguire test funzionali usando un headless browser II
challengeType: 2
forumTopicId: 301594
dashedName: run-functional-tests-using-a-headless-browser-ii
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), o clonato da [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

# --instructions--

All'interno di `tests/2_functional-tests.js`, nel test `'submit "surname" : "Vespucci" - write your e2e test...'` (`// #6`), automatizza la compilazione e invia il modulo:

1.  Compila il modulo con il `surname` di `Vespucci`
2.  Invia premendo il pulsante `'submit'`

All'interno della callback:

1.  asserisci che lo stato è `200`
2.  asserisci che il testo all'interno dell'elemento `span#name` è `'Amerigo'`
3.  asserisci che il testo all'interno dell'elemento `span#surname` è `'Vespucci'`
4.  asserisci che gli elementi `span#dates` esistono e il loro conteggio è `1`

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

Dovresti asserire che il testo all'interno dell'elemento 'span#name' sia 'Amerigo'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Amerigo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti asserire che il testo all'interno dell'elemento 'span#surname' sia 'Vespucci'.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Vespucci\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti asserire che l'elemento 'span#dates' esista e il suo conteggio sia 1.

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
