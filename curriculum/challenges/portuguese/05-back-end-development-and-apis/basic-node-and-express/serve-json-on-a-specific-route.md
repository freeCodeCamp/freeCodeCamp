---
id: 587d7fb1367417b2b2512bf1
title: Servir JSON em uma rota específica
challengeType: 2
forumTopicId: 301517
dashedName: serve-json-on-a-specific-route
---

# --description--

Enquanto um servidor HTML serve arquivos em HTML, uma API serve dados. Uma API <dfn>REST</dfn> (Transferência de Estado Representacional) permite a troca de dados de uma maneira simples sem a necessidade de os clients saberem qualquer detalhe sobre o servidor. O client só precisa saber onde o recurso está (qual o seu URL) e a ação que quer realizar nele (o verbo). O verbo GET é usado quando você busca algumas informações, sem modificar nada. Hoje em dia, o formato de dados preferencial para mover informações pela web é o JSON. Simplificando, JSON é uma maneira conveniente de representar um objeto JavaScript como uma string, que então pode ser facilmente transmitido.

Vamos criar uma API simples, gerando uma rota que responda com JSON no caminho `/json`. Você pode fazer isso como de costume, com o método `app.get()`. Dentro do manipulador de rota, use o método `res.json()`, passando um objeto como um argumento. Este método fecha o loop de solicitação-resposta, retornando os dados. Nos bastidores, ele converte um objeto JavaScript válido em uma string. Em seguida, define os cabeçalhos apropriados para dizer ao navegador que você está servindo JSON e envia os dados de volta. Um objeto válido tem a estrutura usual `{key: data}`. `data` pode ser um número, uma string, um objeto aninhado ou um array. `data` também podem ser uma variável ou o resultado de uma chamada de função. Nesse caso, ele será avaliado antes de ser convertido em uma string.

# --instructions--

Sirva o objeto `{"message": "Hello json"}` como uma resposta, no formato JSON, para solicitações de GET feitas à rota `/json`. Em seguida, aponte o navegador para `your-app-url/json`. Você deverá ver a mensagem na tela.

# --hints--

O `/json` do endpoint deve servir o objeto JSON `{"message": "Hello json"}`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/json').then(
    (data) => {
      assert.equal(
        data.message,
        'Hello json',
        "The '/json' endpoint does not serve the right data"
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
