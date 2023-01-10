---
id: 587d7fb2367417b2b2512bf7
title: Usar o body-parser para analisar solicitações de POST
challengeType: 2
forumTopicId: 301520
dashedName: use-body-parser-to-parse-post-requests
---

# --description--

Além do GET, existe um outro verbo comum de HTTP, o POST. POST é o método padrão usado para enviar dados do client com formulários HTML. Na convenção de REST, POST é usado para enviar dados para criar novos itens no banco de dados (um novo usuário, ou um nova publicação no blog). Você não tem um banco de dados neste projeto, mas vai aprender como lidar com solicitações de POST, mesmo assim.

Nesse tipo de solicitação, os dados não aparecem no URL. Eles estão ocultos no corpo da solicitação. O corpo (body) é uma parte da solicitação do HTTP, também chamada de payload. Mesmo que os dados não sejam visíveis no URL, isso não significa que sejam privados. Para saber o porquê, consulte o conteúdo bruto de uma solicitação de POST de HTTP:

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

Como você pode ver, o body é codificado como a string de consulta. Este é o formato padrão usado pelos formulários de HTML. Com o Ajax, você também pode usar JSON para tratar os dados tendo uma estrutura mais complexa. Existe também um outro tipo de codificação: multipart/form-data. Esta é usada para enviar arquivos binários. Neste exercício, você usará um body codificado do URL. Para analisar os dados provenientes de solicitações de POST, você deve instalar o pacote `body-parser`. Este pacote permite que você use uma série de middleware, que pode decodificar os dados em diferentes formatos.

# --instructions--

`body-parser` já está instalado e está no arquivo `package.json` do projeto. Faça o `require` na parte superior do arquivo `myApp.js` e armazene-o em uma variável chamada `bodyParser`. O middleware para manipular dados com codificação do URL é retornado por `bodyParser.urlencoded({extended: false})`. Passe a função retornada pela chamada do método anterior para `app.use()`. Como sempre, o middleware deve ser montado antes de todas as rotas que dependem dele.

**Observação:** `extended` é uma opção de configuração que informa ao `body-parser` que a análise (parsing) precisa ser usada. Quando `extended=false` ele usa a biblioteca clássica de codificação, `querystring`. Quando `extended=true` ele usa a biblioteca `qs` para a análise.

Ao usar `extended=false`, os valores podem ser apenas strings ou arrays. O objeto retornado ao usar `querystring` não herda prototipicamente do `Object` de JavaScript padrão, o que significa que funções como `hasOwnProperty` e `toString` não estarão disponíveis. A versão estendida permite mais flexibilidade aos dados, mas é superada por JSON.

# --hints--

O middleware 'body-parser' deve estar montado

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/add-body-parser').then(
    (data) => {
      assert.isAbove(
        data.mountedAt,
        0,
        '"body-parser" is not mounted correctly'
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
