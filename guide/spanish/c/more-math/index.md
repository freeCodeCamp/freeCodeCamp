---
title: More math
localeTitle: Más matemáticas
---
# Más matemáticas en C

Está bien, así que has visto lo básico. Sin embargo, hay mucho más allá afuera en C, así que aquí hay un vistazo a eso.

## Orden de operaciones

Echa un vistazo a la siguiente ecuación:

> 1 + (3-2) \* 5

Si simplemente leyáramos y computáramos de izquierda a derecha, tomaríamos 1, sumaremos 3, restaremos 2 y multiplicaremos por 5, obteniendo 10. Sin embargo, esto descuida el orden de las operaciones. Deberíamos hacer (3-2) primero, obtener 1, luego multiplicar por 5, luego sumar 1. Esto da una respuesta de 6.

Al igual que en las matemáticas regulares, C tiene un orden de operaciones. Las operaciones tienen una precedencia, y si una operación tiene una precedencia más alta que otra, la precedencia más alta se computará primero. El uso de paréntesis puede aumentar esa prioridad, al igual que en las matemáticas normales.

## Operaciones Unarias

Las operaciones unarias son operaciones donde solo hay una variable. Hay unos pocos en C.

### Operadores post-fix y pre-fix

Hay muchas situaciones en las que desea tomar un número y subir o bajar por 1. En esas situaciones, tenemos operadores de reparación posterior y de corrección previa:

```C
1: a++; 
 2: ++a; 
 
 3: a--; 
 4: --a; 
```

Tanto los ejemplos en 1 como en 2 aumentarán el valor de a por uno. Ambos ejemplos en 3 y 4 disminuirán el valor de a por uno. Sin embargo, 1 no hace exactamente lo mismo que 2, y 3 no hace exactamente lo mismo que 4. Los operadores de prefijo se llaman así porque la operación es un prefijo (2 y 4 son nuestros operadores de prefijo). Esto actúa de forma ligeramente diferente a la de nuestros operadores posteriores al arreglo 1 y 3. Los operadores de corrección previa realizan la operación y luego devuelven el valor. Los operadores posteriores al arreglo devuelven el valor y luego realizan la incrementación.

### Unario más y menos

En la matemática normal a la que estás acostumbrado, usas un '-' delante de un número o variable, y eso hace que el número o la variable sea negativo. Si el número o variable ya es negativo, se vuelve positivo.

C hace lo mismo: coloca una `-` delante de un número o variable para tener ese efecto, así:

```C
int number = -3; 
 number = -number; 
```

Entonces el `number` comienza como 3 negativo, pero luego se vuelve positivo porque un negativo negativo es positivo.

## Operaciones bitwise

Debido a que C es un nivel bajo como se mencionó anteriormente, tiene acceso a los bits binarios individuales (si decide aprovechar esto). Hay algunas operaciones binarias integradas para permitirnos hacer esto. Para estos ejemplos, vamos a utilizar `a` y `b` como nuestras variables. Pueden ser cualquier tipo de variable porque todas las variables se representarán en bits, por lo que el tipo de datos exacto no importa para estos.

### Y

`c = a & b;` realizará un bit a AND. Esto significa que si el primer bit de `a` y el primer bit de `b` son ambos 1, el primer bit de c será 1, y 0 en caso contrario. Si el segundo bit de `a` y `b` son ambos 1, el segundo bit de c será 1, y 0 en caso contrario. Esto continúa hasta que todos los bits han sido y fueron

### O

`c = a | b;` realizará un OR en modo bit. El primer bit de `c` es 1 si el primer bit en `a` o `b` es 1, el segundo bit es 1 si el segundo bit en `a` o `b` es 1, y así sucesivamente.

### NO

`b = ~a;` establecerá `b` en el complemento de uno de `a` , lo que significa que cualquier 1 se convierte en un 0 y cualquier 0 se convierte en un 1.

### XOR

`c = a ^ b;` realizará un XOR a nivel de bit. Esto es exclusivo o, lo que significa que el primer bit de `c` es 1 si `a` o `b` es 1, pero no ambos. El segundo bit es 1 si cualquiera es 1 pero no ambos, y así sucesivamente.

### Cambio

Un cambio a nivel de bit tomará los bits y los moverá a un cierto número de lugares a la izquierda o derecha. Por ejemplo, digamos que tenemos un conjunto de bits: `101110` . C realiza un cambio aritmético cuando el desplazamiento de bits. Usemos una tabla para aclarar esto:

| Bit | | 1 | 2 | 3 | 4 | 5 | 6 | | ------- | --- | --- | --- | --- | --- | --- | --- | | Antes | | 1 | 0 | 1 | 1 | 1 | 0 | | Durante | 1 | 0 | 1 | 1 | 1 | 0 | | | Después | | 0 | 1 | 1 | 1 | 0 | 0 |

Este es un cambio aritmético a nivel de bit que va hacia la izquierda. Observe que en el turno a la izquierda, el extremo izquierdo que comenzó en la posición 1 terminó fuera del espacio en el que podía caber, por lo que se eliminó. En el turno, apareció una abertura a la izquierda, por lo que se llenó con un 0.

Ahora echemos un vistazo a un desplazamiento de bits aritmético a la derecha de uno en uno:

