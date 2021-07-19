---
id: 5a24c314108439a4d4036147
title: Conecta Redux a React
challengeType: 6
forumTopicId: 301426
dashedName: connect-redux-to-react
---

# --description--

Ahora que has escrito tanto la función `mapStateToProps()` como la función `mapDispatchToProps()`, puedes usarlos para asignar `state` y `dispatch` a las `props` de uno de tus componentes React. El método `connect` de React Redux puede manejar esta tarea. Este método toma dos argumentos opcionales, `mapStateToProps()` y `mapDispatchToProps()`. Son opcionales porque puedes tener un componente que solo necesita acceso al `state` pero no necesita enviar ninguna acción, o viceversa.

Para utilizar este método, pasa las funciones como argumentos, y llama inmediatamente al resultado con tu componente. Esta sintaxis es un poco inusual y se ve así:

```js
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

**Nota:** Si deseas omitir uno de los argumentos del método `connect`, pasa `null` en su lugar.

# --instructions--

El editor de código tiene las funciones `mapStateToProps()` y `mapDispatchToProps()` y un nuevo componente React llamado `Presentational`. Conecta este componente a Redux con el método `connect` del objeto global `ReactRedux`, y llámalo inmediatamente en el componente `Presentational`. Asigna el resultado a una nueva `const` llamada `ConnectedComponent` que representa el componente conectado. Eso es todo, ¡ahora estás conectado a Redux! Intenta cambiar cualquiera de los argumentos de `connect` a `null` y observa los resultados de la prueba.

# --hints--

El componente `Presentational` debe renderizarse.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

El componente `Presentational` debe recibir una prop `messages` a través de `connect`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const props = mockedComponent.find('Presentational').props();
    return props.messages === '__INITIAL__STATE__';
  })()
);
```

El componente `Presentational` debe recibir una prop `submitNewMessage` a través de `connect`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const props = mockedComponent.find('Presentational').props();
    return typeof props.submitNewMessage === 'function';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
const store = Redux.createStore(
  (state = '__INITIAL__STATE__', action) => state
);
class AppWrapper extends React.Component {
  render() {
    return (
      <ReactRedux.Provider store = {store}>
        <ConnectedComponent/>
      </ReactRedux.Provider>
    );
  }
};
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line
```

# --solutions--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```
