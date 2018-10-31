---
title: For Loop
localeTitle: Por bucle
---
# Por bucle

El bucle `for` ofrece una forma compacta de iterar sobre un rango de valores. Una declaración básica de `for` tiene tres partes: una inicialización de variables, una expresión booleana, y una expresión de incremento.

```java
for (variable initialization; boolean expression; increment expression) 
 { 
    // Statements 
 } 
```

*   `initialization` : inicializa el bucle y se ejecuta solo una vez, al principio.

Se puede inicializar más de una variable del mismo tipo en la primera parte de la declaración básica del bucle `for`; Cada inicialización debe estar separada por una coma.

*   `expression` - Evaluado al comienzo de cada iteración. Si la `expression` evalúa como `true` , los `Statements` se ejecutarán.
*   `increment` : se invoca después de cada iteración a través del bucle. Se puede aumentar / disminuir el valor de los variables aquí. Asegúrese de que el incremento esté acercandose hacia el valor de la expresión, para evitar un bucle infinito.

Una forma común en que se usa el bucle `for` es si necesita iterar su código una cantidad específica de veces. Por ejemplo, si quisiera encontrar a los números del 0 al 10, inicializaría el variable para su contador a 0, verificaría si el valor es menos de 10 y agregaría uno al contador después de cada iteración.

Observe que comprobaría si el valor es menor que 10, no menor o igual a 10, ya que está iniciando su contador en 0.

```java
for (int iter_For = 0; iter_For < 10; iter_For++) 
 { 
    System.out.print(iter_For + " "); 
    // Iterated 10 times, iter_For 0,1,2...9 
 } 
 
 System.out.println("iter_For Value: " + iter_For); 
```

Nota: También es aceptable declarar una variable dentro del bucle for como una sola declaración.
```java
for (int iter_For = 0; iter_For < 10; iter_For++) 
 { 
    System.out.print (iter_For + " "); 
    // Iterated 10 times, iter_For 0,1,2...9 
 } 
```

Salida:
```
0 1 2 3 4 5 6 7 8 9 
 iter_For Value: 10 
```

Otro ejemplo de un bucle `for` que agrega los primeros 50 números sería así.
i++ significa i = i+1.

```java
int addUntil = 50; 
 int sum 0; 
 
 for (int i = 1; i <= addUntil; i++) 
 { 
    sum+=i 
 } 
 
 System.out.println("The sum of the first 50 numbers is: " + 50); 
```

![:rocket:](https://forum.freecodecamp.org/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CJYr/0)

### Extras

No puede usar un número (antiguo constructo de lenguaje de estilo C) o cualquier cosa que no se evalúe como un valor booleano como condición para una condicion `if` o un constructo en bucle. No puede, por ejemplo, decir `if(x)`, a menos que x sea un variable booleano.

Además, es importante tener en cuenta que la expresión booleana debe, en algún momento, evaluar como verdadera. De lo contrario, su programa se atascará en un bucle infinito.
