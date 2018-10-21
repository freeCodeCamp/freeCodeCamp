---
title: ACID
localeTitle: ÁCIDO
---
## ÁCIDO

En informática, ACID (Atomicidad, consistencia, aislamiento, durabilidad) es un conjunto de propiedades para modificaciones de base de datos. Ayudan a garantizar la validez de una transacción, incluso con errores o fallos.

Una **transacción** es cualquier secuencia de operaciones de base de datos que satisfaga las propiedades de ACID y podría verse como una sola operación lógica en los datos. Un ejemplo es una transferencia de fondos de una cuenta bancaria a otra. Esto implica múltiples cambios, como cargar una cuenta y acreditar otra, pero se considera que es una sola transacción.

### Atomicidad

Esto significa que una transacción compleja se procesa completamente o no se procesa. Si una parte de la transacción falla, entonces la transacción completa no se completa y la base de datos no se modifica. De esta manera, si se produce un bloqueo, un fallo de alimentación o un error, la base de datos no termina en un estado en el que solo se realizan partes de una transacción.

### Consistencia

Esto significa que los datos serán consistentes. Cualquier dato ingresado en la base de datos debe ser válido y permitido según las restricciones que especifique. Se asegura de que cualquier transacción cambie la base de datos de un estado válido a otro estado válido.

### Aislamiento

Esto significa que si dos transacciones se ejecutan al mismo tiempo, una transacción no puede leer datos de una transacción que aún no se ha completado. Cada transacción verá la base de datos como si las transacciones se ejecutaran de forma secuencial. Si una transacción necesita leer datos que la otra está escribiendo, tiene que esperar hasta que la otra transacción finalice. Los efectos de una transacción incompleta no afectarán a otra transacción.

### Durabilidad

Esto significa que una vez que se completa una transacción, seguirá siéndolo, incluso en caso de pérdida de energía u otros errores. Garantiza que todos los cambios se registran en un medio de almacenamiento no volátil (como un disco duro) y registra la transacción completada.

### Más información:

*   Artículo de ACID: [Wikipedia](https://en.wikipedia.org/wiki/ACID)
*   Resumen del video: [YouTube](https://www.youtube.com/watch?v=LSB4eceRsw8)