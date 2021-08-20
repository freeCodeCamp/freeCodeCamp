---
id: 5a24c314108439a4d403616c
title: Sobrescrever props padrão
challengeType: 6
forumTopicId: 301399
dashedName: override-default-props
---

# --description--

A habilidade de definir props padrão é um recurso útil em React. A maneira de substituir as props padrão é definindo explicitamente os valores das propriedades para um componente.

# --instructions--

O componente `ShoppingCart` agora renderiza um componente filho `Items`. Este componente `Items` tem uma prop padrão `quantity` definida como o número inteiro `0`. Substitua a prop padrão passando o valor de `10` para `quantity`.

**Observação:** lembre-se de que a sintaxe para adicionar uma prop a um componente fica semelhante à forma como você adiciona atributos HTML. No entanto, uma vez que o valor para `quantity` é um número inteiro, ele não vai entre aspas mas deve estar entre chaves. Por exemplo, `{100}`. Esta sintaxe diz para JSX interpretar o valor entre chaves diretamente como JavaScript.

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

O componente `Items` deve renderizar.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

O componente `Items` deve ter a propriedade `{ quantity: 10 }` passada do componente `ShoppingCart`.

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
