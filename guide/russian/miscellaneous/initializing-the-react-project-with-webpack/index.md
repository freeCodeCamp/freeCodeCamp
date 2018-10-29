---
title: Initializing the React Project with Webpack
localeTitle: Инициализация проекта React с помощью Webpack
---
Первое, что нужно сделать, это открыть нашу терминальную / командную строку. Нам нужно установить Webpack и Webpack Dev Server глобально.

*   [Справка: Подробнее об установке модулей узлов в глобальном масштабе](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)
    
    npm установить webpack webpack-dev-server -g
    

Установка этих модулей во всем мире означает, что мы можем ссылаться на использование их соответствующих интерфейсов командной строки в терминале. Установка Webpack позволяет нам запускать `webpack` с терминала для выполнения сценария Webpack. Установка Webpack Dev Server позволяет нам запускать сервер localhost с использованием нашей конфигурации Webpack. Это станет понятным чуть позже.

В своем каталоге выбора создайте новый каталог, например, `react-webpack-example` , и замените в него каталог:
```
mkdir react-webpack-example && cd $_ 
```

Теперь, когда мы находимся в нашем новом каталоге, нам нужно создать наш файл Webpack, который будет жить в корне. Это файл конфигурации, и поэтому мы `webpack.config.js` его `webpack.config.js` .
```
touch webpack.config.js 
```

Теперь мы можем продолжить и [инициализировать проект npm,](https://docs.npmjs.com/cli/init) используя следующую команду:
```
npm init 
```

Мы можем идти вперед и нажимать клавишу ввода, чтобы просмотреть варианты, представленные нам в терминале.

Команда `npm init` создаст файл `package.json` , который будет содержать важные данные о нашем проекте.

До сих пор это то, на что должно выглядеть наше дерево:
```
. 
 ├── package.json 
 └── webpack.config.js 
```

Если вы откроете файл `package.json` , вы увидите следующее:
```
{ 
  "name": "react-webpack-example", 
  "version": "1.0.0", 
  "description": "", 
  "main": "webpack.config.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "author": "", 
  "license": "ISC" 
 } 

```