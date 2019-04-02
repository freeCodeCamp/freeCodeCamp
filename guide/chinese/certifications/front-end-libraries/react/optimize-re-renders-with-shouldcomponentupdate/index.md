---
title: Optimize Re-Renders with shouldComponentUpdate
localeTitle: 使用shouldComponentUpdate优化重新渲染
---
## 使用shouldComponentUpdate优化重新渲染

## 暗示：

检查`nextProps`的值是否均匀。

## 解：

对于此解决方案，您将使用`if/then`语句来检查`nextProps`的值是否为偶数。 `nextProps`与`props`不同之处在于它是一个尚未在UI中呈现的值，因此在`shouldComponentUpdate()`方法中，您基本上要求使用`nextProps`值更新UI的`nextProps` 。

```jsx
class OnlyEvens extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  shouldComponentUpdate(nextProps, nextState) { 
    console.log('Should I update?'); 
     // change code below this line 
      if (nextProps.value % 2 == 0) { 
        return true; 
      } 
      return false; 
     // change code above this line 
  } 
  componentWillReceiveProps(nextProps) { 
    console.log('Receiving new props...'); 
  } 
  componentDidUpdate() { 
    console.log('Component re-rendered.'); 
  } 
  render() { 
    return <h1>{this.props.value}</h1> 
  } 
 }; 
 
 class Controller extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      value: 0 
    }; 
    this.addValue = this.addValue.bind(this); 
  } 
  addValue() { 
    this.setState({ 
      value: this.state.value + 1 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.addValue}>Add</button> 
        <OnlyEvens value={this.state.value}/> 
      </div> 
    ); 
  } 
 }; 

```