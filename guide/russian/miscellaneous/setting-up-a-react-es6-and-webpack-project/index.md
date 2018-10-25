---
title: Setting Up a React Es6 and Webpack Project
localeTitle: Настройка проекта Rex Es6 и Webpack
---
Эта вики проинструктирует вас, как настроить проект bare-bones, который использует React, Webpack и ES6. Мы перейдем к тому, чтобы все было настроено по глубине.

*   [Помощь: Больше о реакторе](https://facebook.github.io/react/docs/why-react.html)

Для этого проекта мы будем использовать Webpack, который является модульным модулем и обычно используется в проектах React.

*   [Справка: Подробнее о Webpack](https://webpack.github.io/docs/what-is-webpack.html)

[React хорошо сочетается с ES6](https://babeljs.io/blog/2015/06/07/react-on-es6-plus) , поэтому мы будем использовать ES6 в нашем коде.

> ES6 является важным обновлением языка, и первое обновление для языка, поскольку ES5 был стандартизован в 2009 году.  
> \- [lukehoban](https://github.com/lukehoban/es6features)

ES6 еще не работает в браузерах, но мы можем заставить его работать вручную, используя Babel, чтобы перевести его на ES5.

Ключевой особенностью технологий, которые мы используем, является то, что наш файл `index.html` будет ссылаться на один связанный файл JavaScript, из которого мы можем ссылаться в других файлах JavaScript, а не ссылаться на них из файла HTML с тегами `script` .

*   [Справка: Подробнее о ES6](http://dev.venntro.com/2013/09/es6-part-1/)

## Предпосылки

Этот учебник предназначен для того, чтобы дать вам структуру с костью, на которой можно развернуть. Это должно быть хорошей отправной точкой для всех, кто хочет изучить React и ES6. Если вы еще ничего не создали с помощью JavaScript или jQuery, сначала выполните некоторые из упражнений на [карте FreeCodeCamp](http://www.freecodecamp.com/map) .

Прежде чем начать, убедитесь, что у вас установлены [NodeJS](https://nodejs.org/en/download/) и [Node Package Manager](http://blog.npmjs.org/post/85484771375/how-to-install-npm) в самых последних версиях.

# Быстрые инструкции

Ниже приведен список всех инструкций, упомянутых в этом уроке.

*   `npm install webpack webpack-dev-server -g`
*   `mkdir react-webpack-example && cd $_`
*   `touch webpack.config.js`
*   `npm init`
*   `npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react`
*   `touch .gitignore`
*   напишите `.gitignore` (используйте [https://www.gitignore.io/api/node](https://www.gitignore.io/api/node) )
*   `mkdir src`
*   `mkdir dist`
*   `mkdir src/js`
*   `touch src/js/client.js`
*   `touch dist/index.html`
*   написать `dist/index.html`
*   написать `src/js/client.js`
*   написать `webpack.config.js`
*   `webpack`
*   `webpack-dev-server --content-base dist`
*   Откройте сервер Webpack Dev Server в браузере. Готово!