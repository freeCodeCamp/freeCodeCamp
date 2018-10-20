---
title: SQL Insert Query
localeTitle: Consulta de inserción de SQL
---
## Consulta de inserción de SQL

Las consultas de inserción son una forma de añadir datos en una tabla que ya tengas creada. Digamos que hemos creado una tabla usando

`CREATE TABLE example_table ( name varchar(255), age int)`

**tabla de ejemplo**

| Nombre | Edad |
|--------|------|
|  ----  | ---- |

Ahora para agregar algunos datos a esta tabla vacía, usaremos el **INSERT** de la siguiente manera:

`INSERT INTO example_table (name,age) VALUES ("Andrew",23)`

**tabla de ejemplos**

| Nombre | Edad |
|--------|------|
| Andrew |  23  |

Incluso lo siguiente funcionará, pero siempre es una buena práctica especificar qué datos van a qué columna.

`INSERT INTO table_name VALUES ("John", 28)`

**tabla de ejemplos**


| Nombre | Edad |
|---------------|
| Andrew |  23  |
|  John  |  28  |

1). En la primera parte podemos observar como creamos una nueva tabla, no haré énfasis en ésta parte porque supongo que ya has                     visualizado el artículo para la creación de una tabla y por lo tanto estás aqui porque ya sabes hacerlo.

2). En la segunda parte se observa como empleamos la instrucción sql para añadir datos a la table, el **INSERT INTO example_table** se usa para indicar que vamos a ingresar un nuevo dato a la tabla que nosotros le especifiquemos, en nuestro caso la tabla example_table, después lo que se encuentra entre paréntesis **(name,age)** es para indicar las columnas de la tabla a las que le agregaremos un registro, y por último, el **VALUES ("John", 28)** estamos indicandole los valores que vamos a insertar en la tabla, cabe destacar que en el orden en que pusiste las columnas de la tabla debes poner asi los datos que vas a ingresar, puedes ver que primero le indicamos que se insertara el nombre, entonces en el momento de indicarle los valores el primer dato que vas a poner sera el nombre ya que este sera guardado en su columna correspondiente, y siguiendo lo mismo, le indicamos que despues del nombre ira la edad, entonces indicamos de segundo parametro que es la edad que guardara.

Si por casualidad o para probar si se cumple ésta condición puedes probar ésto:

`INSERT INTO example_table (name,age) VALUES (23,"Andrew")`

| Nombre |  Edad  |
|--------|--------|
|   23   | Andrew |

Al hacer ésto y no seguir el mismo patrón de columnas en la  parte de los valores, obtendremos un resultado como el expuesto arriba, en la columna del nombre se visualiza la edad y en la de la edad se visualiza el nombre, he ahí la importancia de colocar los datos en base a la declaración de columnas que hemos echo en la sql.

3). Y para finalizar, en la última sql que hemos construido puedes observar que es más simple y que genera el mismo resultado que la anterior, sin embargo, cabe destacar, que si usas ésta sintáxis, tendrás que estar plenamente seguro a que columna corresponde cada valor que estás ingresando, así que te aconsejo que uses lla primera sintáxis ya que es un poco mas larga pero mas completa y te permite detectar errores o fallas en la inserción de campos mucho mas rapido y eficiente.
