---
title: Use Advanced JavaScript in React Render Method
localeTitle: Utilice JavaScript avanzado en el método React Render
---
## Utilice JavaScript avanzado en el método React Render

### Método

Mientras esté dentro del método de renderizado y no dentro del método de retorno, puede escribir JavaScript **sin** envolverlo entre llaves.

Primero, tendrá que establecer la constante 'respuesta' a un valor. Acceda a la matriz 'possibleAnswers' usando el valor de 'randomIndex', que se encuentra dentro del estado de su componente. Recuerde, usted accede al estado usando `this.state` .

### Solución

```js
const answer = possibleAnswers[this.state.randomIndex]; 
```

A continuación, inserte su const 'respuesta' en las p-tags. Asegúrate de envolverlo con llaves `{ }` .

```jsx
<p> 
  {answer} 
 </p> 

```