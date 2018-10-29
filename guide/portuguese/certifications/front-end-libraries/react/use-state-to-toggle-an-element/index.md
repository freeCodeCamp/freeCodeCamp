---
title: Use State to Toggle an Element
localeTitle: Use o estado para alternar um elemento
---
## Use o estado para alternar um elemento

*   Você pode alternar um elemento verificando e alterando seu estado.

## Sugestão 1:

*   Lembre-se de ligar `this` ao construtor do método.

```javascript
    this.toggleVisibility = this.toggleVisibility.bind(this); 
```

## Dica 2:

*   Lembre-se, você pode usar uma função JavaScript para verificar o estado de um elemento.

## Solução:

```jsx
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      visibility: false 
    }; 
    // change code below this line 
    this.toggleVisibility = this.toggleVisibility.bind(this); 
    // change code above this line 
  } 
  // change code below this line 
  toggleVisibility() { 
    if (this.state.visibility == true) { 
    this.setState({ 
      visibility: false 
    });} else { 
      this.setState({ 
        visibility: true 
      }) 
    } 
  } 
  // change code above this line 
  render() { 
    if (this.state.visibility) { 
      return ( 
        <div> 
          <button onClick={this.toggleVisibility}>Click Me</button> 
          <h1>Now you see me!</h1> 
        </div> 
      ); 
    } else { 
      return ( 
        <div> 
          <button onClick={this.toggleVisibility}>Click Me</button> 
        </div> 
      ); 
    } 
  } 
 }; 

```