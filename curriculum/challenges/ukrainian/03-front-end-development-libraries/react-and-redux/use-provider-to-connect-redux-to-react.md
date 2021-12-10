---
id: 5a24c314108439a4d4036144
title: Використовуйте Провайдер для підключення Redux до React
challengeType: 6
forumTopicId: 301435
dashedName: use-provider-to-connect-redux-to-react
---

# --description--

В останньому завданні ви створили сховище Redux для обробки масиву повідомлень і створили дію для додавання нових повідомлень. Наступний крок - надати React доступ до сховища Redux і дії, необхідні для відправки оновлень. React Redux забезпечує свій пакет `react-redux` для допомоги виконання цих завдань.

React Redux надає невеличкий API з двома основними особливостями:`Provider` і `connect`. Інша проблема стосується `connect`. `Provider` - пакувальний компонент з React Redux, який обгортає додаток React. Ця обгортка дозволяє вам отримати доступ до сховища Redux `store` і `dispatch` функцій у вашому дереві компонентів. `Provider` приймає два відгуки, сховище Redux і дочірні компоненти вашої програми. Визначення `Provider` для компонента програми може виглядати так:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

# --instructions--

Редактор коду тепер показує всі коди Redux і React з минулих завдань. Він включає в себе сховище Redx, дії і компонент `DisplayMessages`. Єдина нова частина є компонентом `AppWrapper` унизу(AppWrapp). Використовувати цей компонент верхнього рівня для відображення `Provider` з `ReactRedux`і передати магазин Redux як пропс. Потім надайте `DisplayMessages`компонента як дочірного. Як тільки ви закінчите, ви повинні побачити компонент React, що відображається на сторінці.

**Примітка:** React Redux доступна як глобальна змінна тут, так що ви можете отримати доступ до провайдера з точковою нотацією. Код в редакторі використовує переваги і встановлює константу `Provider` для використання в методі render `AppWrapper`.

# --hints--

`AppWrapper` повинен візуалізуватися на сторінці.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('AppWrapper').length === 1;
  })()
);
```

Компонент `Provider` повинен мати prop з `store` переданий до нього, що рівний сховищу Redux.

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

`DisplayMessages` повинні бути показані як дитина `AppWrapper`.

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

`DisplayMessages` компонент повинен показувати`h2`, `input`, `button` і `ul` елементи.

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
