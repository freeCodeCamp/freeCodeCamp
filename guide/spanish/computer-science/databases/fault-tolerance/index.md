---
title: Fault Tolerance
localeTitle: Tolerancia a fallos
---
## Tolerancia a fallos

La tolerancia a fallos es la propiedad que permite que un sistema continúe su operación prevista, posiblemente a un nivel reducido, en lugar de fallar completamente, cuando falla una parte del sistema.

Una **base de datos** es tolerante a errores cuando puede acceder a un fragmento secundario cuando el primario no está disponible.

Esto se logra a través de:

*   Replicación de base de datos
*   Detección de fallas y failover

Una base de datos que mantiene múltiples copias de todos los datos en diferentes nodos físicos ubicados en subsistemas físicos independientes, como los racks de servidores y los enrutadores de red, tiene una mayor probabilidad de continuar operando cuando la copia principal de los datos no está disponible debido a su capacidad para leer datos de múltiples replicaciones.

En los sistemas de distribución a gran escala, es cada vez más importante contar con sistemas confiables de detección de fallas que puedan identificar las unidades de almacenamiento con fallas y proporcionar unidades de fallas para maximizar el tiempo de actividad del servicio.