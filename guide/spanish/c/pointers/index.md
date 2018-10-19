---
title: Pointers
localeTitle: Punteros
---
# Punteros en c

A estas alturas, debe tener en cuenta que C es un lenguaje de bajo nivel, y nada lo demuestra mejor que los punteros. Los punteros son variables que obtienen el valor de la variable "apuntando" a una ubicación de memoria en lugar de almacenar el valor de la variable en sí. Esto permite algunos trucos útiles, y es también lo que nos da acceso a arreglos y manejo de archivos, entre otras cosas.

#
```
type *var-name; 
```

## Hacer y usar un puntero

```c
#include <stdio.h> 
 
 int main(void){ 
    double my_double_variable = 10.1; 
    double *my_pointer; 
 
    my_pointer = &my_double_variable; 
 
    printf("value of my_double_variable: %f\n", my_double_variable); 
 
    ++my_double_variable; 
 
    printf("value of my_pointer: %f\n", *my_pointer); 
 
    return 0; 
 } 
```

Salida:
```
value of my_double_variable: 10.100000 
 value of my_pointer: 11.100000 
```

En este código, hay dos declaraciones. El primero es una inicialización de variable típica que crea un `double` y lo establece en 10.1. Nuevo en nuestras declaraciones es el uso de `*` . El asterisco ( `*` ) se usa generalmente para la multiplicación, pero cuando lo usamos al colocarlo delante de una variable, le dice a C que esta es una variable de puntero.

La siguiente línea le dice al compilador dónde está ese otro lugar en realidad. Al usar `&` de esta manera, se convierte en el 'operador de desreferenciación', y devuelve la ubicación de memoria de la variable que está mirando.

Con eso en mente, echemos otro vistazo a este fragmento de código:

```c
double *my_pointer; 
 // my_pointer now stored the address of my_double_variable 
 my_pointer = &my_double_variable; 
```

`my_pointer` se ha declarado y se ha declarado como un puntero. El compilador de C ahora sabe que `my_pointer` va a apuntar a una ubicación de memoria. La siguiente línea asigna a `my_pointer` un valor de ubicación de memoria usando el `&` .

Ahora veamos qué significa para su código referirse a una ubicación de memoria:

```c
    printf("value of my_double_variable: %f\n", my_double_variable); 
 
    // Same as my_double_variable = my_double_variable + 1 
    // In human language, adding one to my_double_variable 
    ++my_double_variable; 
 
    printf("value of my_pointer: %f\n", *my_pointer); 
```

Tenga en cuenta que para obtener el valor de los datos en `*my_pointer` , deberá indicar a C que desea obtener el valor al que apunta la variable. Intente ejecutar este código sin ese asterisco, y podrá imprimir la ubicación de la memoria, porque eso es lo que realmente mantiene la variable `my_variable` .

Puede declarar varios punteros en una sola declaración como con variables estándar, de esta manera:

```c
int *x, *y; 
```

Observe que se requiere el `*` antes de cada variable. Esto se debe a que ser un puntero se considera como parte de la variable y no como parte del tipo de datos.

## Usos prácticos de los punteros

### Arrays

La aplicación más común de un puntero está en una matriz. Las matrices, de las que leerás más adelante, permiten un grupo de variables. En realidad, no tienes que lidiar con `*` y `&` para usar arreglos, pero eso es lo que están haciendo detrás de escena.

### Funciones

A veces desea ajustar el valor de una variable dentro de una función, pero si simplemente pasa el valor por valor de su variable, la función funcionará con una copia de su variable en lugar de la propia variable. Si, en cambio, pasa el puntero que apunta a la ubicación de memoria de la variable, puede acceder y modificarla desde fuera de su alcance normal. Esto se debe a que está tocando la ubicación de la memoria original, lo que le permite ajustar algo en una función y hacer que se realicen cambios en otros lugares. En contraste con "llamada por valor", esto se llama "llamada por referencia".

El siguiente programa intercambia los valores de dos variables dentro de la función de `swap` dedicado. Para lograrlo, las variables se pasan por referencia.

