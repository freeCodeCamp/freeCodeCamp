---
id: 5a24c314108439a4d4036167
title: Eine Klassenkomponente in das DOM rendern
challengeType: 6
forumTopicId: 301404
dashedName: render-a-class-component-to-the-dom
---

# --description--

Vielleicht erinnerst du dich daran, dass du in einer früheren Aufgabe die ReactDOM-API benutzt hast, um JSX-Elemente in das DOM zu übertragen. Der Prozess zum Rendern von React-Komponenten sieht sehr ähnlich aus. In den letzten Aufgaben ging es um Komponenten und Komposition, das Rendering wurde also hinter den Kulissen für dich erledigt. Allerdings wird kein React-Code, den du schreibst, im DOM gerendert, ohne dass du die ReactDOM-API aufrufst.

Hier ist eine Auffrischung der Syntax: `ReactDOM.render(componentToRender, targetNode)`. Das erste Argument ist die React-Komponente, die du rendern willst. Das zweite Argument ist der DOM-Knoten, in dem du die Komponente darstellen willst.

React-Komponenten werden in `ReactDOM.render()` ein wenig anders übergeben als JSX-Elemente. Bei JSX-Elementen gibst du den Namen des Elements an, das du rendern möchtest. Für React-Komponenten musst du jedoch die gleiche Syntax verwenden, als würdest du eine verschachtelte Komponente rendern, zum Beispiel `ReactDOM.render(<ComponentToRender />, targetNode)`. Du verwendest diese Syntax sowohl für ES6-Klassenkomponenten als auch für funktionale Komponenten.

# --instructions--

Sowohl die Komponente `Fruits` als auch die Komponente `Vegetables` werden hinter den Kulissen für dich definiert. Rendere beide Komponenten als Kindelemente der Komponente `TypesOfFood` und rendere dann `TypesOfFood` in das DOM. Es gibt ein `div` mit `id='challenge-node'`, dass du verwenden kannst.

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

Die Komponente `TypesOfFood` sollte die Komponente `Fruits` nach dem Element `h1` darstellen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

Die Komponente `TypesOfFood` sollte die Komponente `Vegetables` nach `Fruits` darstellen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

Die Komponente `TypesOfFood` sollte im DOM innerhalb des `div` mit der id `challenge-node` dargestellt werden.

```js
assert(
  (function () {
    const html = document.getElementById('challenge-node').childNodes[0]
      .innerHTML;
    return (
      html.includes(
        '<div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div>'
      ) &&
      html.includes(
        '<div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>'
      )
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
    </div>
  );
};
const Vegetables = () => {
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
};
```

## --seed-contents--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
```

# --solutions--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          <Fruits />
           <Vegetables />
         {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```
