---
title: Installing Dependencies for React with Webpack Projects
localeTitle: Instalando Dependências para Reagir com Projetos Webpack
---
Agora que temos um arquivo de configuração Webpack vazio ( `webpack.config.js` ) e um arquivo de pacote recém-criado ( `package.json` ), precisamos instalar algumas dependências. Instalar dependências adiciona automaticamente alguns dados ao nosso `package.json` .

Este projeto dependerá do React, ReactDOM, Webpack e Webpack Dev Server. Também dependerá de vários pacotes do Babel, porque vamos escrever código usando o ES6, e o [Babel é um transpiler do ES6](https://babeljs.io/) .

As dependências que precisamos em detalhes:

| Pacote | Razão |  
| [Reagir](https://www.npmjs.com/package/react) | 'Um pacote npm para obter acesso imediato ao React, sem exigir também o transformador JSX.' |  
| [Reagir DOM](https://www.npmjs.com/package/react-dom) | 'Este pacote serve como ponto de entrada dos caminhos de renderização relacionados ao DOM. Pretende ser emparelhado com o React isomórfico, que será enviado como reagir a npm '. |  
| [Webpack](https://www.npmjs.com/package/webpack) | "Permite dividir sua base de código em vários pacotes, que podem ser carregados sob demanda." |  
| [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) | 'Serve um aplicativo de webpack. Atualiza o navegador nas alterações. ' |  
| [Carregador de Babel](https://www.npmjs.com/package/babel-loader) | 'Carregador do módulo Babel para o Webpack.' |  
| Babel Core | Necessário para o Babel Loader. |  
| Babel Preset: ES2015 | Necessário para o Babel Loader. |  
| Babel Preset: Reagir | Necessário para o Babel Loader. |

Podemos ir em frente e instalar todos esses módulos com um único comando:
```
npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react 
```

Se olharmos para o nosso arquivo `package.json` agora, `devDependencies` que nossas `devDependencies` se tornaram uma lista dos pacotes de nós que acabamos de instalar. Isso é importante porque significa que podemos instalá-los novamente se precisarmos usar o `npm install` .

*   [Ajuda: Mais sobre `dependencies` e `devDependencies`](http://stackoverflow.com/a/22004559/4637110)