---
title: Dining Philosophers Problem
localeTitle: Comedor filósofos problema
---
## Comedor filósofos problema

En ciencias de la computación, el problema de los filósofos del comedor es un problema de ejemplo que se usa a menudo en el diseño de algoritmos concurrentes para ilustrar los problemas de sincronización y las técnicas para resolverlos. Fue formulado originalmente en 1965 por Edsger Dijkstra como un ejercicio de examen para estudiantes, presentado en términos de computadoras que compiten por el acceso a periféricos de unidad de cinta. Poco después, Tony Hoare le dio al problema su formulación actual.

En pocas palabras, el problema de los filósofos de la cena es una ilustración de cómo el acceso sincronizado a un recurso compartido puede dar lugar a la creación de una situación de punto muerto.

#### Sincronización y punto muerto

**La sincronización** se utiliza para controlar el acceso simultáneo a un recurso compartido. Esto es necesario en cualquier situación en la que múltiples actores independientes puedan estar compitiendo por el uso de un recurso. Como solo hay un recurso disponible, usamos la sincronización para evitar la confusión y el caos.

Un **interbloqueo** es un estado del sistema donde no es posible avanzar. Esta situación puede ocurrir cuando se aplica la sincronización, y muchos procesos terminan esperando un recurso compartido que está siendo retenido por algún otro proceso. En este caso, los procesos simplemente siguen esperando y no se ejecutan más.

#### Planteamiento del problema

Cinco filósofos silenciosos se sientan en una mesa redonda con tazones de espaguetis. Las horquillas se colocan entre cada pareja de filósofos adyacentes.

Cada filósofo debe pensar y comer alternativamente. Sin embargo, un filósofo solo puede comer espaguetis cuando tienen ambas horquillas izquierda y derecha. Cada bifurcación puede ser sostenida por un solo filósofo, por lo que un filósofo puede usar la bifurcación solo si no está siendo usado por otro filósofo. Después de que un filósofo individual termine de comer, deben dejar ambos tenedores para que los tenedores estén disponibles para otros. Un filósofo puede tomar el tenedor a su derecha o el que está a su izquierda cuando estén disponibles, pero no puede comenzar a comer antes de obtener ambos tenedores. ( **Sincronización** )

Comer no está limitado por las cantidades restantes de espaguetis o espacio del estómago; Se supone una oferta infinita y una demanda infinita.

El problema es cómo diseñar una disciplina de comportamiento (un algoritmo concurrente) tal que ningún filósofo se muera de hambre; es decir, cada uno puede continuar alternando siempre entre comer y pensar, asumiendo que ningún filósofo puede saber cuándo otros querrán comer o pensar. ( **Evitar el interbloqueo** )

Por adelantado, puede parecer que el interbloqueo no es fácilmente posible. Para ver que una solución adecuada a este problema no es obvia, considere una propuesta en la que a cada filósofo se le indique que se comporte de la siguiente manera:

1.  piensa hasta que el tenedor izquierdo esté disponible; cuando sea, recójalo;
2.  piensa hasta que esté disponible la horquilla correcta; cuando sea, recójalo;
3.  cuando se sostienen ambas horquillas, coma por un período de tiempo fijo;
4.  luego, baje el tenedor derecho;
5.  luego, baje el tenedor izquierdo;
6.  repetir desde el principio.

Este intento de solución falla porque permite que el sistema alcance un estado de interbloqueo, en el que no es posible avanzar. Este es un estado en el que cada filósofo ha recogido el tenedor a la izquierda y está esperando que el tenedor a la derecha esté disponible, o viceversa. Con las instrucciones dadas, se puede alcanzar este estado, y cuando se alcanza, los filósofos esperarán eternamente el uno al otro para liberar un tenedor. ( **Punto muerto y hambre** )

Hay muchas soluciones posibles para prevenir el Deadlock. Si observamos detenidamente, un problema en el algoritmo anterior es que todos los filósofos tienen la misma posibilidad (tienen la misma prioridad) de adquirir un tenedor. Esto evita que alguien adquiera dos bifurcaciones y todo el sistema se detiene.

Las soluciones incluyen:

1.  Prioridad: a algunos filósofos se les asigna una prioridad más alta, por lo que aumenta la posibilidad de adquirir ambos tenedores.
2.  Prevención (cortesía): los filósofos renuncian a la bifurcación adquirida sin comer, en caso de que la otra bifurcación no esté disponible.
3.  Arbitraje: un mediador asigna las horquillas para garantizar que se entreguen dos horquillas a una persona, ibnstaed de una a muchas.

#### Más información:

https://www.wikiwand.com/en/Dining _filósofos_ problema