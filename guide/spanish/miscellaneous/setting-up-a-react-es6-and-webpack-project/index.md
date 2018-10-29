---
title: Setting Up a React Es6 and Webpack Project
localeTitle: Configuración de un proyecto React Es6 y Webpack
---
Este wiki le indicará cómo configurar un proyecto básico que utiliza React, Webpack y ES6. Vamos a revisar todo en profundidad.

*   [Ayuda: Más sobre React](https://facebook.github.io/react/docs/why-react.html)

Para este proyecto utilizaremos Webpack, que es un paquete de módulos, y se usa comúnmente en los proyectos React.

*   [Ayuda: Más sobre Webpack](https://webpack.github.io/docs/what-is-webpack.html)

[React va bien con ES6](https://babeljs.io/blog/2015/06/07/react-on-es6-plus) , así que usaremos ES6 en nuestro código.

> ES6 es una actualización importante para el idioma, y ​​la primera actualización del idioma desde que se estandarizó ES5 en 2009.  
> \- [lukehoban](https://github.com/lukehoban/es6features)

ES6 aún no funciona en los navegadores por sí solo, pero podemos hacer que funcione manualmente utilizando Babel para trasladarlo a ES5.

Una característica clave de las tecnologías que estamos usando es que nuestro archivo `index.html` se referirá a un archivo JavaScript incluido desde el cual podemos referirnos a otros archivos JavaScript, en lugar de referirnos a ellos desde el archivo HTML con etiquetas de `script` .

*   [Ayuda: Más sobre ES6](http://dev.venntro.com/2013/09/es6-part-1/)

## Prerrequisitos

Este tutorial está destinado a darle una estructura básica para expandirse. Debe ser un buen punto de partida para cualquier persona que quiera aprender React y ES6. Si aún no ha creado nada con JavaScript o jQuery, primero debe realizar algunos de los ejercicios en el [mapa FreeCodeCamp](http://www.freecodecamp.com/map) .

Antes de comenzar, asegúrese de tener [NodeJS](https://nodejs.org/en/download/) y [Node Package Manager](http://blog.npmjs.org/post/85484771375/how-to-install-npm) instalados en sus versiones más recientes.

# Instrucciones rápidas

Aquí hay una lista de todas las instrucciones mencionadas en este tutorial.

*   `npm install webpack webpack-dev-server -g`
*   `mkdir react-webpack-example && cd $_`
*   `touch webpack.config.js`
*   `npm init`
*   `npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react`
*   `touch .gitignore`
*   escriba `.gitignore` (use [https://www.gitignore.io/api/node](https://www.gitignore.io/api/node) )
*   `mkdir src`
*   `mkdir dist`
*   `mkdir src/js`
*   `touch src/js/client.js`
*   `touch dist/index.html`
*   escribe `dist/index.html`
*   escribe `src/js/client.js`
*   escribir `webpack.config.js`
*   `webpack`
*   `webpack-dev-server --content-base dist`
*   Abra la ruta del servidor Webpack Dev en el navegador. ¡Hecho!