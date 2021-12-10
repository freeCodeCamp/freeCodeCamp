---
id: 5a24c314108439a4d403616c
title: Заміна пропсів за замовчуванням
challengeType: 6
forumTopicId: 301399
dashedName: override-default-props
---

# --description--

Можливість встановлення пропсів за замовчуванням є корисною функцією в React. Спосіб заміни пропсів за замовчуванням полягає в тому, щоб безпосередньо встановити значення пропсу для компонента.

# --instructions--

Зараз компонент `ShoppingCart` відображає дочірній компонент `Items`. Цей компонент `Items` має пропс `quantity` за замовчуванням, встановлений на ціле число `0`. Замінити пропс за замовчуванням, передаючи значення `10` для `quantity`.

**Примітка:** Пам’ятайте, що синтаксис додавання пропсу до компонента схожий на додавання атрибутів HTML. Однак, оскільки значення `quantity` є цілим числом, його пишуть не в лапках, а ставлять в фігурні дужки. Наприклад, `{100}`. Цей синтаксис повідомляє JSX інтерпретувати значення в дужках безпосередньо як JavaScript.

# --hints--

Компонент `ShoppingCart` повинен відображатися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

Компонент `Items` повинен відображатися.

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
