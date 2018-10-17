---
title: Functions
localeTitle: Funciones
---
# Funciones en c

A veces, tiene una porción de código que necesita usar una y otra vez, pero en diferentes momentos y lugares en su código. Podría copiarlo y pegarlo una y otra vez, pero esa no es una gran solución: su tamaño de archivo termina siendo más grande, su código es más difícil de depurar y su código es más difícil de leer. En su lugar, use una función: las funciones son como mini programas que existen dentro de su código. Puede pasar las variables a utilizar, y pueden devolver datos.

## Un ejemplo

Aquí hay un ejemplo simple de una función que divide dos números. No es muy útil ya que tenemos `/` , pero muestra las diferentes partes de una función.

```C
#include <stdio.h> 
 
 int divides(int a, int b) { 
    return a / b; 
 } 
 
 int main(void) { 
    int first = 5; 
    int second = 10; //MUST NOT BE ZERO; 
 
    int result = divides(first, second); 
 
    printf("first divided by second is %i\n", result); 
 
    return 0; 
 } 
```

Note que al igual que `main` , `divides` tiene un formato similar. Esto se debe a que `main` también es una función, es especial porque C primero la busca. `divides` también vienen antes que las `main` . Esto es importante porque las `main` llamadas se `divides` . Llamar a una función significa que se está utilizando su código. El código debe compilarse antes de que se use, y C compila línea por línea desde la parte superior, por lo que para poder llamar a una función, debe escribirse antes de que se llame como en este ejemplo. Si las `divides` vinieran después de la `main` , fallaría porque el compilador no sabe que las `divides` existen todavía. También puede usar un prototipo de función antes de main para permitirle hacer `divides` después de main. Un prototipo de función es idéntico a la función con las mismas variables y tipo de retorno, excepto que las llaves se omiten y se reemplazan por un punto y coma como:

```C
int divides(int a, int b); 
```

También tenga en cuenta que las `divides` y `main` no comparten corchetes y no están entre corchetes. Están destinados a estar separados, aunque uno llame al otro.

Con eso en mente, repasemos la primera línea de una función en nuestra siguiente sección, titulada:

## Desglosando la declaración de función.

```C
int divides(int a, int b) 
```

La declaración de función comienza con un tipo de datos, que en este caso es `int` . Cualquiera que sea el tipo de datos que desea que devuelva la función, debe colocar aquí. Puede hacer que la declaración sea de cualquier tipo de datos, o no puede ser un tipo de datos colocando aquí el `void` .

El siguiente es el nombre de la función. Cuando quieras llamar a la función, este es el nombre que usarás. Trate de que sea algo descriptivo, para que pueda identificar fácilmente lo que hace.

Después del nombre viene un par de paréntesis. En estos paréntesis van los parámetros de nuestra función, que son las variables que tomará y usará esta función cuando se ejecute el código. En este caso, hay dos. Ambos son el tipo de datos `int` , y se llamarán `a` y `b` . Idealmente, habría mejores nombres para usar aquí, pero encontrará que, para métodos simples y rápidos, a menudo se usan nombres de variables temporales.

Ahora echemos un vistazo a lo que hay dentro de los paréntesis:

```C
return a / b; 
```

Esto es bastante sencillo, porque es una función tan simple. `a` se divide por `b` , y ese valor se devuelve. Usted ha visto `return` antes en la función `main` , pero ahora, en lugar de finalizar nuestro programa, finaliza el método y le da el valor a lo que se llame.

Entonces, para resumir lo que hace esta función: obtiene dos enteros, los divide y los devuelve a lo que se llama.

### Parámetros de una función

Los parámetros se utilizan para pasar argumentos a la función. Son dos tipos de parámetros: El parámetro escrito en la definición de la función se denomina "parámetro formal". El parámetro escrito en la llamada de función se denomina "parámetro real". También se conocen como argumentos. Se pasan a la definición de la función y se crea una copia en forma de parámetros formales.

## Un ejemplo más complejo.

Esa era una función de una sola línea. Los verá cuando haya una operación bastante simple que deba realizarse una y otra vez, o una operación que termine siendo una línea larga. Al hacerlo una función, el código termina siendo más legible y manejable.

Dicho esto, la mayoría de las funciones no serán una sola línea de código. Veamos otro ejemplo, un poco más complejo que elige el mayor de los dos números.

```C
int choose_bigger_int(int a, int b) { 
    if(a > b) 
        return a; 
 
    if(b > a) 
        return b; 
 
    return a; 
 } 
```

Al igual que antes, la función devolverá un entero y tomará dos enteros. No hay nada nuevo que ver allí.

Este código comienza con una instrucción if que comprueba si `a` es mayor que `b` . En el caso de que lo sea, devolverá `a` . Si se hace esto, la función termina aquí; el resto del código no se evalúa. Sin embargo, si no se llega a esta declaración de devolución, se evaluará la siguiente instrucción if. Si es verdad, se devolverá `b` y la función termina aquí.

Con eso, las condiciones para un ser mayor que b, yb siendo mayor que a, se han tenido en cuenta. Sin embargo, si a es igual a b, la función aún no habrá devuelto nada. Por esa razón, devolvemos a (a es igual a b, por lo que también podemos devolver).

## Una palabra sobre 'alcance'

El alcance es una cosa a tener en cuenta. Se refiere a las áreas en su código donde una variable es accesible. Cuando pasa una variable a una función, la función obtiene su propia copia para usar. Esto significa que ajustar la variable en la función no la ajustará en ningún otro lugar. De manera similar, si no ha pasado una variable a una función, no la tiene y no puede usarla.

Es posible que haya observado un problema similar con cosas como las declaraciones if y cualquiera de los bucles. Si declara una variable entre paréntesis, no será accesible fuera de esos corchetes. Esto es cierto para las funciones de la misma manera, pero hay algunas maneras de evitarlo:

*   Haz una variable global declarándola fuera de cualquier función.
*   Esto hace que su código sea más desordenado y generalmente no se recomienda. Debe evitarse siempre que sea posible.
*   Usa punteros, que leerás sobre el siguiente
*   Esto puede hacer que su código sea más difícil de leer y depurar
*   Entra en tus funciones como se supone que debes
*   Esta es la mejor manera de hacerlo, si hacerlo es una opción.

Idealmente, siempre pasará a sus funciones como parámetros, pero es posible que no siempre pueda hacerlo. Escoger la mejor solución es tu trabajo como programador.

Recursion en c Cuando se llama a la función dentro de la misma función, se conoce como recursión en C. La función que llama a la misma función, se conoce como función recursiva.
```
int factorial (int n) 
 { 
    if ( n < 0) 
        return -1; /*Wrong value*/ 
    if (n == 0) 
        return 1; /*Terminating condition*/ 
    return (n * factorial (n -1)); 
 } 
```

# Antes de continuar ...

## Una revisión

*   Las funciones son buenas de usar porque hacen que su código sea más limpio y fácil de depurar.
*   Las funciones deben ser declaradas antes de ser llamadas.
*   Las funciones deben tener un tipo de datos para devolver, si no se devuelve nada, use `void` .
*   Las funciones toman parámetros con los que trabajar, si no toman nada, use `void` .
*   `return` finaliza la función y devuelve un valor. Puedes tener varias en una función, pero tan pronto como presionas una, la función termina allí.
*   Cuando pasa una variable a una función, tiene su propia copia para usar: cambiar algo en una función no lo hace fuera de la función.
*   Las variables declaradas dentro de una función solo son visibles dentro de esa función, a menos que se declaren estáticas.