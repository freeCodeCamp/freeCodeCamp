---
title: Change Inline CSS Conditionally Based on Component State
localeTitle: Alterar Inline CSS Condicionalmente Baseado no Estado do Componente
---
## Alterar Inline CSS Condicionalmente Baseado no Estado do Componente

## Sugestão 1:

Você estará verificando o comprimento de `this.state.input` então use sua propriedade `.length` .
```
this.state.input.length 
```

## Dica 2:

Você está inserindo o código antes da declaração de retorno para poder usar um JavaScript puro `if/then` declaração.

## Solução:

Você usará uma instrução `if/then` para verificar o valor de `this.state.input.length` . Se for maior que 15, atribua `'3px solid red'` a `inputStyle.border` .

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

## Solução

Escreva uma instrução condicional que seja avaliada de acordo com o seu estado, conforme mencionado na descrição do desafio, verifique o comprimento da entrada e atribua um novo objeto à variável inputStyle.

```jsx
if (this.state.input.length > 15) { 
  inputStyle = { 
    border: '3px solid red' 
  } 
 } 

```