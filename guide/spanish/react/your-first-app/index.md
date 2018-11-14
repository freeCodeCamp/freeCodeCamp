---
title: Your first React App
localeTitle: Tu primera aplicación React
---
## Tu primera aplicación React

### Instalación

Como se especifica en el artículo anterior (Instalación), ejecute la herramienta `Create React App` . Después de que todo haya terminado, `cd` en la carpeta de su aplicación y ejecute `npm start` . ¡Esto iniciará un servidor de desarrollo y todo está listo para comenzar a desarrollar su aplicación!

```bash
npm install -g react-create-app 
 create-react-app my-first-app 
 
 cd my-first-app 
 npm start 
```

### Editando el codigo

Inicie su editor o IDE de su elección y edite el archivo `App.js` en la carpeta `src` . Cuando se crea con la herramienta `react-create-app` , ya habrá algo de código en este archivo.

El código constará de estas partes:

#### importaciones

```JavaScript
import React, { Component } from 'react'; 
 import logo from './logo.svg'; 
 import './App.css'; 
```

El [paquete web lo](https://webpack.js.org/) utiliza para importar todos los módulos necesarios para que su código pueda usarlos. Este código importa 3 módulos: 1) `React` y `Component` , que nos permiten usar React como se debe usar. (Con componentes) 2) `logo` , que nos permite usar `logo.svg` en este archivo. 3) `./App.css` , que importa la hoja de estilo para este archivo.

#### clases / componentes

```JavaScript
class App extends Component { 
  render() { 
    return ( 
      <div className="App"> 
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Welcome to React</h1> 
        </header> 
        <p className="App-intro"> 
          To get started, edit <code>src/App.js</code> and save to reload. 
        </p> 
      </div> 
    ); 
  } 
 } 
```

React es una biblioteca que utiliza Componentes, que le permiten dividir su IU en piezas independientes y reutilizables, y pensar en cada una de ellas de forma aislada. Ya hay 1 componente creado, el componente de la `App` . Si usó la herramienta `create-react-app` , este componente es el componente principal del proyecto y usted debe construir alrededor de esta clase central.

Veremos los componentes más detallados en los próximos capítulos.

#### las exportaciones

Al crear una clase en reaccionar, debe exportarlos después de la declaración, lo que le permite usar el componente en otro archivo usando la palabra clave `import` . Puede usar el `default` después de la palabra clave de `export` para indicar a React que esta es la clase principal de este archivo.

```JavaScript
export default App; 
```

### Ver los resultados!

Cuando haya iniciado el servidor de desarrollo al `npm start` comando `npm start` , puede ver los cambios que agrega a su proyecto en vivo en su navegador. Después de emitir el comando, npm debe abrir un navegador que muestre automáticamente su aplicación.

### Fuentes

[1\. Reactuar la documentación.](https://reactjs.org/docs/hello-world.html)