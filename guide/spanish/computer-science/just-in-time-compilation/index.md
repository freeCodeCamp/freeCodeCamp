---
title: Just in Time Compilation
localeTitle: Recopilación Just In Time
---
## Recopilación Just In Time

La compilación justo a tiempo es un método para mejorar el rendimiento de los programas interpretados. Durante la ejecución, el programa puede compilarse en código nativo para mejorar su rendimiento. También se conoce como compilación dinámica.

La compilación dinámica tiene algunas ventajas sobre la compilación estática. Al ejecutar aplicaciones Java o C #, el entorno de ejecución puede crear un perfil de la aplicación mientras se ejecuta. Esto permite generar más código optimizado. Si el comportamiento de la aplicación cambia mientras se ejecuta, el entorno de ejecución puede volver a compilar el código.

Algunas de las desventajas incluyen retrasos en el inicio y la sobrecarga de la compilación durante el tiempo de ejecución. Para limitar la sobrecarga, muchos compiladores JIT solo compilan las rutas de código que se utilizan con frecuencia.

### Visión de conjunto

Tradicionalmente, existen dos métodos para convertir el código fuente en un formulario que se puede ejecutar en una plataforma. La compilación estática convierte el código en un lenguaje para una plataforma específica. Un intérprete ejecuta directamente el código fuente.

La compilación JIT intenta utilizar los beneficios de ambos. Mientras se ejecuta el programa interpretado, el compilador JIT determina el código más utilizado y lo compila en un código de máquina. Dependiendo del compilador, esto se puede hacer en un método o en una sección más pequeña de código.

La compilación dinámica se describió por primera vez en un artículo de J. McCarthy sobre LISP en 1960.

Just In Time Compilation, JIT o Dynamic Translation, es una compilación que se realiza durante la ejecución de un programa. Es decir, en tiempo de ejecución, a diferencia de antes de la ejecución. Lo que pasa es la traducción al código de máquina. Las ventajas de un JIT se deben al hecho de que, dado que la compilación tiene lugar en tiempo de ejecución, un compilador JIT tiene acceso a información dinámica de tiempo de ejecución que le permite realizar mejores optimizaciones (como funciones de alineación).

Lo que es importante entender acerca de la compilación JIT, es que compilará el código de bytes en las instrucciones de código de máquina de la máquina en ejecución. Lo que significa que el código de máquina resultante está optimizado para la arquitectura de CPU de la máquina en ejecución.

Dos ejemplos de compiladores JIT son: JVM (Java Virtual Machine) en Java y CLR (Common Language Runtime), en C #.

## JIT significa Just-in-Time, lo que significa que el código se compila cuando es necesario, no antes del tiempo de ejecución.

Al principio, un compilador era responsable de convertir un lenguaje de alto nivel (definido como un nivel más alto que el ensamblador) en un código objeto (instrucciones de máquina), que luego se vincularía (mediante un enlazador) en un ejecutable.

En un momento de la evolución de los idiomas, los compiladores compilarían un lenguaje de alto nivel en pseudocódigo, que luego sería interpretado (por un intérprete) para ejecutar su programa. Esto eliminó el código objeto y los ejecutables, y permitió que estos lenguajes fueran portátiles a múltiples sistemas operativos y plataformas de hardware. Pascal (que compiló a P-Code) fue uno de los primeros; Java y C # son ejemplos más recientes. Finalmente, el término P-Code fue reemplazado por el bytecode, ya que la mayoría de las pseudo-operaciones son un byte de largo.

Un compilador Just-In-Time (JIT) es una característica del intérprete de tiempo de ejecución, que en lugar de interpretar el código de bytes cada vez que se invoca un método, compilará el código de bytes en las instrucciones del código de máquina de la máquina en ejecución y luego invocará este código objeto en su lugar. Idealmente, la eficiencia de ejecutar el código de objeto superará la ineficiencia de recompilar el programa cada vez que se ejecuta.

Un compilador JIT se ejecuta después de que el programa se haya iniciado y compila el código (generalmente bytecode o algún tipo de instrucciones de VM) sobre la marcha (o justo a tiempo, como se llama) en una forma que suele ser más rápida, típicamente la CPU nativa del host conjunto de instrucciones. Un JIT tiene acceso a información dinámica en tiempo de ejecución, mientras que un compilador estándar no lo hace y puede realizar mejores optimizaciones, como las funciones de alineación que se usan con frecuencia.

Esto contrasta con un compilador tradicional que compila todo el código en lenguaje de máquina antes de que el programa se ejecute por primera vez.

Parafraseando, los compiladores convencionales construyen todo el programa como un archivo EXE ANTES de la primera vez que lo ejecutas. Para los programas de estilo más nuevos, se genera un ensamblaje con pseudocódigo (código p). Solo DESPUÉS de ejecutar el programa en el sistema operativo (p. Ej., Al hacer doble clic en su icono), el compilador (JIT) activará y generará un código de máquina (código m) que el procesador basado en Intel o lo que sea que entienda.

## Escenario típico:

El código fuente se convierte completamente en código máquina.

## Escenario JIT:

El código fuente se convertirá en lenguaje ensamblador como estructura \[para ex IL (lenguaje intermedio) para C #, ByteCode para java\].

El código intermedio se convierte a lenguaje de máquina solo cuando la aplicación necesita que los códigos requeridos solo se conviertan a código de máquina.

## Comparación de JIT vs No-JIT:

En JIT no todo el código se convierte en código de máquina primero, una parte del código que es necesario se convertirá en código de máquina y luego, si un método o funcionalidad llamada no está en la máquina, entonces se convertirá en código de máquina ... reduce la carga de la CPU Como el código de la máquina se generará en el tiempo de ejecución ... el compilador JIT producirá un código de máquina que está optimizado para ejecutar la arquitectura de la CPU de la máquina. Ejemplos de JIT:

En Java, JIT está en JVM (Java Virtual Machine). En C # está en CLR (Common Language Runtime) En Android se encuentra en DVM (Dalvik Virtual Machine), o ART (Android RunTime) en versiones más recientes.

La máquina virtual Java (JVM) (JVM ejecuta el bytecode) mantiene un conteo de la cantidad de tiempo que se ejecuta una función. Si este recuento excede un límite predefinido, JIT compila el código en un lenguaje de máquina que puede ser ejecutado directamente por el procesador (a diferencia del caso normal en el que javac compila el código en el código de bytes y luego en java: el intérprete interpreta este código de bytes por línea y lo convierte en código de máquina y se ejecuta).

Además, la próxima vez que se calcule esta función, se ejecutará nuevamente el mismo código compilado, a diferencia de la interpretación normal en la que el código se interpreta nuevamente línea por línea. Esto hace que la ejecución sea más rápida.

#### Más información

*   [Compilación JIT (Wikipedia)](https://en.wikipedia.org/wiki/Just-in-time_compilation)
*   [Introducción JIT](https://eli.thegreenplace.net/2013/11/05/how-to-jit-an-introduction/)