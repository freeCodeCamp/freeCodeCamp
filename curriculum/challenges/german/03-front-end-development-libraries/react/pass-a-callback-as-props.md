---
id: 5a24c314108439a4d403617b
title: Einen Callback als Eigenschaft übergeben
challengeType: 6
forumTopicId: 301400
dashedName: pass-a-callback-as-props
---

# --description--

Du kannst `state` als Eigenschaften an Kindkomponenten übergeben, aber du bist nicht auf die Übergabe von Daten beschränkt. Du kannst auch Handler-Funktionen oder jede Methode, die in einer React-Komponente definiert ist, an eine Kindkomponente übergeben. So erlaubst du den Kindkomponenten, mit ihren Elternkomponenten zu interagieren. Du übergibst Methoden an ein Kind wie eine normale Eigenschaft. Ihr wird ein Name zugewiesen und du hast Zugriff auf diesen Methodennamen unter `this.props` in der Kindkomponente.

# --instructions--

Es gibt drei Komponenten, die im Code-Editor beschrieben werden. Die Komponente `MyApp` ist die Elternkomponente, die die Kindkomponenten `GetInput` und `RenderInput` rendert. Füge die Komponente `GetInput` zur Rendering-Methode in `MyApp` hinzu und übergebe ihr eine Eigenschaft namens `input`, die dem `inputValue` aus `MyApp`'s `state` zugewiesen ist. Erstelle außerdem eine Eigenschaft namens `handleChange` und übergebe ihr den Input-Handler `handleChange`.

Als Nächstes fügst du `RenderInput` zur Render-Methode in `MyApp` hinzu. Dann erstellst du eine Eigenschaft namens `input` und übergibst den `inputValue` aus `state` an sie. Sobald du fertig bist, kannst du das `input`-Feld in die `GetInput`-Komponente eingeben, die dann die Handler-Methode in ihrer Elternkomponente über props aufruft. Dadurch wird die Eingabe im `state` der Elternkomponente aktualisiert, der als Eigenschaft an die beiden Kinderkomponente übergeben wird. Beobachte, wie die Daten zwischen den Komponenten fließen und wie die einzige Quelle der Wahrheit der `state` der übergeordneten Komponente bleibt. Zugegeben, dieses Beispiel ist ein bisschen konstruiert, aber es soll veranschaulichen, wie Daten und Rückrufe zwischen React-Komponenten weitergegeben werden können.

# --hints--

Die Komponente `MyApp` soll gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('MyApp').length === 1;
  })()
);
```

Die Komponente `GetInput` soll gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('GetInput').length === 1;
  })()
);
```

Die Komponente `RenderInput` soll gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('RenderInput').length === 1;
  })()
);
```

Die Komponente `GetInput` sollte die `MyApp`-Zustandseigenschaft `inputValue` als Eigenschaft erhalten und ein `input`-Element enthalten, das den `MyApp`-Zustand verändert.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: '' });
    return waitForIt(() => mockedComponent.state());
  };
  const state_2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => mockedComponent.state());
  };
  const updated_1 = await state_1();
  const updated_2 = await state_2();
  assert(updated_1.inputValue === '' && updated_2.inputValue === 'TestInput');
};
```

Die Komponente `RenderInput` sollte die `MyApp`-Zustandseigenschaft `inputValue` als Eigenschaft erhalten.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: 'TestName' });
    return waitForIt(() => mockedComponent);
  };
  const updated_1 = await state_1();
  assert(updated_1.find('p').text().includes('TestName'));
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
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

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```
