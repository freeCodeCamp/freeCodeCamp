---
id: 5a24c314108439a4d403616e
title: Accedere alle proprietà utilizzando this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

Le ultime sfide hanno mostrato i modi fondamentali per passare le proprietà ai componenti figli. Ma cosa succede se il componente figlio a cui stai passando una prop è un componente di classe ES6, piuttosto che un componente funzionale senza stato? Il componente di classe ES6 utilizza una convenzione leggermente diversa per accedere alle proprietà.

Ogni volta che fai riferimento a un componente di classe all'interno di sé stesso, usa la parola chiave `this`. Per accedere alle proprietà all'interno di un componente di classe, premetti `this` al codice che usi per accedervi. Ad esempio, se un componente di classe ES6 ha una prop chiamata `data`, scriverai `{this.props.data}` in JSX.

# --instructions--

Mostra un'istanza del componente `Welcome` nel componente genitore `App`. Qui, dai a `Welcome` una proprietà di `name` e assegnale il valore di una stringa. Dentro il componente figlio, `Welcome`, accedi alla proprietà `name` dentro le tag `strong`.

# --hints--

Il componente `App` dovrebbe restituire un singolo elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Il figlio di `App` dovrebbe essere il componente `Welcome`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.children().childAt(0).name() === 'Welcome'
    );
  })()
);
```

Il componente `Welcome` dovrebbe avere una prop chiamata `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

Il componente `Welcome` dovrebbe visualizzare la stringa che crei come prop `name` all'interno dei tag `strong`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('Welcome').props().name
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong></strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Quincy"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};
```
