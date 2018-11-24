---
title: Pass an Array as Props
localeTitle: 将数组作为道具传递
---
## 将数组作为道具传递

要将数组作为prop传递，首先必须在要呈现的每个组件上将数组声明为“tasks”prop：

```javascript
const List= (props) => { 
  return <p></p> 
 }; 
 
 class ToDo extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      <div> 
        <h1>To Do Lists</h1> 
        <h2>Today</h2> 
        <List tasks={["Walk", "Cook", "Bake"]} /> 
        <h2>Tomorrow</h2> 
        <List tasks={["Study", "Code", "Eat"]}/> 
      </div> 
    ); 
  } 
 }; 
```

然后，必须在“List”组件内处理props：

```javascript
const List= (props) => { 
  return <p>{props.tasks.join(", ")}</p> 
 }; 
 
 // ... same as above 
```

`.join(", ")`方法用于从数组中获取每个元素，并将它们连接到要显示的字符串中。

我们在此示例中使用React的模块化来显示由两个不同组件传递给渲染最终HTML的公共组件的任务。