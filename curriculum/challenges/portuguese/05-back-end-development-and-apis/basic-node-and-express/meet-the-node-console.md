---
id: 587d7fb0367417b2b2512bed
title: Conhecer o console do Node
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Trabalhar nesses desafios vai fazer com que você escreva seu código usando um dos seguintes métodos:

- Clone <a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete esses desafios localmente.
- Use <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial no Gitpod</a> para completar esses desafios.
- Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Durante o processo de desenvolvimento, é importante poder verificar o que está acontecendo no código.

O Node é apenas um ambiente JavaScript. Como o JavaScript lado do client, você pode usar o console para exibir informações úteis de depuração. Em sua máquina local, você veria a saída do console em um terminal. No Gitpod, um terminal é aberto na parte inferior do editor por padrão.

Recomendamos que o terminal continue aberto enquanto você trabalha nesses desafios. Ao ler a saída no terminal, você poderá ver os erros que podem ocorrer.

O servidor deve ser reiniciado após serem feitas alterações em seus arquivos.

Você pode interromper o servidor pelo terminal usando `ctrl + c` e iniciá-lo usando o Node diretamente (`node mainEntryFile.js`) ou usando um script de execução no arquivo `package.json` com `npm run`.

Por exemplo, o script `"start": "node server.js"` seria executado pelo terminal usando `npm run start`.

Para implementar a reinicialização automática do servidor ao salvar arquivos, o Node fornece a flag `--watch`, que você pode adicionar ao começo do script `"start": "node --watch server.js"` — ou você pode instalar um pacote do npm como o `nodemon`. Deixamos isso para você fazer como exercício.

# --instructions--

Modifique o arquivo `myApp.js` para registrar "Hello World" no console.

# --hints--

`"Hello World"` deve estar no console

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
