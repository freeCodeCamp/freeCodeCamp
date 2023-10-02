---
id: 5a24c314108439a4d403616b
title: デフォルトの props を使用する
challengeType: 6
forumTopicId: 301418
dashedName: use-default-props
---

# --description--

React にはデフォルトの props を設定するオプションもあります。 デフォルトの props はコンポーネント自身のプロパティとしてコンポーネントに割り当てることができ、必要に応じて React によってデフォルトの props が割り当てられます。 このため、prop の値が明示的に指定されていない場合に、その値を指定することができます。 たとえば、`MyComponent.defaultProps = { location: 'San Francisco' }` と宣言した場合は、特に指定しない限り、location という prop を定義して文字列 `San Francisco` を設定したことになります。 props が未定義の場合は、React によってデフォルトの props が割り当てられます。ただし、prop の値として `null` を渡した場合は `null` のままになります。

# --instructions--

コードエディターに `ShoppingCart` コンポーネントが表示されています。 このコンポーネントで、`0` の値を持つ prop `items` を指定するデフォルトの props を定義してください。

# --hints--

`ShoppingCart` コンポーネントをレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

`ShoppingCart` コンポーネントに `{ items: 0 }` というデフォルトの prop を持たせます。

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
