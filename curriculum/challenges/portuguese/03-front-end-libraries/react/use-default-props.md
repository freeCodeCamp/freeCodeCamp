---
id: 5a24c314108439a4d403616b
title: Usar props padrão
challengeType: 6
forumTopicId: 301418
dashedName: use-default-props
---

# --description--

React também tem uma opção para definir as propriedades padrão. Você pode atribuir propriedades padrão a um componente como uma propriedade no próprio componente e o React atribui a propriedade padrão se necessário. Isso permite que você especifique qual deve ser um valor da propriedade se nenhum valor for explicitamente fornecido. Por exemplo, se você declarar `MyComponent.defaultProps = { location: 'San Francisco' }`, você definiu uma propriedade de localização definida para a string `San Francisco`, a menos que você especifique de outra forma. React atribui propriedades padrão se "props" forem indefinidas, mas se você passar `null` como o valor para uma prop, continuará `null`.

# --instructions--

O editor de código mostra um componente `ShoppingCart`. Defina as props padrão neste componente que especifica um objeto `items` com um valor de `0`.

# --hints--

O componente `ShoppingCart` deve renderizar.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

O componente `ShoppingCart` deve ter uma propriedade padrão de `{ items: 0 }`.

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
