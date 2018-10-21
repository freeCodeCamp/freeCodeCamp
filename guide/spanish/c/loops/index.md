---
title: Loops of all kinds
localeTitle: Bucles de todo tipo.
---
# Bucles de todo tipo en C

Los bucles son lo que usas cuando tienes un código que quieres hacer en bucle, lo que significa que después de que se ejecute, es posible que desees que se enrute al principio y se ejecute nuevamente. Hay algunos de estos en C.

## Mientras bucles

Los más simples del grupo son los bucles. Mientras que los bucles se ejecutarán, mientras que la condición dentro del paréntesis es verdadera. Deben usarse cuando quiera que algo suceda hasta que ocurra cierta condición.

### Sintaxis
```
while(condition) { 
   statement(s); 
 } 
```

Aquí hay un ejemplo:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_number = 0; 
 
    while(my_number != 10){ 
        ++my_number; 
    } 
 
    printf("my_number = %i", my_number); 
 
    return 0; 
 } 
```

Mientras que la declaración dentro del bucle while es verdadera, el contenido entre corchetes se ejecutará. Cuando el programa llega al `while(my_number)` , verifica la declaración dentro del paréntesis. Si esa declaración es falsa, no ejecutará el bucle while. En su lugar, saltará el código entre los dos corchetes y continuará donde lo dejó.

Si la declaración es verdadera, se ejecutará el código entre corchetes. Una vez que el código entre corchetes se haya ejecutado, la declaración entre paréntesis se verificará nuevamente. Al igual que antes, si la declaración es verdadera, el código se ejecutará, si es falsa, el código se omitirá.

Algo con lo que te puedes encontrar al jugar con este o cualquier otro bucle es la idea de un bucle infinito, un bucle que se ejecutará una cantidad infinita de veces porque no hay nada que lo detenga. A veces esto puede suceder a propósito:

```C
while(1) { 
    printf("This will get printed forever unless the program is stopped!"); 
 } 
```

Por supuesto, también puede suceder accidentalmente. Aquí está el mismo código que antes, pero con una sutil diferencia que lo convierte en un bucle infinito:

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_number = 11; 
 
    while(my_number != 10){ 
        ++my_number; 
    } 
 
    printf("my_number = %i", my_number); 
 
    return 0; 
 } 
```

Cuando se evalúa este bucle while, `my_number` se comprobará para ver si no es 10. No es, porque se ha inicializado a las 11, por lo que el código dentro del bucle while se ejecutará y `my_number` habrá 12. 12 no lo hace igual a 10, por lo que el código dentro del bucle while se ejecutará y `my_number` será 13. Esto continuará ejecutándose para siempre porque esta condición nunca se volverá falsa; la única forma de detenerlo es forzar al programa a que deje de ejecutarse. Este es un ejemplo de un bucle infinito, porque si se deja solo, se ejecutará una cantidad infinita de veces.

## Bucles de hacer mientras

Los bucles Do-while son una versión menos utilizada de un bucle while. Mientras que los bucles comienzan con una evaluación, entonces si esa evaluación es falsa, el código entre corchetes no se ejecutará. Sin embargo, con un bucle do-while, el código entre corchetes se ejecuta una vez, luego se realiza la evaluación para ver si se debe ejecutar nuevamente.

### Sintaxis
```
do { 
   statement(s); 
 } while( condition ); 
```

Aquí hay un vistazo a eso:

```C
#include <stdio.h> 
 
 int main(void){ 
    int a = 0; 
 
    do { 
        a++ 
    } while(a == -123); 
 
    printf("%i\n", a); 
 
    return 0; 
 } 
```

Si se tratara de un bucle while, el código entre corchetes nunca se ejecutaría porque esta condición no es verdadera cuando se realiza la evaluación. Sin embargo, debido a que este es un bucle do-while, el código se realizará una vez, y luego se realizará la evaluación para ver si se debe hacer de nuevo. Los bucles Do-while son útiles para cuando sabes que quieres que se haga algo una vez, pero es posible que necesites que se ejecute más veces después de eso.

