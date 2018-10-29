---
title: SQL Insert into Select Statement
localeTitle: Insertar SQL en la declaración de selección
---
## Insertar SQL en la declaración de selección

Puede insertar registros en una tabla utilizando datos que ya están almacenados en la base de datos. Esto es solo una copia de los datos y no afecta a la tabla de origen.

La `INSERT INTO SELECT` combina las `INSERT INTO` y `SELECT` y puede usar las condiciones que desee. La sintaxis es:

```sql
INSERT INTO table2 (column1, column2, column3, ...) 
 SELECT column1, column2, column3, ... 
 FROM table1 
 WHERE condition; 
```

Aquí hay un ejemplo que inserta en la tabla Persona a todos los estudiantes varones de la tabla Estudiantes.

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 SELECT Id, Name, DateOfBirth, Gender 
 FROM Students 
 WHERE Gender = 'M' 

```