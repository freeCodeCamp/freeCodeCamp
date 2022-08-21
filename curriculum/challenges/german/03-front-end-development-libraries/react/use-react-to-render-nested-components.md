---
id: 5a24c314108439a4d4036165
title: Verwende React, um verschachtelte Komponenten zu rendern
challengeType: 6
forumTopicId: 301420
dashedName: use-react-to-render-nested-components
---

# --description--

Die letzte Aufgabe zeigte einen einfachen Weg, zwei Komponenten zusammenzufügen, aber es gibt viele verschiedene Möglichkeiten, wie du Komponenten mit React zusammensetzen kannst.

Die Komponentenkomposition ist eine der mächtigen Funktionen von React. Wenn du mit React arbeitest, ist es wichtig, dass du dir deine Benutzeroberfläche in Form von Komponenten vorstellst, wie im App-Beispiel in der letzten Aufgabe. Du zerlegst deine Benutzeroberfläche in ihre Grundbausteine, und diese Teile werden zu den Komponenten. Dies hilft dabei, den Code, der für die Benutzeroberfläche verantwortlich ist, von dem Code zu trennen, der für die Anwendungslogik zuständig ist. Das kann die Entwicklung und Pflege komplexer Projekte erheblich vereinfachen.

# --instructions--

Im Code-Editor sind zwei funktionale Komponenten definiert, die `TypesOfFruit` und `Fruits` heißen. Nimm die Komponente `TypesOfFruit` und füge sie zusammen oder *bette* sie in die Komponente `Fruits` ein. Nimm dann die Komponente `Fruits` und verschachtle sie innerhalb der Komponente `TypesOfFood`. Das Ergebnis sollte eine untergeordnete Komponente sein, die in einer übergeordneten Komponente verschachtelt ist, die wiederum in einer eigenen übergeordneten Komponente verschachtelt ist!

# --hints--

Die Komponente `TypesOfFood` sollte ein einzelnes `div`-Element zurückgeben.

```js
assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
```

Die Komponente `TypesOfFood` sollte die Komponente `Fruits` zurückgeben.

```js
assert(
  Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type
    .name === 'Fruits'
);
```

Die Komponente `Fruits` sollte die Komponente `TypesOfFruit` zurückgeben.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() ===
    '<h2>Fruits:</h2>'
);
```

Die Komponente `TypesOfFruit` sollte die Elemente `h2` und `ul` zurückgeben.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() ===
    'ApplesBlueberriesStrawberriesBananas'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }

      { /* Change code above this line */ }
    </div>
  );
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
      </div>
    );
  }
};
```

# --solutions--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
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
        <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
