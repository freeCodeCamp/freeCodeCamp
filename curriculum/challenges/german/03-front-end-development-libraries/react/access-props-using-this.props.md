---
id: 5a24c314108439a4d403616e
title: Zugriff auf Eigenschaften mit this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

In den letzten Aufgaben ging es um die grundlegenden Möglichkeiten, Eigenschaften an Kindkomponenten zu übergeben. Was aber, wenn die Kindkomponente, der du eine Eigenschaft übergibst, eine ES6-Klassenkomponente ist und nicht eine zustandslose funktionale Komponente? Die ES6-Klassenkomponente verwendet eine etwas andere Konvention für den Zugriff auf Eigenschaften.

Immer wenn du dich auf eine Klassenkomponente innerhalb ihrer selbst beziehst, verwendest du das Schlüsselwort `this`. Um auf Eigenschaften innerhalb einer Klassenkomponente zuzugreifen, stellst du dem Code, mit dem du auf sie zugreifst, `this` voran. Wenn eine ES6-Klassenkomponente zum Beispiel eine Eigenschaft namens `data` hat, schreibst du `{this.props.data}` in JSX.

# --instructions--

Rendere eine Instanz der Komponente `Welcome` in der Elternkomponente `App`. Hier gibst du `Welcome` eine Eigenschaft `name` und weist ihm einen Wert eines Strings zu. Innerhalb des Kindes `Welcome` greifst du auf die Eigenschaft `name` innerhalb des `strong`-Tags zu.

# --hints--

Die Komponente `App` sollte ein einzelnes `div`-Element zurückgeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Das Kind von `App` sollte die Komponente `Welcome` sein.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.children().childAt(0).name() === 'Welcome'
    );
  })()
);
```

Die Komponente `Welcome` sollte eine Eigenschaft namens `name` besitzen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

Die Komponente `Welcome` sollte den String, den du als Eigenschaft `name` übergibst, innerhalb des `strong`-Tags anzeigen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('Welcome').props().name
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong></strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Quincy"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};
```
