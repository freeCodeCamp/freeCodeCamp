---
id: 5a24c314108439a4d403617c
title: Verwende die Lifecycle-Methode componentWillMount
challengeType: 6
forumTopicId: 301423
dashedName: use-the-lifecycle-method-componentwillmount
---

# --description--

React-Komponenten haben mehrere spezielle Methoden, die es ermöglichen, an bestimmten Punkten im Lebenszyklus (Lifecycle) einer Komponente Aktionen durchzuführen. Diese werden Lifecycle-Methoden oder Lifecycle-Hooks genannt und ermöglichen es dir, Komponenten zu bestimmten Zeitpunkten abzufangen. Das kann sein, bevor sie gerendert werden, bevor sie aktualisiert werden, bevor sie Eigenschaften erhalten, bevor sie demontiert werden, und so weiter. Hier ist eine Liste mit einigen der wichtigsten Lifecycle-Methoden: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()` In den nächsten Lektionen werden einige der grundlegenden Anwendungsfälle für diese Lifecycle-Methoden behandelt.

**Hinweis:** Die Lifecycle-Methode `componentWillMount` wird in einer zukünftigen Version von 16.X veraltet sein und in Version 17 entfernt werden. Erfahre mehr in diesem Artikel: <a href="https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/" target="_blank" rel="noopener noreferrer nofollow"></a>

# --instructions--

Die Methode `componentWillMount()` wird vor der Methode `render()` aufgerufen, wenn eine Komponente in das DOM eingebunden wird. Protokolliere etwas auf der Konsole innerhalb von `componentWillMount()` - du solltest die Konsole deines Browsers geöffnet haben, um die Ausgabe zu sehen.

# --hints--

`MyComponent` sollte ein `div`-Element darstellen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').length === 1;
  })()
);
```

`console.log` sollte in `componentWillMount` aufgerufen werden.

```js
assert(
  (function () {
    const lifecycle = React.createElement(MyComponent)
      .type.prototype.componentWillMount.toString()
      .replace(/ /g, '');
    return lifecycle.includes('console.log(');
  })()
);
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
  }
  componentWillMount() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return <div />
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log('Component is mounting...');
    // Change code above this line
  }
  render() {
    return <div />
  }
};
```
