---
id: 5a24c314108439a4d4036171
title: Darstellung des Zustands in der Benutzeroberfläche
challengeType: 6
forumTopicId: 301409
dashedName: render-state-in-the-user-interface
---

# --description--

Sobald du den Ausgangszustand einer Komponente definiert hast, kannst du jeden Teil der Komponente in der gerenderten Benutzeroberfläche anzeigen. Wenn eine Komponente zustandsabhängig ist, hat sie in ihrer `render()`-Methode immer Zugriff auf die Daten im `state`. Du kannst auf die Daten mit `this.state` zugreifen.

Wenn du innerhalb des `return` der Render-Methode auf einen Zustandswert zugreifen willst, musst du den Wert in geschweifte Klammern einschließen.

Der `state` ist eine der mächtigsten Funktionen der Komponenten in React. Sie ermöglicht es dir, wichtige Daten in deiner App zu verfolgen und eine Benutzeroberfläche als Reaktion auf Änderungen dieser Daten darzustellen. Wenn sich deine Daten ändern, wird sich auch deine Benutzeroberfläche ändern. React verwendet ein sogenanntes virtuelles DOM, um Änderungen hinter den Kulissen zu verfolgen. Wenn die Zustandsdaten aktualisiert werden, werden die Komponenten, die diese Daten verwenden, neu gerendert - einschließlich der Kindkomponenten, die die Daten als Eigenschaft (prop) erhalten haben. React aktualisiert das eigentliche DOM, aber nur, wenn es nötig ist. Das bedeutet, dass du dich nicht um die Änderung des DOM kümmern musst. Du gibst einfach an, wie die Benutzeroberfläche aussehen soll.

Beachte, dass wenn du eine Komponente zustandsabhängig machst, andere Komponenten nichts von ihrem `state` wissen. Ihr `state` ist vollständig gekapselt oder lokal für diese Komponente, es sei denn, du übergibst Zustandsdaten als `props` an eine Kindkomponente. Das Konzept des gekapselten `state` ist sehr wichtig, weil es dir erlaubt, eine bestimmte Logik zu schreiben und diese Logik dann an einer Stelle in deinem Code zu isolieren.

# --instructions--

Im Code-Editor ist `MyComponent` bereits zustandsfähig. Definiere ein `h1`-Tag in der Render-Methode der Komponente, das den Wert von `name` aus dem Zustand der Komponente rendert.

**Hinweis:** Die `h1` sollte nur den Wert von `state` wiedergeben und nichts anderes. In JSX wird jeder Code, den du mit geschweiften Klammern `{ }` schreibst, als JavaScript behandelt. Um auf den Wert von `state` zuzugreifen, musst du die Referenz in geschweifte Klammern einschließen.

# --hints--

`MyComponent` sollte einen Schlüssel `name` mit dem Wert `freeCodeCamp` in seinem Status gespeichert haben.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'freeCodeCamp'
);
```

`MyComponent` sollte ein `h1`-Überschriftenelement darstellen, das von einem einzelnen `div` eingeschlossen ist.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

Das gerenderte `h1`-Überschriftenelement sollte nur Text enthalten, der aus dem Zustand der Komponente gerendert wurde.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  const getValue = firstValue.replace(/\s/g, '');
  assert(getValue === '<div><h1>TestName</h1></div>');
};
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
