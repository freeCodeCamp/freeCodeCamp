---
id: 5a24c314108439a4d403616b
title: Standardeigenschaft verwenden
challengeType: 6
forumTopicId: 301418
dashedName: use-default-props
---

# --description--

React hat auch eine Option, um Standard-Props zu setzen. Du kannst einer Komponente Standardeigenschaft als Eigenschaft der Komponente selbst zuweisen und React weist die Standardeigenschaft bei Bedarf zu. Damit kannst du festlegen, wie ein Prop-Wert aussehen soll, wenn kein Wert explizit angegeben wird. Wenn du zum Beispiel `MyComponent.defaultProps = { location: 'San Francisco' }` deklarierst, hast du eine Locationeigenschaft definiert, die auf den String `San Francisco` gesetzt wird, sofern du nichts anderes angibst. React weist Standardeigenschaften zu, wenn Eigenschaften undefiniert sind, wenn du aber `null` als Wert für eine Eigenschaft übergibst, bleibt sie `null`.

# --instructions--

Der Code-Editor zeigt eine Komponente `ShoppingCart`. Definiere Standardeigenschaften für diese Komponente, die eine Eigenschaft `items` mit einem Wert von `0` enthält.

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

Die Komponente `ShoppingCart` sollte eine Standardeinstellung von `{ items: 0 }` besitzen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    mockedComponent.setProps({ items: undefined });
    return mockedComponent.find('ShoppingCart').props().items === 0;
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
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
```

# --solutions--

```jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

// Change code below this line
ShoppingCart.defaultProps = {
  items: 0
}
```
