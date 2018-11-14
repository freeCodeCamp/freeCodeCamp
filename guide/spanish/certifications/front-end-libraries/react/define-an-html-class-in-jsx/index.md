---
title: Define an HTML Class in JSX
localeTitle: Definir una clase de HTML en JSX
---
## Definir una clase de HTML en JSX

*   HTML y JSX pueden parecer que son exactamente iguales pero hay algunas diferencias entre ellos.
*   Una de estas diferencias es la convención de nomenclatura.
*   Los atributos HTML y las referencias de eventos en JSX se convierten en camelCase (onclick => onClick).
*   También puede haber algunas palabras reservadas en JavaScript. Por ejemplo, la palabra "clase" no se puede usar para definir clases HTML en JSX. Por lo tanto, en lugar de usar "class", puede usar "className".

## Sugerencia 1:

*   Es posible que desee cambiar "clase" a "className".

## Solución

```javascript
const JSX = ( 
  <div className = "myDiv"> 
    <h1>Add a class to this div</h1> 
  </div> 
 ); 

```