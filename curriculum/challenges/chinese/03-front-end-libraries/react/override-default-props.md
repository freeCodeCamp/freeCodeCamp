---
id: 5a24c314108439a4d403616c
challengeType: 6
forumTopicId: 301399
title: 覆盖默认的 Props
---

## Description
<section id='description'>
在 React 中，设置默认的 props 是一个很有用的特性，显式设置组件的 prop 值即可覆盖默认 props。
</section>

## Instructions
<section id='instructions'>
<code>ShoppingCart</code>组件现在渲染了一个子组件<code>Items</code>。该<code>Items</code>组件有一个默认<code>quantity</code>prop，其值被设置为整数<code>0</code>。通过传入数值<code>10</code>来覆盖<code>quantity</code>的默认 prop。
<strong>注意：</strong>&nbsp;请记住，向组件添加 prop 的语法与添加 HTML 属性类似。但是，由于<code>quantity</code>的值是整数，所以它不会加引号，但应该用花括号括起来，例如<code>{100}</code>。这个语法告诉 JSX 直接将花括号中的值解释为 JavaScript。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该渲染<code>ShoppingCart</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: 应该渲染<code>Items</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('Items').length === 1; })());
  - text: '<code>Items</code>组件应该有一个<code>{ quantity: 10 }</code>的prop，该 prop 是从<code>ShoppingCart</code>组件传递过去的。'
    testString: "getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('Items').props().quantity == 10 && getUserInput('index').replace(/ /g,'').includes('<Itemsquantity={10}/>'); })());"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

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
    { /* change code below this line */ }
    return <Items />
    { /* change code above this line */ }
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
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
    { /* change code below this line */ }
    return <Items quantity = {10} />
    { /* change code above this line */ }
  }
};
```

</section>
