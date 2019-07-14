---
title: Override Default Props
---
## Override Default Props
This challenge has you override the default value of props `quantity` for the Items component. Where default value of `quantity` is set to `0`.
```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}
```
To override a default props value, the syntax to be followed is
```jsx
<Component propsName={Value}/>
```

Following the Syntax, the following code should be declared below the given code
```jsx
<Items quantity={50}/>
```
This will override value `0` to `50`
