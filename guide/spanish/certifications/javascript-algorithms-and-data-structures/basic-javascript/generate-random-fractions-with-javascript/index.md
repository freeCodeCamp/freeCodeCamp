---
title: Generate Random Fractions with JavaScript
localeTitle: Generar fracciones aleatorias con JavaScript
---
# Generar fracciones aleatorias con JavaScript

Los números aleatorios son útiles para crear un comportamiento aleatorio.

JavaScript tiene una función `Math.random()` que genera un número decimal aleatorio entre 0 (incluido) y no hasta 1 (exclusivo). Por `Math.random()` tanto, `Math.random()` puede devolver un 0 pero nunca devolver un 1.

## Nota

Al igual que el almacenamiento de valores con el operador igual, todas las llamadas de función se resolverán antes de que se ejecute la devolución, por lo que podemos devolver el valor de la función `Math.random()` .

## Instrucciones

Cambie randomFraction para devolver un número aleatorio en lugar de devolver 0.

## **Advertencia !!!**

### **Alerta de spoiler !!**

Una solución a seguir:
```
function randomFraction() { 
  // Only change code below this line. 
  var result = 0; 
  // Math.random() can generate 0. We don't want to     return a 0, 
  // so keep generating random numbers until we get one     that isn't 0 
  while (result === 0) { 
    result = Math.random(); 
  } 
 
  return result; 
  // Only change code above this line. 
 } 

```