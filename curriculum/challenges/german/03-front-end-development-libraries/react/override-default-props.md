---
id: 5a24c314108439a4d403616c
title: Standardeigenschaften überschreiben
challengeType: 6
forumTopicId: 301399
dashedName: override-default-props
---

# --description--

Die Möglichkeit, Standardeigenschaften (Props) zu setzen, ist eine nützliche Funktion in React. Du kannst die Standardeigenschaften außer Kraft setzen, indem du die Eigenschaften für eine Komponente explizit festlegst.

# --instructions--

Die Komponente `ShoppingCart` rendert jetzt eine Kindkomponente `Items`. Diese Komponente `Items` hat eine Standardeigenschaft`quantity`, die auf die Ganzzahl `0` gesetzt ist. Überschreibe die Standardeigenschaft, indem du einen Wert von `10` für `quantity` angibst.

**Hinweis:** Denke daran, dass die Syntax zum Hinzufügen einer Eigenschaft zu einer Komponente ähnlich aussieht wie beim Hinzufügen von HTML-Attributen. Da der Wert für `quantity` jedoch eine ganze Zahl ist, wird er nicht in Anführungszeichen gesetzt, sondern sollte in geschweifte Klammern eingeschlossen werden. Zum Beispiel: `{100}`. Mit dieser Syntax wird JSX angewiesen, den Wert innerhalb der geschweiften Klammern direkt als JavaScript zu interpretieren.

# --hints--

Die Komponente `ShoppingCart` sollte gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

Die Komponente `Items` sollte gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

Die Komponente `Items` sollte eine Eigenschaft `{ quantity: 10 }` von der Komponente `ShoppingCart` übernehmen.

```js
(getUserInput) =>
  assert(
    (function () {
      const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
      return (
        mockedComponent.find('Items').props().quantity == 10 &&
        getUserInput('index')
          .replace(/ /g, '')
          .includes('<Itemsquantity={10}/>')
      );
    })()
  );
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items />
    { /* Change code above this line */ }
  }
};
```

# --solutions--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity = {10} />
    { /* Change code above this line */ }
  }
};
```
