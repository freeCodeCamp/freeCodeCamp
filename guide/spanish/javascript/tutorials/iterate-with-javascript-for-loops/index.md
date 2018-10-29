---
title: Iterate with JavaScript for Loops
localeTitle: Iterar con JavaScript para bucles
---
El tipo más común de bucle de JavaScript se llama un `for loop` ya que se ejecuta `for` un número específico de veces.
```
var ourArray = []; 
 for(var i = 0; i < 5; i++) { 
  ourArray.push(i); 
 } 
```

ourArray ahora contendrá \[0,1,2,3,4\]

## Más sobre los bucles.
```
for(var i = 0; i < 5; i++) {  // There are 3 parts here 
```

Hay tres partes para for loop. Están separados por punto y coma.

1.  La inicialización: `var i = 0;` - Este código se ejecuta una sola vez al inicio del bucle. Normalmente se usa para declarar la variable de contador (con `var` ) e inicializar el contador (en este caso, se establece en 0).
    
2.  La condición: `i < 5;` - El bucle se ejecutará mientras esto sea `true` . Eso significa que tan pronto como `i` sea ​​igual a 5, el bucle se detendrá. Tenga en cuenta que el interior del bucle nunca verá `i` como 5 porque se detendrá antes de esa fecha. Si esta condición es inicialmente `false` , el bucle nunca se ejecutará.
    
3.  El incremento: `i++` : este código se ejecuta al final de cada bucle. Usualmente es un incremento simple (operador `++` ), pero realmente puede ser cualquier transformación matemática. Se utiliza para mover el contador ( `i` ) hacia adelante (o hacia atrás, o lo que sea).