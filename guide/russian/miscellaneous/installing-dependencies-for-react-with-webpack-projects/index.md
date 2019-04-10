---
title: Installing Dependencies for React with Webpack Projects
localeTitle: Установка зависимостей для работы с проектами Webpack
---
Теперь, когда у нас есть пустой файл конфигурации Webpack ( `webpack.config.js` ) и только что созданный файл пакета ( `package.json` ), нам нужно установить некоторые зависимости. Установка зависимостей автоматически добавляет некоторые данные в наш `package.json` .

Этот проект будет зависеть от React, ReactDOM, Webpack и Webpack Dev Server. Это также будет зависеть от ряда пакетов Babel, потому что мы собираемся писать код с использованием ES6, а [Babel - транспилер ES6](https://babeljs.io/) .

Необходимые нами зависимости подробно:

| Пакет | Причина |  
| [Реагировать](https://www.npmjs.com/package/react) | «Пакет npm для немедленного доступа к React, не требуя также и JSX-трансформатора». |  
| [Реагировать на DOM](https://www.npmjs.com/package/react-dom) | 'Этот пакет служит точкой входа связанных путей, связанных с DOM. Он предназначен для сопряжения с изоморфным реактивом, который будет отправлен в реакцию с числом оборотов в минуту ». |  
| [Webpack](https://www.npmjs.com/package/webpack) | «Позволяет разбить вашу кодовую базу на несколько пакетов, которые могут быть загружены по требованию». |  
| [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) | 'Обслуживает приложение webpack. Обновляет браузер при внесении изменений. ' |  
| [Барабанный погрузчик](https://www.npmjs.com/package/babel-loader) | «Загрузитель Babel для Webpack». |  
| Бабель-сердечник | Требуется для Babel Loader. |  
| Babel Preset: ES2015 | Требуется для Babel Loader. |  
| Babel Preset: Реагировать | Требуется для Babel Loader. |

Мы можем пойти и установить все эти модули с помощью одной команды:
```
npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react 
```

Если мы посмотрим на наш файл `package.json` , мы заметим, что наши `devDependencies` стали списком пакетов Node, которые мы только что установили. Это важно, потому что это означает, что мы можем установить их снова, если нам нужно использовать `npm install` .

*   [Справка: Подробнее о `dependencies` и `devDependencies`](http://stackoverflow.com/a/22004559/4637110)