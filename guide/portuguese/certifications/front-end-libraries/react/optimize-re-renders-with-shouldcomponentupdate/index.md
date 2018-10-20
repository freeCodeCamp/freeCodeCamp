---
title: Optimize Re-Renders with shouldComponentUpdate
localeTitle: Otimizar Re-Renders com shouldComponentUpdate
---
## Otimizar Re-Renders com shouldComponentUpdate

## Dica:

Verifique se o valor de `nextProps` é par.

## Solução:

Para esta solução, você usará uma instrução `if/then` para verificar se o valor de `nextProps` é par. `nextProps` difere de `props` por ser um valor que ainda não foi renderizado na UI, portanto, no método `shouldComponentUpdate()` , você está essencialmente solicitando permissão para atualizar a UI com o valor `nextProps` .

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