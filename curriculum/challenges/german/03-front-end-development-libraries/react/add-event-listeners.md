---
id: 5a24c314108439a4d403617e
title: Ereignis-Listener hinzufügen (Event Listener)
challengeType: 6
forumTopicId: 301377
dashedName: add-event-listeners
---

# --description--

Die Methode `componentDidMount()` ist auch der beste Ort, um Event-Listener hinzuzufügen, die du für bestimmte Funktionen brauchst. React bietet ein synthetisches Eventsystem, das das native Eventsystem des Browsers umhüllt. Das bedeutet, dass sich das synthetische Eventsystem unabhängig vom Browser des Nutzers genau gleich verhält - auch wenn sich die nativen Events in verschiedenen Browsern unterschiedlich verhalten können.

Du hast bereits einige dieser synthetischen Event-Handler wie `onClick()` verwendet. Das synthetische Eventsystem von React ist ideal für die meisten Interaktionen, die du mit DOM-Elementen durchführst. Wenn du jedoch einen Event-Handler an die Dokument- oder Fensterobjekte anhängen möchtest, musst du dies direkt tun.

# --instructions--

Füge in der Methode `componentDidMount()` einen Ereignis-Listener für `keydown`-Events hinzu und lass diese Events den Callback `handleKeyPress()` auslösen. Du kannst `document.addEventListener()` verwenden, das den Event (in Anführungszeichen) als erstes Argument und den Callback als zweites Argument nimmt.

Entferne dann in `componentWillUnmount()` denselben Event-Listener. Du kannst die gleichen Argumente an `document.removeEventListener()` übergeben. Es ist eine gute Praxis, diese Lifecycle-Methode zu verwenden, um React-Komponenten zu säubern, bevor sie demontiert und zerstört werden. Das Entfernen von Event-Listenern ist ein Beispiel für eine solche Aufräumaktion.

# --hints--

`MyComponent` soll ein `div`-Element darstellen, das ein `h1`-Tag umhüllt.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').children().find('h1').length === 1;
  })()
);
```

Ein `keydown`-Listener sollte an das Dokument in `componentDidMount` angehängt werden.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const didMountString = mockedComponent
      .instance()
      .componentDidMount.toString();
    return new RegExp(
      'document.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(didMountString);
  })()
);
```

Der `keydown`-Listener sollte in `componentWillUnmount` aus dem Dokument entfernt werden.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const willUnmountString = mockedComponent
      .instance()
      .componentWillUnmount.toString();
    return new RegExp(
      'document.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(willUnmountString);
  })()
);
```

Sobald die Komponente montiert ist, sollte das Drücken von `enter` ihren Zustand und das gerenderte `h1`-Tag aktualisieren.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const beforeState = mockedComponent.state('message');
  const beforeText = mockedComponent.find('h1').text();
  const pressEnterKey = () => {
    mockedComponent.instance().handleKeyPress({ keyCode: 13 });
    return waitForIt(() => {
      mockedComponent.update();
      return {
        state: mockedComponent.state('message'),
        text: mockedComponent.find('h1').text()
      };
    });
  };
  const afterKeyPress = await pressEnterKey();
  assert(
    beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text
  );
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
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
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
      message: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);  }
  componentDidMount() {
    // Change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  componentWillUnmount() {
    // Change code below this line
    document.removeEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```
