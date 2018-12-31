---
title: Create a React Component
localeTitle: Crear un componente React
---
## Crear un componente React

## Sugerencia 1:

*   Verá estos componentes de la clase React todo el tiempo, por lo que ahora sería un buen momento para sentirse cómodo con ellos. Recuerde que en este ejercicio no tiene que definir el componente, solo necesita hacer que una función devuelva un poco de html entre las líneas marcadas.
*   Recuerde la sección anterior y devuelva un elemento "div" que contenga un "h1" con el texto Hello React !.
*   El elemento "div" tiene un hijo, así que recuerda cerrar todas las etiquetas.

## Solución

```javascript
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    // change code below this line 
    return ( 
      <div> 
       <h1>Hello React!</h1> 
      </div> 
    ); 
    // change code above this line 
  } 
 }; 
```

Tenga en cuenta que no necesita colocar comillas en el texto, ya que cuando trabaja con JSX se trata como HTML. ¡También revisa para asegurarte de que tu ortografía, caso y puntuación sean correctos! Si todo este código parece extraño, vaya a ver algunos de los excelentes materiales en Javascript ES6 aquí en freeCodeCamp.