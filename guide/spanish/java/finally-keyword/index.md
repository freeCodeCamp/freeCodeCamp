---
title: Finally
localeTitle: Finalmente
---
## finalmente

El bloque finally siempre se ejecuta cuando el bloque try sale. Esto asegura que el bloque finally se ejecute incluso si ocurre una excepción inesperada. Pero, finalmente, es útil para algo más que el manejo de excepciones: permite al programador evitar que un código de limpieza se omita accidentalmente con una devolución, una continuación o una interrupción. Poner el código de limpieza en un bloque final es siempre una buena práctica, incluso cuando no se prevén excepciones.

**_Ejemplo:_**

```java
try { 
   // Normal execution path 
   throw new EmptyStackException(); 
 } catch (ExampleException ee) { 
   //  deal with the ExampleException 
 } finally { 
   // This optional section is executed upon termination of any of the try or catch blocks above, 
   //  except when System.exit() is called in "try" or "catch" blocks; 
 } 

```