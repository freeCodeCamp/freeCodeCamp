---
title: Use Default Props
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

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
