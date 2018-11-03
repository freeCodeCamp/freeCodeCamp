---
title: Use State to Toggle an Element
localeTitle: Usar estado para alternar un elemento
---
## Usar estado para alternar un elemento

*   Puedes alternar un elemento marcando y cambiando su estado.

## Sugerencia 1:

*   Recuerda enlazar `this` al constructor del método.

```javascript
    this.toggleVisibility = this.toggleVisibility.bind(this); 
```

## Sugerencia 2:

*   Recuerde, puede usar una función de JavaScript para verificar el estado de un elemento.

## Solución:

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