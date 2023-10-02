---
id: 5a24c314108439a4d4036174
title: Binde "this" an eine Klassenmethode
challengeType: 6
forumTopicId: 301379
dashedName: bind-this-to-a-class-method
---

# --description--

Neben dem Setzen und Aktualisieren des `state`, kannst du auch Methoden für deine Komponentenklasse definieren. Eine Klassenmethode muss normalerweise das Schlüsselwort `this` verwenden, damit sie auf Eigenschaften der Klasse (wie `state` und `props`) innerhalb des Geltungsbereichs der Methode zugreifen kann. Es gibt ein paar Möglichkeiten, den Methoden deiner Klasse den Zugriff auf `this` zu ermöglichen.

Eine gängige Methode ist, `this` explizit im Konstruktor zu verknüpfen, so dass `this` mit den Methoden der Klasse verbunden wird, wenn die Komponente initialisiert wird. Du hast vielleicht bemerkt, dass die letzte Aufgabe `this.handleClick = this.handleClick.bind(this)` für ihre Methode `handleClick` im Konstruktor verwendet. Wenn du dann eine Funktion wie `this.setState()` innerhalb deiner Klassenmethode aufrufst, bezieht sich `this` auf die Klasse und ist nicht `undefined`.

**Hinweis:** Das `this`-Schlüsselwort ist einer der verwirrendsten Aspekte von JavaScript, aber es spielt eine wichtige Rolle in React. Obwohl das Verhalten hier völlig normal ist, sind diese Aufgaben nicht der richtige Ort, um `this` ausführlich zu besprechen, also schau bitte in anderen Aufgaben nach, wenn das oben genannte verwirrend ist!

# --instructions--

Der Code-Editor hat eine Komponente mit einem `state`, die den Text im Auge behält. Sie hat auch eine Methode, mit der du den Text auf `You clicked!` setzen kannst. Die Methode funktioniert jedoch nicht, weil sie das Schlüsselwort `this` verwendet, das undefiniert (undefined) ist. Behebe es, indem du `this` explizit an die Methode `handleClick()` im Konstruktor der Komponente bindest.

Als Nächstes fügst du dem `button`-Element in der Render-Methode einen Click-Handler hinzu. Er sollte die Methode `handleClick()` auslösen, wenn der Button ein Klickereignis erhält. Denke daran, dass die Methode, die du an den `onClick`-Handler übergibst, geschweifte Klammern braucht, weil sie direkt als JavaScript interpretiert werden soll.

Sobald du die oben genannten Schritte abgeschlossen hast, solltest du auf den Button klicken können und `You clicked!` sehen.

# --hints--

`MyComponent` sollte ein `div`-Element zurückgeben, das zwei Elemente umhüllt, einen Button und ein `h1`-Element, in dieser Reihenfolge.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(0)
      .type() === 'button' &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(1)
      .type() === 'h1'
);
```

Der Zustand von `MyComponent` sollte mit dem Schlüssel-Wert-Paar `{ text: "Hello" }` initialisiert werden.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('text') === 'Hello'
);
```

Wenn du auf das `button`-Element klickst, sollte die `handleClick`-Methode ausgeführt werden und der state `text` auf `You clicked!` gesetzt werden.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ text: 'Hello' });
    return waitForIt(() => mockedComponent.state('text'));
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent.state('text'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Hello' && secondValue === 'You clicked!');
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
      text: "Hello"
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
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
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```
