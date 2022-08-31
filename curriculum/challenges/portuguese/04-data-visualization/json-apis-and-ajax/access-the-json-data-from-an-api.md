---
id: 587d7fae367417b2b2512be4
title: Acessar os dados de JSON de uma API
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

No desafio anterior, você viu como obter dados de JSON da API de fotos de gatos do freeCodeCamp.

Agora, dê uma olhada nos dados retornados para entender melhor o formato JSON. Vamos relembrar um pouco da notação do JavaScript:

<blockquote>[ ] -> colchetes representam um array<br>{ } -> chaves representam um objeto.<br>" " -> aspas duplas representam uma string. Elas também são usadas para nomes de chaves em JSON.</blockquote>

Entender a estrutura dos dados que uma API retorna é importante, pois influencia a forma como você obtém os valores de que necessita.

À direita, clique no botão `Get Message` para carregar o JSON da API de fotos de gatos do freeCodeCamp no HTML.

O primeiro e o último caracteres que você verá nos dados do JSON serão colchetes `[ ]`. Isso significa que os dados retornados são um array. O segundo caractere nos dados do JSON é uma abertura de chave `{`, que marca o início de um objeto. Se olhar mais atentamente, você verá que há três objetos separados. Os dados do JSON são um array de três objetos, onde cada objeto contém informações sobre uma foto de gato.

Você aprendeu anteriormente que objetos contêm "pares de chave-valor" separados por vírgulas. No exemplo de fotos de gatos, o primeiro objeto tem o `"id":0`, onde `id` é uma chave e `0` é o seu valor correspondente. Do mesmo modo, há chaves para `imageLink`, `altText` e `codeNames`. Cada objeto de foto de gato tem as mesmas chaves, mas com valores diferentes.

Outro "par chave-valor" interessante no primeiro objeto é `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]`. Aqui, `codeNames` é a chave e seu valor é um array com três strings. É possível ter arrays de objetos, além de uma chave com um array como valor.

Lembre-se de como acessar dados em array e em objetos. Arrays usam a notação de colchetes para acessar um índice específico de um item. Objetos usam os colchetes ou a notação de ponto para acessar o valor de determinada propriedade. Aqui vemos um exemplo que imprime a propriedade `altText` da primeira foto de gatos - observe que os dados do JSON representados no editor são salvos em uma variável chamada `json`:

```js
console.log(json[0].altText);
```

O console exibirá a string `A white cat wearing a green helmet shaped melon on its head.`.

# --instructions--

Para o gato com o `id` de 2, imprima no console o segundo valor do array `codeNames`. Você deve usar notação de colchetes e de ponto no objeto (que é salvo na variável `json`) para acessar o valor.

# --hints--

Seu código deve usar notação de colchetes e de ponto para acessar o nome do código apropriado e imprimir `Loki` no console.

```js
assert(
  code.match(
    /console\s*\.\s*log\s*\(\s*json\s*\[2\]\s*(\.\s*codeNames|\[\s*('|`|")codeNames\2\s*\])\s*\[\s*1\s*\]\s*\)/g
  )
);
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
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line

        // Add your code above this line
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
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
        // Add your code above this line
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
