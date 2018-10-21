---
title: Create a Component with Composition
localeTitle: 使用Composition创建一个Component
---
## 使用Composition创建一个Component

### 提示1

将要呈现的组件添加到要呈现它的组件中。

### 提示2

使用JSX自闭标记。

### 提示3

要呈现的组件是ChildComponenet，它将在ParentComponent中呈现

### 解

以下将根据需要呈现ParentComponent中的ChildComponent：

```javascript
class ParentComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h1>I am the parent</h1> 
        <ChildComponent /> 
      </div> 
    ); 
  } 
 }; 

```