---
title: Writing Code for Your Es6 React with Webpack Project
localeTitle: Escribir código para su proyecto Es6 React con Webpack
---
## dist / index.html

Podemos ir ahora a abrir nuestro `dist/index.html` . Esta será la única página HTML que carga toda nuestra aplicación. No necesitamos mucho código para este archivo, solo lo suficiente para:

*   Establezca un elemento para React DOM en `src/js/client.js` .
*   Enlace a nuestro archivo JavaScript incluido (que aún no existe).

Por lo tanto, este es el aspecto que tendrá nuestro archivo `dist/index.html` :
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

Quizás se esté preguntando por qué esta página se vincula con un `bundle.js` cuando todo lo que tenemos hasta ahora es un `src/js/client.js` . Esto se revelará más adelante cuando escribamos nuestro archivo de configuración de Webpack.

## src / js / client.js

Ahora es el momento de escribir un código React. Al igual que en el archivo `dist/index.html` , por ahora escribiremos solo el código suficiente para que la aplicación funcione, por lo que no se requerirá mucho código:
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

El código que parece elementos HTML es en realidad JSX, que es parte de React.

*   [Ayuda: Más sobre JSX](http://buildwithreact.com/tutorial/jsx)

Para explicar lo que está pasando en este archivo, lo desglosaremos:

*   Primero, estamos importando `React` y `ReactDOM` . Estos son necesarios para cualquier archivo React que se use para inyectar código en el DOM. El `ReactDOM` es un DOM virtual, y no es lo mismo que el Modelo de Objeto de Documento estándar.
    
*   [Ayuda: Más sobre React DOM](https://facebook.github.io/react/docs/glossary.html)
    
    *   A continuación, estamos creando una clase React. Las clases fueron agregadas a JavaScript en ES6. Por lo tanto, este es el método ES6 para escribir una clase React, pero, por supuesto [, también podemos escribir una en ES5](https://toddmotto.com/react-create-class-versus-component/) .
*   [Ayuda: Más sobre las clases de ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    

Cada clase React tiene un método de `render` . En este caso, el método de `render` está `return` un elemento `div` JSX. Esto es lo que veremos en cualquier archivo React. La clase puede contener otros métodos que deben aparecer antes que el método de `render` , que siempre va al final de una clase.

*   Por último, estamos vinculando React con nuestro `index.html` . Configuramos la `app` para que sea la ubicación donde queramos que se inyecte nuestro código React. Y finalmente, usando ReactDOM, inyectamos el componente que escribimos, `<Main />` , en la aplicación, que en este caso es el `div` con el `id` de la `app` .

## webpack.config.js

Todavía queda un archivo más por escribir antes de que nuestro proyecto esté listo. Es el archivo de configuración de Webpack. Al principio, los archivos `webpack.config.js` pueden ser confusos, pero a menudo no son tan complejos como parecen.

En este caso, en su forma más básica, un `webpack.config.js` exporta un objeto que tiene las siguientes propiedades:

| Propiedad | Papel  
| --- | --- |  
| entrada | Lo que entra: el punto de entrada de la aplicación. En este caso, es `src/js/client.js` . |  
| salida | Lo que sale: lo que Webpack va a agrupar para nosotros. En este caso, es lo que sea que lo `webpack.config.js` en el `webpack.config.js` . |  
| cargadoras | Las tareas que va a realizar Webpack. |

Aquí es cómo se `webpack.config.js` archivo `webpack.config.js` :
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

Nuevamente, vamos a desglosarlo para que quede claro lo que está haciendo este archivo:

*   En primer lugar, estamos requiriendo de NodeJS `path` módulo de manera que podemos manejar las rutas de archivos, que se requiere para el ajuste del objeto de `context` . Es muy importante usar este módulo en lugar de intentar y concatenar directorios con cadenas, ya que algunos sistemas operativos, como Windows, lo requieren.
    
*   Luego, especificamos un `srcPath` y un `buildPath` usando el módulo de `path` que solo requerimos. Hacer esto asegurará que tengamos \[SECADO, código legible.
    
*   Ahora llega el momento de escribir el objeto. Las propiedades que vamos a utilizar son todas relevantes para Webpack.
    
    *   Primero proporcionamos un contexto, que simplemente especifica dónde está nuestra aplicación. Se refiere a la variable de `context` que acabamos de crear.
    *   Luego especificamos el punto de entrada, que es, por supuesto, la aplicación React que escribimos anteriormente ( `src/js/client.js` ).
    *   A continuación, especificamos el nombre del archivo empaquetado que Webpack crea cuando se ejecuta. En este caso es `dist/bundle.js` . ¿Suena familiar? Debería hacerlo, porque este es el archivo al que nos vinculamos desde nuestro `dist/index.html` !
    *   Finalmente viene la propiedad de `module` , que contiene una matriz, `loaders` , que actualmente contiene un solo objeto. Las propiedades de este objeto le dicen a Webpack qué archivos JavaScript se están escribiendo con ES6 y React, de modo que su cargador, `babel` , pueda ejecutarse en consecuencia cuando se ejecuta `webpack.config.js` . Esto es, en gran medida, un código repetitivo que podemos ver en [la página Léame de Babel Loader](https://github.com/babel/babel-loader) .

Si `webpack.config.js` es confuso ahora, no se preocupe, siempre y cuando entienda lo que hay que hacer.

*   [Ayuda: Más sobre escribir un archivo de configuración de Webpack](https://webpack.github.io/docs/tutorials/getting-started/#config-file)