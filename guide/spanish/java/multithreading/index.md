---
title: Multithreading
localeTitle: Multihilo
---## Multihilo

El subprocesamiento múltiple es un proceso de ejecución de múltiples procesos simultáneamente. Java inicia el programa con un hilo principal y se agregan más hilos al hilo principal cada vez que cualquier usuario lo crea. El hilo principal es el primer hilo de usuario en cualquier programa Java. Además, JVM se asegura de que todos los subprocesos del usuario estén cerrados antes de que finalice el programa.

Un hilo tiene ventajas y desventajas.

## Ventajas:

*   Ejecutando código independientemente de otros hilos.
*   Creación de un diseño modular.

## Desventajas:

Condiciones de carrera y puntos muertos si los hilos no están sincronizados correctamente.

Los hilos se pueden dividir en dos clases:

*   Hilos de usuario
*   Hilos de Demonio

Un hilo puede ser creado de 2 maneras:

1.  implementando la interfaz Runnable: Solo hay un método en la interfaz de Runnable, es decir, public void run (). La implementación de este método asegurará que cada vez que este hilo comience a ejecutarse el código dentro de run ().
    
2.  clase de hilo extendido Esta clase también contiene public void run () que debemos anular para poder ejecutar nuestro propio código. La desventaja de usar este método es que tenemos una superclase en Thread y no podemos extender ninguna otra clase a la que queramos.
    

El código para ambos se puede encontrar aquí: http://ide.geeksforgeeks.org/k7GjcA.

Notará que si este código se ejecuta varias veces, los resultados pueden diferir. y eso es decidido por el sistema operativo sobre el que se ejecuta. El sistema operativo puede elegir cualquier hilo de un estado ejecutable y puede ejecutarlo. No tenemos ningún control sobre eso. Si hay varios subprocesos en estado ejecutable (listo para ejecutarse), cualquiera puede ser seleccionado. Incluso no depende de la prioridad.

Más detalles: https://www.ntu.edu.sg/home/ehchua/programming/java/J5e\_multithreading.html