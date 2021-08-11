---
id: 587d7fb2367417b2b2512bf5
title: Obter a entrada do parâmetro de roteamento do client
challengeType: 2
forumTopicId: 301513
dashedName: get-route-parameter-input-from-the-client
---

# --description--

Ao construir uma API, temos que permitir que os usuários nos comuniquem o que querem obter com o nosso serviço. Por exemplo, se o client estiver solicitando informações sobre um usuário armazenado no banco de dados, ele precisa de um modo de nos informar em qual usuário ele está interessado. Uma maneira possível de alcançar este resultado é utilizando parâmetros de roteamento. Parâmetros de roteamento são segmentos nomeados do URL, delimitados por barras (/). Cada segmento captura o valor da parte do URL que corresponde à sua posição. Os valores capturados podem ser encontrados no objeto `req.params`.

<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Crie um servidor de eco, montado na rota `GET /:word/echo`. Responda com um documento JSON, pegando a estrutura `{echo: word}`. Você pode encontrar a palavra a ser repetida em `req.params.word`. Você pode testar sua rota através da barra de endereços do seu navegador, visitando algumas rotas correspondentes, como, por exemplo, `your-app-rootpath/freecodecamp/echo`.

# --hints--

Teste 1: o servidor de eco deve repetir palavras corretamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/eChOtEsT/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'eChOtEsT',
        'Test 1: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Teste 2: o servidor de eco deve repetir palavras corretamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/ech0-t3st/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'ech0-t3st',
        'Test 2: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
