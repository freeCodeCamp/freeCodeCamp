---
id: 5895f700f9fc0f352b528e63
title: Configurar um mecanismo de modelo
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

Trabalhar nesses desafios vai fazer com que você escreva seu código usando um dos seguintes métodos:

- Clone <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete esses desafios localmente.
- Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial do Replit</a> para completar esses desafios.
- Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Se você usa o Replit, siga estas etapas para configurar o projeto:

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para a solução no campo Solution Link.

Um mecanismo de templates (template engine) permite o uso de arquivos de modelo estáticos (como aqueles escritos no *Pug*) na aplicação. Em tempo de execução, o mecanismo de modelos substitui variáveis em um arquivo de modelo por valores reais que podem ser fornecidos pelo servidor. Em seguida, ele transforma o modelo em um arquivo HTML estático, que é enviado ao client. Esta abordagem torna mais fácil projetar uma página HTML e permite exibir variáveis na página sem precisar fazer uma chamada de API do client.

`pug@~3.0.0` já foi instalado e está listado como uma dependência no arquivo `package.json`.

O Express precisa saber qual mecanismo de modelos você está usando. Use o método `set` para atribuir `pug` como o valor de `view engine` da propriedade:

```javascript
app.set('view engine', 'pug');
```

Depois disso, adicione outro método `set` que defina a propriedade `views` do `app` para que aponte para o diretório `./views/pug`. Isto diz ao Express para renderizar todas as views relativas a esse diretório.

Por fim, use `res.render()` na rota para a sua página inicial, passando `index` como primeiro argumento. Isto vai renderizar o template `pug`.

Se tudo correu como planejado, o aplicativo não estará mais em branco. Em vez disso, ele exibirá uma mensagem indicando que você renderizou com sucesso o modelo Pug!

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-a-template-engine-1" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

O Pug deve ser uma dependência.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'pug',
    'Your project should list "pug" as a dependency'
  );
}
```

O mecanismo de visualização (view engine) deve ser o Pug.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.['view engine'], "pug");
}
```

Você deve definir a propriedade `views` da aplicação para `./views/pug`.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.views, "./views/pug");
}
```

Use o método correto do ExpressJS para processar a página do índice a partir da resposta.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    }
```

O Pug deve funcionar.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    }
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
