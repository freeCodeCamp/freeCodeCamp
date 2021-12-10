---
id: 5a24c314108439a4d4036147
title: Підключіть Redux до React
challengeType: 6
forumTopicId: 301426
dashedName: connect-redux-to-react
---

# --description--

Тепер, коли ви написали обидві функції `mapStateToProps()` та `mapDispatchToProps()`, ви можете використовувати їх, щоб відобразити `state` і `dispatch` до `props` одного з ваших компонентів React. `connect` метод з React Redux може обробити це завдання. Цей метод вимагає/використовує два необов'язкових параметри, `mapStateToProps()` та `mapDispatchToProps()`. Вони не є обов'язковими, оскільки у вас може бути компонент, який лише потребує доступу до `state` але не потребує виконання жодних дій, або навпаки.

Щоб використати цей метод, передайте функції у якості аргументів і одразу викликайте результат з вашим компонентом. Цей синтаксис є трохи незвичним і виглядає наступним чином:

```js
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

**Note:** Якщо ви хочете пропустити один з параметрів замість `connect` методу, ви передаєте `null` замість нього.

# --instructions--

Редактор коду має функції `mapStateToProps()` та `mapDispatchToProps()` і новий компонент React під назвою `Presentational`. З'єднайте цей компонент з Redux за допомогою методу `connect` з глобального об'єкту `ReactRedux` і одразу викличте його в компоненті `Presentational`. Призначте результат новому `const` під назвою `ConnectedComponent`, який представляє підключений елемент. Ось і все, тепер ви підключені до Redux! Спробуйте змінити будь-який з параметрів `connect` на `null` і простежте за результатами тестів.

# --hints--

Компонент `Presentational` повинен відображатись.

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
