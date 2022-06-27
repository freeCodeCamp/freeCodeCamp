---
id: 5895f70bf9fc0f352b528e64
title: Usare il potere di un Template Engine
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

Una delle maggiori caratteristiche dell'utilizzo di un template engine è essere in grado di passare variabili dal server al file modello prima di renderlo in HTML.

Nel tuo file Pug, sei in grado di usare una variabile facendo riferimento al nome della variabile come `#{variable_name}` inline con un altro testo su un elemento o usando un segno uguale sull'elemento senza uno spazio come `p=variable_name` che assegna il valore della variabile al testo dell'elemento p.

 Pug utilizza spazi bianchi e tab per mostrare elementi annidati e tagliare sulla quantità di codice necessario per fare un bel sito. Leggi la documentazione di Pug per maggiori informazioni sull'utilizzo e la sintassi.

 Ecco un esempio:

 ```html
 <!--Typing this using Pug-->
 head
    script(type='text/javascript').
      if (foo) bar(1 + 5);
  body
    if youAreUsingPug
        p You are amazing
      else
        p Get on it!

<!--will lead to creating this code-->
  <head>
    <script type="text/javascript">
      if (foo) bar(1 + 5);
    </script>
  </head>
  <body>
    <p>You are amazing</p>
  </body>
  ```

Nel nostro file pug `index.pug` incluso nel tuo progetto, abbiamo usato le variabili `title` e `message`.

Per passare quelle variabili dal nostro server, dovrai aggiungere un oggetto come secondo argomento ai tuoi `res.render` con le variabili e i loro valori. Per esempio, passa questo oggetto impostando le variabili per la tua vista indice: `{title: 'Hello', message: 'Please login'}`

Dovrebbe assomigliare a: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});` Aggiornando la tua pagina dovresti vedere quei valori renderizzati nel punto corretto come impostato nel file `index.pug`!

Invia la tua pagina quando pensi che sia corretto. Se incontri errori, puoi vedere <a href="https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Il Pug dovrebbe visualizzare correttamente le variabili.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-variable("|')>Please login/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
