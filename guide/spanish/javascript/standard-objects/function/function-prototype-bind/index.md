---
title: Function.prototype.bind
localeTitle: Function.prototype.bind
---
## Function.prototype.bind

`bind` es un método en el prototipo de todas las funciones en JavaScript. Se le permite crear una nueva función a partir de una función existente, cambia de la nueva función de `this` contexto, y proporciona ningún argumento que desea que la nueva función a ser llamada con. Los argumentos proporcionados para `bind` precederán a cualquier argumento que se pase a la nueva función cuando se llame.

### Usando el `bind` para cambiar `this` en una función

El primer argumento proporcionado a `bind` es el `this` contexto, la función estará obligado a. Si no desea cambiar el valor de `this` pase `null` como primer argumento.

Tiene la tarea de escribir un código para actualizar el número de asistentes a medida que llegan a una conferencia. Usted crea una página web simple que tiene un botón que, al hacer clic, incrementa el número de `numOfAttendees` Propiedad sobre el objeto de la conferencia. Utiliza jQuery para agregar un controlador de clic a su botón, pero después de hacer clic en el botón, el objeto de conexión no ha cambiado. Tu código puede verse algo como esto.

```javascript
var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees); 
```

Este es un problema común cuando se trabaja con jQuery y JavaScript. Cuando hace clic en el botón, `this` palabra clave en el método que pasó a jQuery en `on` método hace referencia al botón y no al objeto de la conferencia. Puede enlazar `this` contexto de su método para resolver el problema.

```javascript
var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees.bind(nodevember)); 
```

Ahora bien, cuando se hace clic en el botón de `this` referencia a la `nodevember` objeto.

### Proporcionar argumentos a una función con `bind`

Cada argumento pasado para `bind` después del primero precederá a cualquier argumento que se pase cuando se llama a la función. Esto le permite pre-aplicar argumentos a una función. En el siguiente ejemplo, `combineStrings` toma dos cadenas y las concatena. `bind` se usa para crear una función que siempre proporciona "Cool" como la primera cadena.

```javascript
function combineStrings(str1, str2) { 
  return str1 + " " + str2 
 } 
 
 var makeCool = combineStrings.bind(null, "Cool"); 
 
 makeCool("trick"); // "Cool trick" 
```

La guía de [esta referencia](https://guide.freecodecamp.org/javascript/this-reference) tiene más información sobre cómo pueden cambiar las referencias de `this` palabra clave.

Se pueden encontrar más detalles sobre el método de `bind` en los [documentos MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) de Mozilla.