---
title: Confirm the Ending
localeTitle: Confirmar el final
---
## Confirmar el final

# Solution Solución de código intermedio:

(Enfoque declarativo)

```javascript
function confirmEnding(str, target) { 
  // "Never give up and good luck will find you." 
  // -- Falcor 
 
  return str.slice(str.length - target.length) === target; 
 } 
 
 confirmEnding("He has to give me a new name", "name"); 
```


# Explicación del código:

*   Primero usamos el método de `slice` , copiamos la cadena.
*   Para obtener los últimos caracteres en `str` equivalentes a la longitud del `target` , usamos el método de `slice` .
*   El primer parámetro dentro del método de `slice` es el índice inicial y el segundo parámetro sería el índice final.
*   Por ejemplo `str.slice(10, 17)` devolvería `give me` .
*   En este caso, solo incluimos un parámetro que copiará todo del índice de inicio.
*   Restamos la longitud de `str` y la longitud del `target` , de esa forma, obtendremos los últimos caracteres restantes equivalentes a la longitud del `target` .
*   Finalmente, comparamos el resultado devuelto de slice a `target` y verificamos si tienen los mismos caracteres.

### Enlaces relevantes

*   [String.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)