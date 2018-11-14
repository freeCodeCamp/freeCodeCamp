---
title: Pass Arguments to Avoid External Dependence in a Function
localeTitle: Pasar argumentos para evitar la dependencia externa en una función
---
## Pasar argumentos para evitar la dependencia externa en una función

## Sugerencia: 1

Intente pasar el argumento para funcionar y devolver el valor incrementado de este argumento.

**¡Solución por delante!**

## Solución de código básico:

```javascript
// the global variable 
 var fixedValue = 4; 
 
 // Add your code below this line 
 function incrementer (value) { 
  return value + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(fixedValue); // Should equal 5 
 console.log(fixedValue); // Should print 4 
```

### Método

Este código proporcionará el mismo resultado que el último desafío, solo que esta vez pasaremos el valor `fixedValue` a la función como un parámetro.