```c
 /* C Program to swap two numbers using pointers and function. */ 
 #include <stdio.h> 
 void swap(int *n1, int *n2); 
 
 int main() 
 { 
    int num1 = 5, num2 = 10; 
 
    // address of num1 and num2 is passed to the swap function 
    swap( &num1, &num2); 
    printf("Number1 = %d\n", num1); 
    printf("Number2 = %d", num2); 
    return 0; 
 } 
 
 void swap(int * n1, int * n2) 
 { 
    // pointer n1 and n2 points to the address of num1 and num2 respectively 
    int temp; 
    temp = *n1; 
    *n1 = *n2; 
    *n2 = temp; 
 } 
```

Salida
```
Number1 = 10 
 Number2 = 5 
```

Las direcciones, o ubicaciones de memoria, de `num1` y `num2` se pasan al `swap` funciones y se representan mediante los punteros `*n1` y `*n2` dentro de la función. Entonces, ahora los punteros `n1` y `n2` apuntan a las direcciones de `num1` y `num2` respectivamente.

Entonces, ahora el puntero n1 y n2 apunta a la dirección de num1 y num2 respectivamente.

Cuando se cambia el valor de los punteros, el valor en la ubicación de memoria señalada también cambia de manera correspondiente.

Por lo tanto, los cambios realizados en \* n1 y \* n2 se reflejan en num1 y num2 en la función principal.

### PUNTOS COMO PARÁMETROS DE FUNCIÓN

cuando pasamos cualquier parámetro a la función estamos haciendo una copia del parámetro. veamos con el ejemplo

```C
#include <stdio.h> 
 
 void func(int); 
 
 int main(void) { 
    int a = 11; 
    func(a); 
    printf("%d",a);// print 11 
 
 
    return 0; 
 } 
 void func(int a){ 
 a=5 
 printf("%d",a);//print 5 
 } 
```

En el ejemplo anterior, estamos cambiando el valor del entero a en función func, pero aún obtenemos 11 en la función principal. Esto sucede porque en la función la copia del entero a ha pasado como parámetro, por lo que en esta función no tenemos acceso a la 'a' que está en la función principal.

Entonces, ¿cómo podría cambiar el valor del entero definido en main usando otra función? Aquí entra en juego POINTERS. cuando suministramos el puntero como parámetro, tenemos acceso a la dirección de ese parámetro y podríamos hacerlo con cualquier parámetro y el resultado se mostrará en todas partes. A continuación se muestra un ejemplo que hace exactamente lo mismo que queremos ...

Al eliminar la referencia a `n1` y `n2` , ahora podemos modificar la memoria a la que apuntan `n1` y `n2` . Esto nos permite cambiar el valor de las dos variables `num1` y `num2` declaradas en la función `main` fuera de su alcance normal. Una vez que se realiza la función, las dos variables ahora han intercambiado sus valores, como se puede ver en la salida.

### Trucos con ubicaciones de memoria

Siempre que se pueda evitar, es una buena idea mantener el código fácil de leer y entender. En el mejor de los casos, su código contará una historia; será fácil leer los nombres de las variables y tendrá sentido si lo lee en voz alta, y usará el comentario ocasional para aclarar lo que hace una línea de código.

Debido a eso, debes tener cuidado al usar punteros. Es fácil hacer algo confuso para que usted pueda depurar o para que alguien más lo lea. Sin embargo, es posible hacer algunas cosas bonitas con ellos.

Eche un vistazo a este código, que cambia algo de mayúsculas a minúsculas:

```c
#include <stdio.h> 
 #include <ctype.h> 
 
 char *lowerCase (char *string) { 
    char *p = string; 
    while (*p) { 
        if (isupper(*p)) *p = tolower(*p); 
        p++; 
    } 
    return string; 
 } 
```

Esto comienza tomando una cadena (algo sobre lo que aprenderá cuando ingrese a los arreglos) y se ejecuta en cada ubicación. Note el p ++. Esto incrementa el puntero, lo que significa que está mirando la siguiente ubicación de memoria. Cada letra es una ubicación de memoria, por lo tanto, el puntero está mirando cada letra y decidiendo qué hacer para cada una.

### Const Qualifer

El calificador const se puede aplicar a la declaración de cualquier variable para especificar que su valor no se modificará (lo que depende del lugar donde se almacenan las variables const, podemos cambiar el valor de la variable const usando el puntero).

