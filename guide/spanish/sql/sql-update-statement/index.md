---
title: SQL Update Statement
localeTitle: Declaración de actualización de SQL
---
## Declaración de actualización de SQL

Para actualizar un registro en una tabla, utilice la instrucción `UPDATE` .

Ten cuidado. Puede actualizar todos los registros de la tabla o solo algunos. Utilice la condición `WHERE` para especificar qué registros desea actualizar. Es posible actualizar una o más columnas a la vez. La sintaxis es:

```sql
UPDATE table_name 
 SET column1 = value1, 
    column2 = value2, ... 
 WHERE condition; 
```

Aquí hay un ejemplo que actualiza el nombre del registro con Id 4:

```sql
UPDATE Person 
 SET Name = “Elton John” 
 WHERE Id = 4; 
```

También puede actualizar columnas en una tabla usando valores de otras tablas. Utilice la cláusula `JOIN` para obtener datos de varias tablas. La sintaxis es:

```sql
UPDATE table_name1 
 SET table_name1.column1 = table_name2.columnA 
    table_name1.column2 = table_name2.columnB 
 FROM table_name1 
 JOIN table_name2 ON table_name1.ForeignKey = table_name2.Key 
```

Aquí hay un ejemplo actualizando el Administrador de todos los registros:

```sql
UPDATE Person 
 SET Person.Manager = Department.Manager 
 FROM Person 
 JOIN Department ON Person.DepartmentID = Department.ID 

```