| Bit | 1 | 2 | 3 | 4 | 5 | 6 | | | ------- | --- | --- | --- | --- | --- | --- | --- | | Antes | 1 | 0 | 1 | 1 | 1 | 0 | | | Durante | | 1 | 0 | 1 | 1 | 1 | 0 | | Después | 1 | 1 | 0 | 1 | 1 | 1 | |

Observe que aquí se abrió una ranura en la posición 1, pero en lugar de llenarse con 0, se llenó con el bit más significativo. En este caso, este es un 1. Si el bit que comenzó en la posición 1 era 0, los huecos se habrían llenado con 0.

Esto se debe a que los números en su computadora se representan usando el Complemento de Dos, por lo que cambiar de esta manera no hace que un número negativo sea positivo. Vale la pena leer más sobre el Complemento de Two si está interesado en cómo las computadoras usan el binario para hacer matemáticas y representar números.

Para realizar un cambio a la izquierda, use el operador `<<` , así:

```C
c = a << b; 
```

Esto desplazará `a` a la izquierda en `b` bits y establecerá ese resultado igual a `c` .

Este ejemplo desplazará `a` a la derecha en `b` bits y establecerá ese resultado igual a `c` .

```C
c = a >> b; 
```

## Operadores de asignación de compuestos

A veces quieres aumentar una variable por un cierto valor. Podrías hacer esto:

```C
a = a + b; 
```

Sin embargo, para esto son los operadores de asignación compuesta. En su lugar, puede escribir esto, que hace exactamente lo mismo:

```C
a += b; 
```

Esto existe para un grupo de otros operadores, también. Aquí hay una tabla práctica para usted:

El camino corto | El largo camino : --------------: |: ------------: `a += b` | `a = a + b` `a -= b` | `a = a - b` `a *= b` | `a = a * b` `a /= b` | `a = a / b` `a %= b` | `a = a % b` `a &= b` | `a = a & b` `a ^= b` | `a = a ^ b` `a <<= b` | `a = a << b` `a >>= b` | `a = a >> b`

También hay `|=` , que no está en la mesa porque el `|` El personaje rompe la mesa. Sin embargo, actúa como todas estas otras operaciones.

## Fundición

A veces no quieres que un número sea un número, o quieres que un entero sea un flotante, o algo así. Para eso está el casting.

Como recordará de la discusión sobre la división de enteros, el siguiente ejemplo dará un valor entero sin ningún decimal, porque los dos números que entran son enteros:

```C
#include <stdio.h> 
 
 int main(void) { 
    int a = 12; 
    int b = 5; 
 
    printf("a divided by b is %i", a/b); 
 } 
```

Sin embargo, utilizando el casting, podemos convertirlos en flotadores usando casting. Esto permite que se dividan como flotantes, y la ecuación devolverá un valor flotante:

```C
#include <stdio.h> 
 
 int main(void) { 
    int a = 12; 
    int b = 5; 
 
    printf("a divided by b is %f", (float) a / b); 
 } 
```

Ahora es un punto flotante 12 dividido por 5, por lo que devuelve un número de punto flotante que no se trunca después del lugar decimal.

Para convertir un número en un `int` , use `(int)` , para convertirlo en un `double` , use `(double)` , y así sucesivamente.

## Matemáticas.h

Así que eso es todo el material incorporado, pero al igual que cómo se puede `#include` stdio y stdbool, puede incluir una biblioteca llamada `math.h` . Esta biblioteca tiene todo tipo de funciones útiles para todo tipo de matemáticas. Vale la pena leer [la página de Wikipedia](https://en.wikipedia.org/wiki/C_mathematical_functions#Overview_of_functions) si desea obtener la lista completa de funciones. Aquí hay un ejemplo sobre cómo usar `abs` , que es el primero en su lista:

```C
a = abs(-1); 
```

`abs` calcula el valor absoluto del valor que se le pasa. En este caso, se recibe -1, por lo que se convertirá en 1 y `a` será igual a 1. Hay muchas más para dar mucha más funcionalidad, y así es como podrá hacer exponentes, trigonometría, y mucho más.

# Antes de continuar ...

## Una revisión

*   Hay un montón más de operadores matemáticos en C
*   Orden de operaciones existe en C
*   Los paréntesis existen y funcionan igual que las matemáticas regulares para cambiar el orden de las operaciones
*   Hay algunas Operaciones Unarias, que son operaciones donde solo hay una variable:
*   Los operadores de corrección posterior y corrección previa se utilizan para sumar y restar 1
*   Añadiendo uno: `++a;` o `a++;`
*   Restando uno: `--a` o 'a--'
*   `-` puede colocarse frente a una variable o número y actúa como un negativo en matemáticas
*   También hay algunas operaciones bitwise
*   Y se hace con &
*   O se hace con |
*   NO se hace con ~
*   XOR se realiza con ^ (XOR no funciona con un número de tipo flotante en C)
*   Existen operaciones de asignación de compuestos para todas las operaciones no unarias.
*   a + = b es lo mismo que a = a + b, y así sucesivamente
*   Casting te permite intercambiar entre tipos de datos
*   math.h tiene más cosas de matemáticas para jugar
