---
id: 5a24c314108439a4d4036163
title: Erstelle eine React-Komponente
challengeType: 6
forumTopicId: 301386
dashedName: create-a-react-component
---

# --description--

Die andere Möglichkeit, eine React-Komponente zu definieren, ist die ES6 `class`-Syntax. Im folgenden Beispiel erweitert `Kitten` `React.Component`:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

Dadurch wird eine ES6-Klasse `Kitten` erstellt, die die Klasse `React.Component` erweitert. So hat die Klasse `Kitten` jetzt Zugriff auf viele nützliche React-Funktionen, wie lokale Zustände und Lifecycle-Hooks. Mach dir keine Sorgen, wenn du mit diesen Begriffen noch nicht vertraut bist, sie werden in späteren Aufgaben ausführlicher behandelt. Beachte auch, dass die Klasse `Kitten` einen `constructor` hat, der `super()` aufruft. Sie verwendet `super()`, um den Konstruktor der Elternklasse aufzurufen, in diesem Fall `React.Component`. Der Konstruktor ist eine spezielle Methode, die bei der Initialisierung von Objekten verwendet wird, die mit dem Schlüsselwort `class` erstellt werden. Am besten rufst du den `constructor` einer Komponente mit `super` auf und übergibst `props` an beide. Dadurch wird sichergestellt, dass die Komponente richtig initialisiert wird. Du solltest wissen, dass es Standard ist, dass dieser Code enthalten ist. Bald wirst du auch andere Verwendungsmöglichkeiten für den Konstruktor und die `props` sehen.

# --instructions--

`MyComponent` wird im Code-Editor mit der Klassensyntax definiert. Schreibe die Methode `render` fertig, damit sie ein `div`-Element zurückgibt, das ein `h1` mit dem Text `Hello React!` enthält.

# --hints--

Die React-Komponente sollte ein `div`-Element zurückgeben.

```js
assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div');
```

Das zurückgegebene `div` sollte ein `h1`-Überschriftenelement enthalten.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.shallow(React.createElement(MyComponent)).html()
  )
);
```

Das `h1`-Überschriftenelement sollte den String `Hello React!` enthalten.

```js
assert(
  Enzyme.shallow(React.createElement(MyComponent)).html() ===
    '<div><h1>Hello React!</h1></div>'
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
  }
  render() {
    // Change code below this line



    // Change code above this line
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};
```
