---
id: 5a24c314108439a4d4036187
title: Verwende einen ternären Ausdruck für bedingtes Rendering
challengeType: 6
forumTopicId: 301414
dashedName: use-a-ternary-expression-for-conditional-rendering
---

# --description--

Bevor wir uns den dynamischen Rendering-Techniken zuwenden, gibt es noch eine letzte Möglichkeit, die eingebauten JavaScript-Bedingungen zu nutzen, um das zu rendern, was du willst: den <dfn>ternären Operator</dfn>. Der ternäre Operator wird oft als Abkürzung für `if/else`-Anweisungen in JavaScript verwendet. Sie sind nicht ganz so robust wie traditionelle `if/else`-Anweisungen, aber sie sind bei React-Entwicklern sehr beliebt. Ein Grund dafür ist, dass aufgrund der Art und Weise, wie JSX kompiliert wird, `if/else`-Anweisungen nicht direkt in JSX-Code eingefügt werden können. Du hast das vielleicht schon vor ein paar Aufgaben bemerkt - wenn eine `if/else`-Anweisung erforderlich war, war sie immer *außerhalb* der `return`-Anweisung. Ternäre Ausdrücke können eine hervorragende Alternative sein, wenn du bedingte Logik in deine JSX implementieren willst. Erinnere dich daran, dass ein ternärer Operator aus drei Teilen besteht, aber du kannst mehrere ternäre Ausdrücke miteinander kombinieren. Hier ist die grundlegende Syntax:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

# --instructions--

Der Code-Editor hat drei Konstanten in der `CheckUserAge`-Methode der Komponente `render()` definiert. Sie heißen `buttonOne`, `buttonTwo` und `buttonThree`. Jedem dieser Elemente ist ein einfacher JSX-Ausdruck zugeordnet, der ein Button-Element darstellt. Zuerst initialisierst du den Zustand von `CheckUserAge` mit `input` und `userAge`, die beide auf einen leeren String gesetzt sind.

Sobald die Komponente Informationen an die Seite überträgt, sollten die Nutzer eine Möglichkeit haben, mit ihr zu interagieren. In der `return`-Anweisung der Komponente erstellst du einen ternären Ausdruck, der die folgende Logik implementiert: Wenn die Seite zum ersten Mal geladen wird, wird der Submit-Button `buttonOne` auf der Seite angezeigt. Wenn ein Benutzer sein Alter eingibt und auf den Button klickt, wird je nach Alter ein anderer Button angezeigt. Wenn ein Benutzer eine Zahl kleiner als `18` eingibt, wird `buttonThree` angezeigt. Wenn ein Benutzer eine Zahl größer oder gleich `18` eingibt, wird `buttonTwo` angezeigt.

# --hints--

Die Komponente `CheckUserAge` sollte mit einem einzelnen `input`-Element und einem einzelnen `button`-Element dargestellt werden.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input')
    .length === 1 &&
    Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button')
      .length === 1
);
```

Der Zustand der Komponente `CheckUserAge` sollte mit einer Eigenschaft von `userAge` und einer Eigenschaft von `input` initialisiert werden, die beide auf einen leeren String gesetzt sind.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' &&
    Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === ''
);
```

Wenn die Komponente `CheckUserAge` zum ersten Mal in das DOM gerendert wird, sollte der innere Text des `button` "Submit" sein.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() ===
    'Submit'
);
```

Wenn eine Zahl kleiner als 18 in das `input`-Element eingegeben und der `button` angeklickt wird, sollte der innere Text des `button` lauten: `You Shall Not Pass`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter3AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '3' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter17AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '17' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge3 = enter3AndClickButton();
  const userAge17 = enter17AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge3 === 'You Shall Not Pass' &&
      userAge17 === 'You Shall Not Pass'
  );
})();
```

Wenn eine Zahl größer oder gleich 18 in das `input`-Element eingegeben und der `button` angeklickt wird, sollte der innere Text des `button` lauten: `You May Enter`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter35AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '35' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const userAge35 = enter35AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge18 === 'You May Enter' &&
      userAge35 === 'You May Enter'
  );
})();
```

Sobald eine Zahl übermittelt wurde und der Wert des `input` erneut geändert wird, sollte der `button` wieder `Submit` anzeigen.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const changeInputDontClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '5' } });
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter10AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '10' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const changeInput1 = changeInputDontClickButton();
  const userAge10 = enter10AndClickButton();
  const changeInput2 = changeInputDontClickButton();
  assert(
    userAge18 === 'You May Enter' &&
      changeInput1 === 'Submit' &&
      userAge10 === 'You Shall Not Pass' &&
      changeInput2 === 'Submit'
  );
})();
```

Dein Code sollte keine `if/else`-Anweisungen enthalten.

```js
assert(
  new RegExp(/(\s|;)if(\s|\()/).test(
    code
  ) === false
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<CheckUserAge />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
```
