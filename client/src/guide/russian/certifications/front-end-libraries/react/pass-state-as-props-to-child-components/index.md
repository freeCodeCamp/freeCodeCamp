---
title: Pass State as Props to Child Components
localeTitle: Состояние передачи в качестве компонентов реквизита для детей
---
## Состояние передачи в качестве компонентов реквизита для детей

В этой задаче мы собираемся передать состояние, но поскольку состояние является локальным для его родительского компонента, мы должны использовать **реквизит** для перехода к дочернему компоненту. Использование реквизита в дочерних компонентах позволит нам хранить все данные состояния в родительском компоненте, и мы можем передавать данные в одном направлении к дочерним компонентам.

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