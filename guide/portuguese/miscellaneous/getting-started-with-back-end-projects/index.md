---
title: Getting Started with Back End Projects
localeTitle: Começando com projetos de back-end
---
O currículo inicial do primeiro projeto de back-end não é muito abrangente. Aqui estão alguns recursos comuns que outros campistas acharam úteis.

*   Introdução ao Yeoman - Muitas dicas e truques úteis para a configuração Yeoman Angular FullStack
*   [Angular Generator](https://github.com/DaftMonk/generator-angular-fullstack#generators) - Gerador usado pelo Yeoman, você pode encontrar a sintaxe e quais arquivos ele cria

## APIs

*   API para criação de gráficos no mercado de ações: [https://www.quandl.com/help/api](https://www.quandl.com/help/api)

## MEAN Stack Tutoriais & Vídeos

*   5 Part Series na configuração de uma pilha MEAN  
    [https://www.youtube.com/watch?v=kHV7gOHvNdk](https://www.youtube.com/watch?v=kHV7gOHvNdk)
*   Um tutorial MÉDIO que cria um clone simples do Twitter  
    [https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start](https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start)
*   Clementine é uma pilha MEAN despojada, ótima para aprender os fundamentos.  
    [https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html](https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html)
*   Autenticação com o Passport para a pilha MEAN:  
    [https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs](https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs)
*   Uma lista incrível de recursos para aprender a pilha MEAN:  
    [https://github.com/ericdouglas/MEAN-Learning](https://github.com/ericdouglas/MEAN-Learning)

## Tutoriais Scotch IO

*   [https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application](https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application)
*   [https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure](https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure)

## Nó / Express

*   [Depuração Online para o Node.js / Express](http://stackoverflow.com/a/16512303/1420506)

## Cloud 9 Tricks

### Acelerar o recarregamento do navegador

1.  Abra o gruntfile.js e edite as duas instâncias do `livereload: true` to `livereload: false` .
2.  Abra server / config / express.js e comente a linha `app.use(require('connect-livereload')());`