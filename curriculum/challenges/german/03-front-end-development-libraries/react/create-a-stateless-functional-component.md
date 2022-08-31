---
id: 5a24c314108439a4d4036162
title: Erstelle eine zustandslose funktionelle Komponente
challengeType: 6
forumTopicId: 301392
dashedName: create-a-stateless-functional-component
---

# --description--

Komponenten sind der Kern von React. Alles in React ist eine Komponente und hier lernst du, wie du eine erstellst.

Es gibt zwei Möglichkeiten, eine React-Komponente zu erstellen. Die erste Möglichkeit ist die Verwendung einer JavaScript-Funktion. Wenn du eine Komponente auf diese Weise definierst, entsteht eine *zustandslose funktionale Komponente (stateless functional component)*. Das Konzept des Zustands in einer Anwendung wird in späteren Aufgaben behandelt. Stell dir eine zustandslose Komponente als eine Komponente vor, die Daten empfangen und darstellen kann, aber keine Änderungen an diesen Daten verwaltet oder verfolgt. (Die zweite Möglichkeit, eine React-Komponente zu erstellen, behandeln wir in der nächsten Aufgabe.)

Um eine Komponente mit einer Funktion zu erstellen, schreibst du einfach eine JavaScript-Funktion, die entweder JSX oder `null` zurückgibt. Eine wichtige Sache, die du beachten musst, ist, dass React verlangt, dass dein Funktionsname mit einem Großbuchstaben beginnt. Hier ist ein Beispiel für eine zustandslose funktionale Komponente, die eine HTML-Klasse in JSX zuweist:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

Nach der Umsetzung hat das `<div>` eine CSS-Klasse von `customClass`.

Da eine JSX-Komponente HTML darstellt, kannst du mehrere Komponenten zusammenfügen, um eine komplexere HTML-Seite zu erstellen. Dies ist einer der wichtigsten Vorteile der Komponentenarchitektur von React. Es ermöglicht dir, deine Benutzeroberfläche (UI) aus vielen separaten, isolierten Komponenten zusammenzustellen. Das macht es einfacher, komplexe Benutzeroberflächen zu erstellen und zu pflegen.

# --instructions--

Der Code-Editor hat eine Funktion namens `MyComponent`. Vervollständige diese Funktion so, dass sie ein einzelnes `div`-Element zurückgibt, das einen String mit Text enthält.

**Hinweis:** Der Text wird als Kindelement des `div`-Elements betrachtet, daher kannst du kein selbstschließendes Tag verwenden.

# --hints--

`MyComponent` sollte JSX zurückgeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.length === 1;
  })()
);
```

`MyComponent` sollte ein `div`-Element zurückgeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Das `div`-Element sollte einen String aus Text enthalten.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').text() !== '';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const MyComponent = function() {
  // Change code below this line



  // Change code above this line
}
```

# --solutions--

```jsx
const MyComponent = function() {
  // Change code below this line
  return (
    <div>
      Demo Solution
    </div>
  );
  // Change code above this line
}
```
