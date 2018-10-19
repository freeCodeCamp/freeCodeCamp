---
title: Use Default Props
localeTitle: 使用默认道具
---
## 使用默认道具

这个挑战让您宣布ShoppingCart组件的默认道具

```javascript
const ShoppingCart = (props) => { 
  return ( 
    <div> 
      <h1>Shopping Cart Component</h1> 
    </div> 
  ) 
 }; 
```

要声明默认道具，要遵循的语法是

```javascript
itemName.defaultProps = { 
  prop-x: value, 
  prop-y: value 
 } 
```

在语法之后，应在给定代码下面声明以下代码

```javascript
ShoppingCart.defaultProps = { 
  items: 0 
 } 
```

这声明了一个名为'items'的道具，其值为'0'。