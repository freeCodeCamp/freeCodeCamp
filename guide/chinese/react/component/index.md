---
title: React - Components
localeTitle: 反应 - 组件
---
## 反应 - 组件

组件可在react.js中重用。您可以将值注入道具，如下所示：

```jsx
function Welcome(props) { 
  return <h1>Hello, {props.name}</h1>; 
 } 
 
 const element = <Welcome name="Faisal Arkan" />; 
 ReactDOM.render( 
  element, 
  document.getElementById('root') 
 ); 
```

`name="Faisal Arkan"`将从`function Welcome(props)`赋予`{props.name}`值，并返回已通过`name="Faisal Arkan"`赋予值的组件，之后反应将元素转换为html。

### 声明组件的其他方法

使用React.js时，有许多方法可以声明组件，但有两种组件， **_无状态_**组件和**_有状态_**组件。

### 有状态

#### 类类型组件

```jsx
class Cat extends React.Component { 
  constructor(props) { 
    super(props); 
 
    this.state = { 
      humor: 'happy' 
    } 
  } 
  render() { 
    return( 
      <div> 
        <h1>{this.props.name}</h1> 
        <p> 
          {this.props.color} 
        </p> 
      </div> 
    ); 
  } 
 } 
```

### 无状态组件

#### 功能组件（ES6的箭头功能）

```jsx
const Cat = props => { 
  return ( 
    <div> 
      <h1>{props.name}</h1> 
      <p>{props.color}</p> 
    </div>; 
  ); 
 }; 
```

#### 隐式返回组件

```jsx
const Cat = props => 
  <div> 
    <h1>{props.name}</h1> 
    <p>{props.color}</p> 
  </div>; 

```