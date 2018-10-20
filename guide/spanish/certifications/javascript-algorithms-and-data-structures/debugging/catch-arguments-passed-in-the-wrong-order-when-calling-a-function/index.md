---
title: Catch Arguments Passed in the Wrong Order When Calling a Function
localeTitle: Detectar argumentos pasados ​​en el orden incorrecto al llamar a una función
---
## Detectar argumentos pasados ​​en el orden incorrecto al llamar a una función

```javascript
function raiseToPower(b, e) { 
  return Math.pow(b, e); 
 } 
```

*   La función anterior se utiliza para elevar el número base `b` a la potencia del exponente `e` .
*   La función debe ser llamada específicamente con variables en el orden correcto. De lo contrario, la función mezclará ambas variables y devolverá una respuesta no deseada.
*   Asegúrese de que la `power` variable esté implementando la función `raiseToPower` correctamente.

## Solución:

```javascript
let power = raiseToPower(base, exp); 

```