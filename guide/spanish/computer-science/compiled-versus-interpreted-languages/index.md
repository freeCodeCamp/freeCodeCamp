---
title: Compiled Versus Interpreted Languages
localeTitle: Lenguajes compilados versus interpretados
---
## Lenguajes compilados versus interpretados

Cada programa es un conjunto de instrucciones, ya sea para agregar dos números o enviar una solicitud a través de Internet. Los compiladores e intérpretes toman el código legible por el ser humano y lo convierten en código de máquina legible por computadora. En un lenguaje compilado, la máquina de destino traduce directamente el programa. En un idioma interpretado, el código fuente no se traduce directamente por la máquina de destino. En su lugar, un programa _diferente_ , también conocido como el intérprete, lee y ejecuta el código.

### Está bien ... pero ¿qué significa eso _realmente_ ?

Digamos que tienes una receta de hummus que quieres hacer, pero está en griego antiguo. Hay dos maneras en que usted, como un hablante no griego antiguo, podría seguir sus instrucciones.

La primera es si alguien ya lo había traducido al inglés para ti. Usted (y cualquier otra persona que pudiera hablar inglés) podría obtener la versión en inglés y hacer hummus. Esta es la versión compilada.

La segunda es si tienes un amigo que sabe griego antiguo. Tu amigo puede sentarse a tu lado y traducir el griego antiguo al inglés, línea por línea, a medida que avanzas. En este caso, tu amigo es el intérprete. Esta es la versión interpretada.

### Lenguajes compilados

Los idiomas compilados se convierten directamente en código de máquina que el procesador puede ejecutar. Como resultado, tienden a ser más rápidos y más eficientes de ejecutar que los lenguajes interpretados. También le dan al desarrollador más control sobre los aspectos de hardware, como la administración de la memoria y el uso de la CPU.

Los lenguajes compilados necesitan un paso de "compilación": primero deben compilarse manualmente. Debe "reconstruir" el programa cada vez que necesite hacer un cambio. En nuestro ejemplo de hummus, toda la traducción está escrita antes de que llegue a usted. Si el autor original decidió que quería usar un tipo diferente de aceite de oliva, la receta completa tendría que ser traducida nuevamente y luego enviada a usted.

Ejemplos de lenguajes compilados puros son C, C ++, Erlang, Haskell, Rust y Go.

### Lenguajes interpretados

Los intérpretes correrán a través de un programa línea por línea y ejecutarán cada comando. Ahora, si el autor decidiera que quería usar un tipo diferente de aceite de oliva, podría rascar el anterior y agregar el nuevo. Su amigo traductor puede transmitirle ese cambio a medida que se produce.

Los idiomas interpretados antes se sabía que eran significativamente más lentos que los idiomas compilados. Pero, con el desarrollo de la [compilación justo a tiempo](https://guide.freecodecamp.org/computer-science/just-in-time-compilation) , esa brecha se está reduciendo.

Ejemplos de lenguajes interpretados comunes son PHP, Ruby, Python y JavaScript.

### Una pequeña advertencia

La mayoría de los lenguajes de programación pueden tener implementaciones tanto compiladas como interpretadas. El lenguaje en sí no es necesariamente compilado o interpretado. Sin embargo, por razones de simplicidad, normalmente se les conoce como tales.

Estrictamente hablando, los términos lenguaje interpretado y lenguaje compilado no están bien definidos porque, en teoría, cualquier lenguaje de programación puede ser interpretado o compilado. En la implementación del lenguaje de programación moderno, es cada vez más popular que una plataforma proporcione ambas opciones. Por ejemplo, Python puede ejecutarse como un programa compilado o como un lenguaje interpretado en modo interactivo.

**La mayoría de las herramientas de línea de comandos, CLI y shells pueden clasificarse teóricamente como lenguajes interpretados.**

### Ventajas y desventajas

#### Ventajas de los lenguajes compilados

Los programas compilados en código nativo en tiempo de compilación suelen ser más rápidos que los traducidos en tiempo de ejecución, debido a la sobrecarga del proceso de traducción.

#### Desventajas de los lenguajes compilados

Las desventajas más notables son: -

*   Tiempo adicional necesario para completar todo el paso de compilación antes de la prueba, y
*   Dependencia de la plataforma del código binario generado.

#### Ventajas de los lenguajes interpretados

Un lenguaje interpretado da a las implementaciones cierta flexibilidad adicional sobre las implementaciones compiladas. Debido a que los intérpretes ejecutan el código fuente del programa ellos mismos, el código en sí mismo es independiente de la plataforma (el código de bytes de Java, por ejemplo). Otras características incluyen la escritura dinámica y el tamaño del programa ejecutable más pequeño.

#### Desventajas de los lenguajes interpretados

La desventaja más notable es la velocidad de ejecución típica en comparación con los lenguajes compilados.

#### Más información:

[Wikipedia - Lenguaje compilado](https://en.wikipedia.org/wiki/Compiled_language)

[Wikipedia - Lenguaje interpretado](https://en.wikipedia.org/wiki/Interpreted_language)

[Artículo de programmerinterview.com: ¿Cuál es la diferencia entre un lenguaje compilado e interpretado?](http://www.programmerinterview.com/index.php/general-miscellaneous/whats-the-difference-between-a-compiled-and-an-interpreted-language/)