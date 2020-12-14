---
id: 5a24c314108439a4d403616d
challengeType: 6
forumTopicId: 301419
title: 使用 PropTypes 来定义你期望的 Props
---

## Description
<section id='description'>
React 提供了有用的类型检查特性，以验证组件是否接收了正确类型的 props。例如，你的应用程序调用 API 来检索你希望在数组中的数据，然后将数据作为 prop 传递给组件。你可以在组件上设置<code>propTypes</code>，以要求数据的类型为<code>array</code>。当数据是任何其他类型时，都会抛出警告。
当你提前知道 prop 的类型时，最好的做法是设置<code>propTypes</code>。可以为组件定义<code>propTypes</code>属性，方法与定义<code>defaultProps</code>相同。这样做将检查给定键的 prop 是否是给定类型。这里有一个示例，名为<code>handleClick</code>的 prop 应为<code>function</code>类型：
<code>MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }</code>

在上面的示例中，<code>PropTypes.func</code>部分检查<code>handleClick</code>是否为函数。添加<code>isRequired</code>是为了告诉 React<code>handleClick</code>是该组件的必需属性。如果未提供该 prop，你将看到警告信息。另请注意，<code>func</code>表示<code>function</code>。在 7 种 JavaScript 基本类型中，<code>function</code>和<code>boolean</code>（写为<code>bool</code>）是仅有的使用异常拼写的两种类型。除了基本类型，还有其他类型可用。例如，你可以检查 prop 是否为 React 组件，请参阅文档以获取所有选项。

<strong>注意：</strong>在 React v15.5.0 版本中, <code>PropTypes</code>可以从 React 中单独引入，如下所示：
<code>import React, { PropTypes } from 'react';</code>
</section>

## Instructions
<section id='instructions'>
为<code>Items</code>组件定义<code>propTypes</code>，要求<code>quantity</code>作为 prop，并验证它是<code>number</code>类型。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该渲染<code>ShoppingCart</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: 应该渲染<code>Items</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('Items').length === 1; })());
  - text: <code>Items</code>组件应该包含一个<code>propTypes</code>，以检查<code>quantity</code>是<code>number</code>类型。
    testString: getUserInput => assert((function() { const noWhiteSpace = getUserInput('index').replace(/ /g, ''); return noWhiteSpace.includes('quantity:PropTypes.number.isRequired') && noWhiteSpace.includes('Items.propTypes='); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line

// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var PropTypes = {
  number: { isRequired: true }
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
};

// change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```

</section>
