---
id: 5a24c314108439a4d4036149
title: Extrair estado local para dentro do Redux
challengeType: 6
forumTopicId: 301428
dashedName: extract-local-state-into-redux
---

# --description--

Você está quase pronto! Lembre-se de que você escreveu todo o código Redux para que o Redux pudesse controlar o gerenciamento de estado do seu aplicativo de mensagens React. Agora que o Redux está conectado, você precisa extrair o gerenciamento de estado do componente `Presentational` para o Redux. Atualmente, você tem o Redux conectado, mas está manipulando o estado localmente dentro do componente `Presentational`.

# --instructions--

No componente `Presentational`, primeiro, remova a propriedade `messages` no `state` local. Essas mensagens serão gerenciadas pelo Redux. Em seguida, modifique o método `submitMessage()` para que ele despache `submitNewMessage()` de `this.props`, e passe no input de mensagem atual do `state` local como um argumento. Como você removeu `messages` do state local, também remova aqui a propriedade `messages` da chamada para `this.setState()`. Finalmente, modifique o método `render()` para que ele mapeie as mensagens recebidas de `props` ao invés do `state`.

Quando essas alterações forem feitas, o aplicativo continuará a funcionar do mesmo jeito, exceto que o Redux gerencia o estado. Este exemplo também ilustra como um componente pode ter um `state` local: seu componente ainda monitora a entrada do usuário localmente em seu próprio `state`. Você pode ver como o Redux fornece um framework de gerenciamento de estado útil em cima do React. Você alcançou o mesmo resultado usando apenas o state local do React no início, e isso geralmente é possível com aplicativos simples. No entanto, como seus aplicativos se tornam maiores e mais complexos, seu gerenciamento de estado também fica mais complexo, e esse é o problema que o Redux resolve.

# --hints--

O `AppWrapper` deve ser renderizado na página.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

O componente `Presentational` deve ser renderizado na página.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

O componente `Presentational` deve renderizar os elementos `h2`, `input`, `button` e `ul`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    return (
      PresentationalComponent.find('div').length === 1 &&
      PresentationalComponent.find('h2').length === 1 &&
      PresentationalComponent.find('button').length === 1 &&
      PresentationalComponent.find('ul').length === 1
    );
  })()
);
```

O componente `Presentational` deve receber `messages` do store Redux como prop.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return Array.isArray(props.messages);
  })()
);
```

O componente `Presentational` deve receber o criador de ação `submitMessage` como prop.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalComponent = mockedComponent.find('Presentational');
    const props = PresentationalComponent.props();
    return typeof props.submitNewMessage === 'function';
  })()
);
```

O state do componente `Presentational` deve conter uma propriedade, `input`, a qual é inicializada como uma string vazia.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const PresentationalState = mockedComponent
      .find('Presentational')
      .instance().state;
    return (
      typeof PresentationalState.input === 'string' &&
      Object.keys(PresentationalState).length === 1
    );
  })()
);
```

Digitar no elemento `input` deve atualizar o estado do componente `Presentational`.

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const testValue = '__MOCK__INPUT__';
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  let initialInput = mockedComponent.find('Presentational').find('input');
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const updated = await changed();
  const updatedInput = updated.find('Presentational').find('input');
  assert(
    initialInput.props().value === '' &&
      updatedInput.props().value === '__MOCK__INPUT__'
  );
};
```

Despachar o `submitMessage` no componente `Presentational` deve atualizar o store Redux e limpar o input no state local.

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  let beforeProps = mockedComponent.find('Presentational').props();
  const testValue = '__TEST__EVENT__INPUT__';
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const clickButton = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterChange = await changed();
  const afterChangeInput = afterChange.find('input').props().value;
  const afterClick = await clickButton();
  const afterProps = mockedComponent.find('Presentational').props();
  assert(
    beforeProps.messages.length === 0 &&
      afterChangeInput === testValue &&
      afterProps.messages.pop() === testValue &&
      afterClick.find('input').props().value === ''
  );
};
```

O componente `Presentational` deve renderizar `messages` do store Redux.

```js
async () => {
  const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  let beforeProps = mockedComponent.find('Presentational').props();
  const testValue = '__TEST__EVENT__INPUT__';
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return waitForIt(() => mockedComponent);
  };
  const clickButton = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent);
  };
  const afterChange = await changed();
  const afterChangeInput = afterChange.find('input').props().value;
  const afterClick = await clickButton();
  const afterProps = mockedComponent.find('Presentational').props();
  assert(
    beforeProps.messages.length === 0 &&
      afterChangeInput === testValue &&
      afterProps.messages.pop() === testValue &&
      afterClick.find('input').props().value === '' &&
      afterClick.find('ul').childAt(0).text() === testValue
  );
};
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
    message: message
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
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
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
    this.setState((state) => ({
      input: '',
      messages: state.messages.concat(state.input)
    }));
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
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

# --solutions--

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
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
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
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
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
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
          {this.props.messages.map( (message, idx) => {
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
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```
