---
title: Orthogonality
localeTitle: Ortogonalidad
---
## Ortogonalidad

En ingeniería de software, un sistema se considera ortogonal si cambiar uno de sus componentes cambia el estado de ese componente solamente. Por ejemplo, considere un programa con tres variables: a, b, y c. Cambiar el valor de a, no debería cambiar el valor de b, o c, siempre que sean independientes. Esta propiedad es particularmente crítica para depurar un programa, ya que uno se basa en reducir la cantidad de partes móviles de un programa para identificar la causa raíz del problema.

Vea la siguiente cita de "Art of UNIX" de Eric S. Raymond

> La ortogonalidad es una de las propiedades más importantes que pueden ayudar a que incluso los diseños complejos sean compactos. En un diseño puramente ortogonal, las operaciones no tienen efectos secundarios; Cada acción (ya sea una llamada a la API, una invocación de macros o una operación de idioma) cambia solo una cosa sin afectar a otras. Hay una y solo una manera de cambiar cada propiedad de cualquier sistema que esté controlando.

La ortogonalidad es un principio de diseño de software para escribir componentes de manera que cambiar un componente no afecte a otros componentes. Es la combinación de otros dos principios, a saber, fuerte cohesión y acoplamiento suelto.

La ortogonalidad es un término tomado de las matemáticas. Por ejemplo, dos líneas son ortogonales si son perpendiculares. En el diseño de software, dos componentes son ortogonales si un cambio en uno no afecta al otro.

La aplicación de este concepto a las clases u otras secciones del código da como resultado un menor acoplamiento. Para ser ortogonales dos clases no pueden depender de la implementación de cada una. Tampoco pueden compartir datos globales. Cambiar las partes internas de una clase no afecta a la otra clase. Los componentes deben ser independientes y tener una sola responsabilidad.

Considere un método que lee una lista de números de un archivo y los devuelve ordenados. Ahora los requisitos cambian y los números están en una base de datos. La modificación de este método para acceder a la base de datos causaría un cambio en el código del cliente. Si esto fuera dos métodos diferentes, entonces una nueva fuente no afectaría el método de clasificación. Solo el código del cliente tendría que saber la fuente de los números.

### Fuerte cohesion

Dentro de un componente de software, el código debe estar fuertemente conectado. Esto es una indicación de que el código está dividido correctamente. Si un componente tenía dos o más partes relativamente desconectadas, eso puede indicar que esas partes deben estar en un componente diferente o en su propio componente.

### Bajo acoplamiento

Entre los componentes del software, debe haber pocas conexiones. Si dos componentes están fuertemente acoplados, puede indicar que deben ser un componente, o que deben dividirse de manera diferente en más componentes.

#### Más información:

*   [Ortogonalidad (programación) | Wikipedia](https://en.wikipedia.org/wiki/Orthogonality_(programming))
*   [Principios de la programación orientada a objetos ortogonales | jasoncoffin.com](http://www.jasoncoffin.com/cohesion-and-coupling-principles-of-orthogonal-object-oriented-programming/)
*   [GRASP - principios de diseño orientados a objetos | Wikipedia](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)

Desbordamiento de pila: ¿Qué es la ortogonalidad? https://stackoverflow.com/questions/1527393/what-is-orthogonality