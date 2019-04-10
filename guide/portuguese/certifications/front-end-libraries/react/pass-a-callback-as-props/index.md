---
title: Pass a Callback as Props
localeTitle: Passar um retorno de chamada como adereços
---
## Passar um retorno de chamada como adereços

### Descrição

*   Adicione o componente `GetInput` ao método render em MyApp e, em seguida, passe-o para um prop chamado `inpu` t atribuído a `inputValue` partir do estado de MyApp. Também crie um prop chamado `handleChange` e passe o manipulador de entrada `handleChange` para ele.
*   Adicione `RenderInput` ao método render em MyApp, crie um prop chamado `input` e passe o `inputValue` de estado para ele.

### Dicas

*   `state` é uma propriedade da classe `Myapp` , então use 'this.state' para obter o valor do objeto
*   Para aprender mais sobre estado e props, leia [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) and [Components and Props](https://reactjs.org/docs/components-and-props.html) .

### Solução

```javascript
class MyApp extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      inputValue: '' 
    } 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleChange(event) { 
    this.setState({ 
      inputValue: event.target.value 
    }); 
  } 
  render() { 
    return ( 
       <div> 
        { /* change code below this line */ 
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/> 
        } 
        { /* change code above this line */ 
        <RenderInput input={this.state.inputValue}/> 
        } 
       </div> 
    ); 
  } 
 }; 

```