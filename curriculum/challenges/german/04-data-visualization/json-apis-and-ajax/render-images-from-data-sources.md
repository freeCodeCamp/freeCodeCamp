---
id: 587d7fae367417b2b2512be6
title: Bilder aus Datenquellen rendern
challengeType: 6
forumTopicId: 18265
dashedName: render-images-from-data-sources
---

# --description--

Die letzten Herausforderungen zeigten, dass jedes Objekt im JSON-Array den `imageLink`-Schlüssel mit einem, aus der URL des Katzenfotos bestehenden, Wert enthält.

Wenn du diese Objekte durchläufst, kannst du die Eigenschaft `imageLink` verwenden, um dieses Bild in einem `img`-Element darzustellen.

Hier ist der Code dafür:

```js
html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
```

# --instructions--

Füge Code hinzu, um die Eigenschaften `imageLink` und `altText` in einem `img`-Tag zu verwenden.

# --hints--

Du solltest die `imageLink`-Eigenschaft verwenden, um Bilder darzustellen.

```js
assert(code.match(/val\.imageLink/g));
```

Du solltest `altText` für die `alt`-Attributwerte der Bilder verwenden.

```js
assert(code.match(/val\.altText/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // Add your code below this line


          // Add your code above this line
          html += "</div><br>";
        });
        document.getElementsByClassName('message')[0].innerHTML=html;
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
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // Add your code below this line
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
          // Add your code above this line
          html += "</div><br>";
        });
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
