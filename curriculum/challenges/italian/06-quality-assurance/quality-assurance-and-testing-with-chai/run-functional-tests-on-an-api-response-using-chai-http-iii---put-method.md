---
id: 587d824f367417b2b2512c5a
title: Eseguire test funzionali su una risposta API utilizzando il metodo Chai-HTTP III - PUT
challengeType: 2
forumTopicId: 301590
dashedName: run-functional-tests-on-an-api-response-using-chai-http-iii---put-method
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Quando testi una richiesta `PUT`, invierai spesso dei dati con essa. I dati che includi con la tua richiesta `PUT` sono chiamati corpo della richiesta.

Per inviare una richiesta `PUT` e un oggetto JSON all'endpoint `'/travellers'`, è possibile utilizzare i metodi `put` e `send` del plugin`chai-http`:

```js
chai
  .request(server)
  .put('/travellers')
  .send({
    "surname": [last name of a traveller of the past]
  })
  ...
```

La rotta risponde con:

```json
{
  "name": [first name],
  "surname": [last name],
  "dates": [birth - death years]
}
```

Vedi il codice del server per le diverse risposte all'endpoint `'/travellers'`.

# --instructions--

All'interno di `tests/2_functional-tests.js`, cambia il test `'Send {surname: "Colombo"}'` (`// #3`) e usa i metodi `put` e `send` per testare l'endpoint  `'/travellers'`.

Invia il seguente oggetto JSON con la tua richiesta PUT:

```json
{
  "surname": "Colombo"
}
```

Controlla quanto segue, all'interno della callback `request.end`:

1.  Lo `status` dovrebbe essere `200`
2.  Il `type` dovrebbe essere `application/json`
3.  Il `body.name` dovrebbe essere `Cristoforo`
4.  Il `body.surname` dovrebbe essere `Colombo`

Segui l'ordine di asserzione indicato sopra - facciamo affidamento su di esso. Inoltre, assicurati di rimuovere `assert.fail()` una volta finito.

# --hints--

Tutti i test dovrebbero essere superati.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti verificare che `res.status` sia 200.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'equal');
      assert.equal(data.assertions[0].args[0], 'res.status');
      assert.equal(data.assertions[0].args[1], '200');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti verificare che `res.type` sia `'application/json'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'equal');
      assert.equal(data.assertions[1].args[0], 'res.type');
      assert.match(data.assertions[1].args[1], /('|")application\/json\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti verificare che `res.body.name` sia `'Cristoforo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'equal');
      assert.equal(data.assertions[2].args[0], 'res.body.name');
      assert.match(data.assertions[2].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Dovresti verificare che `res.body.surname` sia `'Colombo'`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'equal');
      assert.equal(data.assertions[3].args[0], 'res.body.surname');
      assert.match(data.assertions[3].args[1], /('|")Colombo\1/);
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
