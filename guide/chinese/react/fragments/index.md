---
title: Fragments
localeTitle: 片段
---
# 片段

片段是在不使用包装元素的情况下呈现多个元素的方法。在JSX中尝试渲染没有封闭标记的元素时，您将看到错误消息`Adjacent JSX elements must be wrapped in an enclosing tag` 。这是因为当JSX进行转换时，它会创建具有相应标记名称的元素，并且如果找到多个元素，则不知道要使用哪个标记名称。在过去，经常解决这个问题的方法是使用包装div来解决这个问题。然而，React的第16版带来了`Fragment`的添加，这使得不再需要它。

`Fragment`扮演包装器而不向DOM添加不必要的div。您可以直接从React导入中使用它，或者解构它：

```jsx
import React from 'react'; 
 
 class MyComponent extends React.Component { 
  render(){ 
    return ( 
      <React.Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </React.Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
```

```jsx
// Deconstructed 
 import React, { Component, Fragment } from 'react'; 
 
 class MyComponent extends Component { 
  render(){ 
    return ( 
      <Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
```

React版本16.2进一步简化了此过程，允许将空的JSX标记解释为片段：

```jsx
return ( 
  <> 
    <div>I am an element!</div> 
    <button>I am another element</button> 
  </> 
 ); 
```

#### 更多信息：

*   [React.Fragment（官方文档）](https://reactjs.org/docs/react-api.html#reactfragment)
*   [React v16.2.0：改进了对碎片的支持](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)