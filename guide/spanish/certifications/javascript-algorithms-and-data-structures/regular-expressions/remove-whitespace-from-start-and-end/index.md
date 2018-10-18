---
title: Remove Whitespace from Start and End
localeTitle: Eliminar espacios en blanco de inicio y fin
---
## Eliminar espacios en blanco de inicio y fin

Para resolver este desafío, simplemente tiene que crear una cadena de expresiones regulares que coincida con cualquier espacio al principio o al final de la cadena.

## Sugerencia 1:

Piense en cómo puede seleccionar subcadenas al principio o al final de una cadena.

## Sugerencia 2:

Piense en cómo puede seleccionar los espacios en blanco

## Alerta de Spoiler - ¡Solución por delante!

## Solución:

```javascript
let hello = "   Hello, World!  "; 
 let wsRegex = /^\s+|\s+$/g; // Change this line 
 let result = hello.replace(wsRegex, ''); // Change this line 

```