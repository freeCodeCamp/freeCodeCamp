---
title: Queues
localeTitle: frac
---
## Colas

La cola es una estructura de datos de First In First Out (FIFO). Muchos algoritmos utilizan colas en su núcleo para mejorar el rendimiento.

La cola es uno de los tipos de datos abstractos fundamentales (ADT). Es similar a las colas que tenemos en películas o supermercados. La primera persona en llegar será servida primero, ¿verdad? Del mismo modo, el primer elemento que se inserte se eliminará primero. Hay varios tipos de colas tales como,

1.  Cola simple (o cola)
2.  Cola circular
3.  Cola de prioridad
4.  Dequeue (doble cola de cola)

Si puede comprender la cola simple (que de aquí en adelante se denominará "Cola"), entonces todas las demás son igual de fáciles, con pequeñas modificaciones.

Las operaciones más comunes disponibles en la cola son,

1.  Agregar / ofrecer: inserta un elemento en el final de la cola.
2.  Eliminar / Sondeo: elimina un elemento del principio de la cola.
3.  Peek: devuelve el elemento al principio de la cola, pero no lo eliminará.
4.  Tamaño / recuento: devuelve el número de elementos actualmente presentes en la cola.
5.  IsEmpty - Compruebe si la cola está vacía o no.

La implementación de una cola es posible utilizando matrices o listas vinculadas. La siguiente es una implementación de matriz simple de la estructura de datos de cola con sus operaciones más comunes.

\`\` \`JavaScript  
var Queue = function () { var queue = \[\]; var frontal = 0; var espalda = 0; regreso { isEmpty: function () { volver al frente> = atrás || queue.length === 0; } agregar: función (elem) { / \* También puedes hacer queue.push (elem) en JavaScript. Así lo hacen en otros idiomas \* / queue \[back ++\] = elem; } eliminar: función () { if (! this.isEmpty ()) { cola de retorno \[frente ++\]; // o queue.shift () } else { lanzar nuevo error ("La cola está vacía"); } } peek: function () { if (! this.isEmpty ()) { cola de retorno \[frente\]; } } } };

var queue = new Queue (); console.log (queue.isEmpty ()); // cierto queue.add (1); queue.add (2); console.log (queue.remove ()); // 1 console.log (queue.peek ()); // 2 console.log (queue.remove ()); // 2 console.log (queue.remove ()); // excepción \`\` \`

#### Aplicaciones

*   Simulación
*   Programación (Programación de trabajos, Programación de discos)
*   Gestión de recursos compartidos
*   Buffer de teclado
*   Amplia primera búsqueda
*   Para manejar la congestión en la red.

#### Más información:

*   [Más información en colas - GeeksForGeeks](http://www.geeksforgeeks.org/queue-data-structure/)
*   [Resuelve desafíos usando colas - Hackerrank](https://www.hackerrank.com/domains/data-structures/queues)
*   [HackerRank Stacks and Queues Video](https://www.youtube.com/watch?v=wjI1WNcIntg)