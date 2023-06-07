---
id: 5a24c314108439a4d403616a
title: Übergabe eines Arrays als Eigenschaft
challengeType: 6
forumTopicId: 301401
dashedName: pass-an-array-as-props
---

# --description--

In der letzten Aufgabe wurde gezeigt, wie man Informationen von einer Elternkomponente an eine Kindkomponente als `props` oder Eigenschaften weitergibt. In dieser Aufgabe geht es darum, wie Arrays als `props` übergeben werden können. Um ein Array an ein JSX-Element zu übergeben, muss es als JavaScript behandelt werden und in geschweifte Klammern eingeschlossen werden.

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

Die Kindkomponente hat dann Zugriff auf die Array-Eigenschaft `colors`. Array-Methoden wie `join()` können beim Zugriff auf die Eigenschaft verwendet werden. `const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>` Das fügt alle `colors` Array-Elemente zu einem kommagetrennten String zusammen und erzeugt: `<p>green, blue, red</p>` Später werden wir andere gängige Methoden kennenlernen, um Arrays von Daten in React darzustellen.

# --instructions--

Im Code-Editor gibt es die Komponenten `List` und `ToDo`. Beim Rendern jeder `List` der Komponente `ToDo` übergibst du eine `tasks`-Eigenschaft, die einem Array von To-Do-Aufgaben zugewiesen ist, zum Beispiel `["walk dog", "workout"]`. Dann greifst du auf dieses `tasks`-Array in der Komponente `List` zu und zeigst seinen Wert innerhalb des `p`-Elements an. Verwende `join(", ")`, um das `props.tasks`array im `p`-Element als kommagetrennte Liste anzuzeigen. Die Liste von heute sollte mindestens 2 Aufgaben und die von morgen mindestens 3 Aufgaben enthalten.

# --hints--

Die Komponente `ToDo` sollte ein einzelnes äußeres `div` zurückgeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().type() === 'div';
  })()
);
```

Das dritte Kindelement der Komponente `ToDo` sollte eine Instanz der Komponente `List` sein.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(2).name() === 'List';
  })()
);
```

Das fünfte Kindelement der Komponente `ToDo` sollte eine Instanz der Komponente `List` sein.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(4).name() === 'List';
  })()
);
```

Beide Instanzen der Komponente `List` sollten eine Eigenschaft namens `tasks` haben und `tasks` sollte vom Typ Array sein.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      Array.isArray(mockedComponent.find('List').get(0).props.tasks) &&
      Array.isArray(mockedComponent.find('List').get(1).props.tasks)
    );
  })()
);
```

Die erste `List`, die die Aufgaben für heute darstellt, sollte 2 oder mehr Einträge enthalten.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(0).props.tasks.length >= 2;
  })()
);
```

Die zweite `List`, die die Aufgaben für morgen darstellt, sollte 3 oder mehr Einträge enthalten.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(1).props.tasks.length >= 3;
  })()
);
```

Die Komponente `List` sollte den Wert aus der Eigenschaft `tasks` im `p`-Tag wiedergeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      mockedComponent
        .find('p')
        .get(0)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(0)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',') &&
      mockedComponent
        .find('p')
        .get(1)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(1)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',')
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ToDo />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const List= (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
      </div>
    );
  }
};
```
