---
id: 5a24c314108439a4d4036141
title: Erste Schritte mit React Redux
challengeType: 6
forumTopicId: 301430
dashedName: getting-started-with-react-redux
---

# --description--

Diese Serie von Aufgaben zeigt dir, wie du Redux mit React nutzen kannst. Zunächst ein Überblick über die wichtigsten Prinzipien der einzelnen Technologien. React ist eine Ansichtsbibliothek, die du mit Daten versorgst und die dann die Ansicht auf eine effiziente, vorhersehbare Weise rendert. Redux ist ein Zustandsmanagement-Framework, das du verwenden kannst, um die Verwaltung des Zustands deiner Anwendung zu vereinfachen. Normalerweise erstellst du in einer React Redux-App einen einzigen Redux-Store, der den Zustand deiner gesamten App verwaltet. Deine React-Komponenten beziehen nur die Daten aus dem Store, die für ihre Rolle relevant sind. Dann sendest du Aktionen direkt von React-Komponenten aus, die dann Aktualisierungen im Store auslösen.

Obwohl React-Komponenten ihren eigenen Zustand lokal verwalten können, ist es bei einer komplexen App in der Regel besser, den Zustand der App mit Redux an einem einzigen Ort zu bewahren. Es gibt Ausnahmen, in denen einzelne Komponenten lokale Zustände haben können, die nur für sie gelten. Da Redux nicht für die Zusammenarbeit mit React entwickelt wurde, musst du das `react-redux`-Paket verwenden. Es bietet dir die Möglichkeit, Redux `state` und `dispatch` als Eigenschaften (`props`) an deine React-Komponenten zu übergeben.

In den nächsten Aufgaben wirst du zunächst eine einfache React-Komponente erstellen, mit der du neue Textnachrichten eingeben kannst. Diese werden zu einem Array hinzugefügt, das in der Ansicht angezeigt wird. Dies ist eine gute Wiederholung dessen, was du in den React-Lektionen gelernt hast. Als Nächstes erstellst du einen Redux-Store und Aktionen, die den Status des Nachrichten-Arrays verwalten. Schließlich verwendest du `react-redux`, um den Redux-Store mit deiner Komponente zu verbinden und so den lokalen Zustand in den Redux-Store zu extrahieren.

# --instructions--

Beginne mit einer `DisplayMessages` Komponente. Füge einen Konstruktor zu dieser Komponente hinzu und initialisiere sie mit einem Status, der zwei Eigenschaften besitzt: `input`, die auf einen leeren String gesetzt wird, und `messages`, die auf ein leeres Array gesetzt wird.

# --hints--

Die Komponente `DisplayMessages` sollte ein leeres `div`-Element darstellen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    return mockedComponent.find('div').text() === '';
  })()
);
```

Der Konstruktor `DisplayMessages` sollte richtig mit `super` aufgerufen werden und `props` übergeben.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        noWhiteSpace.includes('constructor(props)') &&
        noWhiteSpace.includes('super(props')
      );
    })()
  );
```

Die Komponente `DisplayMessages` sollte einen Anfangszustand haben, der `{input: "", messages: []}` lautet.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' &&
      initialState.input === '' &&
      Array.isArray(initialState.messages) &&
      initialState.messages.length === 0
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class DisplayMessages extends React.Component {
  // Change code below this line

  // Change code above this line
  render() {
    return <div />
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
  }
  render() {
    return <div/>
  }
};
```
