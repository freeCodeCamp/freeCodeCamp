---
title: Use a Ternary Expression for Conditional Rendering
localeTitle: Utilice una expresión ternaria para la representación condicional
---
## Utilice una expresión ternaria para la representación condicional

Este desafío es usar la expresión ternaria solo en lugar de usar `If/Else` en el código,

## Insinuación

El operador ternario tiene tres partes, pero puede combinar varias expresiones ternarias juntas. Aquí está la sintaxis básica:
```
condition ? expressionIfTrue : expressionIfFalse 
```

## Solución

Aquí está la solución de muestra de usar la expresión ternaria. Primero necesitas declarar estado en constructor como este.

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

Entonces el operador ternario

```jsx
{ 
    /* change code here */ 
    (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree 
 
 } 

```