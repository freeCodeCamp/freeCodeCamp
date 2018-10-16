---
title: React Props and State
localeTitle: 反应道具和状态
---
## 道具与州

控制组件有两种类型的数据：props和state。道具由父项设置，它们在组件的整个生命周期内都是固定的。对于即将发生变化的数据，我们必须使用state。

### 道具

大多数组件在创建时可以使用不同的参数进行自定义。这些创建参数称为`props` 。

您自己的组件也可以使用道具。这使您可以创建在应用程序的许多不同位置使用的单个组件，每个位置的属性略有不同。请参阅render函数中的`this.props` ：
```
class Welcome extends React.Component { 
  render() { 
    return <h1>Hello {this.props.name}</h1>; 
  } 
 } 
 
 const element = <Welcome name="neel" />; 
```

行`<Welcome name="neel" />`创建一个值为`"neel"`的属性名称。

该属性被传递给组件，类似于将参数传递给函数的方式。事实上，我们甚至可以将组件重写为更简单：
```
function Welcome(props) { 
  return <h1>Hello {props.name}</h1>; 
 } 
```

我们可以通过将defaultProps添加到Welcome类来使name属性可选：
```
class Welcome extends React.Component { 
  render() { 
    return <h1>Hello {this.props.name}</h1>; 
  } 
 } 
 
 Welcome.defaultProps = { 
  name: "world", 
 }; 
```

如果在没有名称的情况下调用Welcome，它将只呈现`<h1> Hello world</h1>` 。

因此， `props`可以来自父级，也可以由组件本身设置。

您曾经能够使用setProps和replaceProps更改道具，但这些道具已被**弃用** 。在组件的生命周期中，props不应该更改（认为它们是不可变的）。

由于传递了props，并且它们无法更改，因此您可以将任何仅使用props（而不是state）的React组件视为“纯”，也就是说，它将始终在给定相同输入的情况下呈现相同的输出。这使得它们非常容易测试。

### 州

与`props`一样， `state`保存有关组件的信息。但是，这种信息及其处理方式是不同的。

默认情况下，组件没有状态。上面的`Welcome`组件是无状态的：
```
function Welcome(props) { 
  return <h1>Hello {props.name}</h1>; 
 } 
```

当组件需要跟踪渲染之间的信息时，组件本身可以创建，更新和使用状态。

我们将使用一个相当简单的组件来查看正在运行的`state` 。我们有一个按钮，可以跟踪您点击它的次数。

这是代码：
```
class Button extends React.Component { 
  constructor() { 
    super(); 
    this.state = { 
      count: 0, 
    }; 
  } 
 
  updateCount() { 
    this.setState((prevState, props) => { 
      return { count: prevState.count + 1 } 
    }); 
  } 
 
  render() { 
    return (<button 
              onClick={() => this.updateCount()} 
            > 
              Clicked {this.state.count} times 
            </button>); 
  } 
 } 
```

### state在组件中创建

让我们看一下`constructor`方法：
```
constructor() { 
  super(); 
  this.state = { 
    count: 0, 
  }; 
 } 
```

这是州获取初始数据的地方。初始数据可以是硬编码的（如上所述），但它也可以来自`props` 。

### `state`是可变的

这是`updateCount`方法：
```
updateCount() { 
  this.setState((prevState, props) => { 
    return { count: prevState.count + 1 } 
  }); 
 } 
```

我们更改状态以跟踪总点击次数。重要的是setState。首先，注意setState接受一个函数，因为setState可以异步运行。它需要采用回调函数而不是直接更新状态。您可以看到我们可以在回调中访问prevState，这将包含先前的状态，即使该状态已在其他地方更新过。

React更好一步，setState更新`state`对象**并**自动重新呈现组件。

### `state`警告

> 写`this.state.count = this.state.count + 1`是很诱人的。

**不要这样做** React无法监听以这种方式更新的状态，因此你的组件不会重新渲染。始终使用`setState` 。

写这样的东西也可能很诱人：
```
// DO NOT USE 
 this.setState({ 
  count: this.state.count + 1 
 }); 
```

虽然这可能看起来合理，但不会抛出错误，并且您可能会发现在线使用此语法的示例，这是错误的。这没有考虑到`setState`可以使用的异步性质，并且可能导致不同步状态数据的错误。

### 程序继续!!!

最后， `render`
```
render() { 
  return (<button 
            onClick={() => this.updateCount()} 
          > 
            Clicked {this.state.count} times 
          </button>); 
 } 
```

`onClick={() => this.updateCount()}`表示单击该按钮时将调用updateCount方法。我们需要使用**ES6的箭头函数，**因此updateCount可以访问此实例的状态。

按钮中呈现的文本是`Clicked {this.state.count} times` ，它将使用渲染时的this.state.count。

更多信息： [**React props and state**](https://facebook.github.io/react-vr/docs/components-props-and-state.html)