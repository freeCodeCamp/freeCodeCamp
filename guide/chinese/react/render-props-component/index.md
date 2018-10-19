---
title: Render Props Component
localeTitle: 渲染道具组件
---
## 渲染道具组件

渲染道具是一种先进的React模式，但却如此简单！

### 例

这是一个关于如何使用渲染道具进行切换功能的示例。

```jsx
import React, { PureComponent } from "react"; 
 
 class Toggle extends PureComponent { 
  state = { 
    on: false 
  }; 
 
  toggle = () => { 
    this.setState({ 
      on: !this.state.on 
    }); 
  }; 
 
  render() { 
    const { children } = this.props; 
    return children({ 
      on: this.state.on, 
      toggle: this.toggle 
    }); 
  } 
 } 
 
 export default Toggle; 
```

这个Toggle组件将返回它的子`state.on`和函数切换。哪个可以用在它的子组件中。

此切换可以使用如下：

```jsx
<Toggle> 
  {({ on, toggle }) => ( 
    <Fragment> 
      <button onClick={toggle}>Show / Hide</button> 
      {on && <h1>I can be toggled on or off!</h1>} 
    </Fragment> 
  )} 
 </Toggle> 
```

正如您所看到的，切换功能可以由其子按钮用于切换某些内容。如果on为true，则h1-tag将被渲染，否则不会。

## 其他资源

*   [反应文档：渲染道具](https://reactjs.org/docs/render-props.html)