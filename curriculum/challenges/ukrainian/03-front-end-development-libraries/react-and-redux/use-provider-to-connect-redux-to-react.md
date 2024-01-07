---
id: 5a24c314108439a4d4036144
title: Використайте провайдер, щоб приєднати Redux до React
challengeType: 6
forumTopicId: 301435
dashedName: use-provider-to-connect-redux-to-react
---

# --description--

В попередньому завданні ви створили сховище Redux для обробки масиву повідомлень і створили дію для додавання нових повідомлень. Наступний крок — надати React доступ до сховища Redux та дій, необхідних для відправлення оновлень. React Redux надає свій пакет `react-redux`, щоб допомогти з виконанням цих завдань.

React Redux надає невеличкий API з двома ключовими властивостями: `Provider` та `connect`. Інше завдання стосується `connect`. `Provider` — це обгортуваний компонент від React Redux, який обгортає застосунок React. Ця обгортка дозволяє отримати доступ до сховища Redux та відправити функції через дерево компонентів. `Provider` приймає два пропси, сховище Redux та дочірні компоненти застосунку. Визначення `Provider` для компонента застосунку може виглядати так:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

# --instructions--

Тепер редактор коду показує весь код Redux та React з декількох попередніх завдань. Він містить сховище Redux, дії та компонент `DisplayMessages`. Єдиною новою частиною є компонент `AppWrapper` внизу. Використайте цей компонент верхнього рівня, щоб відтворити `Provider` від `ReactRedux` та передайте сховище Redux як пропс. Потім відтворіть компонент `DisplayMessages` як дочірній. Як тільки закінчите, ви маєте побачити компонент React відтвореним на сторінці.

**Примітка:** тут React Redux доступний як глобальна змінна, тому ви можете отримати доступ до провайдера за допомогою точкової нотації. Код в редакторі використовує цю перевагу і встановлює його як константу `Provider`, яку ви можете використати в методі відтворення `AppWrapper`.

# --hints--

`AppWrapper` має відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

Обгортуваний компонент `Provider` повинен мати пропс переданого сховища, рівний сховищу Redux.

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

`DisplayMessages` має відтворюватись як дочірній компонент компонента `AppWrapper`.

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

Компонент `DisplayMessages` має відтворити `h2`, `input`, `button` та елемент `ul`.

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
