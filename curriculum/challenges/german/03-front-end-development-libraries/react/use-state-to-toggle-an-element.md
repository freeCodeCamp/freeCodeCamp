---
id: 5a24c314108439a4d4036176
title: Verwende den Zustand um ein Element umzuschalten
challengeType: 6
forumTopicId: 301421
dashedName: use-state-to-toggle-an-element
---

# --description--

Manchmal musst du den vorherigen Zustand (state) kennen, wenn du den Zustand aktualisieren willst. Allerdings können Zustandsaktualisierungen asynchron sein - das bedeutet, dass React mehrere `setState()`-Aufrufe zu einer einzigen Aktualisierung zusammenfassen kann. Das bedeutet, dass du dich nicht auf den vorherigen Wert von `this.state` oder `this.props` verlassen kannst, wenn du den nächsten Wert berechnest. Du solltest also keinen Code wie diesen verwenden:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

Stattdessen solltest du `setState` eine Funktion übergeben, mit der du auf den Status und die Eigenschaften (props) zugreifen kannst. Die Verwendung einer Funktion mit `setState` garantiert, dass du mit den aktuellsten Werten des Zustands und der Eigenschaften arbeitest. Das bedeutet, dass die obige Aussage wie folgt umgeschrieben werden sollte:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

Du kannst auch ein Formular ohne `props` verwenden, wenn du nur den `state` brauchst:

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

Beachte, dass du das Objektliteral in Klammern einschließen musst, sonst hält JavaScript es für einen Codeblock.

# --instructions--

`MyComponent` hat eine `visibility`-Eigenschaft, die auf `false` initialisiert ist. Die Render-Methode gibt eine Ansicht zurück, wenn der Wert von `visibility` wahr ist, und eine andere Ansicht, wenn er falsch ist.

Derzeit gibt es keine Möglichkeit, die Eigenschaft `visibility` im `state` der Komponente zu aktualisieren. Der Wert sollte zwischen true und false hin- und herwechseln. Es gibt einen Click-Handler auf dem Button, der eine Klassenmethode namens `toggleVisibility()` auslöst. Übergib eine Funktion an `setState`, um diese Methode so zu definieren, dass der `state` von `visibility` auf den entgegengesetzten Wert umschaltet, wenn die Methode aufgerufen wird. Wenn `visibility` `false` ist, setzt die Methode sie auf `true` und umgekehrt.

Klicke abschließend auf den Button, um das bedingte Rendering der Komponente basierend auf ihrem `state` zu sehen.

**Hinweis:** Vergiss nicht, das Schlüsselwort `this` an die Methode im `constructor` zu binden!

# --hints--

`MyComponent` sollte ein `div`-Element zurückgeben, das einen `button` enthält.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('div').find('button')
    .length,
  1
);
```

Der Zustand von `MyComponent` sollte mit einer `visibility`-Eigenschaft initialisiert werden, die auf `false` gesetzt ist.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).state('visibility'),
  false
);
```

Wenn du auf das Button-Element klickst, sollte die `visibility`-Eigenschaft im Zustand zwischen `true` und `false` wechseln.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ visibility: false });
    return mockedComponent.state('visibility');
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const third = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(!firstValue && secondValue && !thirdValue);
})();
```

Eine anonyme Funktion sollte an `setState` übergeben werden.

```js
const paramRegex = '[a-zA-Z$_]\\w*(,[a-zA-Z$_]\\w*)?';
assert(
  new RegExp(
    'this\\.setState\\((function\\(' +
      paramRegex +
      '\\){|([a-zA-Z$_]\\w*|\\(' +
      paramRegex +
      '\\))=>)'
  ).test(__helpers.removeWhiteSpace(code))
);
```

`this` sollte nicht innerhalb von `setState` verwendet werden

```js
assert(!/this\.setState\([^}]*this/.test(code));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```
