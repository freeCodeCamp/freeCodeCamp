---
id: 5a24c314108439a4d4036173
title: Встановлення State за допомогою this.setState
challengeType: 6
forumTopicId: 301412
dashedName: set-state-with-this-setstate
---

# --description--

В попередніх завданнях було розглянуто компонент `state` та як ініціалізувати стан в `constructor`. Також існує спосіб змінити стан компонента `state`. React надає метод для оновлення компоненту `state` під назвою `setState`. Ви викликаєте метод `setState` у своєму класі компонентів наступним чином: `this.setState()`, передаючи об'єкт з парами ключ-значення. Ключі - це властивості стану, а значення - оновлені дані стану. Наприклад, якби ми зберігали `username` в стані та хотіли б його оновити, то це мало б наступний вигляд:

```jsx
this.setState({
  username: 'Lewis'
});
```

React очікує, що ви ніколи не будете змінювати `state` безпосередньо, натомість завжди будете використовувати `this.setState()`, коли відбуваються зміни стану. Також зверніть увагу на те, що React може пакетно оновлювати кілька станів, щоб покращити продуктивність. Це означає, що оновлення стану за допомогою методу `setState` можуть бути асинхронними. Існує альтернативний синтаксис для методу `setState`, який дозволяє обійти цю проблему. Він використовується рідко, але добре мати його на увазі! Для отримання додаткової інформації, див. <a href="https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/" target="_blank" rel="noopener noreferrer nofollow">публікацію про React</a>.

# --instructions--

В редакторі коду є елемент `button`, який має обробник `onClick()`. Цей обробник спрацьовує, коли `button` отримує подію кліку в браузері та запускає метод `handleClick`, визначений в `MyComponent`. В межах методу `handleClick` оновіть компонент `state`, використовуючи `this.setState()`. Встановіть властивість `name` у `state`, щоб вона дорівнювала рядку `React Rocks!`.

Натисніть на кнопку та перегляньте оновлення візуалізованого стану. Не хвилюйтесь, якщо на цьому етапі ви не до кінця розумієте, як працює код обробника кліку. Це буде розглянуто в наступних завданнях.

# --hints--

Стан `MyComponent` має ініціалізуватися за допомогою пари ключ-значення `{ name: Initial State }`.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'Initial State'
);
```

`MyComponent` має виводити елемент заголовку `h1`.

```js
assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
```

У заголовку `h1` має бути текст, переданий у стані компонента.

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

Виклик методу `handleClick` в `MyComponent` має встановити властивість назви в стані, що дорівнює `React Rocks!`.

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
