---
id: 587d7fb2367417b2b2512bf6
title: Obter a entrada do parâmetro da consulta do cliente
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

Outro jeito usual de obter a entrada do cliente é ao codificar os dados após o caminho da rota, usando uma string de consulta. A string de consulta é delimitada por um símbolo de interrogação (?) e inclui pares campo=valor. Cada par é separado por um e comercial(&). O Express pode analisar os dados da string de consulta e preencher o objeto `req.query`. Alguns caracteres, como o de porcentagem (%), não podem estar nos URLs e tem de ser codificados em um formato diferente antes que você os envie. Se você usa a API do JavaScript, você pode usar métodos específicos para codificar/decodificar esses caracteres.

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Faça uma API de endpoint (URL), montada em `GET /name`. Responda com um documento JSON, pegando a estrutura `{ name: 'firstname lastname'}`. O parâmetros primeiro e último nome devem ser codificados em uma string de consulta como, por exemplo: `?first=firstname&last=lastname`.

**Nota:** no exercício seguinte, você vai receber dados de uma requisição POST, no mesmo caminho de rota `/name`. Se você quiser, poderá usar o método `app.route(path).get(handler).post(handler)`. Essa sintaxe permite a você encadear diferentes manipuladores do tipo verb no mesmo caminho de rota. Você vai economizar na digitação e ter um código mais limpo.

# --hints--

Teste 1: O endpoint (URL) da API deverá responder com o nome correto

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Teste 2 : O endpoint (URL) da API deve responder com o nome correto

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
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
