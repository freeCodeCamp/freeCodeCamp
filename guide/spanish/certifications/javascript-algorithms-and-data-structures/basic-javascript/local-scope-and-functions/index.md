---
title: Local Scope and Functions
localeTitle: Ámbito local y funciones
---
## Ámbito local y funciones

El alcance local significa que la variable está disponible dentro de un área determinada. En el caso de este ejercicio, `myVar` solo está disponible dentro de la función, y no en ningún lugar fuera.

Aquí está la solución de código básica para crear una variable `myVar` local.

```javascript
function myLocalScope() { 
  var myVar; 
  console.log(myVar); 
 } 
 myLocalScope(); 
```

La variable solo existe en la función. Fuera de la función, no existe.