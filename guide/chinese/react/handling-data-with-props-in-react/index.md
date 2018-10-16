---
title: Handling Data with Props in React
localeTitle: 在React中使用道具处理数据
---
## 在React中使用道具处理数据

Props提供了一种在React组件中传递和访问数据的方法。

数据作为JSX中的属性传递给React组件。

```javascript
<MyComponent someAttribute={data.value} /> 
```

在JSX中，花括号表示必须返回值的JavaScript表达式。传递的数据通过定义组件中的props进行访问。

```javascript
const MyComponent = props => { 
  <p>{props.someAttribute}</p> 
 }; 
```

现在让我们来看看CodePen中的一个例子。

### 入门

如果您还没有，请继续注册[免费的CodePen帐户](https://codepen.io/accounts/signup/user/free) 。

通过选择CodePen个人资料图片旁边的“创建”>“新笔”来创建新笔。

接下来，我们将添加适当的库来呈现我们的React组件。

选择“设置”>“JavaScript”打开JavaScript设置窗格。在“JavaScript预处理器”下选择“Babel”。

接下来让我们添加我们的React库。在“外部JavaScript”下，选择“快速添加”下拉列表并添加“React”和“React DOM”库。

### 使用道具

首先，我们在JavaScript文件中定义一些虚拟数据。

```javascript
const blogData = { 
  title: 'My blog title', 
  body: 'Arcu viverra dolor eros interdum, quis nonummy accusantium at lorem luctus iaculis.' 
 }; 
```

接下来让我们定义我们的博客组件。

```javascript
const Heading = () => { 
  return ( 
    <h1>My Blog</h1> 
  ); 
 }; 
 
 const Blog = props => { 
  return ( 
    <div> 
      <h2>{props.title}</h2> 
      <p>{props.body}</p> 
    </div> 
  ); 
 }; 
```

注意到我们如何使用props对象来呈现将传递给Blog组件的标题和正文值。道具是只读的或不可变的，因此我们不必担心更改道具值。

在我们编写App组件之前，我们需要保护我们的组件定义将传递给每个prop的变量类型。我们将使用React.PropTypes定义它。将以下内容添加到JavaScript文件中。

```javascript
Blog.propTypes = { 
  title: React.PropTypes.string, 
  body: React.PropTypes.string 
 }; 
```

在这里，我们定义传递给我们的Blog组件的数据将是标题和正文的字符串。查看[React的文档](https://reactjs.org/docs/typechecking-with-proptypes.html)以获取所有propType的列表。

现在让我们将它放在一个app组件中并传递我们的数据。

```javascript
const App = props => { 
  return ( 
    <div> 
      <Heading /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
      <Blog title={blogData.title} body={blogData.body} /> 
    </div> 
  ); 
 }; 
```

最后，让我们渲染我们的应用程序（确保将根`<div>`标签添加到HTML文件中）：

```javascript
ReactDOM.render( 
  <App />, 
  document.getElementById('root') 
 ); 
```

现在你应该看到我们的博客组件使用通过道具传递的虚拟数据进行渲染。

您可以[在此处](https://codepen.io/trey-davis/pen/MvdZGX)查看CodePen示例。