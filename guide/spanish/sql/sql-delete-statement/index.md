---
title: SQL Delete Statement
localeTitle: Declaración de eliminación de SQL
---
## Declaración de eliminación de SQL

Para eliminar un registro en una tabla, utilice la instrucción `DELETE` .

Ten cuidado. Puede eliminar todos los registros de la tabla o solo algunos. Utilice la condición `WHERE` para especificar qué registros desea eliminar. La sintaxis es:

```sql
DELETE FROM table_name 
 WHERE condition; 
```

Aquí hay un ejemplo que borra de la tabla Persona el registro con Id 3:

```sql
DELETE FROM Person 
 WHERE Id = 3; 
```

Usando DELETE para eliminar todos los registros de una tabla dada

```sql
DELETE * FROM Person 
 ; 
```

O, dependiendo de su RDBMS, puede usar la instrucción TRUNCATE TABLE que elimina todos los registros de una tabla y, dependiendo de su RDBMS, puede o no permitir la reversión. ELIMINAR es DML y TRUNCATE es DDL.

```sql
TRUNCATE TABLE Person; 

```