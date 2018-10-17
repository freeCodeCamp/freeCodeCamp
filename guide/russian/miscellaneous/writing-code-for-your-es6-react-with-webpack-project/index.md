---
title: Writing Code for Your Es6 React with Webpack Project
localeTitle: Написание кода для вашего Es6 React with Webpack Project
---
## расстояние / index.html

Теперь мы можем открыть наш `dist/index.html` . Это будет одна страница HTML, которая загружает все наше приложение. Нам не нужно много кода для этого файла, достаточно:

*   Установите элемент для React DOM в `src/js/client.js` .
*   Ссылка на наш связанный файл JavaScript (который еще не существует).

Таким образом, наш файл `dist/index.html` будет выглядеть так:
```
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>React Webpack Example</title> 
 </head> 
 <body> 
  <!-- React app will be injected into the following `div` element: --> 
  <div id="app"></div> 
  <!-- Include bundled JavaScript: --> 
  <script src="bundle.js"></script> 
 </body> 
 </html> 
```

Возможно, вам интересно, почему эта страница ссылается на `bundle.js` когда все, что у нас есть, это пустой `src/js/client.js` . Это будет показано позже, когда мы напишем наш конфигурационный файл Webpack.

## SRC / JS / client.js

Теперь пришло время написать код React. Так же, как в файле `dist/index.html` , на данный момент мы напишем достаточно кода, чтобы получить приложение, поэтому совсем не потребуется кода:
```
import React from 'react'; 
 import ReactDOM from 'react-dom'; 
 
 class Main extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h1>This is one cool app!</h1> 
      </div> 
    ); 
  } 
 } 
 
 const app = document.getElementById('app'); 
 ReactDOM.render(<Main />, app); 
```

Код, который выглядит как элементы HTML, на самом деле является JSX, который является частью React.

*   [Справка: Подробнее о JSX](http://buildwithreact.com/tutorial/jsx)

Чтобы объяснить, что происходит в этом файле, мы сломаем его:

*   Во-первых, мы импортируем `React` и `ReactDOM` . Они необходимы для любого файла React, который используется для ввода кода в DOM. `ReactDOM` - это виртуальный DOM, и это не то же самое, что стандартная Document Object Model.
    
*   [Справка: Подробнее о React DOM](https://facebook.github.io/react/docs/glossary.html)
    
    *   Затем мы создаем класс React. Классы были добавлены в JavaScript в ES6. Таким образом, это метод ES6 для записи класса React, но, конечно же, [мы можем написать его и в ES5](https://toddmotto.com/react-create-class-versus-component/) .
*   [Справка: Подробнее о классах ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    

Каждый класс React имеет метод `render` . В этом случае метод `render` `return` элемент `div` JSX. Это то, что мы увидим во всем файле React. Класс может содержать другие методы, которые должны отображаться перед методом `render` , который всегда идет в нижней части класса.

*   Наконец, мы связываем React с нашим `index.html` . Мы установили `app` как место, где мы хотим, чтобы наш код React был введен. И, наконец, используя ReactDOM, мы вставляем компонент, который мы написали, `<Main />` , в приложение, которое в этом случае является `div` с `id` `app` .

## webpack.config.js

Остается еще один файл, который нужно написать, прежде чем наш проект будет готов. Это файл конфигурации Webpack. Сначала файлы `webpack.config.js` могут сбивать с толку, но часто они не так сложны, как кажется.

В этом случае, в своем самом основном, `webpack.config.js` экспортирует объект, который обладает следующими свойствами:

| Недвижимость | Роль |  
| --- | --- |  
| вход | Что входит: точка входа в приложение. В этом случае это `src/js/client.js` . |  
| выход | Что выходит: что Webpack собирается расслоить для нас. В этом случае это то, что мы `webpack.config.js` в `webpack.config.js` . |  
| погрузчики | Задачи, которые Webpack собирается выполнить. |

Вот как `webpack.config.js` файл `webpack.config.js` :
```
var path = require('path'); 
 var srcPath = path.join(__dirname, 'src'); 
 var buildPath = path.join(__dirname, 'dist'); 
 
 module.exports = { 
  context: srcPath, 
  entry: path.join(srcPath, 'js', 'client.js'), 
  output: { 
      path: buildPath, 
      filename: "bundle.js" 
  }, 
  module: { 
      loaders: <a href='https://en.wikipedia.org/wiki/Don%27t_repeat_yourself' target='_blank' rel='nofollow'> 
          { 
            test: /\.jsx?$/, 
            exclude: /(node_modules|bower_components)/, 
            loader: 'babel', 
            query: { 
              presets: ['react', 'es2015'] 
            } 
          } 
      ] 
  } 
 }; 
```

Опять же, давайте разложим его так, чтобы было ясно, что делает этот файл:

*   Во-первых, нам нужен модуль `path` NodeJS, чтобы мы могли обрабатывать пути к файлам, необходимые для установки `context` объекта. Очень важно использовать этот модуль, а не пытаться и конкатенировать каталоги со строками, потому что для этого требуются некоторые операционные системы, такие как Windows.
    
*   Затем мы указываем `srcPath` и `buildPath` используя необходимый нам `path` . Выполнение этого гарантирует, что у нас \[СУШЕНЫЙ, читаемый код.
    
*   Настало время написать объект. Свойства, которые мы собираемся использовать, имеют отношение к Webpack.
    
    *   Сначала мы предоставляем контекст, который просто указывает, где находится наше приложение. Это относится к переменной `context` которую мы только что создали.
    *   Затем мы указываем точку входа, которая, конечно же, представляет собой приложение React, которое мы написали ранее ( `src/js/client.js` ).
    *   Затем мы укажем имя связанного файла, который Webpack создает при его запуске. В этом случае это `dist/bundle.js` . Звучит знакомо? Это должно быть сделано, потому что это файл, с которым мы связываемся с нашим `dist/index.html` !
    *   Наконец, появляется свойство `module` , которое содержит массив, `loaders` , который в настоящее время содержит один объект. Свойства этого объекта сообщают Webpack, какие файлы JavaScript записываются с ES6 и React, так что его загрузчик, `babel` может работать соответственно при `webpack.config.js` . Это в основном шаблонный код, который мы можем увидеть на [странице readme на Babel Loader](https://github.com/babel/babel-loader) .

Если `webpack.config.js` запутывает сейчас, не волнуйтесь, если вы понимаете, что он должен делать.

*   [Справка: Подробнее о создании файла конфигурации Webpack](https://webpack.github.io/docs/tutorials/getting-started/#config-file)