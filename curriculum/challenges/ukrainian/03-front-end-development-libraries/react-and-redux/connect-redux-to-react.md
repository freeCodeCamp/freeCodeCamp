---
id: 5a24c314108439a4d4036147
title: Приєднайте Redux до React
challengeType: 6
forumTopicId: 301426
dashedName: connect-redux-to-react
---

# --description--

Ви написали обидві функції `mapStateToProps()` та `mapDispatchToProps()`, а отже можете використати їх, щоб мапувати `state` та `dispatch` до `props` одного з компонентів React. Метод `connect` від React Redux може виконати це завдання. Цей метод приймає два додаткові параметри: `mapStateToProps()` та `mapDispatchToProps()`. Вони не є обов’язковими, оскільки у вас може бути компонент, який потребує доступ лише до `state`, але не потребує відправлення жодних дій, або навпаки.

Щоб використати цей метод, передайте функції як аргументи і одразу викличте результат з компонентом. Цей синтаксис трохи незвичний і виглядає ось так:

```js
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

**Примітка:** якщо ви хочете опустити один з аргументів до методу `connect`, то передайте `null` замість нього.

# --instructions--

Редактор коду має функції `mapStateToProps()` та `mapDispatchToProps()` і новий компонент React під назвою `Presentational`. Приєднайте цей компонент до Redux за допомогою методу `connect` з глобального об’єкта `ReactRedux` і одразу викличте його в компоненті `Presentational`. Призначте результат до нової `const` під назвою `ConnectedComponent`, яка представляє приєднаний компонент. Ось і все, тепер ви приєднані до Redux! Спробуйте змінити будь-який з аргументів `connect` на `null` і простежте за результатами тестів.

# --hints--

Компонент `Presentational` має відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    return mockedComponent.find('Presentational').length === 1;
  })()
);
```

Компонент `Presentational` повинен отримати пропс `messages` через `connect`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(AppWrapper));
    const props = mockedComponent.find('Presentational').props();
    return props.messages === '__INITIAL__STATE__';
  })()
);
```

Компонент `Presentational` повинен отримати пропс `submitNewMessage` через `connect`.

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
