---
title: Use Array.map() to Dynamically Render Elements
localeTitle: 使用Array.map（）动态渲染元素
---
## 使用Array.map（）动态渲染元素

## 提示1：

将两个状态定义为JavaScript `object` 。

```javascript
{object: state, object: state} 
```

## 提示2：

您需要`.map()`为数组中的每个对象生成一行。

```javascript
this.state.toDoList.map(i => <li>{i}</li>); 
```

## 解：

添加地图功能后，您会注意到它会为您放入列表中的每个项目生成`<li>` 。

```jsx
const textAreaStyles = { 
  width: 235, 
  margin: 5 
 }; 
 
 class MyToDoList extends React.Component { 
  constructor(props) { 
    super(props); 
    // change code below this line 
    this.state = { 
      userInput: '', 
      toDoList: [] 
    } 
    // change code above this line 
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleSubmit() { 
    const itemsArray = this.state.userInput.split(','); 
    this.setState({ 
      toDoList: itemsArray 
    }); 
  } 
  handleChange(e) { 
    this.setState({ 
      userInput: e.target.value 
    }); 
  } 
  render() { 
    const items = this.state.toDoList.map(i => <li>{i}</li>); // change code here 
    return ( 
      <div> 
        <textarea 
          onChange={this.handleChange} 
          value={this.state.userInput} 
          style={textAreaStyles} 
          placeholder="Separate Items With Commas" /><br /> 
        <button onClick={this.handleSubmit}>Create List</button> 
        <h1>My "To Do" List:</h1> 
        <ul> 
          {items} 
        </ul> 
      </div> 
    ); 
  } 
 }; 

```