---
title: Arrays
localeTitle: Arrays
---
# Arreglos en C

## Problemas

Antes de intentar explicar qué son las matrices, veamos el código donde queremos imprimir los 10 números dados por el usuario en orden inverso.

```C
#include <stdio.h> 
 int main(void) { 
    int a, b, c, d, e, f, g, i, j, k; 
    scanf("%d", &a); 
    scanf("%d", &b); 
    ... 
    printf("%d", k); 
    printf("%d", j); 
    printf("%d", i); 
    ... //and so on.. 
 
    return 0; 
 } 
```

Por lo tanto, esto parece un poco tedioso. Hasta ahora cada variable creada tenía algún papel especial. Pero en este momento, sería fantástico si pudiéramos almacenar varios valores en un solo lugar y tener acceso a los valores con su lugar en la línea (primer valor, segundo, etc.). Otra forma de ver esto es, suponga que desea almacenar un conjunto de nombres, no necesita crear diferentes variables para cada nombre, en su lugar, puede crear una matriz de nombres donde cada nombre tiene su identidad o _índice_ únicos. Además, podríamos usar bucles en ellos, que son cosas que aprenderá más adelante, pero básicamente hacen lo mismo una y otra vez. p.ej. Lectura del usuario, o impresión de valores.

## Arreglos en C

Las matrices son contenedores con un tamaño dado. Contienen variables del **mismo tipo** . Puede acceder a una variable almacenada en la matriz con su _índice_ . Veamos algunos códigos:

```C
#include <stdio.h> 
 int main(void) { 
    int arr[4] = {1, 2, 3, 88}; 
    int brr[] = {78, 65}; 
    int crr[100] = {3}; 
 
    int var = arr[0]; 
 
    return 0; 
 } 
```

Y ahora vamos a romper la sintaxis un poco:

```C
int arr[4] = {1, 2, 3, 88}; 
```

Aquí ha creado una `array` de `ints` (enteros), llamada `arr` . Esta matriz tiene 4 elementos: `1` , `2` , `3` , `88` . Tenga en cuenta la sintaxis!

```C
datatype name[number of elements] 
```

El primer elemento de esta matriz es `1` , el segundo es `2` etc.

```C
int brr[] = {78, 65}; 
```

No tienes que decir la dimensión de antemano. Aquí se creará una matriz de dos con los elementos entre las llaves.

```C
int crr[100] = {3}; 
```

Si haces esto, entonces el primer elemento será `3` , pero el resto de ellos será `0` .

```C
int var = arr[0]; 
```

Aquí se crea un int llamado `var` , y se inicializa en el elemento 0 de arr. **Es muy importante observar** que en C, los índices comienzan en cero en lugar de 1. Esto significa que para acceder al primer elemento, el índice (entre paréntesis) es 0, para acceder al segundo elemento, el índice es 1, etc. En este ejemplo, `var` va a almacenar el valor `1` .

## Visión de conjunto

*   Una matriz unidimensional es como una lista; Una matriz bidimensional es como una tabla; El lenguaje C no limita el número de dimensiones en una matriz, aunque pueden implementaciones específicas.
    
*   Algunos textos se refieren a matrices unidimensionales como vectores, matrices bidimensionales como matrices, y usan el término general matrices cuando el número de dimensiones no está especificado o no es importante.
    

## Arreglos multidimensionales en C

C también soporta matrices multidimensionales.

```C
datatype name[size1][size2]...[sizeN] 
```

Los arreglos bidimensionales son comunes y pueden inicializarse usando la siguiente sintaxis. Lógicamente, uno puede pensar en el primer índice como filas y el segundo índice como columnas. Este ejemplo tiene 2 filas y 5 columnas.

```C
int arr[2][5] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
```

Puede ser difícil visualizar una matriz bidimensional usando la sintaxis anterior, por lo que los desarrolladores a menudo usan corchetes anidados opcionales para aclarar la estructura de la matriz. Esta es también una forma válida de inicializar una matriz bidimensional.

