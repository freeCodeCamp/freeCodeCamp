---
id: 5a24c314108439a4d403616c
title: デフォルトの props を上書きする
challengeType: 6
forumTopicId: 301399
dashedName: override-default-props
---

# --description--

React の便利な機能として、デフォルトの props を設定することができます。 デフォルトの props を上書きするには、コンポーネントの props の値を明示的に設定します。

# --instructions--

`ShoppingCart` コンポーネントで現在、子コンポーネント `Items` をレンダーしています。 この `Items` コンポーネントにはデフォルトの props `quantity` があり、整数 `0` に設定されています。 `quantity` に値 `10` を渡してデフォルトの prop を上書きしてください。

**注:** コンポーネントに prop を追加するための構文は HTML 属性を追加する方法に似ていますが、 `quantity` の値は整数であるため、引用符で囲まず、中括弧で囲む必要があります。 たとえば `{100}` のように記述します。 この構文によって、括弧内の値を直接 JavaScript として解釈するよう JSX に指示します。

# --hints--

コンポーネント `ShoppingCart` をレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

コンポーネント `Items` をレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

`Items` コンポーネントに、 `ShoppingCart` コンポーネントから渡された `{ quantity: 10 }` という prop を持たせます。

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
