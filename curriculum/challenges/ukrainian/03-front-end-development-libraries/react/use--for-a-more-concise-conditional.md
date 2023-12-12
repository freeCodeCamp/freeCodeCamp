---
id: 5a24c314108439a4d4036185
title: Використайте && для скороченої умови
challengeType: 6
forumTopicId: 301413
dashedName: use--for-a-more-concise-conditional
---

# --description--

Умови `if/else` працювали в попередньому завданні, але для досягнення того ж результату існує коротший спосіб. Уявіть, що ви відстежуєте декілька умов в компоненті та хочете, щоб різні елементи відтворювались залежно від кожної умови. Якщо ви напишете багато інструкцій `else if` для відтворення трішки різних UI, код може повторюватись, через що можуть виникнути помилки. Натомість ви можете використати логічний оператор `&&`, який виконує умовну логіку в коротшому вигляді. Це можливо, оскільки потрібно перевірити, чи умовою є `true`, і якщо так, то повернути розмітку. Ось приклад:

```jsx
{condition && <p>markup</p>}
```

Якщо `condition` є `true`, повернеться розмітка. Якщо умовою є `false`, операція одразу поверне `false` після обчислення `condition` та не поверне нічого. Ці інструкції можна помістити одразу в JSX та поєднати декілька умов, написавши `&&` після кожної з них. Це дозволяє обробити складнішу умовну логіку в методі `render()` без повторень коду.

# --instructions--

Розв’яжіть попередній приклад ще раз, щоб `h1` відтворювався лише тоді, коли `display` є `true`, але використайте логічний оператор `&&`, а не інструкцію `if/else`.

# --hints--

`MyComponent` має існувати та відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length;
  })()
);
```

Якщо значенням `display` є `true`, мають відтворюватись `div`, `button` та `h1`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: true });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 2 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 1
  );
};
```

Якщо значенням `display` є `false`, мають відтворюватись лише `div` та `button`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: false });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 0
  );
};
```

Метод відтворення має використати логічний оператор `&&`, щоб перевірити умову `this.state.display`.

```js
(getUserInput) => assert(getUserInput('index').includes('&&'));
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
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```
