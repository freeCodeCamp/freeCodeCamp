---
title: SQL Interview Questions
localeTitle: Preguntas de la entrevista de SQL
---
## Preguntas de la entrevista de SQL

### ¿Qué es una unión interna en SQL?

Este es el tipo predeterminado de unión si no se especifica ninguna unión. Devuelve todas las filas en las que hay al menos una coincidencia en ambas tablas.

```sql
SELECT * FROM A x JOIN B y ON y.aId = x.Id 
```

### ¿Qué es una unión izquierda en SQL?

Una combinación a la izquierda devuelve todas las filas de la tabla izquierda y las filas coincidentes de la tabla derecha. Las filas en la tabla izquierda se devolverán incluso si no hubo coincidencia en la tabla derecha. Las filas de la tabla izquierda sin coincidencia en la tabla derecha tendrán un `null` para los valores de la tabla derecha.

```sql
SELECT * FROM A x LEFT JOIN B y ON y.aId = x.Id 
```

### ¿Qué es una unión correcta en SQL?

Una unión derecha devuelve todas las filas de la tabla derecha y las filas coincidentes de la tabla izquierda. Al contrario de una combinación izquierda, esto devolverá todas las filas de la tabla derecha, incluso cuando no haya coincidencia en la tabla izquierda. Las filas en la tabla derecha que no tienen ninguna coincidencia en la tabla izquierda tendrán valores `null` para las columnas de la tabla izquierda.

```sql
SELECT * FROM A x RIGHT JOIN B y ON y.aId = x.Id 
```

### ¿Qué es una unión completa en SQL?

Una unión completa devuelve todas las filas para las que existe una coincidencia en cualquiera de las tablas. Por lo tanto, si hay filas en la tabla izquierda que no tienen coincidencias en la tabla derecha, se incluirán. Además, si hay filas en la tabla de la derecha que no tienen coincidencias en la tabla de la izquierda, se incluirán.

```sql
SELECT Customers.CustomerName, Orders.OrderID 
 FROM Customers 
 FULL OUTER JOIN Orders 
 ON Customers.CustomerID=Orders.CustomerID 
 ORDER BY Customers.CustomerName 
```

### ¿Cuál es el resultado del siguiente comando?

\`\` \` DROP VIEW view\_name
```
Here it'll be an error because we can't perform a DML operation on a view. 
 
 ### Can we perform a rollback after using ALTER command? 
 No, because ALTER is a DDL command and Oracle server performs an automatic COMMIT when the DDL statements are executed. 
 
 
 ### Which is the only constraint that enforces rules at column level? 
 NOT NULL is the only constraint that works at the column level. 
 
 
 ### What are the pseudocolumns in SQL? Give some examples? 
 A pseudocolumn is a function which returns a system generated value. The reason it is known as so because a pseudocolumn is an Oracle assigned value used in the same context as an Oracle database column but not stored on disk. 
```

Algunos ejemplos de ello son: ROWNUM, ROWID, USER, CURRVAL, NEXTVAL etc. \`\` \`

### Cree un usuario my723acct con la contraseña kmd26pt. Utilice los _datos de_ usuario _y los espacios de tabla de datos temporales proporcionados por PO8 y proporcione a este usuario 10M de espacio de almacenamiento en_ datos de _usuario_ y 5M de espacio de almacenamiento en datos\_temporales.

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### Crear las _tablas de_ rol de rol y\_vistas.

`sql CREATE ROLE role_tables_and_views`

### Otorgue al rol de la pregunta anterior los privilegios para conectarse a la base de datos y los privilegios para crear tablas y vistas.

El privilegio para conectarse a la base de datos es CREAR SESIÓN El privilegio para crear la tabla es CREAR TABLA El privilegio para crear la vista es CREAR VISTA `sql GRANT Create session, create table, create view TO role_tables_and_views`

### Otorgue el rol anterior en la pregunta a los usuarios anny y rita.

`sql GRANT role_tables_and_views TO anny, rita`

### Cree un usuario my723acct con la contraseña kmd26pt. Utilice los _datos de_ usuario _y los espacios de tabla de datos temporales proporcionados por PO8 y proporcione a este usuario 10M de espacio de almacenamiento en_ datos de _usuario_ y 5M de espacio de almacenamiento en datos\_temporales.

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### Crear las _tablas de_ rol de rol y\_vistas.

`sql CREATE ROLE role_tables_and_views`

### Otorgue al rol de la pregunta anterior los privilegios para conectarse a la base de datos y los privilegios para crear tablas y vistas.

El privilegio para conectarse a la base de datos es CREAR SESIÓN El privilegio para crear la tabla es CREAR TABLA El privilegio para crear la vista es CREAR VISTA `sql GRANT Create session, create table, create view TO role_tables_and_views`

### Otorgue el rol anterior en la pregunta a los usuarios anny y rita.

`sql GRANT role_tables_and_views TO anny, rita`

### Escriba un comando para cambiar la contraseña del usuario rita de abcd a dfgh

`sql ALTER USER rita IDENTIFIED BY dfgh`

### Los usuarios rita y anny no tienen privilegios SELECT en la tabla INVENTORY que fue creada por SCOTT. Escriba un comando para permitir que SCOTT otorgue privilegios SELECT a los usuarios en estas tablas.

`sql GRANT select ON inventory TO rita, anny`

### El usuario rita se ha transferido y ya no necesita el privilegio que se le otorgó a través de las _tablas de_ roles de rol y las vistas. Escriba un comando para eliminarla de sus privilegios anteriores, excepto que aún podría conectarse a la base de datos.

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### La usuaria rita que fue transferida ahora se está mudando a otra compañía. Ya que los objetos que ella creó ya no se usan, escribe un comando para eliminar este usuario y todos sus objetos.

Aquí la opción CASCADA es necesaria para eliminar todos los objetos del usuario en la base de datos. \`\` \`sql  
DROP USUARIO rita CASCADA

### El usuario rita se ha transferido y ya no necesita el privilegio que se le otorgó a través de las _tablas de_ roles de rol y las vistas. Escriba un comando para eliminarla de sus privilegios anteriores, excepto que aún podría conectarse a la base de datos.

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### La usuaria rita que fue transferida ahora se está mudando a otra compañía. Ya que los objetos que ella creó ya no se usan, escribe un comando para eliminar este usuario y todos sus objetos.

Aquí la opción CASCADA es necesaria para eliminar todos los objetos del usuario en la base de datos. \`\` \`sql  
DROP USUARIO rita CASCADA
```
### Write SQL query to find the nth highest salary from table. 
```

sql  
SELECCIONAR 1 salario superior DESDE ( SELECT DISTINCT TOP N Salary De empleado ORDEN POR Salario DESC ) ORDEN POR Salario ASC \`\` \`