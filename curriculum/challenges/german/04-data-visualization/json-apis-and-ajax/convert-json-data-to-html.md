---
id: 587d7fae367417b2b2512be5
title: JSON-Daten zu HTML konvertieren
challengeType: 6
forumTopicId: 16807
dashedName: convert-json-data-to-html
---

# --description--

Da du nun Daten von der JSON-API erhältst, kannst du sie in HTML anzeigen lassen.

Die Katzenfoto-Objekte befinden sich in einem Array – benutze deshalb die `forEach`-Methode, um die Daten zu durchlaufen. Du kannst nun für jeden Eintrag die HTML-Elemente ändern.

Deklariere zunächst eine HTML-Variable mit `let html = "",`.

Durchlaufe anschließend die JSON-Daten und füge HTML der Variable hinzu, die Schlüsselbezeichnungen, gefolgt vom jeweiligen Wert, in `strong`-Tags setzt. Sobald der Schleifendurchlauf beendet ist, kannst du die Daten wiedergeben.

Hier ist der Code dafür:

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

**Hinweis:** In dieser Herausforderung fügst du HTML-Elemente der Seite hinzu, du kannst hier deshalb nicht auf `textContent` setzen. Du musst stattdessen `innerHTML` verwenden – was eine Seite anfällig für seitenübergreifende Scripting-Angriffe macht.

# --instructions--

Füge eine `forEach`-Methode hinzu, welche die JSON-Daten durchläuft und die für die Anzeige nötigen HTML-Elemente erzeugt.

Hier ist ein JSON-Beispiel:

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

Dein Code sollte die Daten in einer `html`-Variable speichern

```js
assert(__helpers.removeWhiteSpace(code).match(/html(\+=|=html\+)/g))
```

Dein Code sollte Gebrauch von der `forEach`-Methode machen, um die JSON-Daten der API zu durchlaufen.

```js
assert(code.match(/json\.forEach/g));
```

Dein Code sollte die Schlüsselbezeichnungen in `strong`-Tags setzen.

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
