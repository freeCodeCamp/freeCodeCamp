---
title: Component State
localeTitle: 组件状态
---
## 组件状态

在`Class`组件中，有一种方法可以存储和管理React Native内置的状态。

```javascript
class App extends Component { 
  constructor () { 
    super(); 
    this.state = { 
      counter: 0 
    }; 
  } 
  incrementCount () { 
    this.setState({ 
      counter: this.state.counter + 1 
    }); 
  } 
  decrementCount () { 
    this.setState({ 
      counter: this.state.counter - 1 
    }); 
  } 
  render () { 
    return ( 
      <View> 
        <Text>Count: {this.state.counter}</Text> 
        <Button onPress={this.decrementCount.bind(this)}>-</Button> 
        <Button onPress={this.incrementCount.bind(this)}>+</Button> 
      </View> 
    ); 
  } 
 } 
```

State类似于props，但它是私有的并且完全由组件控制。这里， `constructor()`方法用`super();`调用父类的构造函数`super();` - **`Component`**是`App`的父类，因为我们使用的是`extends`关键字。 `constructor()`方法还初始化组件的状态对象：
```
this.state = { 
  counter: 0 
 }; 
```

状态可以显示在组件中：

```js
{this.state.counter} 
```

或通过致电更新：

```js
this.setState({}); 
```

**注意：**除了在组件的`constructor()`方法中初始创建之外，您不应该使用`this.state =`直接修改组件的状态。您必须使用`this.setState` ，可以在上面的`incrementCount`和`decrementCount`函数中看到。

通过调用传递给`onPress`处理程序的函数来增加和减少计数，就像在Web上调用JavaScript中的单击处理程序一样。

_ASIDE：在第一个例子中， `<Button>`是一个自定义组件;它是来自React Native API的`<TouchableOpacity>`和`<Text>`的组合：_

```js
const Button = ({ onPress, children, buttonProps, textProps }) => { 
  const { buttonStyle, textStyle } = styles; 
  return ( 
    <TouchableOpacity onPress={onPress} style={[buttonStyle, buttonProps]}> 
      <Text style={[textStyle, textProps]}> 
        {children} 
      </Text> 
    </TouchableOpacity> 
  ); 
 }; 

```