---
id: 5a24c314108439a4d403618a
title: Verwende Array.map(), um Elemente dynamisch zu rendern
challengeType: 6
forumTopicId: 301417
dashedName: use-array-map-to-dynamically-render-elements
---

# --description--

Bedingungsabhängiges Rendering ist nützlich, aber es kann sein, dass deine Komponenten eine unbekannte Anzahl von Elementen rendern müssen. Bei der reaktiven Programmierung hat ein Programmierer oft keine Möglichkeit, den Zustand einer Anwendung bis zur Laufzeit zu kennen, weil so viel von der Interaktion des Benutzers mit dem Programm abhängt. Die Programmierer müssen ihren Code so schreiben, dass er diesen unbekannten Zustand im Voraus richtig behandelt. Die Verwendung von `Array.map()` in React veranschaulicht dieses Konzept.

Du erstellst zum Beispiel eine einfache "To Do List"-App. Als Programmierer hast du keine Möglichkeit zu wissen, wie viele Punkte ein Nutzer auf seiner Liste haben könnte. Du musst deine Komponente so einrichten, dass sie dynamisch die richtige Anzahl von Listenelementen darstellt, lange bevor jemand, der das Programm benutzt, entscheidet, dass heute Wäschetag ist.

# --instructions--

Im Code-Editor ist der größte Teil der Komponente `MyToDoList` bereits eingerichtet. Einige dieser Codes sollten dir bekannt vorkommen, wenn du die Aufgabe über kontrollierte Formulare gelöst hast. Du wirst ein `textarea` und einen `button` sehen, zusammen mit ein paar Methoden, die ihre Zustände verfolgen, aber noch wird nichts auf der Seite gerendert.

Erstelle im `constructor` ein `this.state`-Objekt und definiere zwei Zustände: `userInput` sollte als leerer String initialisiert werden und `toDoList` als leeres Array. Lösche als Nächstes den `null`-Wert in der `render()`-Methode neben der `items`-Variablen. Übertrage stattdessen das `toDoList`-Array, das im internen Zustand der Komponente gespeichert ist, und rendere dynamisch ein `li` für jedes Element. Versuche, den String `eat, code, sleep, repeat` in das `textarea`-Element einzugeben, klicke dann auf den Button und schau, was passiert.

**Hinweis:** Du weißt vielleicht, dass alle Geschwister-Elemente, die durch eine Zuordnungsoperation wie diese erstellt werden, mit einem eindeutigen `key`-Attribut versehen werden müssen. Mach dir keine Sorgen, das ist das Thema der nächsten Aufgabe.

# --hints--

Die Komponente MyToDoList sollte existieren und auf der Seite angezeigt werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return mockedComponent.find('MyToDoList').length === 1;
  })()
);
```

Das erste Kindelement von `MyToDoList` sollte ein `textarea`-Element sein.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(0).type() ===
      'textarea'
    );
  })()
);
```

Das zweite Kindelement von `MyToDoList` sollte ein `br`-Element sein.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'
    );
  })()
);
```

Das dritte Kindelement von `MyToDoList` sollte ein `button`-Element sein.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(2).type() ===
      'button'
    );
  })()
);
```

Der Zustand von `MyToDoList` sollte mit `toDoList` als leeres Array initialisiert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      Array.isArray(initialState.toDoList) === true &&
      initialState.toDoList.length === 0
    );
  })()
);
```

Der Zustand von `MyToDoList` sollte mit `userInput` als Leerstring initialisiert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      typeof initialState.userInput === 'string' &&
      initialState.userInput.length === 0
    );
  })()
);
```

Wenn du auf den Button `Create List` klickst, sollte die Komponente `MyToDoList` dynamisch eine ungeordnete Liste zurückgeben, die für jedes Element einer kommagetrennten Liste, die in das `textarea`-Element eingegeben wird, ein Listenelement enthält.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  const state_1 = () => {
    return mockedComponent.find('ul').find('li');
  };
  const setInput = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      'testA, testB, testC'
    );
  };
  const click = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_2 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const setInput_2 = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      't1, t2, t3, t4, t5, t6'
    );
  };
  const click_1 = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_3 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const awaited_state_1 = state_1();
  const awaited_setInput = setInput();
  const awaited_click = click();
  const awaited_state_2 = state_2();
  const awaited_setInput_2 = setInput_2();
  const awaited_click_1 = click_1();
  const awaited_state_3 = state_3();
  assert(
    awaited_state_1.length === 0 &&
      awaited_state_2.nodes.length === 3 &&
      awaited_state_3.nodes.length === 6 &&
      awaited_state_2.text === 'testAtestBtestC' &&
      awaited_state_3.text === 't1t2t3t4t5t6'
  );
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyToDoList />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```