## Para bucles

Los bucles son para cuando queremos que algo se ejecute un número determinado de veces.

### Sintaxis
```
for(initialisation; condition; changer) 
 { 
   statement(s); 
 } 
```

Aquí hay un ejemplo de eso:

```C
#include <stdio.h> 
 
 int main(void) { 
    int a = 4; 
    int b = 2; 
    int result = 0; 
 
    for(int count = 0; count != b; count++) { 
        result = result + a; 
    } 
 
    printf("a times b is %i\n", result); 
 
    return 0; 
 } 
```

La multiplicación es solo una suma repetida, por lo que esto se hace una suma en `a` , `b` veces. Vamos a una toma un vistazo a la `for` bits en particular:

```C
for(int count = 0; count != b; count++) 
```

A diferencia del bucle for, hay tres cosas en nuestro paréntesis que están separadas por punto y coma. La primera sección es para la inicialización, y se conoce como 'inicialización': le permite crear una nueva variable y establecer un valor, o establecer una variable existente en un valor diferente, o no puede establecer nada y simplemente poner una punto y coma hacia abajo.

La siguiente sección es una condición booleana que se verificará como verdadera o falsa, al igual que nuestro bucle while. Se le conoce como 'condición', porque es la condición que se verificará antes de iniciar un ciclo.

La sección final se conoce como el 'incremento / decremento'. Su trabajo es realizar alguna operación en cada bucle, generalmente sumando o restando de la variable inicial, una vez que el código entre corchetes se ha ejecutado. En este caso, solo está agregando uno al conteo. Esta es la forma más común de usar el incremento, porque te permite contar cuántas veces has corrido a través de un bucle for.

### Comparación de sintaxis
```
main() 
 { 
  int i = 1; 
  while(i<=5) 
  { 
     printf(“While”); 
     i++; 
   } 
  getch(); 
 } 
 
 
 main() 
 { 
  int i = 1; 
  do 
  { 
     printf(“do-while”); 
     i++; 
   } while(i<=5); 
  getch(); 
 
 } 
 
 
 main() 
 { 
  int i 
  for(i=1;i<=5;i++) 
  { 
     printf(“for”); 
   } 
  getch(); 
 } 
```

# Declaraciones de control de bucle

Las instrucciones de control de bucle cambian la ejecución de su secuencia normal. Cuando la ejecución deja un ámbito, se destruyen todos los objetos automáticos que se crearon en ese ámbito.

C admite las siguientes instrucciones de control:

#### 1\. declaración de ruptura

Termina el **bucle** o la instrucción **switch** y transfiere la ejecución a la instrucción inmediatamente después del bucle o switch.

#### 2\. Continuar declaración

Hace que el bucle omita el resto de su cuerpo e inmediatamente vuelva a probar su condición antes de reiterarlo.

#### 3\. Goto declaración

Transfiere el control a la declaración etiquetada.

# Algunas bromas divertidas y útiles

## Bucle infinito con para bucles

Tómese un momento para considerar lo que hará este código:

```C
for(;;){ 
    printf("hello, world! \n"); 
 } 
 
 while("Free Code Camp"){ 
    printf("hello, world! \n"); 
 } 
```

No hay nada en la sección de inicialización, así que nada se ha inicializado. Eso está bien, y eso se hace a veces porque no siempre quieres o necesitas inicializar nada.

La siguiente es la condición, que está en blanco. Eso es un poco extraño. Esto significa que no se probará ninguna condición, por lo que nunca será falsa, por lo que se ejecutará a través del bucle, realizará el pensamiento posterior (que es no hacer nada) y luego verifica la condición nuevamente, lo que hará que se ejecute nuevamente. Como probablemente te hayas dado cuenta, este es un bucle infinito. Como resultado, esto es realmente útil. Al crear la realización de un bucle infinito, el método de hacer `while(1)` es perfectamente legítimo, pero realiza una comparación cada vez. `for(;;)` , por otro lado, no lo hace. Por esa razón, `for(;;)` tiene un uso legítimo, ya que es un pelo más eficiente que otros métodos de bucle infinito. Afortunadamente, muchos compiladores se encargarán de esto por usted.

