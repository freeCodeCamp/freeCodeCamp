---
title: Threads
localeTitle: Trapos
---
## Trapos

Una secuencia de instrucciones del programa dada al sistema operativo para ejecutar. Es la secuencia síncrona más pequeña que se puede ejecutar. Al ser sincrónicas, las instrucciones en un hilo son lineales y se ejecutan una tras otra. Si un programa tiene varios subprocesos, el programa en su conjunto puede ser asíncrono, ya que estos subprocesos ejecutan sus propias instrucciones de forma independiente entre sí (simultáneamente).

Un hilo es una abstracción que los sistemas operativos utilizan para representar la CPU a los programas. No existe un concepto real de hilos en el código de máquina o en los lenguajes de ensamblaje.

Los hilos son una forma en la programación para realizar múltiples tareas al mismo tiempo.

Una distinción común que uno debe hacer es la diferencia entre subprocesos y procesos. Un hilo es un hijo de un proceso por así decirlo.  
Puede haber cualquier cantidad de subprocesos secundarios en el contexto de un proceso. Los hilos pueden aumentar la velocidad de ejecución de un programa, al aumentar el porcentaje de CPU utilizado para la tarea.  
Tenga en cuenta que aumentar drásticamente el número de subprocesos en un programa puede requerir una gran cantidad de CPU, y si se está utilizando el 100% de una CPU, los subprocesos no tendrán ningún efecto en la velocidad de ejecución.

![Subprocesos dentro de un gráfico de proceso](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Multithreaded_process.svg/440px-Multithreaded_process.svg.png)

Supongamos que tiene varios programas abiertos: cada parte del tiempo de la CPU que corresponde a un programa está representada por uno o más subprocesos asociados con ese programa. Cuando el **programador** del sistema operativo decide que es el turno de ejecución del Programa A, el sistema operativo alimenta (o para ser más preciso, multiplexa) las instrucciones en el subproceso del Programa A a la CPU, que luego ejecuta estas instrucciones.

Un subproceso para un determinado programa consta de algunas o todas las instrucciones compiladas de ese programa, además de cierta información requerida para que la CPU ejecute estas instrucciones.

**El** subprocesamiento múltiple es un concepto de programación en el que un programa genera múltiples subprocesos durante la ejecución para realizar las tareas más rápido.

Aquí hay un ejemplo simple de multiproceso en python que imprime los números del 1 al 10, generando un hilo separado para cada declaración de impresión.
```
import threading 
 
 def print_number(number): 
    print(number) 
 
 if __name__ == "__main__": 
    for i in range(1, 11): 
        threading.Thread(target=print_number, args=(i,)).start() 
```

#### Más información:

*   [Hilos (Wikipedia)](https://en.wikipedia.org/wiki/Thread_(computing))
*   [Entendiendo multiproceso](http://www.nakov.com/inetjava/lectures/part-1-sockets/InetJava-1.3-Multithreading.html)