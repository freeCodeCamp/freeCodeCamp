---
title: Running Webpack and Webpack Dev Server
localeTitle: Запуск Webpack и Webpack Dev Server
---
Пришло время использовать Webpack. Поскольку Webpack установлен глобально, мы можем запустить следующее в нашем терминале:
```
webpack 
```

Это запустит наш файл `webpack.config.js` . Он должен работать успешно, и мы должны увидеть что-то подобное в нашем терминале:
```
Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 1721ms 
    Asset    Size  Chunks             Chunk Names 
 bundle.js  679 kB       0  <a href='https://webpack.github.io/docs/webpack-dev-server.html' target='_blank' rel='nofollow'>emitted]  main 
    + 159 hidden modules 
```

Обратите внимание, что это относится к `Asset` называемому `bundle.js` . Webpack сообщает нам, что этот файл был создан, когда мы запустили команду `webpack` . Проверьте свою папку `dist` , и вы увидите свой `bundle.js` вместе с вашим `index.html` .

Теперь наше дерево будет выглядеть так:
```
. 
 ├── dist 
 |   ├── bundle.js 
 │   └── index.html 
 ├── node_modules 
 ├── package.json 
 ├── src 
 │   └── js 
 │       └── client.js 
 └── webpack.config.js 
```

Итак, теперь, когда у нас есть `dist/bundle.js` , наш файл `dist/index.html` теперь ссылается на файл, который существует! Если мы посмотрим на `bundle.js` , мы увидим, что это набор всех файлов JavaScript в нашем проекте. Круто!

Идем дальше и ищем какое-то содержимое нашего `dist/bundle.js` , например, `This is one cool app!` , Мы можем видеть его контекст в файле, он находится в странном методе:
```
_createClass(Main, [{ 
  key: 'render', 
  value: function render() { 
    return _react2.default.createElement( 
      'div', 
      null, 
      _react2.default.createElement( 
        'h1', 
        null, 
        'This is one cool app!' 
      ) 
    ); 
  } 
 }]); 
```

Это то, что сделал Вавилон; он преобразовал код в ES5 и связал его с другими файлами JavaScript, включая все наши модули узлов, конечно. Теперь все наши файлы React могут ссылаться на этот пакет, используя инструкции `import` ES6.

Наконец, пришло время проверить приложение в браузере. Для этого мы собираемся использовать Webpack Dev Server, который представляет собой многофункциональный инструмент, который можно использовать для настройки сервера `localhost` для разработки целей при использовании Webpack.

*   \[Помощь: больше о Webpack Dev Server

Идите вперед и бегите:
```
webpack-dev-server --content-base dist 
```

Нам нужно `--content-base dist` чтобы указать базу контента на Webpack Dev Server, чтобы он знал, где `--content-base dist` файлы для обслуживания; в этом случае это папка `dist` , потому что это папка, которую мы используем для **производства,** в отличие от папки `src` , которую мы используем для _разработки_ \*.

В нашем терминале мы должны увидеть что-то вроде следующего:
```
http://localhost:8080/webpack-dev-server/ 
 webpack result is served from / 
 content is served from /Code/react-webpack-example/dist 
 Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 3738ms 
```

После этого будет очень длинный список всех файлов, `dist/bundle.js` в `dist/bundle.js` через Webpack. Удивительно!

`webpack-dev-server` время перейти к URL-адресу, предоставленному этой командой `webpack-dev-server` , `http://localhost:8080/` . Мы должны увидеть страницу с `h1` которая гласит:
```
This is one cool app! 
```

Давайте посмотрим на панель «Элементы» наших инструментов разработчика. Мы должны иметь следующее:
```
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>React Webpack Example</title> 
  <style type="text/css"></style> 
 </head> 
 <body> 
  <!-- React app will be injected into the following `div` element: --> 
  <div id="app"> 
    <div data-reactid=".0"> 
      <h1 data-reactid=".0.0">This is one cool app!</h1> 
    </div> 
  </div> 
  <!-- Include bundled JavaScript: --> 
  <script src="bundle.js"></script> 
 </body> 
 </html> 
```

Если мы это `src/js/client.js` в `src/js/client.js` , мы увидим, как React отображает в `dist/index.html` .

Если вы добрались до этого, молодцы! Теперь вы знаете, как настроить рабочее пространство с помощью кода React, Webpack и ES6, что является удивительным, и дает вам отправную точку для создания впечатляющих веб-приложений с использованием передовых технологий.

В следующем уроке мы рассмотрим несколько дополнительных шагов, в том числе:

*   Более подробно с React
*   Рассматривая некоторые другие интересные функции Webpack, такие как компиляция файлов Sass
*   Используя minification на нашем `dist/bundle.js`

#### Дополнительная информация:

[Веб-сайт](https://webpack.js.org/)

[Webpack Github](https://github.com/webpack/webpack)

[webpack-dev-сервер Github](https://github.com/webpack/webpack-dev-server)