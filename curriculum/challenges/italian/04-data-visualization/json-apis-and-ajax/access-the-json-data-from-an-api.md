---
id: 587d7fae367417b2b2512be4
title: Accedere ai dati JSON da un'API
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

Nella sfida precedente, hai visto come ottenere i dati JSON dall'API Cat Photo di freeCodeCamp.

Ora daremo un'occhiata più da vicino ai dati restituiti per comprendere meglio il formato JSON. Ricorda alcune notazioni in JavaScript:

<blockquote>[ ] -> Le parentesi quadre rappresentano un array.<br>{ } -> Le parentesi graffe rappresentano un oggetto.<br>" " -> Le virgolette doppie rappresentano una stringa. Vengono utilizzati anche per i nomi delle chiavi in JSON.</blockquote>

Capire la struttura dei dati che un'API restituisce è importante perché influisce su come recuperare i valori di cui hai bisogno.

Sulla destra, fai click sul pulsante `Get Message` per caricare il JSON dell'API Cat Photo di freeCodeCamp nell'HTML.

Il primo e l'ultimo carattere che vedi nei dati JSON sono parentesi quadre `[ ]`. Ciò significa che i dati restituiti sono un array. Il secondo carattere dei dati JSON è una parentesi graffa `{`, che dà inizio a un oggetto. Guardando da vicino, si può vedere che ci sono tre oggetti separati. I dati JSON sono una serie di tre oggetti, in cui ogni oggetto contiene informazioni su una foto di un gatto.

Hai imparato in precedenza che gli oggetti contengono "coppie chiave-valore" separate da virgole. Nell'esempio della Cat Photo, il primo oggetto ha `"id":0` dove `id` è una chiave e `0` è il suo valore corrispondente. Allo stesso modo, ci sono chiavi per `imageLink`, `altText` e `codeNames`. Ogni oggetto relativo alla foto di un gatto ha queste stesse chiavi, ma con valori diversi.

Un'altra interessante "coppia chiave-valore" nel primo oggetto è `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]`. Qui `codeNames` è la chiave e il suo valore è un array di tre stringhe. È possibile avere array di oggetti, così come una chiave con un array come valore.

Ricorda come accedere ai dati in array e oggetti. Gli array utilizzano la notazione tra parentesi per accedere a un indice specifico di un elemento. Gli oggetti utilizzano la notazione tra parentesi o con il punto per accedere al valore di una data proprietà. Ecco un esempio che stampa la proprietà `altText` della prima foto di gatto - nota che i dati JSON analizzati nell'editor sono salvati in una variabile chiamata `json`:

```js
console.log(json[0].altText);
```

La console mostrerà la stringa `A white cat wearing a green helmet shaped melon on its head.`.

# --instructions--

Per il gatto con l'`id` di 2, stampa sulla console il secondo valore nell'array `codeNames`. Per accedere al valore dovresti usare sull'oggetto la notazione tra parentesi e con il punto (che viene salvata nella variabile `json`).

# --hints--

Il tuo codice dovrebbe utilizzare la notazione tra parentesi e con il punto per accedere al codeName corretto e stampare `Loki` sulla console.

```js
assert(
  code.match(
    /console\s*\.\s*log\s*\(\s*json\s*\[2\]\s*(\.\s*codeNames|\[\s*('|`|")codeNames\2\s*\])\s*\[\s*1\s*\]\s*\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line

        // Add your code above this line
      };
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
        // Add your code above this line
      };
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Photo Finder</h1>
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
