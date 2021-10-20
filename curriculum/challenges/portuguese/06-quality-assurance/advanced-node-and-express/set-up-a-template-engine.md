---
id: 5895f700f9fc0f352b528e63
title: Configurar um mecanismo de modelo
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

Trabalhar nesses desafios vai fazer com que você escreva seu código usando um dos seguintes métodos:

- Clone [este repositório do GitHub](https://github.com/freeCodeCamp/boilerplate-advancednode/) e complete esses desafios localmente.
- Use [nosso projeto inicial do Replit](https://replit.com/github/freeCodeCamp/boilerplate-advancednode) para completar esses desafios.
- Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para ela no campo `Solution Link`.

Um mecanismo de templates (template engine) permite o uso de arquivos de modelo estáticos (como aqueles escritos no *Pug*) na aplicação. Em tempo de execução, o mecanismo de modelos substitui variáveis em um arquivo de modelo por valores reais que podem ser fornecidos pelo servidor. Em seguida, ele transforma o modelo em um arquivo HTML estático, que é enviado ao client. Esta abordagem torna mais fácil projetar uma página HTML e permite exibir variáveis na página sem precisar fazer uma chamada de API do client.

Adicione `pug@~3.0.0` como uma dependência no arquivo `package.json`.

O Express precisa saber qual mecanismo de modelos você está usando. Usaremos o método `set` para atribuir `pug` como o valor da propriedade `view engine`: `app.set('view engine', 'pug')`

A página não será carregada até que você renderize corretamente o arquivo de índice no diretório `views/pug`.

Altere o argumento da declaração `res.render()` na rota `/` para que seja o caminho de arquivo para o diretório `views/pug`. O caminho pode ser um caminho relativo (relativo às visualizações) ou um caminho absoluto e não necessita de uma extensão de arquivo.

Se tudo correu como planejado, sua página inicial vai parar de mostrar a mensagem "`Pug template is not defined.`" e agora exibirá uma mensagem indicando que você renderizou com sucesso o modelo do Pug!

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento [aqui](https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791).

# --hints--

O Pug deve ser uma dependência.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'pug',
        'Your project should list "pug" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O mecanismo de visualização (view engine) deve ser o Pug.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /('|")view engine('|"),( |)('|")pug('|")/gi,
        'Your project should set Pug as a view engine'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Use o método correto do ExpressJS para processar a página do índice a partir da resposta.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O Pug deve funcionar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
