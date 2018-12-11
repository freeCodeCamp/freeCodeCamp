---
title: Use class Syntax to Define a Constructor Function
localeTitle: Use la clase Sintaxis para definir una función constructora
---
## Use la clase Sintaxis para definir una función constructora

En esta lección, está definiendo el objeto Vegetable utilizando la sintaxis de clase.

## Sugerencia 1:

Crea la clase llamada `Vegetable` . Contendrá los detalles necesarios sobre el objeto `Vegetable` .

## Sugerencia 2:

Coloque un constructor con un parámetro llamado `name` y `this.name` en `this.name` .

## Alerta de Spoiler - ¡Solución por delante!

## Solución:

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
  class Vegetable { 
    constructor(name){ 
      this.name = name; 
    } 
  } 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
```

\=======

Advertencia de Spoiler: aquí hay una solución básica para este desafío en caso de que esté atascado.

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
 
   class Vegetable { 
     constructor(Vegetable){ 
       this.Vegetable = Vegetable; 
 
     } 
   } 
 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
 const Vegetable = makeClass(); 
 const carrot = new Vegetable('carrot'); 
 console.log(carrot.name); // => should be 'carrot' 

```