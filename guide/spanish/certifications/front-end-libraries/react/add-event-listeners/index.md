---
title: Add Event Listeners
localeTitle: Añadir escuchas de eventos
---
## Añadir escuchas de eventos

Este desafío tiene que modificar dos métodos de ciclo de vida componentDidMount y componentWillUnmount. Utiliza componentDidMount cuando quieres configurar algo, en tu caso, un detector de eventos. Utiliza componentWillUnmount cuando necesitas borrar ese elemento, tu detector de eventos.

Agregará un detector de eventos al método componentDidMount que escuchará un evento "keydown". Use document.addEventListener (evento, función, opcional (useCapture)). Luego elimine este mismo detector de eventos pasando los mismos argumentos a document.removeEventListener (evento, función, opcional (useCapture)) dentro del método componentWillUnmount.

Nota: document.addEventListener y document.removeEventListener tomarán una cadena entre comillas para su evento, y al pasar a la función, hará referencia a la función handleKeyPress () como this.handleKeyPress. Si invoca la función como esta. HandleKeyPress (), el detector de eventos evaluará primero la función y devolverá un valor indefinido.

```javascript
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      message: '' 
    }; 
    this.handleEnter = this.handleEnter.bind(this); 
    this.handleKeyPress = this.handleKeyPress.bind(this); 
  } 
  // change code below this line 
  componentDidMount() { 
    document.addEventListener("keydown", this.handleKeyPress) 
  } 
  componentWillUnmount() { 
    document.removeEventListener("keydown", this.handleKeyPress) 
  } 
  // change code above this line 
  handleEnter() { 
    this.setState({ 
      message: this.state.message + 'You pressed the enter key! ' 
    }); 
  } 
  handleKeyPress(event) { 
    if (event.keyCode === 13) { 
      this.handleEnter(); 
    } 
  } 
  render() { 
    return ( 
      <div> 
        <h1>{this.state.message}</h1> 
      </div> 
    ); 
  } 
 }; 
```

### Recursos

[Reaccionar componentes](https://reactjs.org/docs/react-component.html) , [Ciclos de vida comunes](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) , [Estado y Ciclos de Vida](https://reactjs.org/docs/state-and-lifecycle.html) , [document.addEventListener](https://www.w3schools.com/jsref/met_document_addeventlistener.asp) , [Eventos HTML DOM](https://www.w3schools.com/jsref/dom_obj_event.asp)