---
title: Global vs. Local Scope in Functions
localeTitle: Ámbito global vs. local en funciones
---
## Ámbito global vs. local en funciones

Recuerde que el alcance global significa que la variable está disponible en todo el código. Ámbito local, significa que la variable está disponible dentro de un cierto rango.

En este ejercicio, tiene una variable `outerWear` en el alcance global con "T-shirt" como valor. Ahora debe crear otra variable llamada `outerWear` , pero esta vez dentro de la función `myOutfit()` . La solución de código básico de la siguiente manera:

```javascript
var outerWear = "T-shirt"; 
 
 function myOutfit() { 
  var outerWear = "sweater"; 
  return outerWear; 
 } 
 
 myOutfit(); 
```

La función devolverá el `outerWear` más `outerWear` que pueda encontrar. Ya que creamos un `outerWear` dentro de la función, es el 'más cercano', por lo que la función devolverá "sweater".