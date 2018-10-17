---
title: SQL Data Types
localeTitle: Tipos de datos SQL
---
# Tipos de datos SQL

Cada columna en una tabla debe tener un tipo de datos. Indica el tipo de valor que almacena la columna.

Cada base de datos puede aceptar diferentes tipos de datos, pero en general, la lista de tipos de datos es:

### Tipos de cuerdas

Tipo de datos | Descripción ------------ | ------------- `CHAR(n)` | Cadena de caracteres. Longitud fija n. La longitud mínima es 1. Si asigna un valor a una columna CHAR que contiene menos caracteres que la longitud definida, el espacio restante se rellena con caracteres en blanco. `VARCHAR(n)` | Cadena de caracteres. Longitud variable. Longitud máxima n. Longitud mínima es 1 `BINARY(n)` | Cadena binaria Longitud fija n `VARBINARY(n)` o `BINARY VARYING(n)` | Cadena binaria Longitud variable. Longitud máxima n

### Tipos numericos

Tipo de datos | Descripción ------------ | ------------- `INTEGER` | Entero numérico. De -2,147,483,648 a 2,147,483,647. `SMALLINT` | Entero numérico. Desde -32,768 hasta 32,767. `BIGINT` | Entero numérico. Desde -9,223,372,036,854,775,808 hasta 9,223,372,036,854,775,807 `DECIMAL(p,s)` o `NUMERIC(p,s)` | Exactas numéricas, precisión p, escala s. La precisión es el número total máximo de dígitos decimales que se almacenarán, tanto a la izquierda como a la derecha del punto decimal. Escala es el número de dígitos decimales que se almacenarán a la derecha del punto decimal. Este número se resta de p para determinar el número máximo de dígitos a la izquierda del punto decimal. Ejemplo: decimal (5,2) es un número que tiene 3 dígitos antes del decimal y 2 dígitos después del decimal. `FLOAT(p)` | Aproximación numérica, mantisa de precisión p. Un número flotante en base 10 de notación exponencial. El argumento de tamaño para este tipo consiste en un solo número que especifica la precisión mínima `REAL` | Aproximación numérica, mantisa de precisión 7. `FLOAT` Aproximación numérica, mantisa de precisión 16. `DOUBLE PRECISION` | Aproximación numérica, mantisa de precisión 16.

### Tipos de fecha y hora

Tipo de datos | Descripción ------------ | ------------- `DATE` | Almacena valores de año, mes y día. `TIME` | Almacena valores de hora, minuto y segundo. `DATETIME` | Almacena valores de año, mes, día, hora, minuto y segundo `TIMESTAMP` | Almacena el número de segundos desde la época de Unix. `TIME WITH TIME ZONE` | Almacena la hora del día con la zona horaria. `TIMESTAMP WITH TIME ZONE` | Almacena la marca de tiempo con la zona horaria

### Otros tipos de datos

Tipo de datos | Descripción ------------ | ------------- `BOOLEAN` | Almacena valores `TRUE` o `FALSE` `ARRAY` | Un conjunto de elementos de longitud y ordenados. `MULTISET` | Una colección de elementos de longitud variable y desordenada. `XML` | Almacena datos XML