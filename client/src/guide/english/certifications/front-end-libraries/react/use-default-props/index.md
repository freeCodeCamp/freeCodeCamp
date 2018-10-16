---
title: Use Default Props
---
## Use Default Props

This challenge has you declaring a default prop for the ShoppingCart component

```javascript
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
```

To declare a default prop, the syntax to be followed is

```javascript
itemName.defaultProps = {
  prop-x: value,
  prop-y: value
}
```

Following the Syntax, the following code should be declared below the given code

```javascript
ShoppingCart.defaultProps = {
  items: 0
}
```

This declares a prop named 'items' with the value of '0' .
