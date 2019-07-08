---
title: Use a Ternary Expression for Conditional Rendering
localeTitle: Use uma expressão ternária para renderização condicional
---
## Use uma expressão ternária para renderização condicional

Este desafio é usar a expressão Ternary somente em vez de usar `If/Else` no código,

## Sugestão

O operador ternário possui três partes, mas você pode combinar várias expressões ternárias juntas. Aqui está a sintaxe básica:
```
condition ? expressionIfTrue : expressionIfFalse 
```

## Solução

Aqui está uma solução de exemplo de uso da expressão ternária. Primeiro você precisa declarar estado no construtor como este

```jsx
constructor(props) { 
    super(props); 
    // change code below this line 
      this.state = { 
        input: '', 
        userAge: '' 
      } 
    // change code above this line 
    this.submit = this.submit.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  } 
```

Então o operador ternário

```jsx
{ 
    /* change code here */ 
    (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree 
 
 } 

```