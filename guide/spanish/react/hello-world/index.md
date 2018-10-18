---
title: Hello World
localeTitle: Hola Mundo
---
## Hola Mundo !!

Cuando se comienza a aprender un lenguaje de programación el primer programa consiste del ejemplo de Hello World tradicional. Aquí, te presentamos React con el mismo programa HelloWorld.

Todo en React es un componente.

Pero antes de eso necesitamos asegurarnos de tener node.js y npm instalados en la computadora. Opcionalmente, podemos usar CRA (Crear aplicación React), que es una herramienta desarrollada por desarrolladores en Facebook para ayudarlo a crear aplicaciones React. Le ahorra una instalación y configuración que consumen mucho tiempo. Simplemente ejecuta un comando y crea una aplicación de react. Configura las herramientas que necesita para iniciar su proyecto React.

Podemos instalarlo a través de los siguientes comandos.
```
npm install -g create-react-app 
 
 create-react-app my-app 
 
 cd my-app 
 npm start 
```

La línea de comandos debe darle una salida donde puede encontrar la aplicación en el navegador. El valor predeterminado debe ser localhost: 8080. Si solo está utilizando IE o Edge en su máquina con Windows, le recomiendo que instale Chrome también para acceder al entorno de desarrollador y las herramientas de desarrollo React, que están disponibles como extensión de Chrome.

![página de inicio alt reaccionar](https://cdn-images-1.medium.com/max/800/1*Qcry5pCXIy2KeNRsq3w7Bg.png)

#### src / App.js

Copie el código de abajo y péguelo en src / App.js

```javascript
  import React from 'react'; 
 
  class App extends React.Component{ 
    constructor(props) { 
      super(props); 
    } 
 
    render(){ 
      return( 
        <div> 
          <p>Hello World !!</p> 
        </div> 
      ); 
    } 
  } 
 
  export default App; 
```

Si revisamos el archivo index.js en la carpeta src, encontramos que el App.js anterior se llama a index.js y luego se procesa.

```javascript
// Other code 
 import App from './App'; // The App component is imported 
 
 // Other code 
 ReactDOM.render(<App />, 
 document.getElementById('root'));  //The <App /> is the way components are called in react after importing them 
 
 // Other code 
```

En lo anterior, App.js se llama un componente. Normalmente, creamos varios componentes y los reunimos en App.js, que luego se procesarán en index.js, que luego se procesa en el div root que se encuentra en index.html.

Felicidades !! Has creado tu primera aplicación React Hello world. Aprendes más sobre React en los próximos artículos.

Feliz codificacion !!
