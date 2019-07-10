---
title: Render with an If/Else Condition
localeTitle: Render con una condición Si / Else
---
## Render con una condición Si / Else

### Método

Dentro del método de renderización del componente, escriba las instrucciones if / else que tienen su propio método de devolución que tiene JSX diferente. Esto le da a los programadores la capacidad de renderizar diferentes UI de acuerdo a varias condiciones.

Primero, ajuste el método de retorno actual dentro de una declaración if y establezca la condición para verificar si la variable 'visualización' es verdadera. Recuerde, usted accede al estado usando `this.state` .

### Solución

```jsx
if (this.state.display === true) { 
  return ( 
    <div> 
      <button onClick={this.toggleDisplay}>Toggle Display</button> 
      <h1>Displayed!</h1> 
    </div> 
  ); 
 } 
```

A continuación, cree una declaración else que devuelva el mismo JSX **sin** el elemento `h1` .

```jsx
else { 
  return ( 
    <div> 
      <button onClick={this.toggleDisplay}>Toggle Display</button> 
    </div> 
  ) 
 } 

```