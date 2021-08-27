---
id: 5a24c314108439a4d403616b
title: Usa props predeterminadas
challengeType: 6
forumTopicId: 301418
dashedName: use-default-props
---

# --description--

React también tiene una opción para establecer props predeterminadas. Puedes asignar props predeterminadas a un componente como si fueran una propiedad dentro del propio componente y React asigna la prop predeterminada si es necesario. Esto te permite especificar cuál debe ser el valor de una prop si no se provee un valor específico. Por ejemplo, si declaras `MyComponent.defaultProps = { location: 'San Francisco' }`, has definido una prop de localización que se establece en la cadena `San Francisco`, a menos que especifiques lo contrario. React asigna props predeterminadas si estas no están definidas, pero si pasas el valor `null` como valor para una prop, este permanecerá `null`.

# --instructions--

El editor de código muestra un componente `ShoppingCart`. Define props predeterminadas en este componente que especifican una prop `items` con un valor de `0`.

# --hints--

El componente `ShoppingCart` debe renderizarse.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

El componente `ShoppingCart` debe tener una prop predeterminada de `{ items: 0 }`.

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
