---
id: 5ccfad82bb2dc6c965a848e5
title: Abrufen von JSON mit der JavaScript-Abrufmethode
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

Eine andere Möglichkeit, externe Daten anzufordern, ist die Verwendung der JavaScript `fetch()`-Methode. Sie ist äquivalent zu `XMLHttpRequest`, aber die Syntax gilt als einfacher zu verstehen.

Hier ist der Code für eine GET-Anfrage an `/json/cats.json`

```js

fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

```

Schau dir jeden einzelnen Teil dieses Codes an.

Die erste Zeile ist diejenige, die den Antrag stellt. `fetch(URL)` stellt also eine `GET`-Anfrage an die angegebene URL. Die Methode gibt ein Promise zurück.

Nachdem ein Promise zurückgegeben wurde, wird bei erfolgreicher Anfrage die Methode `then` ausgeführt, die die Antwort in das JSON-Format konvertiert.

Die `then`-Methode gibt auch ein Promise zurück, das von der nächsten `then`-Methode bearbeitet wird. Das Argument im zweiten `then` ist das JSON-Objekt, nach dem du suchst!

Es wählt nun das Element aus, das die Daten erhalten soll, indem es `document.getElementById()` verwendet. Es ändert dann den HTML-Code des Elements, indem es ein String einfügt, das aus dem von der Anfrage zurückgegebenen JSON-Objekt erstellt wurde.

# --instructions--

Aktualisiere den Code, um eine `GET`-Anfrage an die freeCodeCamp Katzen-Foto-API zu erstellen und zu senden. Diesmal aber mit der Methode `fetch` anstelle von `XMLHttpRequest`.

# --hints--


Your code should use the fetched data to replace the inner HTML

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


Your code should make a `GET` request with `fetch`.

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

Your code should use `then` to convert the response to JSON.

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

Your code should use `then` to handle the data converted to JSON by the other `then`.

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

Your code should get the element with id `message` and change its inner HTML to the string of JSON data.

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
