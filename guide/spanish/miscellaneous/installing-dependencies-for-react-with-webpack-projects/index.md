---
title: Installing Dependencies for React with Webpack Projects
localeTitle: Instalar dependencias para reaccionar con proyectos de webpack
---
Ahora que tenemos un archivo de configuración de paquete web vacío ( `webpack.config.js` ) y un archivo de paquete recién creado ( `package.json` ), necesitamos instalar algunas dependencias. La instalación de dependencias agrega automáticamente algunos datos a nuestro `package.json` .

Este proyecto dependerá de React, ReactDOM, Webpack y Webpack Dev Server. También dependerá de varios paquetes de Babel, ya que vamos a escribir código utilizando ES6, y [Babel es un transpiler de ES6](https://babeljs.io/) .

Las dependencias que requerimos en detalle:

| Paquete | Razón |  
| [Reaccionar](https://www.npmjs.com/package/react) | 'Un paquete npm para obtener acceso inmediato a React, sin requerir también el transformador JSX'. |  
| [Reaccionar DOM](https://www.npmjs.com/package/react-dom) | 'Este paquete sirve como punto de entrada de las rutas de representación relacionadas con DOM. Está pensado para ser emparejado con el Reactivo isomorfo, que se enviará como reaccionar a npm. |  
| [Webpack](https://www.npmjs.com/package/webpack) | 'Permite dividir tu base de código en varios paquetes, que pueden cargarse a pedido'. |  
| [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) | 'Sirve una aplicación webpack. Actualiza el navegador sobre cambios. ' |  
| [Cargador Babel](https://www.npmjs.com/package/babel-loader) | 'Cargador de módulos Babel para Webpack'. |  
| Babel Core | Requerido para el cargador de Babel. |  
| Babel Preset: ES2015 | Requerido para el cargador de Babel. |  
| Babel Preset: Reaccionar | Requerido para el cargador de Babel. |

Podemos seguir adelante e instalar todos estos módulos con un solo comando:
```
npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react 
```

Si miramos nuestro archivo `package.json` ahora, notaremos que nuestras `devDependencies` han convertido en una lista de los paquetes de Nodos que acabamos de instalar. Esto es importante porque significa que podemos instalarlos nuevamente si necesitamos usar `npm install` .

*   [Ayuda: Más sobre `dependencies` y `devDependencies`](http://stackoverflow.com/a/22004559/4637110)