El bucle en el segundo código while ("Campo de código libre") también se ejecutará infinitamente. La razón es que C considera que cualquier valor distinto de cero es verdadero y, por lo tanto, ejecutará el bucle infinitamente.

## No usar soportes

A lo largo de esta página, ha leído que el código 'entre paréntesis' es lo que se ejecuta, y eso es cierto en su mayoría. Sin embargo, ¿qué pasa si no hay corchetes?

```C
while(true) 
    printf("hello, world! \n"); 
```

En casos como este, C tratará la siguiente línea como el único contenido que se debe enlazar. C ignora los espacios en blanco, por lo que la sangría está ahí para mayor claridad. Solo esa línea se tratará como si estuviera en el bucle, y esta es una propiedad que si las declaraciones, los bucles y los bucles compartidos comparten. Debido a que el espacio en blanco se ignora, la ubicación no importa: podría estar en la misma línea, la siguiente línea, o 300 líneas y dos espacios hacia abajo siempre que no haya otras líneas de código en el medio. Esta función puede hacer que su código se vea un poco más limpio cuando solo tiene una línea de código para ejecutar en una declaración.

## Punto y coma en lugar de corchetes

Si no hay corchetes, el compilador solo mirará la siguiente línea y tendrá el contenido del bucle. Los puntos y coma le dicen al compilador que una línea ha terminado. Con estas cosas combinadas, podemos hacer que C espere hasta que algo se convierta en realidad. Digamos que tenemos un método llamado `is_button_pressed` que devuelve falso si no se presiona un botón, y verdadero si se presiona un botón:

```C
while(!is_button_pressed()); 
```

No pasa nada en este bucle, porque la única línea que verá es un punto y coma. Como resultado, se `is_button_pressed` método `is_button_pressed` y se evaluará su valor de retorno. Si no se presiona el botón y el valor de retorno es falso, el botón `!` lo volteará a verdadero para que la función se ejecute de nuevo y se evalúe nuevamente. Si el valor de retorno es verdadero, el `!` lo volteará a falso y se saldrá del bucle while.

Esto tiene el efecto de poner una pausa en su código. En este caso, el código llegó al bucle while y no fue más allá. En su lugar, siguió revisando el estado del botón para cambiar. Esto sería útil cuando no desea que ocurra nada hasta que se cumpla una determinada condición.

# Antes de continuar ...

## Una revisión

*   Los bucles permiten que su código se ejecute más de una vez, cuando se cumplen ciertas condiciones.
*   Hay un par de bucles disponibles para nosotros en C:
*   Mientras que los bucles, que nos permiten ejecutar código mientras una condición es verdadera
*   Do-while bucles, que ejecutan el código y luego continúan ejecutándolo si una condición es verdadera
*   Para los bucles, que ejecutan código mientras una condición es verdadera y nos permiten realizar una operación en cada bucle.

## Usando bucles para diseñar patrones.

#### Ejemplo 1: Programa para imprimir media pirámide usando \*
```
* 
 * * 
 * * * 
 * * * * 
 * * * * * 
```

**Código fuente**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("* "); 
        } 
        printf("\n"); 
    } 
    return 0; 
 } 
```

#### Ejemplo 2: Programa para imprimir media pirámide a usando números
```
1 
 1 2 
 1 2 3 
 1 2 3 4 
 1 2 3 4 5 
```

**Código fuente**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("%d ",j); 
        } 
        printf("\n"); 
    } 
    return 0; 
 } 
```

