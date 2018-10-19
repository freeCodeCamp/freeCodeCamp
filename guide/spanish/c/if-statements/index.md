---
title: Logical Operators and If Statements
localeTitle: Operadores lógicos y declaraciones if
---
# Si las declaraciones en C

La capacidad de cambiar el comportamiento de un fragmento de código que se basa en cierta información en el entorno se conoce como flujo de código condicional. A veces, usted quiere que su código se ejecute de acuerdo con ciertas condiciones. En tal situación podemos usar declaraciones de if. También se conoce como declaración de toma de decisiones ya que toma la decisión sobre la base de una expresión dada (o en una condición dada). Si la expresión se evalúa como verdadera, entonces se ejecutará el bloque de código dentro de la declaración "if". Si la expresión se evalúa como falsa, entonces se ejecutará el primer conjunto de código después del final de la instrucción 'if' (después de la llave de cierre). Una expresión es una expresión que tiene operadores relacionales y / o lógicos que operan en variables booleanas . Una expresión se evalúa como verdadera o falsa.

## Sintaxis de la _sentencia if_
```
if (testExpression) { 
   // statements 
 } 
```

## Un ejemplo simple

Veamos un ejemplo de esto en acción:

```C
#include <stdio.h> 
 #include <stdbool.h> 
 
 int main(void) { 
    if(true) { 
        printf("Statement is True!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 Statement is True! 
```

Al igual que helloworld.c, stdio.h ha sido incluido. Nuevo en este programa es stdbool.h, que es la biblioteca booleana estándar; contiene código que nos da acceso a 'true' y 'false'.

Otra novedad en el ejemplo anterior es la instrucción 'if'. Si la declaración dentro del paréntesis es verdadera, el código entre los corchetes de la instrucción if se ejecutará. En el caso de este ejemplo, true es verdadero, por lo que el código ejecutará la función `printf` .

## Si-si no

En la declaración 'If-else', si la declaración dentro del paréntesis es verdadera, el código entre los corchetes de la instrucción 'if' se ejecutará y si la declaración dentro del paréntesis es falsa, el código entre los corchetes de la ' la declaración de else se ejecutará.

Por supuesto, ese ejemplo no fue muy útil, porque la verdad siempre es cierta. Aquí hay otro que es un poco más práctico:

```C
#include <stdio.h> 
 
 int main(void) { 
    int n = 2; 
 
    if(n == 3) { // comparing n with 3 
        printf("Statement is True!\n"); 
    } 
    else { // if first condition is not true, then comes to this block of code. 
        printf("Statement is False!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 Statement is False! 
```

Hay algunas cosas importantes que son diferentes aquí. Primero, `stdbool.h` no ha sido incluido. Eso está bien, porque lo `true` y lo `false` no están siendo usados. En C, tenemos declaraciones que se tratan como verdaderas y falsas, aunque las palabras verdadero o falso no están involucradas en la operación.

Dentro del paréntesis de la sentencia if también hay algo nuevo: `n == 3` . Esta es una comparación entre `n` y el número 3. `==` es el operador de comparación, y es una de varias operaciones de comparación en C.

## Anidado si-else

La sentencia if-else permite elegir entre dos alternativas posibles. A veces hay que elegir entre más de dos posibilidades. Por ejemplo, la función de signo en matemáticas devuelve -1 si el argumento es menor que cero, devuelve +1 si el argumento es mayor que cero y devuelve cero si el argumento es cero. La siguiente declaración de C ++ implementa esta función:

```C
if (x < 0) 
   sign = -1; 
 else 
   if (x == 0) 
      sign = 0; 
   else 
      sign = 1; 
```

Esta es una sentencia if-else en la que la sentencia que sigue a else es una sentencia if-else. Si x es menor que cero, el signo se establece en -1, sin embargo, si no es menor que cero, se ejecuta la instrucción que sigue a else. En ese caso, si x es igual a cero, el signo se establece en cero y, de lo contrario, se establece en 1. Los programadores novatos a menudo usan una secuencia de instrucciones if en lugar de una instrucción if-else anidada. Es decir, escriben lo anterior en la forma lógicamente equivalente:

```C
if (x < 0) 
   sign = -1; 
 if (x == 0) 
   sign = 0; 
 if (x > 0) 
   sign = 1; 
```

Esta versión no se recomienda porque no deja claro que solo se ejecutará una de las sentencias de asignación para un valor dado de x. También es ineficiente ya que las tres condiciones siempre se prueban.

## Operadores de comparación

Nombre del operador | Uso | Resultado del operador ---------------------------- |: ---------: | --------- -------- Igual a | a == b | Verdadero si a es igual a b, falso de lo contrario No es igual a | a! = b | Verdadero si a no es igual a b, falso de lo contrario Mayor que | a> b | Verdadero si a es mayor que b, falso de lo contrario Mayor o igual a | a> = b | Verdadero si a es mayor o igual que b, falso de lo contrario Menos que | a <b | Verdadero si a es menor que b, falso de lo contrario Menor o igual que | a <= b | Verdadero si a es menor o igual que b, falso de lo contrario

Ese ejemplo también tiene una nueva palabra: `else` . El código dentro del bloque `else` solo se ejecuta si el código dentro del `if` no se ejecuta.

¡Hay mucho que podemos hacer con todos esos operadores! Considere lo siguiente, donde usaremos una sentencia if-else:

```C
#include <stdio.h> 
 
 int main(void) { 
    int n = 5; 
 
    if(n == 5) { 
        printf("n is equal to 5!\n"); 
    } 
    else if (n > 5) { 
        printf("n is greater than 5!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 n is equal to 5! 
```

