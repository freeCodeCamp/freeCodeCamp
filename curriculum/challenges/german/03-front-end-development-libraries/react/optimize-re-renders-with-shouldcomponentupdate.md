---
id: 5a24c314108439a4d4036180
title: Optimiere Re-Renderings mit shouldComponentUpdate
challengeType: 6
forumTopicId: 301398
dashedName: optimize-re-renders-with-shouldcomponentupdate
---

# --description--

Wenn eine Komponente einen neuen Zustand (`state`) oder neue Eigenschafte (`props`) erhält, werden sie selbst und alle ihre Kindelemente neu geordnet. Das ist normalerweise in Ordnung. Aber React bietet eine Lifecycle-Methode, die du aufrufen kannst, wenn Kindkomponenten einen neuen `state` oder `props` erhalten, und die genau festlegt, ob die Komponenten aktualisiert werden sollen oder nicht. Die Methode heißt `shouldComponentUpdate()` und nimmt `nextProps` und `nextState` als Parameter.

Diese Methode ist eine nützliche Methode, um die Leistung zu optimieren. Zum Beispiel ist das Standardverhalten, dass deine Komponente neu gerendert wird, wenn sie neue `props` erhält, auch wenn sich die `props` nicht geändert haben. Du kannst `shouldComponentUpdate()` verwenden, um dies zu verhindern, indem du die `props` vergleichst. Die Methode muss einen `boolean`-Wert zurückgeben, der React mitteilt, ob die Komponente aktualisiert werden soll oder nicht. Du kannst die aktuellen Eigenschaften (`this.props`) mit den nächsten Eigenschaften (`nextProps`) vergleichen, um festzustellen, ob du aktualisieren musst oder nicht, und entsprechend `true` oder `false` zurückgeben.

# --instructions--

Die Methode `shouldComponentUpdate()` wird in einer Komponente namens `OnlyEvens` hinzugefügt. Zurzeit gibt diese Methode `true` zurück, so dass `OnlyEvens` jedes Mal neu gestartet wird, wenn es neue `props` erhält. Ändere die Methode so, dass `OnlyEvens` nur aktualisiert wird, wenn der `value` der neuen Eigenschaften gerade ist. Klicke auf den Button `Add` und beobachte die Reihenfolge der Ereignisse in der Konsole deines Browsers, wenn die Lifecycle Hooks ausgelöst werden.

# --hints--

Die Komponente `Controller` sollte die Komponente `OnlyEvens` als Kindelement darstellen.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Controller));
    return (
      mockedComponent.find('Controller').length === 1 &&
      mockedComponent.find('OnlyEvens').length === 1
    );
  })()
);
```

Die Methode `shouldComponentUpdate` sollte für die Komponente `OnlyEvens` definiert werden.

```js
assert(
  (() => {
    const child = React.createElement(OnlyEvens)
      .type.prototype.shouldComponentUpdate.toString()
      .replace(/s/g, '');
    return child !== 'undefined';
  })()
);
```

Die Komponente `OnlyEvens` sollte ein `h1`-Tag zurückgeben, das den Wert von `this.props.value` wiedergibt.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 1000 });
    return mockedComponent.find('h1').html();
  };
  const second = () => {
    mockedComponent.setState({ value: 10 });
    return mockedComponent.find('h1').html();
  };
  const firstValue = first();
  const secondValue = second();
  assert(firstValue === '<h1>1000</h1>' && secondValue === '<h1>10</h1>');
})();
```

`OnlyEvens` sollte nur neu gerendert werden, wenn `nextProps.value` gerade ist.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 8 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ value: 7 });
    return mockedComponent.find('h1').text();
  };
  const third = () => {
    mockedComponent.setState({ value: 42 });
    return mockedComponent.find('h1').text();
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(firstValue === '8' && secondValue === '8' && thirdValue === '42');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Controller />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return true;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

# --solutions--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return nextProps.value % 2 === 0;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```
