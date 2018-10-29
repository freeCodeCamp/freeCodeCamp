---
title: Big O Notation
localeTitle: Notación Big O
---
## Notación Big O

_Como científico informático, si está trabajando en una pieza importante de software, es probable que tenga que poder estimar la rapidez con la que se ejecutará algún algoritmo u otro._

La notación Big O se utiliza en informática para describir el rendimiento o la complejidad de un algoritmo. En realidad, la notación Big O es un símbolo especial que te dice qué tan rápido es un algoritmo. Por supuesto, usará algoritmos predefinidos con frecuencia, y cuando lo haga, es vital entender qué tan rápido o lento son.

#### ¿Cómo se ve la notación Big O?

![](https://user-images.githubusercontent.com/5860906/31781171-74c6b48a-b500-11e7-9626-f715b37b10f0.png) Esto le indica la cantidad de operaciones que realizará un algoritmo. Se llama notación Big O porque se pone una "O grande" delante del número de operaciones.  

#### Big O establece un peor tiempo de ejecución

Supongamos que usted es un médico que está tratando a Harry Abbit; puede consultar los registros electrónicos relacionados con el historial médico de Harry Abbit (es la primera persona en una lista). Consideremos la situación cuando su vida depende de todos los datos médicos disponibles. Supongamos que está utilizando la búsqueda simple para buscar una persona en los registros electrónicos. Usted sabe que la búsqueda simple toma O (n) tiempo para ejecutarse, por lo que tendrá que revisar cada una de las entradas de Abbit. Por supuesto, te has dado cuenta de que Abbit es la primera entrada, por lo que no tenías que mirar cada entrada; la encontraste al primer intento.

_¿Este algoritmo tomó tiempo O (n)? ¿O tomó O (1) tiempo porque encontró a la persona en el primer intento?_

En este caso, ese es el mejor de los casos. Pero la notación Big O es sobre el peor de los casos. Eso es O (n) tiempo (la búsqueda simple todavía toma). Es una garantía de que la búsqueda simple nunca será más lenta que el tiempo O (n).

#### Los tiempos de ejecución del algoritmo crecen a diferentes ritmos.

Supongamos que se tarda 1 milisegundo en marcar una entrada. Con una búsqueda simple, el médico tiene que verificar 10 entradas, por lo que la búsqueda tarda 10 ms en ejecutarse. Por otro lado, solo tiene que verificar 3 elementos con _un algoritmo de búsqueda binario_ (log10 es aproximadamente 3), por lo que la búsqueda tarda 3 ms en ejecutarse.

Pero de manera realista, la lista tendrá más de cien elementos.

_Si lo hace, ¿cuánto tiempo tomará la búsqueda simple? ¿Cuánto tiempo tomará la búsqueda binaria?_

El tiempo de ejecución de la búsqueda simple con 1 billón de elementos será de 1 billón de ms, que es de 11 días. El problema es que los tiempos de ejecución para la búsqueda binaria y la búsqueda simple _no crecen al mismo ritmo_ .

![](https://user-images.githubusercontent.com/5860906/31781165-723a053c-b500-11e7-937c-7b33db281efe.png)

Entonces, a medida que la lista de números aumenta, la búsqueda binaria se vuelve mucho más rápida que la búsqueda simple. Es decir, a medida que aumenta el número de elementos, la búsqueda binaria tarda un poco más en ejecutarse. Pero la búsqueda simple toma _mucho_ más tiempo para ejecutar. Entonces, a medida que la lista de números aumenta, la búsqueda binaria se vuelve mucho más rápida que la búsqueda simple.

_Por eso no basta con saber cuánto tarda en ejecutarse un algoritmo; debe saber cómo aumenta el tiempo de ejecución a medida que aumenta el tamaño de la lista. Ahí es donde entra la notación Big O._

#### La notación Big O te permite comparar el número de operaciones

Por ejemplo, supongamos que tiene una lista de tamaño n. La búsqueda simple necesita verificar cada elemento, por lo que tomará n operaciones. El tiempo de ejecución en notación Big O es O (n).

_¿Dónde están los segundos?_

No hay ninguno - Big O no te dice la velocidad en segundos. _La notación Big O le permite comparar el número de operaciones._ Te dice qué tan rápido crece el algoritmo.

![](https://user-images.githubusercontent.com/5860906/31781175-768c208e-b500-11e7-9718-e632d1391e2d.png) </ p

#### Tiempos de ejecución más comunes para algoritmos

Una lista de los tiempos de ejecución más comunes para algoritmos en términos de notación Big O. Aquí hay cinco tiempos de ejecución de Big O que encontrarás mucho, ordenados de más rápido a más lento:

1.  O (log n), también conocido como _log time_ . Ejemplo: búsqueda binaria.
2.  O (n), también conocido como _tiempo lineal_ . Ejemplo: Búsqueda simple.
3.  O (n \* log n) Ejemplo: un algoritmo de clasificación rápida, como quicksort (que aparece en el capítulo 4).
4.  En 2) Ejemplo: un algoritmo de clasificación lenta, como la selección por selección (que aparece en el capítulo 2).
5.  ¡En!) Ejemplo: un algoritmo muy lento, como el vendedor que viaja (¡a continuación!).

_Este artículo solo cubre los conceptos básicos de Big O. Para una explicación más detallada, eche un vistazo a sus respectivas guías FreeCodeCamp para algoritmos._

### Más información

*   [academia Khan](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation)
*   [Big O hoja de trucos](http://bigocheatsheet.com/)