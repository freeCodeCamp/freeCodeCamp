---
title: Creating Singleton In JavaScript
localeTitle: Creando Singleton En JavaScript
---
## Creación de Singleton en la guía de Javascript

Este artículo trata sobre la creación de Singletons en Javascript nativo (puro). Este concepto puede ser útil para mantener el código limpio.

Si desea mantener su código o algún dato debe seguir siendo el mismo para toda su aplicación, esta es la forma en que puede hacerlo.

**Conocimiento previo** Esto es solo para ayudarle a entender el concepto más fácilmente, de lo contrario, siempre puede copiar y pegar el código y cambiarlo en consecuencia.

*   Sintaxis básica de Javascript
*   Funciones de Javascript
*   IIFE en Javascript

### Empecemos

Vamos a crear un objeto con la función IIFE que se ejecutará instantáneamente para darnos el efecto de Singleton.
```
var singletonFn = (function(){ //Created IIFE Function 
  var dataCounter = 0; 
  return { //Any code inside this return stuff will be accessible directly using objectname. 
 
    getDataCounter: function(){ 
      return dataCounter; 
    }, 
 
    setDataCounter: function(val){ 
      dataCounter = val; 
    }, 
 
    fishNames: ["SimpleFish"] //Can create variables, Arrays, etc. 
  } 
 })(); 
```

Ahora para ejecutar o utilizar su singleton. en el navegador después de guardar esto en el archivo js y cargarlo.
```
console.log(singletonFn.getDataCounter()); //0 as bydefault it will be 0. 
 
 singletonFn.setDataCounter(20); 
 
 console.log(singletonFn.getDataCounter()); //20 as we assigned. 
 
 console.log(fishNames); //will Print array with "SimpleFish". 
```

Ahora, con este conocimiento, puede definir constantes, enumeraciones o cualquier cosa que necesite usar múltiples en el proyecto escrito aquí. o algo así como configuraciones.

Esperanza, esto te ayudará a escribir mejores códigos. Feliz codificación :)