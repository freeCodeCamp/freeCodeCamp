---
id: 5a24c314108439a4d4036185
title: Verwende && für eine präzisere Bedingung
challengeType: 6
forumTopicId: 301413
dashedName: use--for-a-more-concise-conditional
---

# --description--

Die `if/else`-Anweisungen haben in der letzten Aufgabe funktioniert, aber es gibt einen präziseren Weg, um das gleiche Ergebnis zu erzielen. Stell dir vor, du verfolgst mehrere Bedingungen in einer Komponente und du möchtest, dass je nach Bedingung unterschiedliche Elemente gerendert werden. Wenn du viele `else if`-Anweisungen schreibst, um leicht unterschiedliche Benutzeroberflächen (UIs) zurückzugeben, wiederholst du möglicherweise Code, der Raum für Fehler lässt. Stattdessen kannst du den logischen Operator `&&` verwenden, um bedingte Logik auf eine präzisere Weise auszuführen. Das ist möglich, weil du prüfen willst, ob eine Bedingung `true` ist, und wenn ja, ein Markup zurückgeben willst. Hier ist ein Beispiel:

```jsx
{condition && <p>markup</p>}
```

Wenn die Bedingung (`condition`) `true` ist, wird das Markup zurückgegeben. Wenn die Bedingung `false` ist, gibt die Operation sofort `false` zurück, nachdem sie die `condition` ausgewertet hat und liefert nichts zurück. Du kannst diese Anweisungen direkt in dein JSX einfügen und mehrere Bedingungen aneinanderreihen, indem du `&&` nach jeder Bedingung schreibst. So kannst du komplexere bedingte Logik in deiner `render()`-Methode verarbeiten, ohne eine Menge Code zu wiederholen.

# --instructions--

Löse das vorherige Beispiel erneut, so dass das `h1` nur gerendert wird, wenn `display` `true` ist, aber verwende den logischen Operator `&&` anstelle einer `if/else`-Anweisung.

# --hints--

`MyComponent` sollte existieren und gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length;
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
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 2 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 1
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
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 0
  );
};
```

Die Render-Methode sollte den logischen Operator `&&` verwenden, um die Bedingung von `this.state.display` zu überprüfen.

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
