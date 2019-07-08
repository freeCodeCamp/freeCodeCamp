---
title: C++ Compilers
localeTitle: Compiladores C ++
---
# Introducción a los compiladores de C ++

Para comenzar con C ++, necesitará aprender un poco sobre los compiladores y cómo se ejecuta C ++ en su computadora.

Cuando todo está dicho y hecho, las computadoras solo entienden un idioma, el lenguaje de máquina. El lenguaje de máquina está compuesto enteramente de bits binarios, o 0s y 1s. Si bien sería posible programar en binario, sería increíblemente tedioso y lento. Entonces, los humanos desarrollamos lenguajes de programación para facilitar el desarrollo de software. El lenguaje ensamblador es un 1 a 1 directo con maquina. idioma. Los lenguajes como C, C ++ y COBOL son un poco más altos y deben compilarse. Va aún más alto. Idiomas como JavaScript y Python tienen componentes que se traducen a C ++ u otros lenguajes de bajo nivel antes de ser compilados, efectivamente haciéndolos lenguajes "superiores" que C o C ++. Debido a que la arquitectura de la computadora está formada por interruptores y cables electrónicos que solo pueden funcionar con 1s y 0s binarios, necesita un compilador para traducir su código de C ++ de alto nivel al lenguaje de máquina que la CPU pueda entender.

Los compiladores son programas de utilidad que toman su código y lo transforman en archivos de código de máquina ejecutables. Cuando ejecutas un compilador en su código, primero, el preprocesador lee el código fuente (el archivo C ++ que acaba de escribir). El preprocesador busca cualquier Directivas de preprocesador (líneas de código que comienzan con un #). Directivas de preprocesador causan la preprocesador para cambiar su código de alguna manera (por lo general agregando alguna biblioteca u otro archivo C ++). A continuación, el compilador trabaja a través del código preprocesado línea a línea traduciendo Cada línea en la instrucción apropiada del lenguaje de máquina. Esto también descubrirá cualquier error de sintaxis presente en su código fuente y arrojará un error a la línea de comandos. Finalmente, si no hay errores presentes, el compilador crea un objeto Archivo con el binario del lenguaje de máquina necesario para ejecutar en su máquina. Mientras que el archivo objeto que el compilador acaba de crear es probable que haga algo en su computadora, aún no es un ejecutable funcional de su programa C ++. Hay una final Paso importante para alcanzar un programa ejecutable.

C ++ contiene una vasta biblioteca para ayudar a realizar tareas difíciles como la E / S y la manipulación de hardware. Puedes incluir estos bibliotecas con directivas de preprocesador, pero el preprocesador no las agrega automáticamente a su código. Para que tengas un programa ejecutable final, otra utilidad conocida como el enlazador debe combinar sus archivos de objetos con las funciones de la biblioteca necesario para ejecutar el código. Piensa que tiene todos los bloques necesarios. para construir una casa. El compilador hizo todos los bloques, pero el enlazador es el que los une a todos para crear finalmente una casa. Una vez hecho esto, ahora tiene un archivo ejecutable en funcionamiento!

## Cómo compilar un archivo

Digamos que tienes un archivo C ++ llamado `helloWorld.cpp` ...

### Si estás en Windows -

#### Usando y IDE como CodeBlocks

Es tan simple como hacer clic en los botones de compilación y ejecución, crearán un archivo en la carpeta del proyecto. ![img](https://cdn-media-1.freecodecamp.org/imgr/FwZuFGy.png)

#### Usando el símbolo del sistema

1.  Abra un símbolo del sistema del desarrollador: para este paso, deberá tener Microsoft Visual Studio o algún otro IDE que le permite compilar su programa desde la línea de comandos. También puede buscar en línea los compiladores de C ++.
    
2.  Navegue directamente al código fuente
    
3.  Ejecute el compilador en su código fuente (asumiendo que está usando el compilador de Microsoft Visual Studio) `cl /EHsc helloWorld.cpp`
    

Esto ahora creará un archivo de objeto y lo vinculará automáticamente por usted. Si miras en esa misma carpeta, verás una El archivo ejecutable hellWorld.exe (tenga en cuenta la extensión exe) ahora está presente.

4.  Escriba `helloWorld` en el indicador para ejecutar el ejecutable

Alternativamente, muchos IDE permiten la construcción y visualización rápida de su programa. Esto puede ser más fácil ya que su versión de Windows no puede venir preempaquetado con una utilidad de compilación.

### Si estás en Linux o OSX -

1.  Abre una ventana de terminal y navega al directorio de código fuente
2.  Ejecuta el compilador en tu código fuente `g++ helloWorld.cpp -o helloWorld`

Esto creará un archivo de objeto y lo vinculará automáticamente por usted. Busque en la carpeta y verá un helloWorld.exe archivo ejecutable (note la extensión exe).

3.  Escriba `./helloWorld` en la ventana del terminal para ejecutar el archivo ejecutable

g ++ es el compilador estándar de Linux y es una gran utilidad. Viene empaquetado con el sistema operativo.

NOTA: Para compilar y ejecutar su código directamente, ejecute `g++ -o helloWorld helloWorld.cpp; ./helloWorld` así que cuando necesite compilar y ejecutar su código varias veces, flecha arriba entrar

* * *

Hay una serie de diferentes tipos de compiladores. Los dos enumerados son los dos que generalmente se empaquetan con Windows o Linux / OSX.