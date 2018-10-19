---
title: Data Types in C
localeTitle: Tipos de datos en C
---
# Tipos de datos en C

Hay varias formas diferentes de almacenar datos en C, y todas son únicas entre sí. Los tipos de datos que la información puede ser almacenada como se llaman tipos de datos. C es mucho menos tolerante con respecto a los tipos de datos que otros idiomas. Como resultado, es importante asegurarse de que comprende los tipos de datos existentes, sus capacidades y sus limitaciones.

Una peculiaridad de los tipos de datos de C es que dependen completamente del hardware en el que está ejecutando su código. Un `int` en su computadora portátil será más pequeño que un `int` en una supercomputadora, por lo que es importante conocer las limitaciones del hardware en el que está trabajando. Esta es la razón por la que los tipos de datos se definen como mínimos: un valor `int` , como verás, tiene un mínimo de -32767 a 32767: en ciertas máquinas, podrá almacenar incluso más valores que este.

Hay dos categorías en las que podemos dividir esto en: enteros y números de punto flotante. Los enteros son números enteros. Pueden ser positivos, negativos, o cero. Los números como -321, 497, 19345 y -976812 son todos enteros perfectamente válidos, pero 4.5 no es porque 4.5 no es un número entero.

Los números de punto flotante son números con un decimal. Al igual que los enteros, -321, 497, 19345 y -976812 son todos válidos, pero ahora 4.5, 0.0004, -324.984, y otros números no completos también son válidos.

C nos permite elegir entre varias opciones diferentes con nuestros tipos de datos porque todos se almacenan de diferentes maneras en la computadora. Como resultado, es importante conocer las capacidades y limitaciones de cada tipo de datos para elegir el más apropiado.

## Tipos de datos enteros

#### Personajes: `char`

`char` contiene caracteres, cosas como letras, puntuación y espacios. En una computadora, los caracteres se almacenan como números, por lo que `char` contiene valores enteros que representan caracteres. La traducción real está descrita por el estándar ASCII. [Aquí hay](http://www.asciitable.com/) una mesa útil para buscar eso.

El tamaño real, como todos los demás tipos de datos en C, depende del hardware en el que esté trabajando. Como mínimo, es de al menos 8 bits, por lo que tendrá al menos 0 a 127. Alternativamente, puede usar caracteres `signed char` para obtener al menos -128 a 127.

#### Enteros estándar: `int`

La cantidad de memoria que toma un solo `int` depende del hardware. Sin embargo, puede esperar que un `int` tenga al menos 16 bits de tamaño. Esto significa que puede almacenar valores de -32,768 a 32,767, o más dependiendo del hardware.

Al igual que todos estos otros tipos de datos, hay una variante `unsigned` que se puede utilizar. El `unsigned int` puede ser positivo y cero pero no negativo, por lo que puede almacenar valores de 0 a 65,535, o más, dependiendo del hardware.

#### Enteros `short` : `short`

Esto no se usa a menudo, pero es bueno saber que existe. Al igual que int, puede almacenar de -32768 a 32767. Sin embargo, a diferencia de int, esta es la medida de su capacidad. En cualquier lugar que puedas usar `short` , puedes usar `int` .

#### Enteros más `long` : `long`

El tipo de datos `long` almacena enteros como `int` , pero proporciona un rango más amplio de valores al costo de tomar más memoria. Long almacena al menos 32 bits, lo que le da un rango de -2,147,483,648 a 2,147,483,647. Alternativamente, use `unsigned long` para un rango de 0 a 4,294,967,295.

#### Enteros aún más `long long` : `long long`

El tipo de datos `long long` es excesivo para casi todas las aplicaciones, pero C le permitirá usarlo de todos modos. Es capaz de almacenar al menos −9,223,372,036,854,775,807 a 9,223,372,036,854,775,807. Alternativamente, puede obtener aún más sobrepeso con `unsigned long long` , lo que le dará al menos 0 a 18,446,744,073,709,551,615.

## Tipos de datos de números de punto flotante

#### Números básicos de punto flotante: `float`

`float` toma al menos 32 bits para almacenar, pero nos da 6 decimales de 1.2E-38 a 3.4E + 38.

#### Dobles: `double`

`double` toma el doble de memoria de flotador (por lo menos al menos 64 bits). A cambio, el doble puede proporcionar 15 decimales desde 2.3E-308 hasta 1.7E + 308.

#### Obteniendo una gama más amplia de dobles: `long double`

`long double` toma al menos 80 bits. Como resultado, podemos obtener 19 decimales de 3.4E-4932 a 1.1E + 4932.

## Escoger el tipo de datos correcto

C hace que elija el tipo de datos, y nos hace ser muy específicos e intencionales acerca de la forma en que lo hacemos. Esto le da mucho poder sobre su código, pero es importante elegir el correcto.

En general, debe elegir el mínimo para su tarea. Si sabe que va a contar del número entero 1 al 10, no necesita mucho y no necesita un doble. Si sabe que nunca tendrá valores negativos, considere el uso de las variantes `unsigned` de los tipos de datos. Al proporcionar esta funcionalidad en lugar de hacerlo automáticamente, C puede producir código muy ligero y eficiente. Sin embargo, depende de usted como programador entender las capacidades y limitaciones, y elegir en consecuencia.

Podemos usar el operador sizeof () para verificar el tamaño de una variable. Consulte el siguiente programa en C para el uso de los distintos tipos de datos:

```c
#include <stdio.h> 
 
 int main() 
 { 
    int a = 1; 
 
    char b ='G'; 
 
    double c = 3.14; 
 
    printf("Hello World!\n"); 
 
    //printing the variables defined above along with their sizes 
    printf("Hello! I am a character. My value is %c and " 
           "my size is %lu byte.\n", b,sizeof(char)); 
    //can use sizeof(b) above as well 
 
    printf("Hello! I am an integer. My value is %d and " 
           "my size is %lu  bytes.\n", a,sizeof(int)); 
    //can use sizeof(a) above as well 
 
    printf("Hello! I am a double floating point variable." 
           " My value is %lf and my size is %lu bytes.\n",c,sizeof(double)); 
    //can use sizeof(c) above as well 
 
    printf("Bye! See you soon. :)\n"); 
    return 0; 
 } 
```

## Salida:

Hola Mundo!  
¡Hola! Soy un personaje Mi valor es G y mi tamaño es de 1 byte.  
¡Hola! Soy un entero Mi valor es 1 y mi tamaño es de 4 bytes.  
¡Hola! Soy una variable de punto flotante doble. Mi valor es 3.140000 y mi tamaño es de 8 bytes.  
¡Adiós! Te veo pronto. :)

