---
id: 5ccfad82bb2dc6c965a848e5
title: Obter o JSON com o método fetch do JavaScript
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

Outra maneira de solicitar dados externos é usar o método `fetch()` do JavaScript. Ele é equivalente ao método `XMLHttpRequest`, mas a sintaxe é considerada mais fácil de entender.

Aqui está o código para fazer uma solicitação de GET para `/json/cats.json`

```js

fetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })

```

Dê uma olhada em cada parte deste código.

A primeira linha é aquela que faz a solicitação. Então, `fetch(URL)` faz uma solicitação de `GET` para o URL especificado. O método retorna uma Promise.

Após a devolução da promise, se a solicitação tiver sido bem-sucedida, o método `then` é executado, recebendo a resposta e convertendo-a para o formato JSON.

O método `then` também retorna uma promise, que é tratada pelo próximo método `then`. O argumento no segundo `then` é o objeto do JSON que você está procurando!

Agora, ele seleciona o elemento que receberá os dados usando `document.getElementById()`. Em seguida, modifica o código HTML do elemento, inserindo uma string criada a partir do objeto do JSON retornado pela solicitação.

# --instructions--

Atualize o código para criar e enviar uma solicitação de `GET` para a API de fotos de gatos do freeCodeCamp. Desta vez, porém, use o método `fetch` em vez de `XMLHttpRequest`.

# --hints--


O código deve usar os dados capturados para substituir o HTML interno

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


O código deve fazer uma solicitação de `GET` com `fetch`.

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

O código deve usar `then` para converter a resposta para JSON.

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

O código deve usar `then` para lidar com os dados convertidos para JSON pelo outro `then`.

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

O código deve obter o elemento com o id `message` e alterar seu HTML interno para a string de dados do JSON.

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
