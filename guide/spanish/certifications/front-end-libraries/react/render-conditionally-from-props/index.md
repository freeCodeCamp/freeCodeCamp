---
title: Render Conditionally from Props
localeTitle: Procesamiento condicional de apoyos
---
## Procesamiento condicional de apoyos

Este es un reto un poco complicado pero fácil.

## Solución

Cambie `handleClick()` con la declaración de incremento adecuada.

```jsx
handleClick() { 
  this.setState({ 
    counter: this.state.counter + 1 
  }); 
 } 
```

En `render()` el uso del método `Math.random()` como se menciona en la descripción desafío y escribir una expresión ternaria para pasar `props` en el componente de **Resultados.**

```jsx
 let expression = Math.random() > .5; 
 
 {(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> } 
```

Luego renderiza los `fiftyFifty` apoyos en el componente Resultados.

```jsx
  <h1> 
  { 
    this.props.fiftyFifty 
  } 
  </h1> 

```