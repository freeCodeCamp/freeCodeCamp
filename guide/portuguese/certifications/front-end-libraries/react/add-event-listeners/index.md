---
title: Add Event Listeners
localeTitle: Adicionar ouvintes de eventos
---
## Adicionar ouvintes de eventos

Este desafio tem você modificando dois métodos de ciclo de vida componentDidMount e componentWillUnmount. Você usa componentDidMount quando deseja configurar algo, no seu caso, um ouvinte de evento. Você usa componentWillUnmount quando precisa limpar algo, seu ouvinte de evento.

Você adicionará um ouvinte de evento ao método componentDidMount que ouvirá um evento "keydown". Use document.addEventListener (evento, função, opcional (useCapture)). Em seguida, remova esse mesmo ouvinte de evento passando os mesmos argumentos para document.removeEventListener (event, function, optional (useCapture)) dentro do método componentWillUnmount.

Nota: document.addEventListener e document.removeEventListener receberão uma string entre aspas para seu evento e, ao passar para a função, você referenciará a função handleKeyPress () como this.handleKeyPress. Se você chamar a função como this.handleKeyPress (), o ouvinte de eventos avaliará a função primeiro e retornará um valor de indefinido.

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

[Reagir Componentes](https://reactjs.org/docs/react-component.html) , [Ciclos de Vida Comuns](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) , [Estado e Ciclos de Vida](https://reactjs.org/docs/state-and-lifecycle.html) , [document.addEventListener](https://www.w3schools.com/jsref/met_document_addeventlistener.asp) , [Eventos HTML DOM](https://www.w3schools.com/jsref/dom_obj_event.asp)