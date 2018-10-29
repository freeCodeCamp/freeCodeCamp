---
title: Key Value Databases
localeTitle: Bases de datos de valor clave
---
## Bases de datos de valor clave

Una base de datos de valores clave, o un almacén de valores clave, es un tipo de [base de](https://en.wikipedia.org/wiki/NoSQL) datos [NoSQL](https://en.wikipedia.org/wiki/NoSQL) que utiliza un almacenamiento de clave / valor. Esto significa que los datos almacenados en la base de datos son una colección de pares clave-valor.

Este tipo de estructura de datos se utiliza en muchos lenguajes de programación. Los pares clave-valor se conocen comúnmente como matrices asociativas, diccionarios o hash. Por ejemplo, considere un diccionario de números de teléfono:

| llave | valor | | ------------ | ------------- | | Rick | 1234555 | | Morty | 7754321 | | Verano | 5512377 |

### La clave

La `key` en un par clave-valor debe ser única. Tener un identificador único le permitirá acceder al valor asociado con una clave determinada.

En teoría, la clave puede ser cualquier cosa que quieras. Una clave puede ser una cadena, una secuencia binaria, una imagen, entre otras. Sin embargo, algunas bases de datos pueden imponer limitaciones en el tipo de claves que se pueden usar.

Aquí hay algunas recomendaciones:

*   Las claves deben seguir una convención para tener consistencia. Las claves en un diccionario de números telefónicos siempre deben ser nombres, y no una combinación de nombres, direcciones de correo electrónico y números.
*   Las claves no deben ser demasiado largas, o podría tener problemas de rendimiento.
*   Las claves no deben ser demasiado cortas, o podría tener problemas de legibilidad.

### El valor

El `value` en un almacén de clave-valor puede ser lo que quieras. Esto incluye cadenas, números, código, una imagen, una lista, o incluso otro par clave-valor. Algunas bases de datos le permiten restringir el tipo de datos que se pueden almacenar.

### Casos de uso

Las bases de datos de valores clave se pueden utilizar en múltiples escenarios. Aquí hay una lista de las aplicaciones más comunes:

*   Directorios de telecomunicaciones.
*   Perfiles de usuario e información de sesión.
*   Contenido del carrito de compras.
*   Detalles del producto o reseñas.
*   Tablas de reenvío de Protocolo de Internet (IP).
*   Estado de salud o configuración de los servicios.

### Ejemplos

Aquí hay algunos ejemplos de bases de datos que utilizan el enfoque clave-valor:

*   [Redis](https://redis.io)
*   [Base de datos Oracle NoSQL](https://www.oracle.com/database/nosql/index.html)
*   [Cassandra](http://cassandra.apache.org) (híbrido entre bases de datos de valor clave y orientadas a columnas)
*   [Voldemort](http://www.project-voldemort.com/voldemort/)
*   [Consul KV store](https://www.consul.io/intro/getting-started/kv.html) (una herramienta con su propia tienda de valor-clave)

#### Más información:

*   Bases de datos de valor-clave en [Wikipedia](https://en.wikipedia.org/wiki/Key-value_database)

La base de datos de Key-Value es una base de datos simple que utiliza un mapa o un diccionario como el modelo de datos fundamental en el que cada clave está asociada con uno y solo un valor en una colección y es el tipo de base de datos NoSQL más flexible.