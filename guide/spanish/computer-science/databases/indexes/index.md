---
title: Indexes
localeTitle: Índices
---
## Índices

Un **índice de base de datos** es una estructura de datos que mejora la eficiencia de las recuperaciones de datos en una tabla de base de datos. Una tabla de base de datos puede tener más de un índice y se podría crear un índice en una o más columnas de una tabla de base de datos.

### ¿Cómo funcionan los índices?

Ahora imagine que está en una biblioteca donde los libros no están dispuestos en un orden predeterminado. Si le pidieran que buscara un libro, tendría que ir estante por estante para ubicarlo. Esto puede estar bien cuando solo hay unos pocos estantes de libros, pero el proceso requiere mucho tiempo si se trata de una biblioteca de varios pisos.

Por otro lado, suponga que los libros ahora están ordenados por el apellido del autor. Dado que conoce el apellido del autor para el libro que está buscando, por ejemplo, "Carnegie", puede buscar el estante para "C" y luego buscar en el estante específico. Te has salvado de ir a través de cada estante individual.

### La compensación

Como se describió anteriormente, un **índice** es una estructura de datos, por lo tanto, ocupa espacio de almacenamiento. Cuantos más índices se definan, más espacio de almacenamiento se ocupará para mantener la estructura de datos. Otro costo viene en forma de actualizaciones adicionales (o escrituras) para mantener los índices actualizados. Cuando se agregan nuevos registros a una tabla que tiene un índice, se requieren escrituras adicionales para actualizar la estructura de datos del índice.

#### Más información:

[Índice de la base de datos](https://en.wikipedia.org/wiki/Database_index)