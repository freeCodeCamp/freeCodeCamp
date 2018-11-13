---
title: Override Default Props
---

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

## Override Default Props
This challenge has you override the default value of props `quantity` for the Items component. Where default value of `quantity` is set to `0`.
```react.js
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}
```
To override a default props value, the syntax to be followed is
```react.js
<Component propsName={Value}/>
```

Following the Syntax, the following code should be declared below the given code
```react.js
<Items quantity={50}/>
```
This will override value `0` to `50`
