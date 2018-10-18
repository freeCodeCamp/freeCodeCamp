---
title: C
localeTitle: do
---
# Hola Mundo! - Tu primer programa de C

## Aprovechando al máximo este curso.

Asegúrese de estar cómodo con todos los conceptos en esta parte de la guía antes de continuar. Poner en marcha su primer programa es importante porque le permitirá seguir los ejemplos, que es otra cosa buena que hacer: ¡la práctica es perfecta! Los conceptos que pueden ser confusos tendrán una anotación que enlaza con un apéndice. Si no entiende un concepto, asegúrese de consultar el apéndice para obtener más información.

## Objetivo del curso

Los objetivos de este curso son enseñar el lenguaje C a los principiantes. Lo ideal es que alguien que nunca ha tocado un lenguaje informático antes pueda conocer C siguiendo estas guías. Sin embargo, seguirán siendo útiles para los programadores más experimentados al incluir un resumen al final de cada artículo. Aunque el contenido que se enseña aquí es transferible a microcontroladores como el Arduino, no es el enfoque de esta guía.

## ¿Qué es C?

C es un lenguaje de programación de propósito general inventado por Dennis Ritchie entre 1969 y 1973 en los Laboratorios Bell. Desde entonces, se ha utilizado para crear cosas como el Kernel de Linux, que permite que el software interactúe con el hardware en sistemas operativos basados ​​en Linux. Puede hacer esto y otras operaciones de bajo nivel, ya que fue diseñado para estar muy cerca del código de la máquina y, al mismo tiempo, ser legible para los humanos. Debido a esto, proporciona acceso directo a la memoria de la computadora y al hardware. Esto lo hace muy útil en aplicaciones de hardware y robótica donde tener acceso a esas funciones rápidamente es importante. C, como otros lenguajes de bajo nivel, requiere compilación. El proceso de compilación toma el código C que puede leer una persona y lo convierte en un código que puede ser leído y ejecutado por una computadora. La compilación requiere un compilador, que se puede usar desde la línea de comandos o se puede usar en un IDE.

Si prefiere usar la línea de comandos, considere `gcc` . Se puede encontrar de forma predeterminada en los sistemas operativos GNU + Linux y en Mac, y es fácil de obtener en Windows. Para los principiantes, sin embargo, tener un IDE puede ser más cómodo. Considere CodeBlocks o Xcode si está interesado en poder escribir y ejecutar código desde una GUI.

Ahora que tiene ese fondo, comencemos con nuestro programa 'Hola, Mundo'. "Hola, Mundo" es una forma tradicional de comenzar con un lenguaje: muestra que podemos escribir código y hacerlo funcionar, ¡así que es un buen lugar para comenzar!

## Hola mundo en c

```C
#include <stdio.h> 
 
 int main(void) 
 { 
    printf("hello, world\n"); 
    return 0; 
 } 
```

Vamos a desglosar este programa paso a paso.

Primero está el `#include` :

```C
#include <stdio.h> // This is called preprocessor directives 
```

Esta es una instrucción para que el compilador encuentre e incluya un conjunto de archivos de encabezado. Los archivos de encabezado contienen código adicional que podemos usar. En este caso, el compilador ha recibido instrucciones para incluir `<stdio.h>` , que contiene todo tipo de funciones útiles como `printf()` . También podemos escribirlo como `#include"stdio.h"` . Vamos a entrar en detalles sobre qué funciones son más adelante, pero por ahora solo recuerde que una función es una colección de código que podemos usar.

```C
int main(void) 
 { 
 } 
```

Este código declara la función principal. La función principal es especial: siempre será llamada y siempre es la parte 'principal' de su programa. Si esto no está en tu programa, tu programa no puede ejecutarse y no se compilará.

Comenzar la declaración de función con `int` significa que esta función le dará un valor `int` cuando termine de ejecutar su código, es el resultado de esta función. `int` es el tipo de datos 'entero', y los enteros son números enteros como -3, 0 o 18. Así que sabemos que este código se ejecutará, y cuando se hace, nos devolverá un entero. Por convención, este número entero es 0.

El siguiente es el `main` . `main` es el nombre de esta función y, como aprendió anteriormente, es importante tener una función `main` porque su programa no funcionará sin ella. `main` es seguido por `(void)` . Esto le dice al compilador que esta función no toma ningún parámetro, lo que significa que no tiene entrada.

Es posible que esto no tenga mucho sentido ahora, pero aprenderá más sobre esto cuando comience a leer sobre las funciones en C más adelante. Por ahora, solo recuerde que `main` es necesario para su programa C, no toma ninguna entrada y está dando un número como su salida.

Finalmente, están los paréntesis: `{` y `}` . Estos marcan el principio y el final de la función. El corchete abierto ( `{` ) marca el comienzo, y el corchete cerrado ( `}` ) marca el final. Todo entre los dos está dentro de la función.

