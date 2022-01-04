---
id: 5a24c314108439a4d403616e
title: Доступ до пропсів за допомогою this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

Останні декілька завдань охоплюють основні способи передачі пропсів до дочірніх компонентів. Проте, що, коли дочірній компонент, до якого здійснюється передача пропсу, це компонент класу ES6, а не функціональний компонент? Компонент класу ES6 використовує дещо інший метод доступу до пропсів.

Щоразу посилаючись на компонент класу в його межах, використовуйте ключове слово `this`. Щоб отримати доступ до пропсів в межах компоненту класу, ви спочатку надаєте код, який використовуєте, для доступу до нього за допомогою `this`. Наприклад, якщо компонент класу ES6 має пропс з назвою `data`, ви пишете `{this.props.data}` у JSX.

# --instructions--

Візуалізуйте екземпляр компоненту `Welcome` у батьківському компоненті `App`. Надайте `Welcome` проп `name` та призначте його значенням рядка. Отримайте доступ до `name` пропу в `strong` тегах у дочірньому компоненті `Welcome`.

# --hints--

Компонент `App` повинен відображати один елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Дочірній елемент `App` має бути компонентом `Welcome`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.children().childAt(0).name() === 'Welcome'
    );
  })()
);
```

Компонент `Welcome` повинен мати проп з назвою `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

Компонент `Welcome` повинен відображати рядок, який ви передаєте як `name` проп у `strong` тегах.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('Welcome').props().name
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong></strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Quincy"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};
```
