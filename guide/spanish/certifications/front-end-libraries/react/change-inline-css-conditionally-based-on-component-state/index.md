---
title: Change Inline CSS Conditionally Based on Component State
localeTitle: Cambiar CSS en línea condicionalmente basado en el estado del componente
---
## Cambiar CSS en línea condicionalmente basado en el estado del componente

## Sugerencia 1:

Vas a verificar la longitud de `this.state.input` así que usa su propiedad `.length` .
```
this.state.input.length 
```

## Sugerencia 2:

Usted está ingresando el código antes de la declaración de retorno, por lo que puede usar un código JavaScript puro `if/then` .

## Solución:

Utilizará una instrucción `if/then` para verificar el valor de `this.state.input.length` . Si es más largo que 15, asigne `'3px solid red'` a `inputStyle.border` .

```jsx
class GateKeeper extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      input: '' 
    }; 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleChange(event) { 
    this.setState({ input: event.target.value }) 
  } 
  render() { 
    let inputStyle = { 
      border: '1px solid black' 
    }; 
    // change code below this line 
    if (this.state.input.length > 15) { 
      inputStyle.border = '3px solid red'; 
    } 
    // change code above this line 
    return ( 
      <div> 
        <h3>Don't Type Too Much:</h3> 
        <input 
          type="text" 
          style={inputStyle} 
          value={this.state.input} 
          onChange={this.handleChange} /> 
      </div> 
    ); 
  } 
 }; 
```

## Solución

Escriba una declaración condicional que se evalúe de acuerdo con su estado, como se menciona en la descripción del desafío, verifique la longitud de la entrada y asigne un nuevo objeto a la variable inputStyle.

```jsx
if (this.state.input.length > 15) { 
  inputStyle = { 
    border: '3px solid red' 
  } 
 } 

```