---
id: 5a24c314108439a4d4036189
title: Inline-CSS bedingungsabhängig vom Komponentenzustand ändern
challengeType: 6
forumTopicId: 301380
dashedName: change-inline-css-conditionally-based-on-component-state
---

# --description--

Bis jetzt hast du mehrere Anwendungen des bedingungsabhängigen Renderings und die Verwendung von Inline-Styles gesehen. Hier ist ein weiteres Beispiel, das diese beiden Themen kombiniert. Du kannst CSS auch abhängig vom Zustand einer React-Komponente rendern. Dazu überprüfst du eine Bedingung, und wenn diese erfüllt ist, änderst du das Styles-Objekt, das den JSX-Elementen in der Render-Methode zugewiesen wird.

Dieses Paradigma ist wichtig zu verstehen, denn es ist eine drastische Veränderung gegenüber dem traditionellen Ansatz der Anwendung von Stilen durch die direkte Änderung von DOM-Elementen (was zum Beispiel bei jQuery sehr verbreitet ist). Bei diesem Ansatz musst du verfolgen, wann sich Elemente ändern und die eigentliche Manipulation direkt vornehmen. Es kann schwierig werden, den Überblick über Änderungen zu behalten, was deine Benutzeroberfläche (UI) unberechenbar machen kann. Wenn du ein Style-Objekt basierend auf einer Bedingung festlegst, beschreibst du, wie die Benutzeroberfläche in Abhängigkeit vom Zustand der Anwendung aussehen soll. Es gibt einen klaren Informationsfluss, der nur in eine Richtung geht. Dies ist die bevorzugte Methode, wenn du Anwendungen mit React schreibst.

# --instructions--

Der Code-Editor hat eine einfache kontrollierte Eingabekomponente mit einem gestylten Rahmen. Du möchtest diesen Rahmen rot gestalten, wenn der Benutzer mehr als 15 Zeichen Text in das Eingabefeld eingibt. Füge eine Bedingung hinzu, um dies zu überprüfen und setze, wenn die Bedingung gültig ist, den Rahmenstil der Eingabe auf `3px solid red`. Du kannst es ausprobieren, indem du Text in das Eingabefeld eingibst.

# --hints--

Die Komponente `GateKeeper` sollte ein `div`-Element darstellen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.find('div').length === 1;
  })()
);
```

Die Komponente `GateKeeper` sollte mit einem Zustandsschlüssel `input` initialisiert werden, der auf einen leeren String gesetzt ist.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.state().input === '';
  })()
);
```

Die Komponente `GateKeeper` sollte ein `h3`-Tag und ein `input`-Tag darstellen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('h3').length === 1 &&
      mockedComponent.find('input').length === 1
    );
  })()
);
```

Das `input`-Tag sollte anfangs einen Stil von `1px solid black` für die Eigenschaft `border` besitzen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('input').props().style.border === '1px solid black'
    );
  })()
);
```

Das `input`-Tag sollte mit einem Rahmen von `3px solid red` gestaltet werden, wenn der Eingabewert im Zustand länger als 15 Zeichen ist.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  let initialStyle = mockedComponent.find('input').props().style.border;
  const state_1 = () => {
    mockedComponent.setState({ input: 'this is 15 char' });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const state_2 = () => {
    mockedComponent.setState({
      input: 'A very long string longer than 15 characters.'
    });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const style_1 = await state_1();
  const style_2 = await state_2();
  assert(
    initialStyle === '1px solid black' &&
      style_1 === '1px solid black' &&
      style_2 === '3px solid red'
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<GateKeeper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line

    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    };
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```
