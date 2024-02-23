---
id: 587d7fae367417b2b2512be5
title: Convertire dati JSON ad HTML
challengeType: 6
forumTopicId: 16807
dashedName: convert-json-data-to-html
---

# --description--

Ora che stai ricevendo dati da un'API JSON, puoi mostrarlo nell'HTML.

Puoi usare un metodo `forEach` per iterare sui dati visto che gli oggetti di foto per gatti sono immagazzinati in un array. Iterando su ogni elemento, puoi modificare gli elementi HTML.

Come prima cosa, dichiara una variabile html con `let html = "";`.

Poi, itera sul JSON, aggiungendo HTML alla variabile con le chiavi degli oggetti racchiuse in tag `strong`, seguite dal valore. Quando il ciclo ha finito, lo presenti.

Ecco il codice che lo fa:

```js
let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
```

**Nota:** per questa sfida devi aggiungere nuovi elementi HTML alla pagina quindi non puoi usare `textContent`. Invece, devi usare `innerHTML`, il quale può rendere i siti vulnerabili ad attacchi di cross-site scripting.

# --instructions--

Aggiungi un metodo `forEach` per iterare sui dati JSON e creare gli elementi HTML per mostrarli.

Ecco alcuni esempi di JSON:

```json
[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
```

# --hints--

Il tuo codice dovrebbe salvare i dati nella variabile `html`

```js
assert(__helpers.removeWhiteSpace(code).match(/html(\+=|=html\+)/g))
```

Il tuo codice dovrebbe usare un metodo `forEach` per iterare sui dati JSON ricevuti dalla API.

```js
assert(code.match(/json\.forEach/g));
```

Il tuo codice dovrebbe racchiudere i nomi delle proprietà in tag `strong`.

```js
assert(code.match(/<strong>.+<\/strong>/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line


        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
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
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line
        json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
          html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });
        html += "</div><br>";
        });
        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
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
