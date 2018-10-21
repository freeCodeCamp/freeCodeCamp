---
title: Set State with this.setState
localeTitle: Establecer estado con this.setState
---
## Establecer estado con this.setState

#### Sugerencia 1:

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

## Solución

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

### Explicación del código:

cuando los usuarios hagan clic en el botón, se llamará al método "handleClick ()" y Dentro de este método, los datos del estado del constuctor se actualizarán con el método "setState ()". entonces la etiqueta h1 se cambiará con los nuevos datos del estado del constructor.