---
id: 5a24c314108439a4d403616d
title: Use PropTypes to Define the Props You Expect
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用PropTypes定义您期望的道具
---

## Description
<section id="description"> React提供了有用的类型检查功能，以验证组件是否接收到正确类型的道具。例如，您的应用程序进行API调用以检索您希望在数组中的数据，然后将其作为prop传递给组件。您可以在组件上设置<code>propTypes</code> ，以要求数据类型为<code>array</code> 。当数据是任何其他类型时，这将抛出有用的警告。当您提前知道道具类型时，设置<code>propTypes</code>被认为是最佳做法。您可以使用与定义<code>defaultProps</code>相同的方式为组件定义<code>propTypes</code>属性。这样做将检查给定键的道具是否存在给定类型。这是一个需要类型<code>function</code>的例子，名为<code>handleClick</code> ： <code>MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }</code>在上面的例子中， <code>PropTypes.func</code>部分检查<code>handleClick</code>是一个函数。添加<code>isRequired</code>告诉React <code>handleClick</code>是该组件的必需属性。如果未提供支柱，您将看到警告。还要注意<code>func</code>代表<code>function</code> 。在七种JavaScript原语类型中， <code>function</code>和<code>boolean</code> （写为<code>bool</code> ）是唯一使用异常拼写的两种类型。除了原始类型，还有其他类型可用。例如，您可以检查prop是否为React元素。有关所有选项，请参阅文档。 <strong>注意：</strong>从React v15.5.0开始， <code>PropTypes</code>独立于React <code>import PropTypes from &#39;prop-types&#39;;</code> ，如下所示： <code>import PropTypes from &#39;prop-types&#39;;</code> </section>

## Instructions
<section id="instructions">为<code>Items</code>组件定义<code>propTypes</code>以要求<code>quantity</code>作为prop并验证它是否为<code>number</code>类型。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ShoppingCart</code>组件应该呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: <code>Items</code>组件应该呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('Items').length === 1; })());
  - text: <code>Items</code>组件应包含<code>propTypes</code>检查，该检查要求<code>quantity</code>为<code>number</code> 。
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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
