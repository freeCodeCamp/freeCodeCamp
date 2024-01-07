---
id: 5a24c314108439a4d4036179
title: Ein kontrolliertes Formular erstellen
challengeType: 6
forumTopicId: 301384
dashedName: create-a-controlled-form
---

# --description--

Die letzte Aufgabe hat gezeigt, dass React den internen Zustand für bestimmte Elemente wie `input` und `textarea` kontrollieren kann, was sie zu kontrollierten Komponenten macht. Das gilt auch für andere Formularelemente, einschließlich des normalen HTML `form`-Elements.

# --instructions--

Die Komponente `MyForm` wird mit einem leeren `form` mit einem Submit-Handler eingerichtet. Der Submit-Handler wird aufgerufen, wenn das Formular abgeschickt wird.

Wir haben einen Button hinzugefügt, mit dem du das Formular abschicken kannst. Du kannst sehen, dass der `type` auf `submit` gesetzt ist, was bedeutet, dass es der Button ist, der das Formular steuert. Füge das `input`-Element in das `form` ein und setze seine Attribute `value` und `onChange()` wie in der letzten Aufgabe. Du solltest dann die Methode `handleSubmit` so ergänzen, dass sie die Komponenteneigenschaft `submit` auf den aktuellen Eingabewert im lokalen `state` setzt.

**Hinweis:** Du musst auch `event.preventDefault()` im Submit-Handler aufrufen, um zu verhindern, dass das Formular standardmäßig abgeschickt wird und die Webseite aktualisiert wird. Der Einfachheit halber wurde das Standardverhalten hier deaktiviert, um zu verhindern, dass Updates den Aufgabencode zurücksetzen.

Schließlich erstellst du einen `h1`-Tag nach dem `form`, der den `submit`-Wert aus dem `state` der Komponente wiedergibt. Du kannst dann das Formular eintippen und auf die Schaltfläche klicken (oder die Eingabetaste drücken), und deine Eingaben sollten auf der Seite angezeigt werden.

# --hints--

`MyForm` sollte ein `div`-Element zurückgeben, das ein `form` und ein `h1`-Tag enthält. Das Formular sollte ein `input` und einen `button` enthalten.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyForm));
    return (
      mockedComponent.find('div').children().find('form').length === 1 &&
      mockedComponent.find('div').children().find('h1').length === 1 &&
      mockedComponent.find('form').children().find('input').length === 1 &&
      mockedComponent.find('form').children().find('button').length === 1
    );
  })()
);
```

Der Zustand von `MyForm` sollte mit den Eigenschaften von `input` und `submit` initialisiert werden, die beide auf leere Strings gesetzt sind.

```js
assert(
  Enzyme.mount(React.createElement(MyForm)).state('input') === '' &&
    Enzyme.mount(React.createElement(MyForm)).state('submit') === ''
);
```

Die Eingabe des `input`-Elements sollte die `input`-Eigenschaft des Zustands der Komponente aktualisieren.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return mockedComponent.state('input');
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return {
      state: mockedComponent.state('input'),
      inputVal: mockedComponent.find('input').props().value
    };
  };
  const before = _1();
  const after = _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
})();
```

Beim Absenden des Formulars sollte `handleSubmit` ausgeführt werden, das die `submit`-Eigenschaft auf den Zustand der aktuellen Eingabe setzt.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'SubmitInput' } });
    return mockedComponent.state('submit');
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.state('submit');
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'SubmitInput');
})();
```

`handleSubmit` sollte `event.preventDefault` aufrufen

```js
assert(
  __helpers.isCalledWithNoArgs(
    'event.preventDefault',
    MyForm.prototype.handleSubmit.toString()
  )
);
```

Das `h1`-Überschriftenelement sollte den Wert des `submit`-Feldes aus dem Zustand der Komponente wiedergeben.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return mockedComponent.find('h1').text();
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.find('h1').text();
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'TestInput');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyForm />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```