# Puntero a variable

Podemos cambiar el valor de ptr y también podemos cambiar el valor del objeto ptr que apunta. El siguiente fragmento de código explica el puntero a la variable

```c
#include <stdio.h> 
 int main(void) 
 { 
    int i = 10; 
    int j = 20; 
    int *ptr = &i;        /* pointer to integer */ 
    printf("*ptr: %d\n", *ptr); 
 
    /* pointer is pointing to another variable */ 
    ptr = &j; 
    printf("*ptr: %d\n", *ptr); 
 
    /* we can change value stored by pointer */ 
    *ptr = 100; 
    printf("*ptr: %d\n", *ptr); 
 
    return 0; 
 } 
```

# Puntero a constante

Podemos cambiar el puntero para que apunte a cualquier otra variable entera, pero no podemos cambiar el valor del objeto (entidad) apuntado usando el puntero ptr.

```c
#include <stdio.h> 
 int main(void) 
 { 
    int i = 10; 
    int j = 20; 
    const int *ptr = &i;    /* ptr is pointer to constant */ 
 
    printf("ptr: %d\n", *ptr); 
    *ptr = 100;        /* error: object pointed cannot be modified 
                     using the pointer ptr */ 
 
    ptr = &j;          /* valid */ 
    printf("ptr: %d\n", *ptr); 
 
    return 0; 
 } 
```

# Puntero constante a variable

En esto podemos cambiar el valor de la variable a la que apunta el puntero. Pero no podemos cambiar el puntero para apuntar a otra variable

```c
#include <stdio.h> 
 int main(void) 
 { 
   int i = 10; 
   int j = 20; 
   int *const ptr = &i;    /* constant pointer to integer */ 
 
   printf("ptr: %d\n", *ptr); 
 
   *ptr = 100;    /* valid */ 
   printf("ptr: %d\n", *ptr); 
 
   ptr = &j;        /* error */ 
   return 0; 
 } 
```

# puntero constante a constante

La declaración anterior es un puntero constante a una variable constante, lo que significa que no podemos cambiar el valor del puntero apuntado, y tampoco podemos apuntar el puntero a otra variable.

```c
#include <stdio.h> 
 
 int main(void) 
 { 
    int i = 10; 
    int j = 20; 
    const int *const ptr = &i; /* constant pointer to constant integer */ 
 
    printf("ptr: %d\n", *ptr); 
 
    ptr = &j;            /* error */ 
    *ptr = 100;        /* error */ 
 
    return 0; 
 } 
```

# Antes de continuar ...

## Una revisión

*   Los punteros son variables, pero en lugar de almacenar un valor, almacenan una ubicación de memoria.
*   `*` y `&` se utilizan para acceder a valores en ubicaciones de memoria y para acceder a ubicaciones de memoria, respectivamente.
*   Los punteros son útiles para algunas de las características subyacentes de C.

# Pointer vs Array en C

La mayoría de las veces, los accesos de punteros y matrices pueden tratarse como si fueran los mismos, con las principales excepciones:

1) el operador sizeof

*   `sizeof(array)` devuelve la cantidad de memoria utilizada por todos los elementos en array
*   `sizeof(pointer)` solo devuelve la cantidad de memoria utilizada por la propia variable de puntero

2) el operador &

*   & array es un alias para & array \[0\] y devuelve la dirección del primer elemento en array
*   & puntero devuelve la dirección del puntero

3) una cadena de inicialización literal de una matriz de caracteres

*   `char array[] = “abc”` establece los primeros cuatro elementos de la matriz en 'a', 'b', 'c' y '\\ 0'
*   `char *pointer = “abc”` establece el puntero a la dirección de la cadena "abc" (que se puede almacenar en la memoria de solo lectura y, por lo tanto, no se puede cambiar)

4) A la variable de puntero se le puede asignar un valor, mientras que la variable de matriz no se puede asignar.

```c
    int a[10]; 
    int *p; 
    p = a; /*legal*/ 
    a = p; /*illegal*/ 
```

5) Aritmética en la variable puntero está permitida.

```c
    p++; /*Legal*/ 
    a++; /*illegal*/ 

```