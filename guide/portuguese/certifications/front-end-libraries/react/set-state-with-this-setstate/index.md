---
title: Set State with this.setState
localeTitle: Definir estado com this.setState
---
## Definir estado com this.setState

#### Sugestão 1:

```JSX
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'Initial State' 
    }; 
    this.handleClick = this.handleClick.bind(this); 
  } 
  handleClick() { 
    // change code below this line 
       // Update the state data by using "this.setState()" method. 
       // You can look to the sample inside the description for calling "setState()" method. 
    // change code above this line 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.handleClick}>Click Me</button> 
        <h1>{this.state.name}</h1> 
      </div> 
    ); 
  } 
 }; 
```

## Solução

```JSX
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      name: 'Initial State' 
    }; 
    this.handleClick = this.handleClick.bind(this); 
  } 
  handleClick() { 
    // change code below this line 
    this.setState({ 
      name: 'React Rocks!' 
    }); 
    // change code above this line 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.handleClick}>Click Me</button> 
        <h1>{this.state.name}</h1> 
      </div> 
    ); 
  } 
 }; 
```

### Explicação do código:

quando os usuários clicam no botão, o método "handleClick ()" será chamado e dentro deste método, os dados do estado do construtor serão atualizados pelo método "setState ()". então a tag h1 será alterada com os novos dados do estado do construtor.