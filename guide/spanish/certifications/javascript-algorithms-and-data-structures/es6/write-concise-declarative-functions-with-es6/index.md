---
title: Write Concise Declarative Functions with ES6
localeTitle: Escribir funciones declarativas concisas con ES6
---
## Escribir funciones declarativas concisas con ES6

ES6 hace que sea fácil y elegante escribir funciones declarativas. En esta lección, tiene la tarea de cambiar la función para seguir los estándares ES6.

## Sugerencia 1:

Deshazte de la palabra clave de `function` .

## Alerta de Spoiler - ¡Solución por delante!

## Solución

```javascript
const bicycle = { 
  gear: 2, 
  setGear(newGear) { 
    "use strict"; 
    this.gear = newGear; 
  } 
 }; 

```