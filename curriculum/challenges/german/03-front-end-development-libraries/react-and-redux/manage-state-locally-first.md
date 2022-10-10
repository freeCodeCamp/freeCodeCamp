---
id: 5a24c314108439a4d4036142
title: Zustand zuerst lokal verwalten
challengeType: 6
forumTopicId: 301431
dashedName: manage-state-locally-first
---

# --description--

Hier beendest du die Erstellung der Komponente `DisplayMessages`.

# --instructions--

Zuerst lässt du die Komponente in der `render()` Methode ein `input` Element, ein `button` Element und ein `ul` Element rendern. Wenn sich das `input`-Element ändert, sollte es eine `handleChange()` Methode auslösen. Außerdem sollte das `input`-Element den Wert von `input` wiedergeben, der im Zustand der Komponente vorhanden ist. Das `button`-Element sollte eine `submitMessage()` Methode auslösen, wenn es angeklickt wird.

Zweitens: Schreibe diese beiden Methoden. Die `handleChange()` Methode sollte das `input` mit dem aktualisieren, was der Benutzer gerade eingibt. Die Methode `submitMessage()` sollte die aktuelle Nachricht (gespeichert in `input`) mit dem Array `messages` im lokalen Zustand verketten und den Wert von `input` löschen.

Schließlich verwendest du `ul`, um ein Array von `messages` abzubilden und es als Liste von `li`-Elementen auf dem Bildschirm darzustellen.

# --hints--

Die Komponente `DisplayMessages` sollte mit einem Zustand initialisiert werden, der `{ input: "", messages: [] }` lautet.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' &&
      initialState.input === '' &&
      initialState.messages.length === 0
    );
  })()
);
```

Die Komponente `DisplayMessages` sollte ein `div` darstellen, das ein `h2`-Element, ein `button`-Element, ein `ul`-Element und `li`-Elemente als Kindelemente enthält.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const state = () => {
    mockedComponent.setState({ messages: ['__TEST__MESSAGE'] });
    return mockedComponent;
  };
  const updated = state();
  assert(
    updated.find('div').length === 1 &&
      updated.find('h2').length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('ul').length === 1 &&
      updated.find('li').length > 0
  );
};
```

`.map` sollte für das `messages`-Array verwendet werden.

```js
assert(code.match(/this\.state\.messages\.map/g));
```

Das `input`-Element sollte den Wert von `input` im lokalen Zustand wiedergeben.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const testValue = '__TEST__EVENT__INPUT';
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return mockedComponent;
  };
  const updated = changed();
  assert(updated.find('input').props().value === testValue);
};
```

Der Aufruf der Methode `handleChange` soll den `input`-Wert im Zustand auf den aktuellen Input aktualisieren.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage = '__TEST__EVENT__MESSAGE__';
  const changed = () => {
    causeChange(mockedComponent, testMessage);
    return mockedComponent;
  };
  const afterInput = changed();
  assert(
    initialState.input === '' &&
      afterInput.state().input === '__TEST__EVENT__MESSAGE__'
  );
};
```

Wenn du auf den Button `Add message` klickst, sollte die Methode `submitMessage` aufgerufen werden, die das aktuelle `input` zum `messages` Array im Zustand hinzufügen sollte.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage_1 = '__FIRST__MESSAGE__';
  const firstChange = () => {
    causeChange(mockedComponent, testMessage_1);
    return mockedComponent;
  };
  const firstResult = firstChange();
  const firstSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent;
  };
  const afterSubmit_1 = firstSubmit();
  const submitState_1 = afterSubmit_1.state();
  const testMessage_2 = '__SECOND__MESSAGE__';
  const secondChange = () => {
    causeChange(mockedComponent, testMessage_2);
    return mockedComponent;
  };
  const secondResult = secondChange();
  const secondSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent;
  };
  const afterSubmit_2 = secondSubmit();
  const submitState_2 = afterSubmit_2.state();
  assert(
    initialState.messages.length === 0 &&
      submitState_1.messages.length === 1 &&
      submitState_2.messages.length === 2 &&
      submitState_2.messages[1] === testMessage_2
  );
};
```

Die `submitMessage` Methode sollte das aktuelle Input leeren.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage = '__FIRST__MESSAGE__';
  const firstChange = () => {
    causeChange(mockedComponent, testMessage);
    return mockedComponent;
  };
  const firstResult = firstChange();
  const firstState = firstResult.state();
  const firstSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent;
  };
  const afterSubmit = firstSubmit();
  const submitState = afterSubmit.state();
  assert(firstState.input === testMessage && submitState.input === '');
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
 this.handleChange = this.handleChange.bind(this);
   this.submitMessage = this.submitMessage.bind(this);
 }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };  
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
```
