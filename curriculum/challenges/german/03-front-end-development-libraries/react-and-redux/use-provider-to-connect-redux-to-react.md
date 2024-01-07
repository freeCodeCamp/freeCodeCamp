---
id: 5a24c314108439a4d4036144
title: Provider verwenden, um Redux mit React zu verbinden
challengeType: 6
forumTopicId: 301435
dashedName: use-provider-to-connect-redux-to-react
---

# --description--

In der letzten Aufgabe hast du einen Redux-Store erstellt, um das messages-Array zu verwalten und eine Aktion zum Hinzufügen neuer Nachrichten zu erstellen. Der nächste Schritt besteht darin, React Zugriff auf den Redux-Store und die Aktionen zu geben, die es braucht, um Updates zu versenden. React Redux stellt sein `react-redux` Paket zur Verfügung, um diese Aufgaben zu bewältigen.

React Redux bietet eine kleine API mit zwei wichtigen Funktionen: `Provider` und `connect`. Eine weitere Aufgabe befasst sich mit `connect`. Der `Provider` ist eine Wrapper-Komponente von React Redux, die deine React-App umhüllt. Dieser Wrapper ermöglicht dir dann den Zugriff auf die Redux-Funktionen `store` und `dispatch` in deinem Komponentenbaum. `Provider` nimmt zwei Eigenschaften(props) an, den Redux-Store und die Kindkomponenten deiner App. Die Definition des `Provider` für eine App-Komponente könnte so aussehen:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

# --instructions--

Der Code-Editor zeigt jetzt deinen gesamten Redux- und React-Code aus den letzten Aufgaben an. Es enthält den Redux Store, Aktionen und die Komponente `DisplayMessages`. Das einzige neue Element ist die Komponente `AppWrapper` im unteren Bereich. Verwende diese Top-Level-Komponente, um den `Provider` von `ReactRedux` zu rendern und den Redux-Store als Eigenschaft zu übergeben. Dann rendere die Komponente `DisplayMessages` als Kindelement. Sobald du fertig bist, solltest du sehen, wie deine React-Komponente auf der Seite gerendert wird.

**Hinweis:** React Redux ist hier als globale Variable verfügbar, so dass du mit der Punktnotation auf den Provider zugreifen kannst. Der Code im Editor macht sich das zunutze und setzt ihn auf eine Konstante `Provider`, die du in der `AppWrapper` Rendering-Methode verwenden kannst.

# --hints--

Der `AppWrapper` sollte gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

Die `Provider` Wrapper-Komponente sollte eine Eigenschaft `store` besitzen, die dem Redux-Store entspricht.

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

`DisplayMessages` sollte als Kindelement von `AppWrapper` dargestellt werden.

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

Die Komponente `DisplayMessages` sollte ein `h2`, `input`, `button` und `ul`-Element darstellen.

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
