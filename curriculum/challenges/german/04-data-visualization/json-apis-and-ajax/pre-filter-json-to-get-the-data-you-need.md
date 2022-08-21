---
id: 587d7fae367417b2b2512be7
title: Filtere JSON vor, um von dir benötigte Daten zu erhalten
challengeType: 6
forumTopicId: 18257
dashedName: pre-filter-json-to-get-the-data-you-need
---

# --description--

Wenn du nicht jedes Katzenfoto rendern möchtest, das du von der Katzenfoto-API freeCodeCamps erhältst, kannst du die JSON-Daten – vor dem Durchlaufen – vorfiltern.

Da die JSON-Daten in einem Array gespeichert sind, kannst du eine `filter`-Methode verwenden, um die Katze mit dem Schlüssel `id` vom Wert `1` herauszufiltern.

Hier ist der Code dafür:

```js
json = json.filter(function(val) {
  return (val.id !== 1);
});
```

# --instructions--

Füge einen Code hinzu, um einen `filter` auf die json-Daten anzuwenden und die Katze mit einer `id` von `1` zu entfernen.

# --hints--

Dein Code sollte die `filter`-Methode anwenden.

```js
assert(code.match(/json\.filter/g));
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
        let json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line


        // Add your code above this line
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
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
      req.onload = function(){
        let json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line
        json = json.filter(function(val) {
          return (val.id !== 1);
        });

        // Add your code above this line
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
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
