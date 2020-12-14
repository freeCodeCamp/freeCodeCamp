---
id: 5a24c314108439a4d403616b
challengeType: 6
forumTopicId: 301418
title: 使用默认的 Props
---

## Description
<section id='description'>
React 还有一个设置默认 props 的选项。你可以将默认 props 作为组件本身的属性分配给组件，React 会在必要时分配默认 prop。如果没有显式的提供任何值，这允许你指定 prop 值应该是什么。例如，如果你声明<code>MyComponent.defaultProps = { location: 'San Francisco' }</code>，即定义一个 location 属性，并且其值在没有另行制定的情况下被设置为字符串<code>San Francisco</code>。如果 props 未定义，则 React 会分配默认 props，但如果你将<code>null</code>作为 prop 的值，它将保持<code>null</code>。
</section>

## Instructions
<section id='instructions'>
代码编辑器中有一个<code>ShoppingCart</code>组件。在这个组件上定义默认 props，它指定一个<code>items</code>prop，其值为<code>0</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该渲染<code>ShoppingCart</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: '<code>ShoppingCart</code>组件应该有一个<code>{ items: 0 }</code>的默认 prop。'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); mockedComponent.setProps({items: undefined}); return mockedComponent.find(''ShoppingCart'').props().items === 0; })());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line

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
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

// change code below this line
ShoppingCart.defaultProps = {
  items: 0
}
```

</section>
