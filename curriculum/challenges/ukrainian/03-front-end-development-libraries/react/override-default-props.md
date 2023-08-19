---
id: 5a24c314108439a4d403616c
title: Перевизначте пропс за замовчуванням
challengeType: 6
forumTopicId: 301399
dashedName: override-default-props
---

# --description--

Можливість встановити пропси за замовчуванням — корисна функція в React. Ви можете перевизначити пропси за замовчуванням, явно встановивши значення пропсів для компонента.

# --instructions--

Зараз компонент `ShoppingCart` відтворює дочірній компонент `Items`. Цей компонент `Items` має пропс `quantity` за замовчуванням, встановлений на ціле число `0`. Перевизначте пропс за замовчуванням, передавши значення `10` до `quantity`.

**Примітка:** пам’ятайте, що синтаксис додавання пропсу до компонента схожий на додавання атрибутів HTML. Однак, оскільки значення `quantity` є цілим числом, його пишуть не в лапках, а ставлять в фігурні дужки. Наприклад, `{100}`. Цей синтаксис повідомляє JSX інтерпретувати значення в дужках як JavaScript.

# --hints--

Компонент `ShoppingCart` має відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

Компонент `Items` має відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

Компонент `Items` повинен мати пропс `{ quantity: 10 }`, переданий з компонента `ShoppingCart`.

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
