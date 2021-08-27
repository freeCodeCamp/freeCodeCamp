---
id: 587d7fb2367417b2b2512bf5
title: Ottenere l'input del parametro della rotta dal client
challengeType: 2
forumTopicId: 301513
dashedName: get-route-parameter-input-from-the-client
---

# --description--

Quando costruiamo un'API, dobbiamo consentire agli utenti di comunicarci cosa vogliono ottenere dal nostro servizio. Ad esempio, se il client richiede informazioni su un utente memorizzato nel database, hanno bisogno di un modo per farci sapere a quale utente sono interessati. Un modo possibile per raggiungere questo risultato è utilizzare i parametri della rotta. I parametri della rotta sono denominati segmenti dell'URL, e sono delimitati da slash (/). Ogni segmento cattura il valore della parte dell'URL che corrisponde alla sua posizione. I valori acquisiti possono essere trovati nell'oggetto `req.params`.

<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Costruisci un server echo, montato sul percorso `GET /:word/echo`. Rispondi con un oggetto JSON, usando la struttura `{echo: word}`. Puoi trovare la parola da ripetere in `req.params.word`. Puoi testare il percorso dalla barra degli indirizzi del tuo browser, visitando alcuni percorsi corrispondenti, ad esempio `your-app-rootpath/freecodecamp/echo`.

# --hints--

Test 1: il tuo server echo dovrebbe ripetere correttamente le parole

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/eChOtEsT/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'eChOtEsT',
        'Test 1: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Test 2: il tuo server echo dovrebbe ripetere correttamente le parole

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/ech0-t3st/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'ech0-t3st',
        'Test 2: the echo server is not working as expected'
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
