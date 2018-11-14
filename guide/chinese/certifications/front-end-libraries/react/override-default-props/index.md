---
title: Override Default Props
localeTitle: 覆盖默认道具
---
## 覆盖默认道具

此挑战使您可以覆盖Items组件的props `quantity`的默认值。其中， `quantity`默认值设置为`0` 。

```react.js
const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 } 
 
 Items.defaultProps = { 
  quantity: 0 
 } 
```

要覆盖默认的props值，要遵循的语法是

```react.js
<Component propsName={Value}/> 
```

在语法之后，应在给定代码下面声明以下代码

```react.js
<Items quantity={50}/> 
```

这将覆盖值`0`到`50`