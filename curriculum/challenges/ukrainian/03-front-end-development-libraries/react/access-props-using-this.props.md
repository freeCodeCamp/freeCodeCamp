---
id: 5a24c314108439a4d403616e
title: Отримайте доступ до пропсів за допомогою this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

Декілька попередніх завдань охопили основні способи передачі пропсів до дочірніх компонентів. Що робити, якщо дочірній компонент, до якого ви передаєте пропс, є класовим компонентом ES6, а не функціональним компонентом без стану? Класовий компонент ES6 використовує дещо інший метод доступу до пропсів.

Використовуйте ключове слово `this` кожного разу, коли посилаєтесь на класовий компонент в його межах. Щоб отримати доступ до пропсу в межах класового компонента, додайте `this` на початку коду. Наприклад, якщо класовий компонент ES6 має пропс під назвою `data`, ви пишете `{this.props.data}` в JSX.

# --instructions--

Відтворіть екземпляр компоненту `Welcome` в батьківському компоненті `App`. Надайте `Welcome` пропс `name` та призначте йому значення рядка. У дочірньому елементі `Welcome` отримайте доступ до пропсу `name` в межах тегів `strong`.

# --hints--

Компонент `App` має повернути єдиний елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Дочірній компонент компонента `App` має бути компонентом `Welcome`.

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

Компонент `Welcome` повинен мати пропс під назвою `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

Компонент `Welcome` має показати рядок, переданий як пропс `name` в межах тегів `strong`.

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
