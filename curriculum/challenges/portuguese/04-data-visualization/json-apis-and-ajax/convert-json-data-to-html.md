---
id: 587d7fae367417b2b2512be5
title: Converter dados do JSON para HTML
challengeType: 6
forumTopicId: 16807
dashedName: convert-json-data-to-html
---

# --description--

Agora que você está recebendo dados de uma API de JSON, você pode exibir os dados no HTML.

Você pode usar um método `forEach` para percorrer os dados, já que os objetos de foto de gatos são mantidos em um array. Ao percorrer cada item, você pode modificar os elementos do HTML.

Primeiro, declare uma variável html com `let html = "";`.

Em seguida, percorra o JSON por meio de um laço, adicionando HTML à variável que envolve os nomes das chaves em tags `strong`, seguidas pelo valor. Quando o laço estiver concluído, você o renderiza.

Aqui está o código para fazer isso:

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

**Observação:** para este desafio, você precisa adicionar novos elementos HTML à página. Por isso, você não pode confiar em `textContent`. Em vez disso, você precisa usar `innerHTML`, o que pode tornar um site vulnerável a ataques de scripts entre sites.

# --instructions--

Adicione um método `forEach` para percorrer os dados do JSON e criar os elementos HTML para exibi-los.

Aqui está um exemplo de JSON:

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

O código deve armazenar os dados na variável `html`

```js
assert(__helpers.removeWhiteSpace(code).match(/html(\+=|=html\+)/g))
```

O código deve usar um método `forEach` para percorrer os dados do JSON da API.

```js
assert(code.match(/json\.forEach/g));
```

O código deve envolver os nomes das chaves em tags `strong`.

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
