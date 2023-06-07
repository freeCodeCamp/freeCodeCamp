---
id: 587d7fb0367417b2b2512bef
title: Servir um arquivo HTML
challengeType: 2
forumTopicId: 301516
dashedName: serve-an-html-file
---

# --description--

Você pode responder às solicitações com um arquivo usando o método `res.sendFile(path)`. Você pode colocá-lo dentro do manipulador de rota `app.get('/', ...)`. Nos bastidores, este método definirá os cabeçalhos apropriados para instruir o navegador sobre como lidar com o arquivo que você deseja enviar, de acordo com o tipo. Então, ele lerá e enviará o arquivo. Este método precisa de um caminho de arquivo absoluto. Recomendamos que use a variável global `__dirname` do Node para calcular o caminho assim:

```js
absolutePath = __dirname + '/relativePath/file.ext'
```

# --instructions--

Envie o arquivo `/views/index.html` como uma resposta para solicitações de GET para o caminho `/`. Ao ver sua aplicação ao vivo, você deverá perceber um grande título em HTML (e um formulário, que usaremos mais tarde…), sem nenhum estilo aplicado.

**Observação:** você pode editar a solução do desafio anterior ou criar uma nova. Se você criar uma nova solução, tenha em mente que o Express avalia rotas de cima para baixo e executa o manipulador para a primeira correspondência. Você tem que deixar comentada a solução anterior, ou o servidor continuará respondendo com uma string.

# --hints--

O aplicativo deve servir o arquivo views/index.html

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.match(
        data,
        /<h1>.*<\/h1>/,
        'Your app does not serve the expected HTML'
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
