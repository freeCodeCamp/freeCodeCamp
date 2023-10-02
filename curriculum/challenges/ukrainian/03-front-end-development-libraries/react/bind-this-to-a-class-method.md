---
id: 5a24c314108439a4d4036174
title: Прив’яжіть «this» до методу класу
challengeType: 6
forumTopicId: 301379
dashedName: bind-this-to-a-class-method
---

# --description--

Окрім налаштування та оновлення стану, ви можете визначити методи для класового компонента. Методу класу зазвичай потрібне ключове слово `this`, щоб отримати доступ до властивостей класу (серед яких стан та пропси) в межах області методу. Існує декілька способів, щоб дозволити методам класу отримати доступ до `this`.

Один із найпоширеніших способів — прив’язати `this` в конструкторі. Таким чином `this` стає прив’язаним до методів класу, коли компонент ініціалізовано. Мабуть, ви помітили, що в попередньому завданні використано `this.handleClick = this.handleClick.bind(this)` до методу `handleClick` в конструкторі. Потім, коли ви викликаєте функцію (наприклад, `this.setState()`), в межах методу класу, `this` посилається на клас та не буде `undefined`.

**Примітка:** ключове слово `this` є одним з найскладніших аспектів JavaScript, але воно грає важливу роль в React. Хоча його поведінка цілком нормальна, ці уроки не містять детальної інформації про `this`. Тому, будь ласка, зверніться до інших уроків, якщо вам важко!

# --instructions--

Редактор коду має компонент зі станом, який відстежує текст. Він також має метод, який дозволяє встановити текст на `You clicked!`. Однак метод не працює, оскільки використовує ключове слово `this`, яке є невизначеним. Виправте це, прив’язавши `this` до методу `handleClick()` в конструкторі компонента.

Потім додайте обробник натискання до елемента `button` в методі відтворення. Це має запустити метод `handleClick()`, коли кнопка отримує подію натискання. Пам’ятайте, що метод, переданий до обробника `onClick`, потребує фігурних дужок, оскільки має інтерпретуватись як JavaScript.

Як тільки виконаєте кроки вище, ви зможете натиснути кнопку та побачити `You clicked!`.

# --hints--

`MyComponent` має повернути елемент `div`, який обгортає два елементи: кнопку та елемент `h1`.

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

Стан `MyComponent` має ініціалізуватися парою ключ-значення `{ text: "Hello" }`.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('text') === 'Hello'
);
```

Натискання на елемент `button` має запустити метод `handleClick` та встановити стан `text` на `You clicked!`.

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
