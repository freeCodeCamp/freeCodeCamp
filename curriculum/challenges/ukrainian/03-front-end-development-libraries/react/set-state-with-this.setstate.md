---
id: 5a24c314108439a4d4036173
title: Встановіть стан за допомогою this.setState
challengeType: 6
forumTopicId: 301412
dashedName: set-state-with-this-setstate
---

# --description--

У попередніх завданнях розглянуто стан компонента та як ініціалізувати стан в конструкторі. Також існує спосіб змінити стан компонента. React надає метод для оновлення стану компонента під назвою `setState`. Ви викликаєте метод `setState` в межах класового компонента ось так: `this.setState()`, передаючи об’єкт з парами ключ-значення. Ключі — це властивості стану, а значення — оновлені дані стану. Наприклад, якби ми зберігали `username` в стані та захотіли його оновити, то це мало б такий вигляд:

```jsx
this.setState({
  username: 'Lewis'
});
```

React очікує, що ви не змінюватимете стан напряму, а використовуватимете `this.setState()`, якщо виникають зміни стану. Також зверніть увагу, що React може виконувати пакетні оновлення стану, щоб покращити роботу. Це означає, що оновлення стану за допомогою методу `setState` можуть бути асинхронними. Існує альтернативний синтаксис для методу `setState`, який дозволяє обійти цю проблему. Він використовується рідко, але про нього варто пам’ятати! Для отримання додаткової інформації, див. <a href="https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/" target="_blank" rel="noopener noreferrer nofollow">нашу публікацію про React</a>.

# --instructions--

В редакторі коду є елемент `button`, який має обробник `onClick()`. Цей обробник спрацьовує, коли `button` отримує подію натискання в браузері та запускає метод `handleClick`, визначений в `MyComponent`. В межах методу `handleClick` оновіть стан компоненту, використовуючи `this.setState()`. Встановіть значення властивості `name` в `state` на рядок `React Rocks!`.

Натисніть на кнопку та перегляньте відтворене оновлення стану. Не хвилюйтесь, якщо не зовсім розумієте, як працює обробник натискання. Це буде розглянуто в наступних завданнях.

# --hints--

Стан `MyComponent` має ініціалізуватися парою ключ-значення `{ name: Initial State }`.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'Initial State'
);
```

`MyComponent` має відтворити заголовок `h1`.

```js
assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
```

Відтворений заголовок `h1` повинен містити текст, відтворений зі стану компонента.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  assert(/<h1>TestName<\/h1>/.test(firstValue));
};
```

Виклик методу `handleClick` до `MyComponent` має встановити властивість назви в стані на `React Rocks!`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'Before' });
    return waitForIt(() => mockedComponent.state('name'));
  };
  const second = () => {
    mockedComponent.instance().handleClick();
    return waitForIt(() => mockedComponent.state('name'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Before' && secondValue === 'React Rocks!');
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
     // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
