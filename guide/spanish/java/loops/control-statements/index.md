---
title: Jump Statements
localeTitle: Saltar declaraciones
---
# Saltar declaraciones

Las declaraciones de salto son un tipo de declaraciones de [_flujo_](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html) de [_control_](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html) . Básicamente, puede usarlos para cambiar el orden en que se ejecutan las sentencias del curso normal de ejecución. En esencia, estas declaraciones hacen que el control del programa "salte" del siguiente punto esperado de ejecución a otro lugar en el programa.

Las siguientes declaraciones de salto se usan comúnmente con los bucles:

*   [descanso](http://forum.freecodecamp.com/t/java-loops-break-control-statement)
*   [continuar](http://forum.freecodecamp.com/t/java-loops-continue-control-statement)

La instrucción de control 'break' se sale del bucle cuando se cumple la condición. Esto significa que el resto del bucle no se ejecutará. Por ejemplo, en el siguiente bucle si llego a 5, el bucle se rompe, por lo que no continúa.

```java
for(int i=0;i<10;i++){ 
 
  if(i == 5){ //if i is 5, break out of the loop. 
    break; 
  } 
 
 System.out.println(i); 
 } 
```

Salida:
```
    0 1 2 3 4 
```

La declaración de control 'continuar' es la versión menos intensa de 'break'. Solo sale de la instancia actual del bucle y continúa. En el siguiente bucle, si i es 5, el bucle continúa, por lo que saltará la declaración de impresión a continuación y continuará hasta que llegue a 10 y el bucle se detenga.

```java
for(int i=0;i<10;i++){ 
 
  if(i == 5){ //if i is 5, break out of the current instance loop. 
    continue; 
  } 
 
 System.out.println(i); 
 } 
```

Salida:
```
    0 1 2 3 4 6 7 8 9 

```