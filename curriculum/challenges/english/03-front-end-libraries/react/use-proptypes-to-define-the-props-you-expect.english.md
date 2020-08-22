---
id: 5a24c314108439a4d403616d
title: Use PropTypes to Define the Props You Expect
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301419
---

## Description
<section id='description'>
React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set <code>propTypes</code> on your component to require the data to be of type <code>array</code>. This will throw a useful warning when the data is of any other type.
It's considered a best practice to set <code>propTypes</code> when you know the type of a prop ahead of time. You can define a <code>propTypes</code> property for a component in the same way you defined <code>defaultProps</code>. Doing this will check that props of a given key are present with a given type. Here's an example to require the type <code>function</code> for a prop called <code>handleClick</code>:
<code>MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }</code>

In the example above, the <code>PropTypes.func</code> part checks that <code>handleClick</code> is a function. Adding <code>isRequired</code> tells React that <code>handleClick</code> is a required property for that component. You will see a warning if that prop isn't provided. Also notice that <code>func</code> represents <code>function</code>. Among the seven JavaScript primitive types, <code>function</code> and <code>boolean</code> (written as <code>bool</code>) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the [documentation](https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type) for all of the options.

<strong>Note:</strong> As of React v15.5.0, <code>PropTypes</code> is imported independently from React, like this:
<code>import PropTypes from 'prop-types';</code>
</section>

## Instructions
<section id='instructions'>
Define <code>propTypes</code> for the <code>Items</code> component to require <code>quantity</code> as a prop and verify that it is of type <code>number</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>ShoppingCart</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: The <code>Items</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('Items').length === 1; })());
  - text: The <code>Items</code> component should include a <code>propTypes</code> check that requires <code>quantity</code> to be a <code>number</code>.
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
