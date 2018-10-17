---
title: Pass State as Props to Child Components
localeTitle: Pasar estado como accesorios a componentes secundarios
---
## Pasar estado como accesorios a componentes secundarios

En este desafío, vamos a pasar de estado, pero como el estado es local a su componente principal, debemos usar **accesorios** para pasar al componente secundario. El uso de accesorios en componentes secundarios nos permitirá mantener todos los datos del estado en el componente principal y podemos pasar los datos en una dirección a los componentes secundarios.

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