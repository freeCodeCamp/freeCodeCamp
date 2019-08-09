---
title: Render Conditionally from Props
localeTitle: Render condicionalmente de adereços
---
## Render condicionalmente de adereços

Este é um desafio complicado, mas fácil.

## Solução

Altere o `handleClick()` com a instrução de `handleClick()` adequada.

```jsx
handleClick() { 
  this.setState({ 
    counter: this.state.counter + 1 
  }); 
 } 
```

No método `render()` , use `Math.random()` como mencionado na descrição do desafio e escreva uma expressão ternária para passar `props` no componente **Results** .

```jsx
 let expression = Math.random() > .5; 
 
 {(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> } 
```

Em seguida, renderize os `fiftyFifty` no componente Results.

```jsx
  <h1> 
  { 
    this.props.fiftyFifty 
  } 
  </h1> 

```