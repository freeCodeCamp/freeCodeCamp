---
title: Optimize Re-Renders with shouldComponentUpdate
localeTitle: Optimizar Re-Renders con shouldComponentUpdate
---
## Optimizar Re-Renders con shouldComponentUpdate

## Insinuación:

Compruebe si el valor de `nextProps` es par.

## Solución:

Para esta solución, utilizará una instrucción `if/then` para verificar si el valor de `nextProps` es par. `nextProps` diferencia de los `props` en que es un valor que aún no se ha procesado en la interfaz de usuario, por lo que en el método `shouldComponentUpdate()` , esencialmente está pidiendo permiso para actualizar la interfaz de usuario con el valor `nextProps` .

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