---
title: For Loop
localeTitle: En bucle
---
# En bucle

El bucle `for` le ofrece una forma compacta de iterar sobre un rango de valores. Un básico `for` declaración tiene tres partes: una inicialización de variables, una expresión booleana, y una expresión de la subasta.

```java
for (variable initialization; boolean expression; increment expression) 
 { 
    // Statements 
 } 
```

*   `initialization` : inicializa el bucle y se ejecuta solo una vez, al principio.

Puede inicializar más de una variable del mismo tipo en la primera parte de la declaración básica `for` bucle `for` ; Cada inicialización debe estar separada por una coma.

*   `expression` - Evaluado al comienzo de cada iteración. Si la `expression` evalúa como `true` , las `Statements` se ejecutarán.
*   `increment` : se invoca después de cada iteración a través del bucle. Puede aumentar / disminuir el valor de las variables aquí. Asegúrese de que el incremento esté trabajando hacia el valor de la expresión, para evitar un bucle infinito.

Una forma común `for` se usa el bucle `for` es si necesita iterar su código una cantidad específica de veces. Por ejemplo, si quisiera dar salida a los números del 0 al 10, inicializaría la variable para su contador a 0, luego verifique si el valor es menor que 10 y agregaría uno al contador después de cada iteración.

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

Otro ejemplo de un bucle for que agrega los primeros 50 números sería así. i ++ significa i = i + 1.

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

No puede usar un número (antiguo constructo de lenguaje de estilo C) o cualquier cosa que no se evalúe como un valor booleano como condición para una sentencia if o un constructo en bucle. No puede, por ejemplo, decir si (x), a menos que x sea una variable booleana.

Además, es importante tener en cuenta que la expresión booleana debe, en algún momento, evaluar como verdadera. De lo contrario, su programa se atascará en un bucle infinito.