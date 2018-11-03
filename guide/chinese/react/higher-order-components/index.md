---
title: Higher-Order Components
localeTitle: 高阶组件
---
## 高阶组件

在React中， **高阶组件** （HOC）是一个获取组件并返回新组件的函数。程序员使用HOC来实现**组件逻辑重用** 。

如果您使用过Redux的`connect` ，那么您已经使用过高阶组件。

核心思想是：

```jsx
const EnhancedComponent = enhance(WrappedComponent); 
```

哪里：

*   `enhance`是高阶分量;
*   `WrappedComponent`是您要增强的组件;和
*   `EnhancedComponent`是创建的新组件。

这可能是`enhance` HOC的主体：

```jsx
function enhance(WrappedComponent) { 
  return class extends React.Component { 
    render() { 
      const extraProp = 'This is an injected prop!'; 
      return ( 
        <div className="Wrapper"> 
          <WrappedComponent 
            {...this.props} 
            extraProp={extraProp} 
          /> 
        </div> 
      ); 
    } 
  } 
 } 
```

在这种情况下， `enhance`返回一个扩展`React.Component`的**匿名类** 。这个新组件做了三件简单的事情：

*   在`div`元素中渲染`WrappedComponent` ;
*   将自己的道具传递给`WrappedComponent` ;和
*   向`WrappedComponent`注入额外的prop。

HOC只是一种利用React组成性质的力量的模式。 **他们为组件添加功能** 。你可以用它们做更多的事情！

## 其他资源

*   [反应文档：高阶组件](https://reactjs.org/docs/higher-order-components.html)