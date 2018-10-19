---
title: SQL General Data Types
localeTitle: Tipos de datos generales de SQL
---
## Tipos de datos generales de SQL

# Tipos de datos SQL

Cada columna en una tabla de base de datos debe tener un nombre y un tipo de datos.

Un desarrollador de SQL debe decidir qué tipo de datos se almacenarán dentro de cada columna al crear una tabla. El tipo de datos es una guía para que SQL comprenda qué tipo de datos se espera dentro de cada columna, y también identifica cómo interactuará SQL con los datos almacenados.

# Tipos de datos MySQL

Los tipos de datos generales de SQL consisten en lo siguiente:

1.  Un valor basado en texto y / o numérico, a menudo denominado STRING
2.  Un valor solo numérico, a menudo denominado INTEGER
3.  Un valor basado en calendario y / o reloj, a menudo referido como FECHA o HORA
4.  Un valor específico de la base de datos, como un indicador booleano (dos opciones), una matriz que almacena múltiples valores dentro de un punto de datos

## Tipos de datos de texto:

| Tipo de datos | Descripción | | ------------- |: -------------: | | CHAR (tamaño) | Mantiene una cadena de longitud fija (puede contener letras, números y caracteres especiales). El tamaño fijo se especifica entre paréntesis. Puede almacenar hasta 255 caracteres | | VARCHAR (tamaño) | Contiene una cadena de longitud variable (puede contener letras, números y caracteres especiales). El tamaño máximo se especifica entre paréntesis. Puede almacenar hasta 255 caracteres. Nota: Si coloca un valor mayor que 255, se convertirá a un tipo de texto | | TINYTEXT | Sostiene una cadena con una longitud máxima de 255 caracteres | | Texto | Sostiene una cadena con una longitud máxima de 65,535 caracteres | | BLOB | Para BLOBs (Objetos Binarios Grandes). Guarda hasta 65,535 bytes de datos | | MEDIUMTEXTO | Sostiene una cadena con una longitud máxima de 16,777,215 caracteres | | MEDIUMBLOB | Para BLOBs (Objetos Binarios Grandes). Guarda hasta 16,777,215 bytes de datos | | LONGTEXT | Sostiene una cadena con una longitud máxima de 4,294,967,295 caracteres | | LONGBLOB | Para BLOBs (Objetos Binarios Grandes). Guarda hasta 4,294,967,295 bytes de datos | | ENUM (x, y, z, etc.) | Le permite introducir una lista de valores posibles. Puede enumerar hasta 65535 valores en una lista ENUM. Si se inserta un valor que no está en la lista, se insertará un valor en blanco. Nota: Los valores se ordenan en el orden en que se ingresan. Usted ingresa los valores posibles en este formato: ENUM ('X', 'Y', 'Z') | | SET | Similar a ENUM, excepto que SET puede contener hasta 64 elementos de lista y puede almacenar más de una opción |

# Número de tipos de datos:

| Tipo de datos | Descripción | | ------------- |: -------------: | | TINYINT (tamaño) | -128 a 127 normales. 0 a 255 SIN FIRMAR _. El número máximo de dígitos puede especificarse entre paréntesis | | SMALLINT (tamaño) | -32768 a 32767 normal. 0 a 65535 SIN FIRMAR_ . El número máximo de dígitos puede especificarse entre paréntesis | | MEDIUMINT (tamaño) | -8388608 a 8388607 normal. 0 a 16777215 NO FIRMADO _. El número máximo de dígitos puede especificarse entre paréntesis | | INT (tamaño) | -2147483648 a 2147483647 normal. 0 a 4294967295 NO FIRMADO_ . El número máximo de dígitos puede especificarse entre paréntesis | | BIGINT (tamaño) | -9223372036854775808 a 9223372036854775807 normal. 0 a 18446744073709551615 NO FIRMADO \*. El número máximo de dígitos puede especificarse entre paréntesis | | FLOTADOR (tamaño, d) | Un pequeño número con un punto decimal flotante. El número máximo de dígitos se puede especificar en el parámetro tamaño. El número máximo de dígitos a la derecha del punto decimal se especifica en el parámetro d | | DOBLE (talla, d) | Un gran número con un punto decimal flotante. El número máximo de dígitos se puede especificar en el parámetro tamaño. El número máximo de dígitos a la derecha del punto decimal se especifica en el parámetro d | | DECIMAL (talla, d) | Un DOBLE almacenado como una cadena, permitiendo un punto decimal fijo. El número máximo de dígitos se puede especificar en el parámetro tamaño. El número máximo de dígitos a la derecha del punto decimal se especifica en el parámetro d |

# Tipos de datos de fecha:

| Tipo de datos | Descripción | | ------------- |: -------------: | | FECHA () | Una cita. Formato: YYYY-MM-DD Nota: El rango admitido es de '1000-01-01' a '9999-12-31' | | DATETIME () | Una combinación de fecha y hora. Formato: YYYY-MM-DD HH: MI: SS Nota: El rango admitido es de '1000-01-01 00:00:00' a '9999-12-31 23:59:59' | | TIMESTAMP () | Una marca de tiempo. Los valores de TIMESTAMP se almacenan como el número de segundos desde la época de Unix ('1970-01-01 00:00:00' UTC). Formato: YYYY-MM-DD HH: MI: SS Nota: El rango admitido es de '1970-01-01 00:00:01' UTC a '2038-01-09 03:14:07' UTC | | TIEMPO () | Un momento. Formato: HH: MI: SS Nota: El rango admitido es de '-838: 59: 59' a '838: 59: 59' | | AÑO () | Un año en formato de dos o cuatro dígitos. Nota: Valores permitidos en formato de cuatro dígitos: 1901 a 2155. Valores permitidos en formato de dos dígitos: 70 a 69, que representan los años de 1970 a 2069 |

#### Más información:

Puede encontrar más información sobre los tipos de datos específicos en SQL en la sección [Tipos de datos SQL](https://guide.freecodecamp.org/sql/sql-data-types/) de freeCodeCamp.