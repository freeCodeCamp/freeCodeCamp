---
title: Basic Math
localeTitle: Matemáticas básicas
---
# Matemáticas en C

C proporciona muchas opciones para hacer matemáticas. Comenzaremos con algunos de los más comunes primero.

## Las cosas basicas

Los siguientes ejemplos no son un código completo, son solo ejemplos de cómo se ve un fragmento de código. Recuerde que en C, tendremos que tener todo declarado antes de que lo estemos usando, el `result` , `a` y `b` deberán haberse inicializado y establecido en un valor. Ya sea `int` , `double` o lo que sea importante para evitar errores y pérdida de información, lo veremos más adelante.

#### Adición: `+`

La adición se realiza con un `+` , así:

```C
result = a + b; 
```

En el ejemplo anterior, el `result` variable será igual a a + b.

#### Resta: `-`

La substracción se realiza con un `-` , así:

```C
result = a - b; 
```

En el ejemplo anterior, el `result` variable será igual a a - b.

#### Multiplicación: `*`

La multiplicación se realiza con un `*` , así:

```C
result = a * b; 
```

En el ejemplo anterior, el `result` variable será igual a multiplicado por b.

#### División: `/`

La división se realiza con una `/` , así:

```C
result = a / b; 
```

En el ejemplo anterior, el `result` variable será igual a dividido por b. Sin embargo, esto no siempre es una fracción de a sobre b. Cuando se trata de números enteros, las cosas se vuelven un poco diferentes, más adelante.

# Las cosas no tan básicas

## Módulo: '%'

Bien, ahora las cosas empiezan a ponerse un poco raras.

Módulo le permite encontrar el resto en la división. Recuerda que con los enteros no podemos tener un decimal. La división se trata de encontrar cuántas veces un número encajará en otro, módulo se trata de encontrar lo que queda. Tomar 27 dividido por 4: 4 se ajusta en 27 6 veces. 6 por 4 es 24, lo que significa que quedan 3. Como resultado, 27% 4 es 3. 10 dividido por 5 es 2, 2 por 5 es 10, por lo que queda 0. Como resultado, el 10% 5 es 0.

El operador de módulo es más importante de lo que puede pensar, especialmente en C, donde se aplica la diferencia entre coma flotante y números enteros. Vale la pena estar cómodo con. Aquí hay un ejemplo:

```C
result = a % b; 
```

En el ejemplo anterior, el `result` será igual a un módulo b.

## Enteros y matematicas

Los enteros no pueden tener decimales. Como resultado, cuando realiza una división con números enteros, cualquier tipo de decimal se truncará. Por ejemplo, 17 dividido por 10 es 1.7. Sin embargo, si solo estamos tratando con enteros, ese resultado será 1, no 1.7. 10 cabe en 17 1 vez, por lo que la respuesta es 1.

Cuando se trata de números de punto flotante, esto no es un problema. Los números de punto flotante pueden tomar decimales, por lo que no tenemos que preocuparnos por que las cosas se trunquen.

### ¿Por qué C hace esto?

C, como se mencionó anteriormente, es un lenguaje de bajo nivel. Hay grandes diferencias entre el punto flotante y los números enteros en el hardware de una computadora, y requieren que ciertos tipos de datos tengan ciertas propiedades (como no aceptar decimales, por ejemplo). C no hace suposiciones sobre lo que quiere y lo obliga a pensar en ello usted mismo.

### ¿Por qué no usamos números de punto flotante todo el tiempo?

Esto también se reduce a que C sea un lenguaje de bajo nivel. C es mucho, mucho más rápido y mucho más ligero que muchos otros lenguajes, y una de las razones es que el programador puede tomar decisiones inteligentes sobre los tipos de datos. Recuerde que los números de punto flotante ocupan mucha más memoria que los enteros. Como resultado, es importante utilizar el tipo de datos adecuado y tratar con conversiones de coma flotante de enteros cuando sea necesario.

### ¿Cómo podemos solucionar esto?

Casting (descrito más adelante) es una solución. El otro es usar números de punto flotante. Si uno o ambos de los números que se operan son un número de punto flotante, el resultado será un número de punto flotante. Esto se vuelve más complejo cuando comenzamos a tratar con el orden de las operaciones, pero por ahora, tenga en cuenta que esto funciona:

```C
double result = 23.0 / 2; 
```

# Un ejemplo completo

```C
#include <stdio.h> 
 
 // This is a comment. It gets ignored by the compiler, so we can write notes after the double slashes. 
 
 int main(void) { 
    int a = 3; 
    int b = 5; 
    int result = 0; 
 
    // Doing things with variables: 
    result = a + b; 
    printf("a plus b = %i \n", result); 
 
    // You can also do the operation inside the printf. 
    // Here's an example of that with subtraction: 
    printf("a minus b = %i \n", ab); 
 
    // You don't need to do this with variables at all. 
    // Here's an example of that with multiplication: 
    printf("10 times 5 = %i \n", 10*5); 
 
    // Here's a look at division. 
    // Notice that the decimals are truncated because we're dealing with integers. 
    printf("12 divided by 5 = %i \n", 12/5); 
 
    // Now let's force floating point numbers by including a decimal. 
    // Notice that even though these are integers, the decimal forces them to be 
    // treated as floating point numbers, so they aren't truncated. 
    // Note that I'm printing a double with %d, not an int with %i. 
    printf("12.0 divided by 5 = %d \n", 12.0/5); 
 
    return 0; 
 } 
```

Dale una oportunidad para ver qué pasa, y asegúrate de jugar con los operadores y los valores para ver qué y cómo cambian las cosas.

# Biblioteca matematica

C proporciona una biblioteca matemática ( `math.h` ) que proporciona múltiples funciones matemáticas útiles. Como ejemplo, la potencia de un número se puede calcular como:

```#include<math.h>
int result = pow(2,3) // will result in 2*2*2 or 8 
```

Algunas otras funciones de la biblioteca ( `math.h` ) que pueden resultar útiles son:

`#include <math.h> double angle = cos(90.00); // Givs us 0.00 int result = sqrt(16); // Gives us 4 double result = log(10.00) // Gives us 2.30 (note this is ln(10), not log base 10)`

// código C para ilustrar // El uso de la función ceil.

# incluir

# incluir

int main () { float val1, val2, val3, val4;

val1 = 1.6; val2 = 1.2; val3 = -2.8; val4 = -2.3;

printf ("value1 =% .1lf \\ n", ceil (val1)); printf ("value2 =% .1lf \\ n", ceil (val2)); printf ("value3 =% .1lf \\ n", ceil (val3)); printf ("value4 =% .1lf \\ n", ceil (val4));

retorno (0); }

# Antes de continuar ...

## Una revisión

*   Hay varios operadores básicos:
*   `+` para la adición
*   `-` para restar
*   `*` para la multiplicación
*   `/` por división
*   `%` para modulo
*   También hay muchos más operadores, pero más adelante los detallaremos.
*   La matemática integral es una cosa que C es bastante estricta.
*   C es muy estricto sobre los tipos de datos.
*   Si solo están involucrados enteros, se devolverá un entero
*   Si un número de punto flotante está involucrado en una operación, esa parte de la operación se convierte en punto flotante
*   C proporciona una biblioteca `math.h` con múltiples funciones como `pow` para calcular el poder de un número.
