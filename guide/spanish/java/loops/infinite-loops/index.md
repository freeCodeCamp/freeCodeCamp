---
title: Infinite Loops
localeTitle: Bucles infinitos
---
# Bucles infinitos

Un bucle de infinte es una sentencia de bucle ( `for` , `while` , `do-while` ) que no termina por sí sola.

La condición de prueba de una declaración de bucle decide si el cuerpo del bucle se ejecutará o no. Por lo tanto, una condición de prueba que siempre es verdadera continuará ejecutando el cuerpo del bucle, para siempre. Ese es el caso en un bucle de infinte.

Ejemplos:

```java
// Infinite For Loop 
 for ( ; ; ) 
 { 
    // some code here 
 } 
 
 // Infinite While Loop 
 while (true) 
 { 
    // some code here 
 } 
 
 // Infinite Do While Loop 
 do 
 { 
    // some code here 
 } while (true); 
```

Normalmente, si su bucle se ejecuta infinitamente, es un error que no debería ocurrir, ya que un bucle infinito no se detiene e impide que el resto del programa se ejecute.

```java
for(int i=0;i<100;i++){ 
 
    if(i==49){ 
    i=0; 
    } 
 
 } 
```

El bucle anterior se ejecuta infinitamente porque cada vez que me acerco a 49, se establece en 0. Esto es para decir que nunca llego a 100 para terminar el bucle, por lo que el bucle es un bucle infinito.

Pero un programa atascado en dicho bucle seguirá utilizando los recursos informáticos de forma indefinida. Esto es indeseable y es un tipo de 'error en tiempo de ejecución'.

Para evitar el error, los programadores usan una instrucción break para salir del bucle. La ruptura se ejecuta sólo bajo una condición particular. El uso de una declaración de selección como if-else asegura lo mismo.

```java
while (true) 
 { 
    // do something 
 
    if(conditionToEndLoop == true) 
        break; 
 
    // do more 
 } 
```

La principal ventaja de usar un bucle infinito sobre un bucle regular es la legibilidad.

A veces, el cuerpo de un bucle es más fácil de entender si el bucle termina en el medio, y no al final / al principio. En tal situación, un bucle infinito será una mejor opción.