#### Ejemplo 3: Programa para imprimir media pirámide usando alfabetos
```
A 
 BB 
 CCC 
 DDDD 
 EEEEE 
```

**Código fuente**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j; 
    char input, alphabet = 'A'; 
 
    printf("Enter the uppercase character you want to print in last row: "); 
    scanf("%c",&input); 
 
    for(i=1; i <= (input-'A'+1); ++i) 
    { 
        for(j=1;j<=i;++j) 
        { 
            printf("%c", alphabet); 
        } 
        ++alphabet; 
 
        printf("\n"); 
    } 
    return 0; 
 } 
```

Programas para imprimir media pirámide invertida usando \* y números.

#### Ejemplo 4: Media pirámide invertida usando \*
```
* * * * * 
 * * * * 
 * * * 
 * * 
 * 
```

**Código fuente**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=rows; i>=1; --i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("* "); 
        } 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Ejemplo 5: media pirámide invertida usando números
```
1 2 3 4 5 
 1 2 3 4 
 1 2 3 
 1 2 
 1 
```

**Código fuente**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=rows; i>=1; --i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("%d ",j); 
        } 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Ejemplo 6: Programa para imprimir pirámide completa usando \*
```
        * 
      * * * 
    * * * * * 
  * * * * * * * 
 * * * * * * * * * 
```

**Código fuente**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, space, rows, k=0; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i, k=0) 
    { 
        for(space=1; space<=rows-i; ++space) 
        { 
            printf("  "); 
        } 
 
        while(k != 2*i-1) 
        { 
            printf("* "); 
            ++k; 
        } 
 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Ejemplo 7: Programa para imprimir pirámide usando números
```
        1 
      2 3 2 
    3 4 5 4 3 
  4 5 6 7 6 5 4 
 5 6 7 8 9 8 7 6 5 
```

**Código fuente**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, space, rows, k=0, count = 0, count1 = 0; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i) 
    { 
        for(space=1; space <= rows-i; ++space) 
        { 
            printf("  "); 
            ++count; 
        } 
 
        while(k != 2*i-1) 
        { 
            if (count <= rows-1) 
            { 
                printf("%d ", i+k); 
                ++count; 
            } 
            else 
            { 
                ++count1; 
                printf("%d ", (i+k-2*count1)); 
            } 
            ++k; 
        } 
        count1 = count = k = 0; 
 
        printf("\n"); 
    } 
    return 0; 
 } 
```

#### Ejemplo 8: pirámide completa invertida usando \*
```
* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * * 
        * 
```

**Código fuente**

```c
#include<stdio.h> 
 
 int main() 
 { 
    int rows, i, j, space; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=rows; i>=1; --i) 
    { 
        for(space=0; space < rows-i; ++space) 
            printf("  "); 
 
        for(j=i; j <= 2*i-1; ++j) 
            printf("* "); 
 
        for(j=0; j < i-1; ++j) 
            printf("* "); 
 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Ejemplo 9: Imprimir el triángulo de Pascal
```
           1 
         1   1 
       1   2   1 
     1   3   3    1 
   1  4    6   4   1 
 1  5   10   10  5   1 
```

**Código fuente**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int rows, coef = 1, space, i, j; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=0; i<rows; i++) 
    { 
        for(space=1; space <= rows-i; space++) 
            printf("  "); 
 
        for(j=0; j <= i; j++) 
        { 
            if (j==0 || i==0) 
                coef = 1; 
            else 
                coef = coef*(i-j+1)/j; 
 
            printf("%4d", coef); 
        } 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### Ejemplo 10: Imprime el Triángulo de Floyd.
```
1 
 2 3 
 4 5 6 
 7 8 9 10 
```

**Código fuente**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int rows, i, j, number= 1; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i <= rows; i++) 
    { 
        for(j=1; j <= i; ++j) 
        { 
            printf("%d ", number); 
            ++number; 
        } 
 
        printf("\n"); 
    } 
 
    return 0; 
 } 

```