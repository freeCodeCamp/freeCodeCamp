---
title: Running Webpack and Webpack Dev Server
localeTitle: Ejecutando Webpack y Webpack Dev Server
---
Ha llegado el momento de utilizar Webpack. Debido a que Webpack se instala globalmente, podemos ejecutar lo siguiente en nuestro terminal:
```
webpack 
```

Esto ejecutará nuestro archivo `webpack.config.js` . Debería ejecutarse con éxito, y deberíamos ver algo como esto aparecer en nuestro terminal:
```
Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 1721ms 
    Asset    Size  Chunks             Chunk Names 
 bundle.js  679 kB       0  <a href='https://webpack.github.io/docs/webpack-dev-server.html' target='_blank' rel='nofollow'>emitted]  main 
    + 159 hidden modules 
```

Tenga en cuenta que se refiere a un `Asset` llamado `bundle.js` . Webpack nos dice que este archivo se creó cuando `webpack` comando `webpack` . Revise su carpeta `dist` , y debería ver su `bundle.js` junto a su `index.html` .

Nuestro árbol ahora se verá así:
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

¡Ahora que tenemos un `dist/bundle.js` , nuestro archivo `dist/index.html` ahora se refiere a un archivo que existe! Si echamos un vistazo a `bundle.js` , veremos que es un paquete de todos los archivos JavaScript en nuestro proyecto. ¡Guay!

¡Adelante, busca algunos contenidos de nuestro `dist/bundle.js` , como `This is one cool app!` . Podemos ver su contexto en el archivo, está dentro de un método de aspecto extraño:
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

Esto es lo que Babel ha hecho; ha convertido el código a ES5 y lo ha incluido en otros archivos JavaScript, incluidos todos nuestros módulos de nodo, por supuesto. Ahora, todos nuestros archivos React pueden referirse a este paquete utilizando las declaraciones de `import` ES6.

Finalmente, es hora de revisar la aplicación en un navegador. Para esto, vamos a utilizar Webpack Dev Server, que es una herramienta rica en características que se utiliza para configurar un servidor `localhost` para propósitos de desarrollo cuando se usa Webpack.

*   \[Ayuda: Más sobre Webpack Dev Server

Sigue adelante y corre:
```
webpack-dev-server --content-base dist 
```

Necesitamos incluir `--content-base dist` para especificar una base de contenido para Webpack Dev Server, para que sepa dónde obtener los archivos; en este caso, es la carpeta `dist` , porque es la carpeta que estamos usando para la **producción** en lugar de la carpeta `src` , que estamos usando para el _desarrollo_ \*.

En nuestra terminal, deberíamos ver algo como lo siguiente:
```
http://localhost:8080/webpack-dev-server/ 
 webpack result is served from / 
 content is served from /Code/react-webpack-example/dist 
 Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 3738ms 
```

A continuación, encontrará una lista muy larga de todos los archivos empaquetados en `dist/bundle.js` por Webpack. ¡Asombroso!

Ahora es el momento de dirigirse a la URL proporcionada por ese `webpack-dev-server` , `http://localhost:8080/` . Deberíamos ver una página con un `h1` que diga:
```
This is one cool app! 
```

Revisemos el panel Elementos de nuestras Herramientas de desarrollo. Deberíamos tener lo siguiente:
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

Si esto es lo que escribimos en `src/js/client.js` , veremos cómo React se renderiza en `dist/index.html` .

Si llegaste tan lejos, ¡bien hecho! Ahora ya sabe cómo configurar un espacio de trabajo con React, Webpack y el código ES6, lo que es increíble y le brinda el punto de partida para crear impresionantes aplicaciones web utilizando tecnologías de vanguardia.

En el siguiente tutorial cubriremos algunos pasos más avanzados, que incluyen:

*   Entrando en más detalle con React
*   Mirando otras características interesantes de Webpack, como compilar archivos Sass
*   Usando minification en nuestro `dist/bundle.js`

#### Más información:

[Sitio web de webpack](https://webpack.js.org/)

[Webpack Github](https://github.com/webpack/webpack)

[webpack-dev-server Github](https://github.com/webpack/webpack-dev-server)