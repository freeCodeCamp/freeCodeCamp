---
id: 5a24c314108439a4d4036147
title: Conectar o Redux ao React
challengeType: 6
forumTopicId: 301426
dashedName: connect-redux-to-react
---

# --description--

Agora que você escreveu ambas as funções `mapStateToProps()` e `mapDispatchToProps()`, você pode usá-las para mapear `state` e `dispatch` para `props` de um de seus componentes React. O método `connect` do Redux React pode lidar com essa tarefa. Esse método recebe dois argumentos opcionais, `mapStateToProps()` e `mapDispatchToProps()`. Eles são opcionais porque você pode ter um componente que precisa apenas acessar o `state`, mas não precisa despachar nenhuma ação, ou vice-versa.

Para usar esse método, passe nas funções como argumentos, e imediatamente chame o resultado com seu componente. Essa sintaxe é um pouco incomum e se parece com:

```js
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

**Observação:** se você quiser omitir um dos argumentos do método `connect`, você passa `null` no lugar.

# --instructions--

O editor de código tem as funções `mapStateToProps()` e `mapDispatchToProps()` e um novo componente React chamado `Presentational`. Conecte esse componente ao Redux com o método `connect` do objeto global `ReactRedux`, e o chame imediatamente no componente `Presentational`. Atribua o resultado a uma nova `const` chamada `ConnectedComponent` que representa o componente conectado. É isso, agora você está conectado ao Redux! Tente alterar qualquer um dos argumentos de `connect` para `null` e observe os resultados do teste.

# --hints--

O componente `Presentational` deve renderizar.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

O componente `Presentational` deve receber uma prop `messages` via `connect`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const props = mockedComponent.find('Presentational').props();
    return props.messages === '__INITIAL__STATE__';
  })()
);
```

O componente `Presentational` deve receber uma prop `submitNewMessage` via `connect`.

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
