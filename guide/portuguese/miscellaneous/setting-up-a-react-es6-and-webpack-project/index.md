---
title: Setting Up a React Es6 and Webpack Project
localeTitle: Configurando um Projeto React Es6 e Webpack
---
Este wiki irá instruí-lo sobre como configurar um projeto básico que use React, Webpack e ES6. Vamos ver tudo configurado em profundidade.

*   [Ajuda: Mais sobre Reagir](https://facebook.github.io/react/docs/why-react.html)

Para este projeto, faremos uso do Webpack, que é um módulo bundler, e é comumente usado em projetos do React.

*   [Ajuda: Mais sobre o Webpack](https://webpack.github.io/docs/what-is-webpack.html)

[Reaja bem com o ES6](https://babeljs.io/blog/2015/06/07/react-on-es6-plus) , então vamos usar o ES6 em nosso código.

> O ES6 é uma atualização significativa para o idioma e a primeira atualização para o idioma desde que o ES5 foi padronizado em 2009.  
> \- [lukehoban](https://github.com/lukehoban/es6features)

O ES6 não funciona nos navegadores por si só, mas podemos fazê-lo funcionar manualmente usando o Babel para transpilá-lo para o ES5.

Um recurso importante das tecnologias que estamos usando é que nosso arquivo `index.html` se referirá a um arquivo JavaScript incluído, do qual podemos nos referir em outros arquivos JavaScript, em vez de nos referirmos a eles a partir do arquivo HTML com tags de `script` .

*   [Ajuda: Mais sobre o ES6](http://dev.venntro.com/2013/09/es6-part-1/)

## Pré-requisitos

Este tutorial destina-se a fornecer uma estrutura básica sobre a qual expandir. Deve ser um bom ponto de partida para quem quer aprender Reagir e ES6. Se você ainda não construiu nada com JavaScript ou jQuery, você deve passar por alguns dos exercícios no [mapa FreeCodeCamp](http://www.freecodecamp.com/map) primeiro.

Antes de começar, verifique se você tem o [NodeJS](https://nodejs.org/en/download/) e o [Node Package Manager](http://blog.npmjs.org/post/85484771375/how-to-install-npm) instalados nas versões mais recentes.

# Instruções Rápidas

Aqui está uma lista de todas as instruções mencionadas neste tutorial.

*   `npm install webpack webpack-dev-server -g`
*   `mkdir react-webpack-example && cd $_`
*   `touch webpack.config.js`
*   `npm init`
*   `npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react`
*   `touch .gitignore`
*   escreva `.gitignore` (use [https://www.gitignore.io/api/node](https://www.gitignore.io/api/node) )
*   `mkdir src`
*   `mkdir dist`
*   `mkdir src/js`
*   `touch src/js/client.js`
*   `touch dist/index.html`
*   escreva `dist/index.html`
*   escreva `src/js/client.js`
*   escrever `webpack.config.js`
*   `webpack`
*   `webpack-dev-server --content-base dist`
*   Abra a rota do servidor de desenvolvimento Webpack no navegador. Feito!