---
title: Initializing the React Project with Webpack
localeTitle: Inicializando el Proyecto React con Webpack
---
Lo primero que debe hacer es abrir nuestra línea / terminal de comandos. Necesitamos instalar webpack y webpack Dev servidor a nivel mundial.

*   [Ayuda: Más sobre la instalación de módulos de nodo a nivel mundial](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)
    
    NPM instalar webpack webpack-dev-servidor -g
    

La instalación de estos módulos a nivel mundial significa que podemos referirnos a utilizar sus respectivas interfaces de línea de comandos en el terminal. Instalación webpack nos permite ejecutar `webpack` de la terminal para ejecutar un script webpack. Instalación webpack Dev servidor nos permite ejecutar un servidor localhost usando nuestra configuración webpack. todo esto se aclarará un poco más tarde.

En su directorio de elección, hacer un nuevo directorio, por ejemplo `react-webpack-example` , y cambiar el directorio en él:
```
mkdir react-webpack-example && cd $_ 
```

Ahora que estamos en nuestro nuevo directorio, tenemos que crear nuestro archivo webpack, que vivirá en la raíz. Este es un archivo de configuración, por lo que lo nombra `webpack.config.js` .
```
touch webpack.config.js 
```

Ahora, podemos seguir adelante y [inicializar un proyecto NPM](https://docs.npmjs.com/cli/init) mediante el siguiente comando:
```
npm init 
```

Podemos seguir adelante y presione la tecla Intro para alternar entre las opciones que se nos presentan en el terminal.

La `npm init` comando creará un `package.json` archivo, que se va a contener datos importantes sobre nuestro proyecto.

Hasta el momento, esto es lo que nuestro árbol debe verse como:
```
. 
 ├── package.json 
 └── webpack.config.js 
```

Si abre su `package.json` archivo, debería ver algo como esto:
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