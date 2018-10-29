---
title: Pass Props to a Stateless Functional Component
localeTitle: 将道具传递给无状态功能组件
---
## 将道具传递给无状态功能组件

### 提示1

在Calendar组件中定义一个名为date的prop，如下所示：

```jsx
<CurrentDate date={Date()} /> 
```

\`

### 提示2

语法prop.propName用于呈现prop。

### 解

在Calendar组件中按如下方式指定一个名为date的prop，并在Calendar组件中呈现它，如：

```jsx
const CurrentDate = (props) => { 
  return ( 
    <div> 
      <p>The current date is: {props.date}</p> 
    </div> 
  ); 
 }; 
 
 class Calendar extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h3>What date is it?</h3> 
        <CurrentDate date={Date()} /> 
      </div> 
    ); 
  } 
 }; 

```