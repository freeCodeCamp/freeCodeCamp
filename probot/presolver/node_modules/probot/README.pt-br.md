# Probot

[![npm version](https://img.shields.io/npm/v/probot.svg)](https://www.npmjs.com/package/probot) [![](https://img.shields.io/twitter/follow/ProbotTheRobot.svg?style=social&logo=twitter&label=Follow)](https://twitter.com/ProbotTheRobot)

> 🤖 Um framework para criar aplicativos do GitHub para automatizar e melhorar seu fluxo de trabalho

Se você já pensou, "não seria legal se o GitHub pudesse..."; Eu vou parar você aí mesmo. A maioria dos recursos pode realmente ser adicionada via [GitHub Apps](https://developer.github.com/apps/), que estende o GitHub e pode ser instalado diretamente em organizações e contas de usuários e com acesso a repositórios específicos. Eles vêm com permissões granulares e webhooks integrados. Os aplicativos são atores de primeira classe no GitHub.

## Como funciona

**Probot é um framework para construir [GitHub Apps](http://developer.github.com/apps) em [Node.js](https://nodejs.org/)**, escrito em [TypeScript]( https://www.typescriptlang.org/). O GitHub Apps pode ouvir eventos de webhook enviados por um repositório ou organização. O Probot usa seu emissor de evento interno para executar ações com base nesses eventos. Um aplicativo Probot simples pode ter esta aparência:

```js
module.exports = (app) => {
  app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Obrigado por abrir esta issue!' })
    return context.github.issues.createComment(issueComment)
  })
}
```

## Criando um app Probot

Se você acessou este repositório GitHub e está procurando começar a construir seu próprio aplicativo Probot, não precisa procurar mais do que [probot.github.io](https://probot.github.io/docs/)! O site Probot contém nossa extensa documentação inicial e o guiará pelo processo de configuração.

Este repositório hospeda o código do pacote npm Probot, que é o que todos os Apps Probot executam. A maioria das pessoas que vem neste repositório provavelmente estão querendo começar [construindo seu próprio aplicativo](https://probot.github.io/docs/).

## Contribuindo

Probot é construído por pessoas como você! A maioria das coisas interessantes são construídas com o Probot, então considere começar [escrevendo um novo aplicativo](https://probot.github.io/docs/) ou melhorando [um dos existentes](https://github.com/search?q=topic%3Aprobot-app&type=Repositories).

Se você estiver interessado em contribuir com o Probot, confira nossa [doc de contribuição](CONTRIBUTING.md) para começar.

Quer conversar com usuários Probot e colaboradores? [Junte-se a nós no Slack](https://probot-slackin.herokuapp.com/)!

## Ideias

Tem uma ideia para um novo app GitHub legal (feito com o Probot)? Isso é ótimo! Se você quer feedback, ajuda, ou apenas para compartilhá-lo com o mundo, você pode fazer isso [criando uma issue no repositório `probot/ideas`](https://github.com/probot/ideas/issues/new)!
