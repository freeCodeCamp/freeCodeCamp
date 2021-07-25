---
id: 587d7faf367417b2b2512be9
title: Publicar dados com o método XMLHttpRequest do JavaScript
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

Nos exemplos anteriores, você recebeu dados de um recurso externo. Você também pode enviar dados para um recurso externo, contanto que esse recurso suporte solicitações AJAX e que você conheça o URL.

O método `XMLHttpRequest` do JavaScript também é usado para publicar dados em um servidor. Exemplo:

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

Você já viu vários desses métodos antes. Aqui, o método `open` inicializa a solicitação como um `POST` para um determinado URL de um recurso externo, usando o booleano `true` para torná-lo assíncrono. O método `setRequestHeader` define o valor de um cabeçalho de solicitação HTTP, que contém informações sobre o remetente e sobre a solicitação. Ele deve ser chamado após o método `open`, mas antes do método `send`. Os dois parâmetros são o nome do cabeçalho e o valor a ser definido como o corpo desse cabeçalho. Em seguida, o listener do evento `onreadystatechange` trata a mudança no estado da solicitação. Um `readyState` com o valor `4` significa que a operação foi concluída, enquanto o `status` `201` significa que a solicitação foi um sucesso. O HTML do documento pode ser atualizado. Por fim, o método `send` envia a solicitação com o valor de `body`, que era a chave `userName` fornecida pelo usuário no campo `input`.

# --instructions--

Atualize o código para fazer uma solicitação de `POST` para o endpoint da API. Em seguida, digite seu nome no campo de entrada e clique em `Send Message`. Sua função do AJAX deve substituir `Reply from Server will be here.` pelos dados do servidor. Formate a resposta para que ela exiba seu nome anexado ao texto `loves cats`.

# --hints--

O código deve criar uma nova `XMLHttpRequest`.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

O código deve usar o método `open` para inicializar uma solicitação de `POST` para o servidor.

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

O código deve usar o método `setRequestHeader`.

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

O código deve ter um manipulador de evento `onreadystatechange` definido para uma função.

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

O código deve obter o elemento com a classe `message` e mudar seu `textContent` para `userName loves cats`

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

O código deve usar o método `send`.

```js
assert(code.match(/\.send\(\s*?body\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
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

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201){
          const serverResponse = JSON.parse(xhr.response);
          document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
       }
     };
     const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
     xhr.send(body);
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

<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```