```C
int arr[2][5] = { 
    {0, 1, 2, 3, 4}, 
    {5, 6, 7, 8, 9} 
 }; 
```

Se pueden utilizar dos bucles anidados para imprimir el contenido de una matriz bidimensional en formato tabular.

```C
#include <stdio.h> 
 
 
 int main() { 
    const int rows = 2, cols = 5; 
 
    int arr[rows][cols] = { 
            {0, 1, 2, 3, 4}, 
            {5, 6, 7, 8, 9} 
    }; 
 
    for (int row = 0; row < rows; row++) { 
        for (int col = 0; col < cols; col++) { 
            printf("%5d", arr[row][col]); 
        } 
        puts(""); 
    } 
 
    return 0; 
 } 
```

```C
    0    1    2    3    4 
    5    6    7    8    9 
```

## Instrumentos de cuerda

Para almacenar cadenas / múltiples caracteres, usamos `char arrays` en C, porque el idioma no tiene un tipo especial incorporado. Una cosa a tener en cuenta es que se agrega automáticamente una terminación nula al final, lo que indica que es el final de la cuerda. Sin embargo, también puede inicializar una cadena con llaves `{}` también, pero debe agregar manualmente el nulo de terminación.

Al igual que:

```C
char string[6] = "Hello"; //here you get Hello\0, which is why we need an array with the length of 6 
```

Al igual que con las matrices int en el ejemplo anterior, hay varias formas de asignar valores a las matrices char:

```C
char string[] = "I do not want to count the chars in this."; 
 char string2[] = {'C','h','a','r',' ','b','y',' ','c','h','a','r','\0'}; 
 char string3[] = "This is a string" 
                 "with two lines"; 
```

Equivalente al enfoque anterior, también puede crear un puntero a una matriz de caracteres:

```C
char* string = "I do not want to count the chars in this."; 
```

## Errores típicos, consejos.

*   Cuando tiene una matriz llena de valores y desea crear otra matriz que sea exactamente igual a la primera, nunca haga esto:

```C
double first[] = {2,3,7}; 
 double second[] = first; 
 //Or this: 
 double a[5], b[5] 
 a = b; 
```

**Sólo se** puede hacer frente a los valores de una matriz de uno en uno. No **puede asignar todos a la vez** , cuando sepa más tarde sobre los punteros, las razones serán claras.

> (Básicamente, el primer elemento de una matriz apunta a una dirección de memoria, y los elementos después de eso son las "casas" al lado de esa primera. Así que técnicamente una matriz es solo la dirección de memoria de su primer elemento. Cuando desee asignar la segunda la primera matriz, se produce un error debido a los diferentes tipos, o está intentando cambiar la segunda dirección de memoria del primer elemento de la segunda matriz.)

*   Cuando desee crear una matriz, debe indicar su tamaño o asignarle valores. No hagas esto:

```C
int arr[]; 
```

La computadora debe saber qué tan grande es el almacenamiento que se debe crear para la matriz. Más adelante, aprenderá cómo crear contenedores cuyo tamaño se define más adelante. (Nuevamente, punteros.)

*   Cuando indexas fuera de la matriz, el compilador no siempre te va a dar un error. Esto se denomina comportamiento indefinido, simplemente no sabemos qué va a pasar. Podría hacer que tu programa se bloquee, simplemente ralentizando, cualquier cosa.

```C
int test[6]; 
 int a = test[-2]; 
 int b = test[89]; 
```

La razón por la que C no verifica el límite de indexación es simple: C es un lenguaje eficiente. Fue creado, por lo que su programa es el más rápido: se comunica bien con el hardware, etc. Un código C bien escrito no contiene errores de indexación, ¿por qué C querría verificarlo mientras se ejecuta?

*   Cuando intentas acceder al último elemento de la matriz. Supongamos que la longitud de la matriz A sea 4 y al acceder al último elemento como A \[4\] devolverá un error, ya que la indexación comienza desde 0.