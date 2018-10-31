---
title: Create complex multi-dimensional arrays
localeTitle: Crear complejos arreglos multidimensionales.
---
## Crear complejos arreglos multidimensionales.

*   La primera cuerda - `deep` - debe insertarse a tres niveles de profundidad. Esto significa dentro de exactamente tres conjuntos de `[square-brackets]` .

```javascript
let threeLevelArray = ["first level", ["Two levels deep", ["Three levels deep"]]]; 
```

*   Usando esta lógica, inserte cadenas más `deep` , `deeper` y `deepest` en la matriz tres niveles de profundidad, cuatro niveles de profundidad y cinco niveles de profundidad respectivamente.

## Solución:

```javascript
let myNestedArray = [ 
  // change code below this line 
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], 
  ['loop', 'shift', 6, 7, 1000, 'method'], 
  ['concat', false, true, 'spread', 'array',["deep"]], 
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]], 
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ] 
  // change code above this line 
 ]; 

```