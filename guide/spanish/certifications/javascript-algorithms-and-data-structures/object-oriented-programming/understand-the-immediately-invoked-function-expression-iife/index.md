---
title: Understand the Immediately Invoked Function Expression (IIFE)
localeTitle: Comprender la expresión de función invocada inmediatamente (IIFE)
---
## Comprender la expresión de función invocada inmediatamente (IIFE)

### Método

El primer caso de prueba le pide que haga la función anónima. Para hacer esto, simplemente elimine el nombre de la función como se ve en el ejemplo. La función debe estar envuelta entre paréntesis con otro juego de corchetes al final para llamar inmediatamente a la función.

### Solución

```javascript
(function() { 
  console.log("A cozy nest is ready"); 
 })(); 

```