La sentencia if-else tiene un 'else if' adjunto. Este código se ejecuta si la condición dentro de la anterior era falsa, pero agrega una condición dentro de su propio paréntesis que debe ser verdadera antes de que se ejecute el código.

## Operadores logicos

Por supuesto, podríamos querer que algo suceda si no es verdad, o si esto y algo más es verdad. Para eso, tenemos operadores lógicos:! para no, && para y, y || para o Echemos un vistazo a esto en acción:

```C
#include <stfio.h> 
 
 int main(void) { 
    int n = 5; 
    int m = 10; 
 
    if(n > m || n == 15) { 
        printf("Either n is greater than m, or n is equal to 15\n"); 
    } 
    else if( n == 5 && m == 10 ) { 
        printf("n is equal to 5 and m is equal to 10!\n"); 
    } 
    else if ( !(n == 6)) { 
        printf("It is not true that n is equal to 6!\n"); 
    } 
    else if (n > 5) { 
        printf("n is greater than 5!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 n is equal to 5 and m is equal to 10! 
```

Aquí está el primer conjunto de paréntesis: `n > m || n == 5` . Esto será cierto si n es mayor que m, o si n es igual a 5. n no es mayor que m, pero n es igual a 5. Debido a que una de estas cosas es cierta, y están unidas por una o, esto La declaración será verdadera y se imprimirá el código interno.

Debido a que el código anterior se ejecutó, no verificará las otras declaraciones, solo se verifican si las anteriores no se verifican. Sin embargo, solo por hacer ejercicio, considere lo que el resto del código estaría verificando. `n == 5 && m == 10` será verdadero si n es igual a 5 y m es igual a 10. Esto es cierto, pero si n era 6 ya no sería verdadero y el código dentro de esa otra cosa no se ejecutaría .

`!(n == 6)` utiliza paréntesis para que la operación sea más obvia. Al igual que en matemáticas, el paréntesis se puede usar para el orden de las operaciones: las cosas dentro del paréntesis se realizarán antes que las cosas que no están entre paréntesis. Entonces, en este caso, `n == 6` será evaluado, y es falso. El `!` , 'no', cambia esto de falso a verdadero, por lo que esta operación devuelve verdadero. Sin embargo, al igual que antes, no se ejecutará solo porque una de las afirmaciones anteriores fue cierta a la que se adjuntó esto ya se habría ejecutado.

Finalmente, ¿ `n > 5` evalúa a verdadero? La respuesta es no, porque n _es_ 5, y por lo tanto no es mayor que 5. Como resultado, este código no se evaluará como verdadero. Para hacer que esta evaluación sea verdadera, se debe utilizar el operador `>=` .

## Un detalle sobre las comparaciones de C

Anteriormente, leíste que las comparaciones están verificando si algo es verdadero o falso, pero en realidad eso es solo la mitad. Recuerde que C se trata de ser liviano y cercano al hardware, es fácil verificar si algo es 0 y cualquier otra cosa requiere más trabajo. Debido a esto, lo que realmente están haciendo las comparaciones es verificar si algo es falso, al cual se le asigna el valor de 0, o verificar si no es falso (cualquier otro valor).

Como resultado, esta sentencia if es verdadera y válida:

```C
if(12452) { 
    printf("This is true!\n") 
 } 
```

Por diseño, 0 es falso, y por convención, 1 es verdadero. De hecho, aquí hay un vistazo a la biblioteca `stdbool.h` descrita anteriormente:

```C
#define false   0 
 #define true    1 
```

En realidad, hay un poco más de eso, pero esta es la parte que hace todo el trabajo.

Estas dos líneas de código le dicen al compilador que la palabra 'falso' debe reemplazarse por '0', y la palabra 'verdadero' debe reemplazarse por '1'. `stdbool.h` también tiene alguna documentación e instrucciones de compilación que se tratarán más adelante, pero esas dos líneas son todo lo que hay.

# Consejos y trucos

Considere el siguiente código:

```C
#include <stdio.h> 
 
 int main() { 
    int i=3; 
 
    if(i=4) { 
      printf("This block is executed"); 
    } 
    else { 
      printf("NO! I am boss"); 
    } 
 } 
```

¿Cuál será la salida? "¡NO! Soy jefe"? Si estás adivinando esta salida, entonces estás equivocado. ¿Por qué pasó esto? porque en la sentencia if usaste el operador "=" en lugar del operador "==". "==" es comparador.

Se comparará entre dos variables pero "= 'es el operador de asignación cuando dijimos que i = 4, simplemente asignamos el valor 4 al entero i, y como en "C" cada valor NO CERO es verdadero, entonces si (i = 4) es una declaración verdadera y se ejecutarán las instrucciones conforme a esto

# Antes de continuar ...

## Una revisión

*   Las declaraciones 'if' verifican si la expresión es verdadera, luego ejecuta el código entre paréntesis.
*   'else' puede agregarse al final de 'if', y se ejecutará solo si la declaración if (s) anterior era falsa.
*   'else if' también se puede agregar al final de 'if', y se ejecutará solo si la declaración if (s) anterior era falsa.
*   Todo en una computadora está representado por números, por lo que cada comparación en C se puede hacer tratando valores como números, incluso verdaderos, falsos y caracteres.
*   Hay un montón de operadores de comparación:
*   \== es igual a
*   ! = no es igual a
*   \> es mayor que
*   <es menor que
*   \> = es menor o igual que
*   <= es menor o igual que
*   También tenemos algunos operadores lógicos, que nos permiten encadenar operaciones lógicas:
*   ! Se llama operador NO-Invierte el estado del operando
*   && se llama AND operator-Devuelve verdadero cuando ambas condiciones son verdaderas
*   || se llama OR operator-Devuelve verdadero cuando al menos una de las condiciones es verdadera