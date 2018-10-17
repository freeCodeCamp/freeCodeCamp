---
title: Understand the Differences Between import and require
localeTitle: Comprender las diferencias entre importar y requerir
---
## Comprender las diferencias entre importar y requerir

Aclaremos: `require()` carga el archivo completo y sus componentes (funciones, variables), mientras que `import _ from` permite elegir los componentes que desea.

En esta lección, tiene la tarea de importar la función `capitalizeStrings()` , que proviene del archivo `"string-functions"` .

## Sugerencia 1:

Rellene los espacios en blanco: `import { function_name } from "file_name"` . El nombre de su función es `capitalizeStrings` , y el nombre de su archivo es `"string-functions"` .

## Alerta de Spoiler - ¡Solución por delante!

## Solución

```javascript
"use strict"; 
 import { capitalizeString } from "string-functions"; 
 capitalizeString("hello!"); 

```