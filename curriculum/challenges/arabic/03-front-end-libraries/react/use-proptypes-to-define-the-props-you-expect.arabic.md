---
id: 5a24c314108439a4d403616d
title: Use PropTypes to Define the Props You Expect
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The <code>ShoppingCart</code> component should render.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("Items").length === 1; })(), "The <code>Items</code> component should render.");'
  - text: ''
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").replace(/ /g, ""); return noWhiteSpace.includes("quantity:PropTypes.number.isRequired") && noWhiteSpace.includes("Items.propTypes="); })(), "The <code>Items</code> component should include a <code>propTypes</code> check that requires <code>quantity</code> to be a <code>number</code>.");'

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
</section>
