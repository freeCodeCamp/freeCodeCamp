---
title: Write Concise Object Literal Declarations Using Simple Fields
localeTitle: Escriba declaraciones literales de objetos concisos utilizando campos simples
---
## Escriba declaraciones literales de objetos concisos utilizando campos simples

Aquí, tenemos la tarea de devolver un objeto que acepte los parámetros de la función como sus atributos.

# Sugerencia 1:

Deshazte de los dos puntos, y de las palabras duplicadas.

## Alerta de Spoiler - Solución por delante

## Solución

```javascript
const createPerson = (name, age, gender) => { 
  "use strict"; 
  // change code below this line 
  return { 
    name, 
    age, 
    gender 
  }; 
  // change code above this line 
 }; 

```