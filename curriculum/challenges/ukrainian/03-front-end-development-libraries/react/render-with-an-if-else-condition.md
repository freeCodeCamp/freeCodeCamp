---
id: 5a24c314108439a4d4036184
title: Візуалізація за допомогою умови If-Else
challengeType: 6
forumTopicId: 301410
dashedName: render-with-an-if-else-condition
---

# --description--

Інший додаток для використовування JavaScript, щоб контролювати наданий вами вид, полягає у тому, щоб зв'язати елементи, які візуалізуються в умові. Коли умова є правдивою, один вид візуалізується. Коли він є хибним, то це вже є інший вид. Ви можете робити це із стандартним реченням `if/else` в методі `render()` React компонента.

# --instructions--

MyComponent містить `boolean` у стані, який відстежує, чи хочете ви відтворити деякі елементи в UI, чи ні. `button` перемикає стан цього значення. На даний момент, він візуалізує той самий UI кожного разу. Якщо переписати метод `render()` із реченням `if/else`, і тоді `display` є `true`, то ви повернете поточну розмітку. В іншому випадку, це поверне розмітку без елемента `h1`.

**Note:** Ви маєте написати `if/else`, щоб пройти тести. Використання потрійного оператора в даному випадку не проходить.

# --hints--

`MyComponent` має існувати і візуалізуватися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length === 1;
  })()
);
```

Коли `display` встановити на `true`, то має візуалізуватися `div`, `button`, `h1`.

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

Коли `display` встановити на `false`, то має візуалізуватися тільки `div` і `button`.

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

Метод візуалізації має використовувати речення `if/else` для того, щоб перевірити умови `this.state.display`.

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
