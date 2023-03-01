---
id: 587d7fb0367417b2b2512bef
title: Servire un file HTML
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

È possibile rispondere alle richieste con un file utilizzando il metodo `res.sendFile(path)`. Puoi inserirlo all'interno del gestore della rotta `app.get('/', ...)`. Dietro le quinte, questo metodo imposterà le intestazioni appropriate per istruire il browser su come gestire il file che si desidera inviare, in base al suo tipo. Quindi leggerà e invierà il file. Questo metodo necessita di un percorso di file assoluto. Ti consigliamo di utilizzare la variabile globale Node `__dirname` per calcolare il percorso in questo modo:

```js
absolutePath = __dirname + '/relativePath/file.ext'
```

# --instructions--

Invia il file `/views/index.html` come risposta alle richieste GET al percorso `/`. Guardando la tua app live, dovresti vedere una grossa intestazione HTML (e un modulo, che useremo successivamente...) senza alcuno stile applicato.

**Nota:** Puoi modificare la soluzione della sfida precedente o crearne una nuova. Se crei una nuova soluzione, tieni presente che Express valuta i percorsi dall'alto verso il basso ed esegue il gestore alla prima corrispondenza. Dovrai commentare la soluzione precedente, o il server continuerà a rispondere con una stringa.

# --hints--

La tua app dovrebbe servire il file views/index.html

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.match(
        data,
        /<h1>.*<\/h1>/,
        'Your app does not serve the expected HTML'
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
