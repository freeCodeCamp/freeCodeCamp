---
id: 5a24c314108439a4d4036184
title: Rendering mit einer If-Else-Bedingung
challengeType: 6
forumTopicId: 301410
dashedName: render-with-an-if-else-condition
---

# --description--

Eine weitere Möglichkeit, die gerenderte Ansicht mit JavaScript zu steuern, besteht darin, die gerenderten Elemente an eine Bedingung zu knüpfen. Wenn die Bedingung erfüllt ist, wird eine Ansicht gerendert. Wenn sie falsch ist, ist das eine andere Ansicht. Das kannst du mit einer standardmäßigen `if/else`-Anweisung in der `render()`-Methode einer React-Komponente machen.

# --instructions--

MyComponent enthält einen `boolean` in ihrem Zustand, der festhält, ob du ein Element in der Benutzeroberfläche anzeigen möchtest oder nicht. Der `button` schaltet den Zustand dieses Wertes um. Derzeit wird jedes Mal die gleiche Benutzeroberfläche angezeigt. Schreibe die `render()`-Methode mit einer `if/else`-Anweisung um, so dass du, wenn `display` gleich `true` ist, das aktuelle Markup zurückgibst. Andernfalls wird das Markup ohne das `h1`-Element zurückgegeben.

**Hinweis:** Du musst ein `if/else` schreiben, um die Tests zu bestehen. Die Verwendung des ternären Operators wird hier nicht akzeptiert.

# --hints--

`MyComponent` sollte existieren und gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length === 1;
  })()
);
```

Wenn `display` auf `true` gesetzt ist, sollten ein `div`, ein `button` und ein `h1` gerendert werden.

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

Wenn `display` auf `false` gesetzt ist, sollten nur ein `div` und ein `button` gerendert werden.

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

Die Render-Methode sollte eine `if/else`-Anweisung verwenden, um die Bedingung von `this.state.display` zu überprüfen.

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