Ahora veamos la carne del programa:

```C
    printf("Hello, World!\n"); 
```

`printf` es una función que toma texto y lo imprime en la pantalla. El paréntesis indica qué información queremos que tome la función `printf` e imprima en la pantalla. Mostramos que esta es una cadena que queremos imprimir rodeandola de comillas "como esta".

Observe el \\ n encontrado dentro de las comillas, esto le indica a la función `printf` que imprima una nueva línea. Una nueva línea es lo que se imprime cuando presionas Enter en tu teclado. Sin decirle explícitamente a C que imprima una nueva línea, todo se imprimirá en la misma línea.

Finalmente, la declaración printf () se concluye con un punto y coma ( `;` ). Esto demuestra que esta línea de código ha terminado. Sin él, el compilador no sabe dónde termina una línea y dónde empieza otra, por lo que es importante incluirla.

El programa termina con una declaración de devolución:

```C
return 0; 
```

Esto muestra que la función ha terminado y que debería terminar dando un valor de 0 a lo que sea que se ejecutó. Cuando está ejecutando código en su computadora, es bueno tenerlo porque permite que otros programas interactúen con los suyos de una mejor manera.

Como antes, esta línea termina con un punto y coma para indicar que la línea se ha completado.

## Compilación y Ejecución

Puede guardar su archivo hello world como desee, pero debe terminar con la extensión de archivo .c. En este ejemplo, el archivo se ha denominado "helloworld.c", porque es un nombre claro con una extensión de archivo .c.

Hay muchas formas de compilar y ejecutar el código C en su computadora. Aquí hay algunos:

#### Compilación y ejecución desde la línea de comandos con GCC.

Si está ejecutando Mac o GNU + Linux, ya tiene instalado GCC.

Para ejecutar su programa C, necesita ser compilado. Para compilar desde la línea de comandos usando gcc, ejecute el siguiente comando desde su terminal:

```shell
gcc -o helloworld ./helloworld.c 
```

`gcc` es el compilador Gnu C, y compilará el archivo C que le damos en un programa que puede ejecutar su computadora.

`-o helloworld` le dice a GCC que desea que el archivo compilado (la salida de gcc) sea un archivo llamado "helloworld". La parte final del comando le dice a GCC dónde se puede encontrar el archivo C que se va a compilar. Si no se siente cómodo navegando desde la línea de comando, este paso será difícil, pero está bien, es fácil de aprender y volver, o puede intentarlo desde un IDE.

Una vez que lo tienes compilado, ejecuta el siguiente comando:

```shell
./helloworld 
```

Si todo ha ido bien, deberías ver `Hello, World!` Impreso en la pantalla.

#### Compilación y ejecución de C con CodeBlocks

[Codeblocks se pueden descargar desde aquí.](http://www.codeblocks.org/downloads/26) Cree un programa nuevo con el `file` -> `new` -> `file` , seleccione la fuente C / C ++, seleccione C como su idioma y luego copie el texto helloworld.c que leyó anteriormente. Compile y ejecute el código con `Build` -> `Build and Run` .

#### Compilación y ejecución de C con Xcode.

[Xcode se puede descargar desde aquí.](https://developer.apple.com/xcode/)

#### Compilación y ejecución de C con Dev-C ++.

[Dev-C ++ se puede descargar desde aquí.](https://sourceforge.net/projects/orwelldevcpp/) Cree un nuevo programa con el `file` -> `new` -> `Source File` , luego copie el texto helloworld.c que leyó anteriormente y luego guarde el archivo con el `file` -> `save As` como Hello.c, y compile y ejecute el código con `Execute` -> `Compile & Run` .

# Antes de continuar ...

## Una revisión

*   C es la lengua franca de los lenguajes de programación.
*   C se utilizó para volver a implementar el sistema operativo Unix.
*   C es útil porque es pequeño, rápido y tiene acceso a operaciones de bajo nivel. Debido a esto, se usa mucho en robótica, sistemas operativos y electrónica de consumo, pero no en cosas como páginas web.
*   El programa de C tiene algunas partes críticas:
  *   La declaración de inclusión, que le indica al compilador de C dónde encontrar el código adicional que se utilizará en el programa.
  *   La función principal, que es donde primero se ejecutará el código y se requiere para compilar.
  *   Cosas dentro de esa función principal que se ejecutarán, incluida una declaración de retorno que cierra el programa y le da un valor al programa que lo llamó.
*   C necesita ser compilado para funcionar.
*   C se puede usar para acceder a direcciones de hardware específicas y para realizar punks de tipo para cumplir con los requisitos de interfaz impuestos externamente, con una baja demanda de recursos del sistema en tiempo de ejecución.
