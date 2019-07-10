---
title: Change Inline CSS Conditionally Based on Component State
localeTitle: 有条件地改变内联CSS基于组件状态
---
## 有条件地改变内联CSS基于组件状态

## 提示1：

您将检查`this.state.input`的长度，因此请使用它的`.length`属性。
```
this.state.input.length 
```

## 提示2：

您在return语句之前输入代码，因此您可以使用纯JavaScript `if/then`语句。

## 解：

您将使用`if/then`语句来检查`this.state.input.length`的值。如果长度超过15， `inputStyle.border` `'3px solid red'`分配给`inputStyle.border` 。

```jsx
class GateKeeper extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      input: '' 
    }; 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleChange(event) { 
    this.setState({ input: event.target.value }) 
  } 
  render() { 
    let inputStyle = { 
      border: '1px solid black' 
    }; 
    // change code below this line 
    if (this.state.input.length > 15) { 
      inputStyle.border = '3px solid red'; 
    } 
    // change code above this line 
    return ( 
      <div> 
        <h3>Don't Type Too Much:</h3> 
        <input 
          type="text" 
          style={inputStyle} 
          value={this.state.input} 
          onChange={this.handleChange} /> 
      </div> 
    ); 
  } 
 }; 
```

## 解

编写根据您的状态计算的条件语句，如质询描述中所述，检查输入的长度并将新对象分配给inputStyle变量。

```jsx
if (this.state.input.length > 15) { 
  inputStyle = { 
    border: '3px solid red' 
  } 
 } 

```