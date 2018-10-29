---
title: Pass a Callback as Props
localeTitle: Pasar una devolución de llamada como accesorios
---
## Pasar una devolución de llamada como accesorios

### Descripción

*   Agregue el componente `GetInput` al método de procesamiento en MyApp, luego `inputValue` una propiedad llamada `inpu` t asignada a `inputValue` desde el estado de MyApp. También cree un prop llamado `handleChange` y pase el manejador de entrada `handleChange` .
*   Agregue `RenderInput` al método de procesamiento en MyApp, luego cree un prop llamado `input` y pase el `inputValue` del estado.

### Consejos

*   `state` es una propiedad de la clase `Myapp` , así que usa 'this.state' para obtener el valor del objeto
*   Para obtener más información sobre el estado y las propiedades, lea [Estado y ciclo de vida](https://reactjs.org/docs/state-and-lifecycle.html) y [Componentes y accesorios](https://reactjs.org/docs/components-and-props.html) .

### Solución

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