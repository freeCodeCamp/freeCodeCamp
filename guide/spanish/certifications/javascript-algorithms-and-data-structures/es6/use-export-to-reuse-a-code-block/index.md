---
title: Use export to Reuse a Code Block
localeTitle: Usar la exportación para reutilizar un bloque de código
---
## Usar la exportación para reutilizar un bloque de código

Aprendimos cómo importar cosas desde otro archivo. Pero hay una trampa. Solo puede importar archivos que se **exportan** desde ese otro archivo.

Tu tarea aquí es exportar `foo` y `bar` .

## Sugerencia 1:

Solo agrega exportación delante de ellos!

## Alerta de Spoiler - ¡Solución por delante!

## Solución

```javascript
"use strict"; 
 export const foo = "bar"; 
 export const bar = "foo"; 

```