---
title: Spread Operator
localeTitle: Operador de propagación
---## Operador de propagación

El operador de propagación ( `...` ), permite obtener los elementos de una colección.

Uno de los usos más comunes es para objetos de `Node` , cuando se utilizan selectores de consulta en el navegador, para hacerlos objetos de matriz iterables:

```javascript
const paragraphs = document.querySelectorAll('p.paragraph'); 
 const arr = [...paragraphs]; 
```

Otro uso del operador de propagación es para concatenación de Arrays:

```javascript
const arr_1 = [1, 2, 3, 4] 
 const arr_2 = [5, 6, 7, 8] 
 const arr_final = [...arr_1, ...arr_2] 
 // arr_final = [1, 2, 3, 4, 5, 6, 7, 8] 

```