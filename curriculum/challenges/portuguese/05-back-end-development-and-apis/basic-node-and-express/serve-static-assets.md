---
id: 587d7fb0367417b2b2512bf0
title: Servir ativos estáticos
challengeType: 2
forumTopicId: 301518
dashedName: serve-static-assets
---

# --description--

Um servidor HTML geralmente tem um ou mais diretórios acessíveis pelo usuário. Você pode colocar lá os recursos estáticos necessários para a aplicação (folhas de estilos, scripts e imagens).

No Express, você pode colocar esta funcionalidade usando o middleware `express.static(path)`, onde o parâmetro `path` é o caminho absoluto da pasta que contém os arquivos.

Se você não sabe o que é um middleware... não se preocupe. Discutiremos isso em detalhes mais tarde. Basicamente, middleware são funções que interceptam manipuladores da rota, adicionando algum tipo de informação. Um middleware precisa ser montado usando o método `app.use(path, middlewareFunction)`. O primeiro argumento, `path`, é opcional. Se você não passar esse argumento, o middleware será executado em todas as solicitações.

# --instructions--

Monte o middleware `express.static()` para o caminho `/public` com `app.use()`. O caminho absoluto para a pasta de arquivos é `__dirname + /public`.

Agora, seu aplicativo deve ser capaz de servir uma folha de estilos de CSS. Observe que o arquivo `/public/style.css` é referenciado em `/views/index.html` no boilerplate do projeto. A página inicial deve estar um pouco melhor agora!

# --hints--

Seu aplicativo deve servir arquivos de ativos do diretório `/public` no caminho `/public`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/style.css').then(
    (data) => {
      assert.match(
        data,
        /body\s*\{[^\}]*\}/,
        'Your app does not serve static assets'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A aplicação não deve servir arquivos de outras pastas além do diretório `/public`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/server.js').then(
    (data) => {
       assert.equal(
        data?.status + '',
        404 + '',
        'Your app must serve files only from "public" directory'
      );
    },
    (xhr) => {
      assert.equal(
        xhr?.status + '',
        404 + '',
        'Your app must serve files only from "public" directory'
      );
    }
  );
```

# --solutions--

```js
/**
  Desafios de back-end não precisam de soluções, 
  pois precisariam ser testados com relação a um projeto funcional completo. 
  Confira nossas diretrizes de contribuição para saber mais.
*/
```
