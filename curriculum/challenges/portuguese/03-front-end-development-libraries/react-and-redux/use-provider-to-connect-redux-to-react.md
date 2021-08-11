---
id: 5a24c314108439a4d4036144
title: Usar o provider para conectar o Redux ao React
challengeType: 6
forumTopicId: 301435
dashedName: use-provider-to-connect-redux-to-react
---

# --description--

No último desafio, você criou uma store Redux para lidar com o array messages e criou uma ação para adicionar novas mensagens. O próximo passo é fornecer ao React o acesso à store Redux e as ações que ele precise para despachar atualizações. O React Redux fornece seu pacote `react-redux` para ajudar a realizar essas tarefas.

O React Redux fornece uma pequena API com dois principais recursos: `Provider` e `connect`. Outro desafio tratará do `connect`. O `Provider` é um componente encapsulador do React Redux que encapsula seu aplicativo React. Este wrapper permite então que você acesse a `store` Redux e funções de `dispatch` em toda a sua árvore de componentes. `Provider` usa duas props, a store do Redux e os componentes filhos do seu aplicativo. Definir o `Provider` para um componente do aplicativo pode se parecer com isto:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

# --instructions--

O editor de código agora mostra todos os seus códigos Redux e React dos vários desafios passados. Isso inclui a store, actions e o componente `DisplayMessages`. O único novo pedaço é o componente `AppWrapper` na parte inferior. Use este componente de nível superior para renderizar o `Provider` de `ReactRedux`, e passar à store do Redux como uma propriedade. Em seguida, renderize o componente `DisplayMessages` como filho. Quando você terminar, você deve usar seu componente React renderizado para a página.

**Observação:** o React Redux está disponível como uma variável global aqui, então você pode acessar o Provider com notação de ponto. O código no editor aproveita isso e o define para uma constante `Provider` para você usar no método de renderização `AppWrapper`.

# --hints--

O `AppWrapper` deve renderizar.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

O componente wrapper do `Provider` deve ter uma propriedade `store` passada para ele, igual à store do Redux.

```js
(getUserInput) =>
  assert(
    (function () {
      const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
      return __helpers
        .removeWhiteSpace(getUserInput('index'))
        .includes('<Providerstore={store}>');
    })()
  );
```

`DisplayMessages` deve renderizar como filho de `AppWrapper`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return (
      mockedComponent.find('AppWrapper').find('DisplayMessages').length === 1
    );
  })()
);
```

O componente `DisplayMessages` deve renderizar os elementos `h2`, `input`, `button`, e `ul`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h2').length === 1 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('ul').length === 1
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<AppWrapper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line

  // Change code above this line
};
```

# --solutions--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
 this.handleChange = this.handleChange.bind(this);
 this.submitMessage = this.submitMessage.bind(this);
 }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };  
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Change code below this line
  render() {
    return (
      <Provider store = {store}>
        <DisplayMessages/>
      </Provider>
    );
  }
  // Change code above this line
};
```
