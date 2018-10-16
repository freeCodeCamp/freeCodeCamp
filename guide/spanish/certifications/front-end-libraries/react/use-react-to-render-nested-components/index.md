---
title: Use React to Render Nested Components
localeTitle: Use React para renderizar componentes anidados
---
## Use React para renderizar componentes anidados

Ha aprendido en lecciones anteriores, que hay dos formas de crear un componente React:

1.  Componente funcional sin estado - usando una función de JavaScript.
    
2.  Defina un componente React utilizando la sintaxis ES6.
    

En este cuestionario, hemos definido dos componentes funcionales sin estado, es decir, utilizando funciones de JavaScript. Recuerde, una vez que se ha creado un componente, se puede representar de la misma manera que una etiqueta HTML, utilizando el nombre del componente dentro de los corchetes de apertura y cierre de HTML. Por ejemplo, para anidar un componente llamado Perro dentro de un componente padre llamado Animales, simplemente deberías devolver el componente Perro del componente Animales de esta manera:

```javascript
return ( 
  <Dog /> 
 ) 
```

Intenta esto con los componentes TypesOfFruit y Fruits.