---
id: 5a24c314108439a4d4036174
title: Прив'язка 'this' до методу класу
challengeType: 6
forumTopicId: 301379
dashedName: bind-this-to-a-class-method
---

# --description--

На додаток до встановлення та оновлення `state`, ви також можете обрати методи для вашого компоненту класу. Метод класу зазвичай потребує використання ключового слова `this` для доступу до властивостей класу (наприклад, `state` і `props`) всередині блоку методу. Існує декілька способів, щоб дозволити вашому методу класу мати доступ до `this`.

Одним із поширених способів є прив'язка `this` у конструкторі, так щоб `this` був прив'язаним до методу класу під час ініціалізації компоненту. Ви, мабуть, помітили, що останнє завдання використовує `this.handleClick = this.handleClick.bind(this)` для його `handleClick` методу в конструкції. Тоді, коли ви викликаєте таку функцію як `this.setState()` в межах методу вашого класу, `this` посилається на клас і не буде `undefined`.

**Note:** Ключове слово `this` це один із найбільш складних аспектів JavaScript, але відіграє важливу роль у React. Хоча поводження об'єкта тут цілком нормальне, ці уроки не є місцем для детального огляду `this`, тому, будь ласка, зверніться до інших уроків, якщо наведене вище складне для сприйняття!

# --instructions--

Редактор коду має компонент `state`, який відслідковує текст. В ньому також є метод, який дозволяє вам встановити текст до `You clicked!`. Однак, метод не працює, оскільки він використовує `this` ключове слово, яке є недійсним. Виправте це відкрито пов'язуючи `this` з `handleClick()` методом в конструкторі компонента.

Далі, додайте клік обробник до елемента `button` у методі відображення. Це має запустити `handleClick()` метод, коли на кнопку клікають. Пам'ятайте, що метод, який ви передаєте `onClick` handler потребує фігурні дужки, оскільки він повинен інтерпретуватися безпосередньо як JavaScript.

Після того, як ви виконаєте наведені вище кроки, ви можете натиснути кнопку і побачити `You clicked!`.

# --hints--

`MyComponent` повинен на виході дати `div` елемент, який об'єднувати/обгортати два елементи, кнопку та елемент `h1` в даному порядку.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(0)
      .type() === 'button' &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(1)
      .type() === 'h1'
);
```

Стан `MyComponent` має ініціалізуватись з парами ключ-значення `{ text: "Hello" }`.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('text') === 'Hello'
);
```

Натискаючи на елемент `button`, він повинен запускати `handleClick` метод і встановлювати статус `text` to `You clicked!`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ text: 'Hello' });
    return waitForIt(() => mockedComponent.state('text'));
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent.state('text'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Hello' && secondValue === 'You clicked!');
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
      text: "Hello"
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
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
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```
