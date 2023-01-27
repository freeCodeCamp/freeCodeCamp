---
id: 5a24c314108439a4d4036166
title: React-Komponenten zusammenstellen
challengeType: 6
forumTopicId: 301381
dashedName: compose-react-components
---

# --description--

Da die Aufgaben immer komplexere Kompositionen mit React-Komponenten und JSX verwenden, gibt es einen wichtigen Punkt zu beachten. Das Rendern von Klassenkomponenten im ES6-Stil innerhalb anderer Komponenten unterscheidet sich nicht vom Rendern der einfachen Komponenten, die du in den letzten Aufgaben verwendet hast. Du kannst JSX-Elemente, zustandslose funktionale Komponenten und ES6-Klassenkomponenten innerhalb anderer Komponenten darstellen.

# --instructions--

Im Code-Editor rendert die Komponente `TypesOfFood` bereits eine Komponente namens `Vegetables`. Außerdem gibt es noch die Komponente `Fruits` aus der letzten Aufgabe.

Verschachtle zwei Komponenten innerhalb von `Fruits` - zuerst `NonCitrus`, und dann `Citrus`. Diese beiden Komponenten werden hinter den Kulissen für dich bereitgestellt. Als Nächstes verschachtelst du die Klassenkomponente `Fruits` in die Komponente `TypesOfFood`, unter dem `h1`-Überschriftenelement und über `Vegetables`. Das Ergebnis sollte eine Reihe von verschachtelten Komponenten sein, die zwei verschiedene Komponententypen verwenden.

# --hints--

Die Komponente `TypesOfFood` sollte ein einzelnes `div`-Element zurückgeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Die Komponente `TypesOfFood` sollte die Komponente `Fruits` zurückgeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

Die Komponente `Fruits` sollte die Komponente `NonCitrus` und die Komponente `Citrus` zurückgeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return (
      mockedComponent.find('Fruits').children().find('NonCitrus').length ===
        1 &&
      mockedComponent.find('Fruits').children().find('Citrus').length === 1
    );
  })()
);
```

Die Komponente `TypesOfFood` sollte die Komponente `Vegetables` unterhalb der Komponente `Fruits` zurückgeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

# --seed--

## --before-user-code--

```jsx
class NonCitrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
};
class Citrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  }
};
class Vegetables extends React.Component {
  render() {
    return (
      <div>
        <h2>Vegetables:</h2>
        <ul>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squash</li>
        </ul>
      </div>
    );
     }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
      </div>
    )
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
    render() {
      return (
        <div>
        <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
};
```
