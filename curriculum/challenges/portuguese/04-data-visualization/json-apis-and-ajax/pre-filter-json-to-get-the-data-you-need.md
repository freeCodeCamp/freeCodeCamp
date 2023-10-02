---
id: 587d7fae367417b2b2512be7
title: Pré-filtrar o JSON para obter os dados de que você precisa
challengeType: 6
forumTopicId: 18257
dashedName: pre-filter-json-to-get-the-data-you-need
---

# --description--

Se você não quiser renderizar todas as fotos de gatos que você obtém na API de fotos de gatos do freeCodeCamp, você pode pré-filtrar o JSON antes de percorrer todo ele.

Como os dados do JSON estão armazenados em um array, você pode usar o método `filter` para tirar da seleção os gatos que têm a chave `id` com o valor de `1`.

Aqui está o código para fazer isso:

```js
json = json.filter(function(val) {
  return (val.id !== 1);
});
```

# --instructions--

Adicione código ao método `filter` para filtrar os dados do json e remover o gato que tem em seu `id` o valor `1`.

# --hints--

Você deve usar o método `filter`.

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
