---
title: Context API
localeTitle: API Context
---

# API Context

El API Context ha sido implementado desde la versión 16.3 de React.

Ya existía antes, pero estaba en beta, y así no se recomendía su uso.

La meta del API Context es permitir los desarrolladores tener una manera fácil
de comunicar entre los componentes cuando están separados en la aplicación.
Esto también redujó la necesidad de "taladrar propiedades" (pasar las propiedades por varios componentes), lo cual permite un código más limpio, más fácil a mantener y más fácil a actualizar.

Esto llega su plena potencial cuando queremos compartir los datos que serán
accedidos por varios componentes en la aplicación.

Se base en dos ideas principales: un Provider (proveedor) y un Consumer (consumidor).

## Provider

Imaginamos que queremos utilizar una tema en nuestra aplicación. Entonces varios de nuestros componentes van a consumir esta tema. Lo que queremos hacer
es proveer una manera fácil para que los componentes pueden acceder las propiedades de la tema.

En un archivo creado para proveer los datos, theme-context.js, establecemos el Provider, y también el componente Consumer para que nuestros componentes lo pueden consumir.

```javascript
// theme-context.js
// Importar a createContext
import React, { createContext, Component } from 'react';

// Intializamos el contexto, con su configuración por defecto
const { Provider, Consumer } = createContext({
  theme: {
    primary: '#f44336',
    light: '#ff7961',
    dark: '#ba000d',
    darkFont: '#000',
    lightFont: '#FFF',
  },
});

// Crear el clase ThemeProvider para que lo puede utilizar nuestra application
export class ThemeProvider extends Component {
  state = {
    theme: {
      primary: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
      darkFont: '#000',
      lightFont: '#FFF',
    },
  };

  // Pasamos el estado que acabamos de poner como el valor inicial para el
  // consumo de nuestro aplicación.
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer as ThemeConsumer };
```

Y luego necesitamos inicializar nuestra aplicación con nuestro Provider.

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// Importar nuestra proveedora
import { ThemeProvider } from './theme-context';

// Colocando la aplicación dentro del Provider
const rootElement = document.getElementById('root');
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  rootElement
);
```

## Consumer

En el archivo app.js, consumimos la tema utilizando el component ThemeConsumer.

```javascript
// app.js
import React from 'react';

import { ThemeConsumer } from './theme-context';

// Nuestro botón consume la tema independiente de sus componentes padres.
// Lo importante aquí es que no necesitamos taladrar las propiedades
const StyledButton = ({ children }) => (
  <ThemeConsumer>
    {({ theme }) => (
      <button
        style={{
          color: theme.lightFont,
          background: theme.primary,
        }}
      >
        {children}
      </button>
    )}
  </ThemeConsumer>
);

export default () => (
  <ThemeConsumer>
    {({ theme }) => (
      <div>
        <h1 style={{ color: theme.primary }}>Themed App</h1>
        <StyledButton>Mira mi tema</StyledButton>
      </div>
    )}
  </ThemeConsumer>
);
```

### Modificar la tema dinamicamente

Para modificar la tema que se presenta en nuestra aplicación necesitamos proveer una función al contexto que se puede utilizar el consumidor.

Solo tenemos que añadirla a Provider:

```javascript
// theme-context.js
...
// Ya estamos incluyendo un método para modificar la tema
const { Provider, Consumer } = createContext({
  theme: {
    primary: "#f44336",
    light: "#ff7961",
    dark: "#ba000d",
    darkFont: "#000",
    lightFont: "#FFF",
  },
  setTheme: () => {},
})

export class ThemeProvider extends Component {
  state = {
    theme: {
      primary: "#f44336",
      light: "#ff7961",
      dark: "#ba000d",
      darkFont: "#000",
      lightFont: "#FFF",
    },
    // Definimos la función en nuestro estado, que pasaremos como valor inicial
    // a nuestro proveedor
    setTheme: theme => this.setState({ theme }),
  }

  // Pasamos el estado que acabamos de poner como el valor inicial para el
  // consumo de nuestro aplicación.
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as ThemeConsumer }
```

Y luego en el componente consumidor:

```javascript
// app.js
import React from 'react';

import { ThemeConsumer } from './theme-context';

// Aqui modificamos el boton para utilizar el metodo de cambiar la tema
const StyledButton = ({ children, clickHandler }) => (
  <ThemeConsumer>
    {({ theme }) => (
      <button
        onClick={clickHandler}
        style={{
          color: theme.lightFont,
          background: theme.primary,
        }}
      >
        {children}
      </button>
    )}
  </ThemeConsumer>
);

const themes = {
  red: {
    primary: '#f44336',
    light: '#ff7961',
    dark: '#ba000d',
    darkFont: '#000',
    lightFont: '#FFF',
  },
  teal: {
    primary: '#009688',
    light: '#52c7b8',
    dark: '#00675b',
    darkFont: '#000',
    lightFont: '#FFF',
  },
};

// Ya estamos incluyendo el metodo "setTheme" para permitir que el usador
// puede cambiar la tema de la aplicación
export default () => (
  <ThemeConsumer>
    {({ theme, setTheme }) => (
      <div>
        <h1 style={{ color: theme.primary }}>Themed App</h1>
        <StyledButton clickHandler={() => setTheme(themes.red)}>
          Hacer Tema Roja
        </StyledButton>
        <StyledButton clickHandler={() => setTheme(themes.teal)}>
          Hacer Tema Teal
        </StyledButton>
      </div>
    )}
  </ThemeConsumer>
);
```

Son cuatro ideas principales que se debe recordar:

- Utilizando React.createComponent, crea un componente Provider que se encargue de manejar los datos y un componente Consumer que permite que nuestros componentes pueden consumir los datos.
- Envuelve la aplicación con nuestro Provider, para que sean disponibles los datos a nuestros componentes.
- Envuelve nuestros componentes con el componente Consumer para que consumen los datos.

### More Information

- [React - Context Official Documentation ](https://reactjs.org/docs/context.html)
- [Ejemplo en codesandbox](https://codesandbox.io/s/4qr6ly9wjx)
