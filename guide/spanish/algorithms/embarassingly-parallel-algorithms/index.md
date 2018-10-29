---
title: Embarassingly Parallel Algorithms
localeTitle: Algoritmos Embarazalmente Paralelos
---
## Algoritmos Embarazalmente Paralelos

En la programación paralela, un algoritmo vergonzosamente paralelo es uno que no requiere comunicación o dependencia entre los procesos. A diferencia de los problemas informáticos distribuidos que requieren comunicación entre tareas, especialmente en resultados intermedios, los algoritmos vergonzosamente paralelos son fáciles de realizar en granjas de servidores que carecen de la infraestructura especial utilizada en un verdadero cluster de supercomputadoras. Debido a la naturaleza de los algoritmos vergonzosamente paralelos, son adecuados para grandes plataformas distribuidas basadas en Internet, y no sufren de una desaceleración paralela. Lo opuesto a los problemas vergonzosamente paralelos son problemas inherentemente seriales, que no pueden ser paralelos en absoluto. El caso ideal de algoritmos vergonzosamente paralelos se puede resumir de la siguiente manera:

*   Todos los subproblemas o tareas se definen antes de que comiencen los cálculos.
*   Todas las soluciones secundarias se almacenan en ubicaciones de memoria independientes (variables, elementos de matriz).
*   Así, el cálculo de las sub-soluciones es completamente independiente.
*   Si los cálculos requieren alguna comunicación inicial o final, entonces lo llamamos vergonzosamente paralelo.

Muchos pueden preguntarse la etimología del término "vergonzosamente". En este caso, vergonzosamente no tiene nada que ver con la vergüenza; de hecho, significa una sobreabundancia; aquí se refiere a problemas de paralelización que son "vergonzosamente fáciles".

Un ejemplo común de un problema vergonzosamente paralelo es la representación de video en 3D manejada por una unidad de procesamiento de gráficos, donde cada cuadro o píxel puede manejarse sin interdependencia. Algunos otros ejemplos serían el software de plegamiento de proteínas que puede ejecutarse en cualquier computadora con cada máquina haciendo una pequeña parte del trabajo, generando todos los subconjuntos, números aleatorios y simulaciones de Monte Carlo.