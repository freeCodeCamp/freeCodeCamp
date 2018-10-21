---
title: SQL Insert Query
localeTitle: Consulta de inserción de SQL
---
## Consulta de inserción de SQL

Las consultas de inserción son una forma de insertar datos en una tabla. Digamos que hemos creado una tabla usando

`CREATE TABLE example_table ( name varchar(255), age int)`

**tabla de ejemplos**

| Nombre | Edad | | --- | --- |

Ahora para agregar algunos datos a esta tabla, usaremos **INSERT** de la siguiente manera:

`INSERT INTO example_table (column1,column2) VALUES ("Andrew",23)`

**tabla de ejemplos**

| Nombre | Edad | | --- | --- | | Andrew | 23 |

Incluso lo siguiente funcionará, pero siempre es una buena práctica especificar qué datos van a qué columna.

`INSERT INTO table_name VALUES ("John", 28)`

**tabla de ejemplos**

| Nombre | Edad | | --- | --- | | Andrew | 23 | | John | 28 |