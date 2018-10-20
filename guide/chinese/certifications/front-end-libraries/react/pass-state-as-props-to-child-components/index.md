---
title: Pass State as Props to Child Components
localeTitle: 将状态作为道具传递给子组件
---
## 将状态作为道具传递给子组件

在这个挑战中，我们将传递状态，但由于状态是其父组件的本地，我们必须使用**props**传递给子组件。在子组件中使用props将允许我们将所有状态数据保存在父组件中，并且我们可以将数据沿一个方向传递给子组件。

```javascript
class MyApp extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'CamperBot' 
    } 
  } 
  render() { 
    return ( 
       <div> 
         // Here we will call this.state.name in order to pass the value of CamperBot 
         // to the NavBar component 
         <Navbar name={this.state.name} /> 
       </div> 
    ); 
  } 
 }; 
 
 class Navbar extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
    <div> 
      // Since we passed in the CamperBot state value into the the NavBar component above 
      // the h1 element below will render the value passed from state 
      <h1>Hello, my name is: {this.props.name}</h1> 
    </div> 
    ); 
  } 
 }; 

```