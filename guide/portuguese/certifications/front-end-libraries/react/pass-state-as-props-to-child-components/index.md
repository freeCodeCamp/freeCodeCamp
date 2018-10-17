---
title: Pass State as Props to Child Components
localeTitle: Passar o estado como adereços aos componentes filhos
---
## Passar o estado como adereços aos componentes filhos

Neste desafio, estaremos passando o estado, mas como o estado é local para seu componente pai, devemos usar **adereços** para passar para o componente filho. Usar adições em componentes filhos nos permitirá manter todos os dados de estado no componente pai e podemos passar os dados em uma direção para os componentes filhos.

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