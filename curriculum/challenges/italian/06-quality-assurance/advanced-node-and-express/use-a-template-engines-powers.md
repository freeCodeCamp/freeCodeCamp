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

Pug utilizza spazi e tab per mostrare elementi annidati e tagliare sulla quantità di codice necessario per fare un bel sito.

Prendi il seguente codice Pug come esempio:

```pug
head
  script(type='text/javascript').
    if (foo) bar(1 + 5);
body
  if youAreUsingPug
      p You are amazing
    else
      p Get on it!
```

Quanto sopra restituisce il seguente HTML:

```html
<head>
  <script type="text/javascript">
    if (foo) bar(1 + 5);
  </script>
</head>
<body>
  <p>You are amazing</p>
</body>
```

Il tuo file `index.pug` incluso nel tuo progetto, usa le variabili `title` e `message`.

Passa quelle variabili dal tuo server al file Pug aggiungendo un oggetto come secondo argomento alla chiamata `res.render` con le variabili e i loro valori. Dai a `title` il valore `Hello` e a `message` il valore `Please log in`.

Dovrebbe avere questo aspetto:

```javascript
res.render('index', { title: 'Hello', message: 'Please log in' });
```

Ora aggiorna la pagina e dovresti essere in grado di vedere quei valori presentati nel punto corretto come stabilito nel file `index.pug`!

Invia la tua pagina quando pensi che sia tutto corretto. Se incontri errori, puoi vedere <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#use-a-template-engines-power-2" target="_blank" rel="noopener noreferrer nofollow">il progetto completato fino a questo punto</a>.

# --hints--

Pug dovrebbe visualizzare correttamente le variabili.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /pug-variable("|')>Please log in/gi,
    'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
