---
id: 587d7fae367417b2b2512be3
title: Ottenere JSON col metodo XMLHttpRequest di JavaScript
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

Puoi anche richiedere dati da una fonte esterna. È qui che le API entrano in gioco.

Ricordati che le API (o Application Programming Interface) sono strumenti che i computer usano per comunicare tra di loro. Imparerai come aggiornare l'HTML con i dati che otteniamo dalle API usando una tecnologia chiamata AJAX.

La maggior parte delle API web trasferiscono i dati in un formato chiamato JSON. JSON sta per JavaScript Object Notation.

La sintassi JSON è molto simile alla notazione letterale degli oggetti in JavaScript. JSON ha le proprietà degli oggetti e i loro valori correnti tra un `{` e un `}`.

Queste proprietà e i loro valori sono spesso denominati "coppie chiave-valore" ("key-value pairs").

Tuttavia, JSON viene inviato dalle API in forma di `bytes`, e la tua applicazione lo riceve come `string`. Questi possono essere convertiti in oggetti JavaScript, ma non sono oggetti JavaScript di default. Il metodo `JSON.parse` analizza la stringa e costruisce l'oggetto JavaScript da essa descritto.

Puoi fare la richiesta del JSON dall'API Cat Photo di freeCodeCamp. Ecco il codice che puoi inserire nel tuo evento click per fare questo:

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

Ecco un ripasso di quello che sta facendo ognuna delle parti in gioco. L'oggetto JavaScript `XMLHttpRequest` ha una serie di proprietà e metodi che vengono utilizzati per trasferire dati. In primo luogo, un'istanza dell'oggetto `XMLHttpRequest` viene creata e salvata nella variabile `req`. Successivamente, il metodo `open` inizializza una richiesta: questo esempio richiede dati da un'API, quindi è una richiesta `GET`. Il secondo argomento per `open` è l'URL dell'API dalla quale stai richiedendo i dati. Il terzo argomento è un valore booleano dove `true` la rende una richiesta asincrona. Il metodo `send` invia la richiesta. Infine, il gestore di evento `onload` analizza i dati restituiti e applica il metodo `JSON.stringify` per convertire l'oggetto JavaScript in una stringa. Questa stringa viene quindi inserita come testo del messaggio.

# --instructions--

Modifica il codice per creare e usare una richiesta `GET` all'API Cat Photo di freeCodeCamp. Quindi fai click sul pulsante `Get Message`. La tua funzione AJAX sostituirà il testo `The message will go here` con l'output JSON grezzo ricevuto dall'API.

# --hints--

Il tuo codice dovrebbe creare una nuova `XMLHttpRequest`.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

Il tuo codice dovrebbe utilizzare il metodo `open` per inizializzare una richiesta `GET` alla API Cat Photo di freeCodeCamp.

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

Il tuo codice dovrebbe utilizzare il metodo `send` per inviare la richiesta.

```js
assert(code.match(/\.send\(\s*\)/g));
```

Il tuo codice dovrebbe avere un gestore di eventi `onload` impostato a una funzione.

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

Il tuo codice dovrebbe utilizzare il metodo `JSON.parse` per analizzare il `responseText`.

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

Il tuo codice dovrebbe selezionare l'elemento con classe `message` e cambiare il suo innerHTML con la stringa di dati JSON.

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // Add your code below this line


      // Add your code above this line
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
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = () => {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
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
