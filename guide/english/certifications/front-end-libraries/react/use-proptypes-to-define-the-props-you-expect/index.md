---
title: Use PropTypes to Define the Props You Expect
---
## Use PropTypes to Define the Props You Expect

This challenge has you set a `propTypes` for the `Items` component.
```react.js
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};
```

To set a propTypes, the syntax to be followed is
```react.js
itemName.propTypes = {
  props: PropTypes.dataType.isRequired
};
```

Following the Syntax, the following code should be set below the given code for the `quantity` props of `Items` component
```react.js
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
```