## El tipo vacío

El tipo void especifica que no hay ningún valor disponible. Se utiliza en tres tipos de situaciones:

#### 1\. Función devuelve como vacío

Hay varias funciones en C que no devuelven ningún valor o se puede decir que devuelven nulo. Una función sin valor de retorno tiene el tipo de retorno como nulo. Por ejemplo, `void exit (int status);`

#### 2\. Argumentos de la función como nulos.

Hay varias funciones en C que no aceptan ningún parámetro. Una función sin parámetro puede aceptar un vacío. Por ejemplo, `int rand(void);`

#### 3\. Punteros a anular

Un puntero de tipo void \* representa la dirección de un objeto, pero no su tipo. Por ejemplo, una función de asignación de memoria `void *malloc( size_t size);` devuelve un puntero al vacío que se puede convertir a cualquier tipo de datos.

# Antes de continuar ...

## Una revisión

*   Las habilidades reales de los tipos de datos C dependen del hardware. Como resultado, se definen los tamaños mínimos para los tipos de datos.
*   Los números de punto flotante te permitirán tener decimales, mientras que los números enteros no.
*   Tenemos algunas opciones para nuestros valores enteros:
*   char, que está diseñado para personajes pero almacena números
*   int, que es el tipo de datos entero estándar
*   breve, que es un tipo de datos enteros menos utilizado pero aún disponible
*   largo, lo que da una amplia gama de valores enteros
*   long long, que proporciona un rango excesivo de valores enteros pero a veces es útil.
*   También tenemos algunas opciones para nuestros valores de punto flotante:
*   float es el valor básico de punto flotante, almacenando 6 decimales
*   El doble toma el doble de memoria y da 15 decimales.
*   El doble largo requiere más memoria y da 19 decimales.
*   Elegir el tipo de datos correcto es importante y le da al programador un gran control sobre el programa en un nivel bajo.