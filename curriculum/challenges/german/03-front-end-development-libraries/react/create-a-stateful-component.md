---
id: 5a24c314108439a4d4036170
title: Eine zustandsabhängige Komponente erstellen
challengeType: 6
forumTopicId: 301391
dashedName: create-a-stateful-component
---

# --description--

Eines der wichtigsten Themen in React ist der Zustand (`state`). Der Zustand besteht aus allen Daten, die deine Anwendung kennen muss und die sich im Laufe der Zeit ändern können. Du möchtest, dass deine Apps auf Zustandsänderungen reagieren und bei Bedarf eine aktualisierte Benutzeroberfläche präsentieren. React bietet eine gute Lösung für die Zustandsverwaltung von modernen Webanwendungen.

Du erstellst einen Zustand in einer React-Komponente, indem du eine `state`-Eigenschaft für die Komponentenklasse in ihrem `constructor` deklarierst. Dies initialisiert die Komponente mit `state`, wenn sie erstellt wird. Die Eigenschaft `state` muss auf ein JavaScript `object` gesetzt werden. Die Deklaration sieht so aus:

```jsx
this.state = {

}
```

Du hast während der gesamten Lebensdauer deiner Komponente Zugriff auf das `state`-Objekt. Du kannst es aktualisieren, in deiner Benutzeroberfläche darstellen und als Eigenschaften an Kindkomponenten weitergeben. Das `state`-Objekt kann so komplex oder so einfach sein, wie du es brauchst. Beachte, dass du eine Komponentenklasse erstellen musst, indem du `React.Component` erweiterst, um `state` auf diese Weise zu erstellen.

# --instructions--

Es gibt eine Komponente im Code-Editor, die versucht eine `firstName`-Eigenschaft aus dem `state` zu übertragen. Es ist jedoch kein `state` definiert. Initialisiere die Komponente mit `state` im `constructor` und weise deinen Namen zu einer Eigenschaft `firstName`.

# --hints--

`StatefulComponent` sollte existieren und gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    return mockedComponent.find('StatefulComponent').length === 1;
  })()
);
```

`StatefulComponent` sollte ein `div` und ein `h1`-Element darstellen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

Der Zustand von `StatefulComponent` sollte mit einer Eigenschaft `firstName` eingeleitet werden, die einem String zugeordnet ist.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' && typeof initialState.firstName === 'string'
    );
  })()
);
```

Die Eigenschaft `firstName` im `StatefulComponent` sollte im `h1`-Element übertragen werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    const initialState = mockedComponent.state();
    return mockedComponent.find('h1').text() === initialState.firstName;
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<StatefulComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line

    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'freeCodeCamp!'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```
