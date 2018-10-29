---
title: Render React on the Server with renderToString
localeTitle: 使用renderToString在服务器上渲染React
---
## 使用renderToString在服务器上渲染React

## 解：

您将`class`传递给`.renderToString()`就像将组件传递给`render`方法一样。

```jsx
class App extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return <div/> 
  } 
 }; 
 
 // change code below this line 
 ReactDOMServer.renderToString(<App />); 

```