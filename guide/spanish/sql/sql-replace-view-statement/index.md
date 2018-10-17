---
title: SQL Replace VIEW Statement
localeTitle: SQL Replace VIEW Statement
---
## SQL Replace VIEW Statement

## Introducción

Una vista es un objeto de base de datos que presenta datos de una o más tablas. La misma instrucción SQL utilizada para crear una vista también se puede usar para reemplazar una vista existente.

Esta guía actualizará (reemplazará) la vista existente "programación-estudiantes-v" por una que es ligeramente diferente y tiene un nombre diferente.

Consejo de seguridad: siempre haga una copia de seguridad del esquema antes de realizar cambios.

### Sintaxis general

```sql
CREATE OR REPLACE VIEW view_name AS 
 SELECT column1, column2, ... 
 FROM table_name 
 WHERE condition; 
```

### SQL Utilizado para crear la vista y los datos actuales.

```sql
create view `programming-students-v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 
```

```sql
select * from `programming-students-v`; 
```

Datos actuales:

```text
+-----------------+----------------+ 
 | FullName        | programOfStudy | 
 +-----------------+----------------+ 
 | Teri Gutierrez  | Programming    | 
 | Spencer Pautier | Programming    | 
 | Louis Ramsey    | Programming    | 
 | Alvin Greene    | Programming    | 
 | Sophie Freeman  | Programming    | 
 +-----------------+----------------+ 
 5 rows in set (0.00 sec) 
```

Una lista de las vistas existentes:

```sql
SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
```

```text
+-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
```

### Reemplazando la vista

```sql
create or replace view `programming-students-v` as 
 select FullName, programOfStudy, sat_score 
 from student 
 where programOfStudy = 'Programming'; 
```

```sql
select * from `programming-students-v`; 
```

Nota: la vista ahora muestra el sat\_score.

```text
+-----------------+----------------+-----------+ 
 | FullName        | programOfStudy | sat_score | 
 +-----------------+----------------+-----------+ 
 | Teri Gutierrez  | Programming    |       800 | 
 | Spencer Pautier | Programming    |      1000 | 
 | Louis Ramsey    | Programming    |      1200 | 
 | Alvin Greene    | Programming    |      1200 | 
 | Sophie Freeman  | Programming    |      1200 | 
 +-----------------+----------------+-----------+ 
```

Nota: la lista de vistas no ha cambiado, nuestra vista ha sido reemplazada.

```text
mysql>  SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
 +-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
```

\* Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria. Espero que al menos esto te dé suficiente para empezar. Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.