---
id: 5a24c314108439a4d4036164
title: Eine Komponente mit Komposition erstellen
challengeType: 6
forumTopicId: 301383
dashedName: create-a-component-with-composition
---

# --description--

Jetzt schauen wir uns an, wie wir mehrere React-Komponenten zusammensetzen können. Stell dir vor, du baust eine App und hast drei Komponenten erstellt: eine `Navbar`, `Dashboard` und `Footer`.

Um diese Komponenten zusammenzustellen, könntest du eine `App` *Elternkomponente* erstellen, die jede dieser drei Komponenten als *Kinderkomponente* wiedergibt. Um eine Komponente als Kind in einer React-Komponente darzustellen, fügst du den Komponentennamen als benutzerdefinierten HTML-Tag in die JSX ein. Zum Beispiel könntest du in der Methode `render` schreiben:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

Wenn React auf ein benutzerdefiniertes HTML-Tag stößt, das auf eine andere Komponente verweist (ein Komponentenname, der wie in diesem Beispiel in `< />` eingeschlossen ist), wird das Markup für diese Komponente an der Stelle des Tags gerendert. Dies soll die Eltern/Kind-Beziehung zwischen der `App`-Komponente und der `Navbar`, dem `Dashboard` und dem `Footer` verdeutlichen.

# --instructions--

Im Code-Editor gibt es eine einfache funktionale Komponente namens `ChildComponent` und eine Klassenkomponente namens `ParentComponent`. Setze die beiden zusammen, indem du die Kinderkomponente (`ChildComponent`) innerhalb der Elternkomponente (`ParentComponent`) renderst. Achte darauf, dass du den `ChildComponent`-Tag mit einem Schrägstrich schließt.

**Hinweis:** `ChildComponent` wird mit einer ES6-Pfeilfunktion (arrow function) definiert, weil dies eine sehr gängige Praxis bei der Verwendung von React ist. Du solltest aber wissen, dass dies nur eine Funktion ist. Wenn du mit der Syntax der Pfeilfunktion nicht vertraut bist, sieh dir bitte den Abschnitt über JavaScript an.

# --hints--

Die React-Komponente sollte ein einzelnes `div`-Element zurückgeben.

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.type() === 'div';
  })()
);
```

Die Komponente sollte zwei verschachtelte Elemente zurückgeben.

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.children().length === 2;
  })()
);
```

Die Komponente sollte die `ChildComponent` als ihr zweites Kind zurückgeben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ParentComponent));
    return (
      mockedComponent.find('ParentComponent').find('ChildComponent').length ===
      1
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ParentComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }


        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
