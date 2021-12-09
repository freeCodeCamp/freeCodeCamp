---
id: 5a24c314108439a4d403616b
title: Використання реквізитів (props) за замовчуванням
challengeType: 6
forumTopicId: 301418
dashedName: use-default-props
---

# --description--

React також має опцію, щоб встановити реквізити за замовчуванням. Ви можете присвоїти реквізити за замовчуванням компоненту, як властивості самого компоненту, і React присвоює реквізит за замовчуванням, якщо це необхідно. Це дозволить вам визначити, яке значення реквізитів має бути, якщо ті, що без значення, є чітко визначеними. На приклад, якщо ви задаєте `MyComponent.defaultProps = { location: 'San Francisco' }`, то ви маєте визначене місцерозташування , яке встановлене у рядку `San Francisco`, якщо тільки ви не вкажете по-іншому. React призначає реквізити за замовчуванням, якщо об'єкти є невизначені, але якщо ви використаєте `null` як значення для реквізиту, то `null` залишається незмінним.

# --instructions--

Редактор коду нам показує компонент `ShoppingCart`. Визначте реквізити за замовчуванням для цього компонента, які визначають реквізит `items` разом із значенням `0`.

# --hints--

Компонент `ShoppingCart` має візуалізуватися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

Компонент `ShoppingCart` повинен мати реквізит за замовчуванням `{ items: 0 }`.

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
