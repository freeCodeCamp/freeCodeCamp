---
id: 5a24c314108439a4d403617d
title: Verwende die Lifecycle Methode componentDidMount
challengeType: 6
forumTopicId: 301422
dashedName: use-the-lifecycle-method-componentdidmount
---

# --description--

Die meisten Webentwickler müssen irgendwann einen API-Endpunkt aufrufen, um Daten abzurufen. Wenn du mit React arbeitest, ist es wichtig zu wissen, wo du diese Aktion durchführen musst.

Die beste Methode bei React ist, API-Aufrufe oder Aufrufe an deinen Server in der Lifecycle-Methode `componentDidMount()` zu platzieren. Diese Methode wird aufgerufen, nachdem eine Komponente in das DOM eingebaut wurde. Jeder Aufruf von `setState()` hier löst ein neues Rendering deiner Komponente aus. Wenn du mit dieser Methode eine API aufrufst und deinen Status mit den Daten einstellst, die die API zurückgibt, wird automatisch eine Aktualisierung ausgelöst, sobald du die Daten erhältst.

# --instructions--

Es gibt einen Mock-API-Aufruf in `componentDidMount()`. Sie setzt den Zustand nach 2,5 Sekunden, um zu simulieren, dass sie einen Server anruft, um Daten abzurufen. In diesem Beispiel wird die aktuelle Anzahl der aktiven Nutzer für eine Website abgefragt. In der Render-Methode gibst du den Wert von `activeUsers` in dem `h1` nach dem Text `Active Users:` wieder. Sieh dir an, was in der Vorschau passiert und ändere die Zeitspanne, um die verschiedenen Effekte zu sehen.

# --hints--

`MyComponent` soll ein `div`-Element darstellen, das ein `h1`-Tag umhüllt.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

Der Zustand der Komponente sollte mit einer Timeout-Funktion in `componentDidMount` aktualisiert werden.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(
      String(mockedComponent.instance().componentDidMount)
    );
  })()
);
```

Der `h1`-Tag sollte den `activeUsers`-Wert aus dem Zustand von `MyComponent` wiedergeben.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ activeUsers: 1237 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ activeUsers: 1000 });
    return mockedComponent.find('h1').text();
  };
  assert(new RegExp('1237').test(first()) && new RegExp('1000').test(second()));
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```
