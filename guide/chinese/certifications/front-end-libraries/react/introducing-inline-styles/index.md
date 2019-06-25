---
title: Introducing Inline Styles
localeTitle: 介绍内联样式
---
## 介绍内联样式

## 解

这可能有点棘手，因为JSX与HTML非常相似但**不一样** 。

让我们逐步了解这些步骤，以便您了解其中的差异。 首先将样式标记设置为**JavaScript对象** 。

```jsx
class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{}}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
```

现在，您将样式标记设置为空对象。请注意有两组花括号。这是JSX和HTML之间的重要区别。

其次，让我们将颜色设置为红色。

```jsx
class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{ color: 'red' }}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
```

最后，让我们将字体大小设置为72px。

### 扰流板

```jsx
class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{ color: 'red', fontSize: '72'}}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
```

注意JSX属性是如何使用**camelCase的** 。这是记住JSX的另一个重要区别。 此外，您可能注意到没有单位。在JSX中，设置fontSize属性时， **单位是可选的** ，如果不手动设置，将自动设置为px。