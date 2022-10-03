---
id: 587d7fb2367417b2b2512bf7
title: Usare il body parser per analizzare le richieste POST
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

Oltre a GET, c'è un altro verbo HTTP di uso comune, che è POST. POST è il metodo predefinito utilizzato per inviare dati dal client attraverso i moduli HTML. Nella convenzione REST, POST viene utilizzato per inviare dati che creeranno nuovi elementi nel database (un nuovo utente, o un nuovo post del blog). Non hai un database in questo progetto, ma imparerai comunque a gestire le richieste POST.

In questo tipo di richieste, i dati non appaiono nell'URL, sono nascosti nel corpo della richiesta. Il corpo fa parte della richiesta HTTP, chiamata anche payload (carico utile). Anche se i dati non sono visibili nell'URL, ciò non significa che siano privati. Per vedere perché, guarda il contenuto grezzo di una richiesta HTTP POST:

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

Come puoi vedere, il corpo è codificato come la query string. Questo è il formato predefinito usato dai moduli HTML. Con Ajax, è anche possibile utilizzare JSON per gestire dati che hanno una struttura più complessa. C'è anche un altro tipo di codifica: multipart/form-data. Questo viene utilizzato per caricare file binari. In questo esercizio, utilizzerai un corpo codificato nell'URL. Per analizzare i dati provenienti dalle richieste POST, dovrai installare il pacchetto `body-parser`. Questo pacchetto consente di utilizzare una serie di middleware, che possono decodificare i dati in diversi formati.

# --instructions--

Il pacchetto `body-parser` è già stato installato ed è nel file `package.json` del tuo progetto. Richiedilo con `require` nella parte superiore del file `myApp.js` e memorizzalo in una variabile chiamata `bodyParser`. Il middleware per gestire i dati codificati nell'URL viene restituito da `bodyParser.urlencoded({extended: false})`. Passa ad `app.use()` la funzione restituita dal metodo invocato prima. Come al solito, il middleware deve essere montato prima di tutte le rotte che dipendono da esso.

**Nota:** `extended` è un'opzione di configurazione che dice al `body-parser` quale analisi deve essere utilizzata. Quando `extended=false` viene utilizzata la libreria di codifica classica `querystring`. Quando `extended=true` viene usata per il parsing la libreria `qs`.

Quando si utilizza `extended=false`, i valori possono essere solo stringhe o array. L'oggetto restituito quando si utilizza `querystring` non eredita prototipalmente da `Object`, predefinito in JavaScript, quindi funzioni come `hasOwnProperty` e `toString` non saranno disponibili. La versione estesa consente una maggiore flessibilità dei dati, ma è superata da JSON.

# --hints--

Il middleware 'body-parser' dovrebbe essere montato

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/add-body-parser').then(
    (data) => {
      assert.isAbove(
        data.mountedAt,
        0,
        '"body-parser" is not mounted correctly'
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
