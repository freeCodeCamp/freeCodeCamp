---
title: Use PropTypes to Define the Props You Expect
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

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
