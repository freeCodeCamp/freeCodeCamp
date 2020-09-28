---
id: 5a24c314108439a4d403616c
title: Override Default Props
challengeType: 6
forumTopicId: 301399
---

## Description
<section id='description'>
The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.
</section>

## Instructions
<section id='instructions'>
The <code>ShoppingCart</code> component now renders a child component <code>Items</code>. This <code>Items</code> component has a default prop <code>quantity</code> set to the integer <code>0</code>. Override the default prop by passing in a value of <code>10</code> for <code>quantity</code>.
<strong>Note:</strong>&nbsp;Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for <code>quantity</code> is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, <code>{100}</code>. This syntax tells JSX to interpret the value within the braces directly as JavaScript.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The component <code>ShoppingCart</code> should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('ShoppingCart').length === 1; })());
  - text: The component <code>Items</code> should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find('Items').length === 1; })());
  - text: "The <code>Items</code> component should have a prop of <code>{ quantity: 10 }</code> passed from the <code>ShoppingCart</code> component."
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
    { /* Change code below this line */ }
    return <Items />
    { /* Change code above this line */ }
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


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

</section>
