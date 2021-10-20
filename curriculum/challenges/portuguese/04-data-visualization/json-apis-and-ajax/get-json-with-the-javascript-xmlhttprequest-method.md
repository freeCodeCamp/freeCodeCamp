---
id: 587d7fae367417b2b2512be3
title: Obter o JSON com o método XMLHttpRequest do JavaScript
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

Você também pode solicitar dados de uma fonte externa. Esse é o ponto em que as APIs entram no jogo.

Lembre-se de que as APIs - ou Interfaces de Programação de Aplicativos - são ferramentas que os computadores usam para se comunicarem uns com os outros. Você aprenderá como atualizar o HTML com os dados que recebemos das APIs usando uma tecnologia chamada AJAX.

A maioria das APIs da web transfere dados em um formato chamado JSON. JSON é uma abreviação de JavaScript Object Notation.

A sintaxe do JSON é bastante semelhante à notação de um literal de objeto do JavaScript. O JSON tem propriedades de objeto e seus valores atuais, envolvidos por um `{` e um `}`.

Essas propriedades e seus valores são geralmente conhecidos como "pares chave-valor".

Porém, o JSON transmitido pelas APIs é enviado como `bytes` e sua aplicação o recebe como uma `string`. Os JSON podem ser convertidos em objetos do JavaScript, mas não são objetos do JavaScript por padrão. O método `JSON.parse` analisa a string e constrói o objeto do JavaScript descrito por ela.

Você pode solicitar o JSON da API de fotos de gato do freeCodeCamp. Aqui está o código que você pode inserir no evento de clique para fazer isto:

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

Aqui está uma análise do que cada parte está fazendo. O objeto `XMLHttpRequest` do JavaScript tem uma série de propriedades e métodos que são usados para transferir dados. Primeiro, uma instância do objeto `XMLHttpRequest` é criada e salva na variável `req`. Em seguida, o método `open` inicia uma solicitação. Este exemplo está solicitando dados de uma API, portanto é uma solicitação `GET`. O segundo argumento para `open` é o URL da API de onde você está solicitando os dados. O terceiro argumento é um valor booleano, onde `true` torna a solicitação assíncrona. O método `send` envia a solicitação. Por fim, o manipulador de eventos `onload` analisa os dados retornados e aplica o método `JSON.stringify` para converter o objeto do JavaScript em uma string. Essa string é, então, inserida como o texto da mensagem.

# --instructions--

Atualize o código para criar e enviar uma solicitação de `GET` para a API de fotos de gatos do freeCodeCamp. Em seguida, clique no botão `Get Message`. Sua função AJAX substituirá o texto `The message will go here` pela saída bruta do JSON da API.

# --hints--

O código deve criar uma nova `XMLHttpRequest`.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

O código deve usar o método `open` para inicializar uma solicitação de `GET` para a API de fotos de gatos do freeCodeCamp.

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

O código deve usar o método `send` para enviar a solicitação.

```js
assert(code.match(/\.send\(\s*\)/g));
```

O código deve ter um manipulador de evento `onload` definido para uma função.

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

O código deve usar o método `JSON.parse` para analisar o `responseText`.

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

O código deve obter o elemento com a classe `message` e alterar seu HTML interno para a string de dados do JSON.

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
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
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = () => {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
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
