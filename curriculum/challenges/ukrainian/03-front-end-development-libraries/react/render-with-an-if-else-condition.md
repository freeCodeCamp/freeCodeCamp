---
id: 5a24c314108439a4d4036184
title: Відтворення за допомогою умови if else
challengeType: 6
forumTopicId: 301410
dashedName: render-with-an-if-else-condition
---

# --description--

Інше застосування JavaScript для контролю відтвореного вигляду — поєднати елементи, які відтворюються відповідно умови. Якщо умова правдива, відтворюється один вигляд. Якщо хибна, відтворюється інший вигляд. Це можна зробити за допомогою звичайної інструкції `if/else` в методі `render()` компонента React.

# --instructions--

MyComponent містить `boolean` у стані, що відстежує, чи потрібно відтворювати певні елементи в UI. `button` перемикає стан цього значення. Наразі він відтворює однаковий UI кожного разу. Перепишіть метод `render()` за допомогою інструкції `if/else`, і якщо значенням `display` є `true`, повертається поточна розмітка. В іншому випадку поверніть розмітку без елемента `h1`.

**Примітка:** ви повинні написати `if/else`, щоб пройти тести. Тернарний оператор в цьому випадку не працює.

# --hints--

`MyComponent` має існувати та відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length === 1;
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
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 2 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 1
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
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 1 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 0
  );
};
```

Метод відтворення має використати інструкцію `if/else`, щоб перевірити умову `this.state.display`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').includes('if') &&
      getUserInput('index').includes('else')
  );
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
    this.setState((state) => ({
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
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
    } else {
      return (
        <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
    }
  }
};
```
