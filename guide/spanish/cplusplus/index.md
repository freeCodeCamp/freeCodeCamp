---
title: C++
localeTitle: C ++
---
# Hola Mundo! - Tu primer programa de C ++

## ¿Qué es C ++?

*   C ++ es un lenguaje de programación de propósito general que se ha utilizado desde la década de 1990.
    
*   Fue diseñado por Bjarne Stroustrup con el nombre "C con clases".
    
*   Es una versión de C que incluye elementos orientados a objetos, incluidas clases y funciones.
    
*   Es considerado uno de los lenguajes de programación más grandes, como se puede ver en la siguiente imagen: ![Img](http://static1.businessinsider.com/image/59deb30392406c21008b6148-1200/for-bonus-points-heres-the-chart-showing-these-languages-relative-popularity.jpg) _fuente: Github_
    

### Tu primer programa en C ++

```cpp
#include <iostream> 
 using namespace std; 
 int main() 
 { 
    cout << "Hello World" << endl; 
    return 0; 
 } 
```

#### La salida de este programa será simplemente:
```
Hello World! 
```

Ahora, vamos a desglosar el código:

#### Lineas 1 y 2

```cpp
#include <iostream> 
 using namespace std; 
```

*   La primera línea le dice a la computadora que use el archivo de cabecera "iostream" para este programa específico. Un archivo de encabezado es un archivo separado con código C ++ escrito previamente. Hay muchos otros archivos de encabezado que se requieren para que un programa específico se ejecute correctamente. Algunos de ellos son: matemática, vector y cadena. Los archivos de encabezado generalmente están representados por una extensión ".h" (no es necesario agregar .h cuando se incluyen archivos de biblioteca estándar de C ++)
*   `iostream` significa flujo de entrada-salida. El archivo "iostream" contiene código para permitir que la computadora ingrese datos y genere una salida, utilizando el lenguaje C ++.
*   La segunda línea le dice a la computadora que use el espacio de nombres estándar que incluye características de C ++ estándar. Podría escribir este programa sin esta línea, pero tendría que usar `std::cout` lugar de `cout` y `std::endl` lugar de `endl` en la línea 4. Hace que el código sea más legible y que nuestras vidas como programadores sean más fáciles.

#### Línea 3 y 4

```cpp
int main() 
 { 
```

*   C ++ inicia la ejecución de un programa desde la función `int main()` . Durante la ejecución, la computadora comienza a ejecutar el código desde cada línea desde `{` (corchete de apertura) hasta `}` (corchete de cierre) **NOTA: Cada función comienza con una llave de apertura "{" y termina con una llave de cierre "}".**
*   La línea 4 indica el inicio de la función main ().

#### Líneas 5, 6 y 7

```cpp
    cout << "Hello World" << endl; 
    return 0; 
 } 
```

*   La palabra `cout` en C ++ se usa para dar salida.
*   Le sigue `<<` , el _operador de inserción_ .
*   Lo que está en las comillas dobles `""` se imprime. Ciertos caracteres especiales tienen una sintaxis diferente para las declaraciones impresas
*   Ahora para imprimir cualquier otro tipo de datos, tiene que agregar `<<` .

**_Desafío: intente cambiar Hello World a cualquier otra oración o palabra (s). ¿Cuál será la salida?_**

*   `endl` es una palabra reservada cuando se usa el lenguaje C ++ para **finalizar esta línea y pasar a la siguiente línea durante la salida** . - _cout significa "salida de consola"_
*   Finalmente, termina el comando con un punto y coma `;` .

**NOTA: Todos los comandos, excepto la definición de la función principal y la directiva #include, deben finalizar con un punto y coma. Sin un ";" , puede encontrar un error.**

*   `return 0;` termina de forma segura la función actual, es decir, 'main ()' en este caso y dado que ninguna función sigue después de que 'main ()' se termina el programa.
*   No olvide decirle a la computadora que este es el final de la función main (). Para hacer esto, agregue la llave de cierre "}". Encontrará un error antes de la ejecución del programa si no incluye el **}** .

### El código debe verse algo como esto:

![Img](https://cdn-media-1.freecodecamp.org/imgr/d1liGwI.png)

Los programadores utilizan un programa Hello World (como este) como un ritual en el uso de un nuevo lenguaje de programación. Es un símbolo de buena suerte.  
_Ha terminado de codificar su primer programa de C ++ y ha comprendido la mayor parte del código que ha escrito / escrito. ¡FELICIDADES!_

**Buena suerte a todos y feliz codificación! :)**

**¡Feliz codificación! :)**

**No dude en hacer cualquier pregunta en la página de GitHub de [FreeCodeCamp](https://forum.freecodecamp.org/) o en [el Foro de FreeCodeCamp.](https://forum.freecodecamp.org/)**

[Inténtalo tú mismo ! :)](https://repl.it/L4k3)

**Es posible que necesite algún software para escribir y ejecutar código C ++. Recomiendo usar CodeBlocks. Hay un enlace de descarga a continuación:**

Enlace de descarga: [descarga aquí](http://www.codeblocks.org/downloads/26)

*   Haga clic en el enlace con el compilador GNU / GCC para Windows. Esto no requerirá una instalación adicional

Otras alternativas podrían ser visual studio, usando un compilador o un IDE en línea como Cloud9 o repl.it

Enlace # 2 para Mac: [descargue para Mac # 2 aquí](https://developer.apple.com/xcode/)