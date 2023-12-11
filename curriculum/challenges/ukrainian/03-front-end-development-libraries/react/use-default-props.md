---
id: 5a24c314108439a4d403616b
title: Використайте пропси за замовчуванням
challengeType: 6
forumTopicId: 301418
dashedName: use-default-props
---

# --description--

React дозволяє налаштувати пропси за замовчуванням. Ви можете призначити пропси за замовчуванням до компонента як властивість самого компонента, а React призначає пропс за замовчуванням за потреби. Це дозволяє вказати значення пропсу, якщо значення не надано. Наприклад, якщо ви оголосили `MyComponent.defaultProps = { location: 'San Francisco' }`, ви визначили розташування пропсу, яке налаштоване на рядок `San Francisco`, якщо ви не вказали по-іншому. React призначає пропси за замовчуванням, якщо пропси невизначені, але якщо ви передасте `null` як значення пропсу, значенням залишиться `null`.

# --instructions--

Редактор коду показує компонент `ShoppingCart`. Визначте пропси цього компонента за замовчуванням, які вказують `0` як значення пропсу `items`.

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

Компонент `ShoppingCart` повинен мати пропс за замовчуванням `{ items: 0 }`.

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
