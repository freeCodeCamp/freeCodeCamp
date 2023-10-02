---
id: 5ccfad82bb2dc6c965a848e5
title: Otterenere JSON col metodo fetch di JavaScript
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

Un altro metodo per richiedere dati esterni è usare il metodo JavaScript `fetch()`. È equivalente a `XMLHttpRequest`, ma la sintassi è considerata più facile da capire.

Ecco il codice per fare una richiesta GET a `/json/cats.json`

```js

fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

```

Dai un'occhiata ad ogni parte di questo codice.

La prima linea è quella che fa la richiesta. Così, `fetch(URL)` fa una richiesta `GET` all'URL specificato. Il metodo restituisce una Promise.

Dopo che una Promise è restituita, se la richiesta ha avuto successo, il metodo `then` viene eseguito, ed esso converte la risposta in un formato JSON.

Anche il metodo `then` restituisce una Promise, gestita dal metodo `then` successivo. L'argomento nel secondo metodo `then` è l'oggetto JSON che stai cercando!

Ora, l'elemento che riceverà i dati è selezionato usando `document.getElementById()`. Quindi il codice HTML dell'elemento è modificato inserendo una stringa creata dall'oggetto JSON restituito dalla richiesta.

# --instructions--

Modifica il codice per creare e usare una richiesta `GET` all'API Cat Photo di freeCodeCamp. Ma questa volta, usando il metodo `fetch` invece di `XMLHttpRequest`.

# --hints--


Il tuo codice dovrebbe utilizzare i dati recuperati per sostituire l'innerHTML

```js
const catData = "dummy data";
const ref = fetch;
fetch = () => Promise.resolve({ json: () => catData });
async () => {
  try {
    document.getElementById("getMessage").click();
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 250));
  } catch (error) {
    console.log(error);
  } finally {
    fetch = ref;
    assert.equal(
      document.getElementById("message").textContent,
      JSON.stringify(catData)
    );
  }
};
```


Il tuo codice dovrebbe fare una richiesta `GET` usando `fetch`.

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

Il tuo codice dovrebbe usare `then` per convertire la risposta in JSON.

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

Il tuo codice dovrebbe usare `then` per gestire i dati convertiti in JSON dall'altro `then`.

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

Il tuo codice dovrebbe selezionare l'elemento con l'id `message` e cambiare il suo innerHTML con la stringa di dati JSON.

```js
assert(
  __helpers.removeWhiteSpace(code).match(
    /document\.getElementById\(('|")message\1\)\.innerHTML=JSON\.stringify\(?\w+\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
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
<p id="message" class="box">
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
    document.getElementById('getMessage').onclick= () => {
      fetch('/json/cats.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById('message').innerHTML=JSON.stringify(data);
        })
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
<p id="message" class="box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
