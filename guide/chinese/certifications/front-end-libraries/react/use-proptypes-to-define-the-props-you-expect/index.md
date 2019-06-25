---
title: Use PropTypes to Define the Props You Expect
localeTitle: 使用PropTypes定义您期望的道具
---
## 使用PropTypes定义您期望的道具

您可以通过此挑战为`Items`组件设置`propTypes` 。

```jsx
const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 }; 
```

要设置propTypes，要遵循的语法是

```jsx
itemName.propTypes = { 
  props: PropTypes.dataType.isRequired 
 }; 
```

在语法之后，应该在`Items`组件的`quantity`道具的给定代码下面设置以下代码

```jsx
Items.propTypes = { 
  quantity: PropTypes.number.isRequired 
 }; 

```