---
title: Use React to Render Nested Components
localeTitle: 使用React渲染嵌套组件
---
## 使用React渲染嵌套组件

您在前面的课程中已经了解到，有两种方法可以创建React组件：

1.  无状态功能组件 - 使用JavaScript函数。
    
2.  使用ES6语法定义React组件。
    

在这个测验中，我们定义了两个无状态功能组件，即使用JavaScript函数。回想一下，一旦创建了一个组件，就可以使用HTML开始和结束括号内的组件名称，以与HTML标签相同的方式呈现它。例如，要将名为Dog的组件嵌套在名为Animals的父组件中，您只需从Animals组件返回Dog组件，如下所示：

```javascript
return ( 
  <Dog /> 
 ) 
```

尝试使用TypesOfFruit和Fruits组件。