---
title: SQL Select Statement
localeTitle: SQL Select Statement
---
## SQL Select Statement

## Seleccionar y cláusulas de

La parte SELECT statement en una consulta es normalmente para determinar qué columnas de una tabla que contiene datos se mostrarán en los resultados. También hay opciones que puede aplicar para mostrar datos que no son una columna de la tabla.


### student
```text
 +-----------+-------------------+------------+------------------------+---------------+------------+
 | studentID | FirstName         | LastName   | FullName               | Address       | Birthday   | 
 +-----------+-------------------+------------+------------------------+---------------+------------+
 |         1 | Monique           | Davis      | Monique Davis          | Los Angeles   | 22/10/1998 |
 |         2 | Teri              | Gutierrez  | Teri Gutierrez         | Colorado      | 10/08/1998 |
 |         3 | Spencer           | Pautier    | Spencer Pautier        | Texas         | 03/01/1998 |
 |         4 | Louis             | Ramsey     | Louis Ramsey           | San Francisco | 28/11/1998 |
 |         5 | Alvin             | Greene     | Alvin Greene           | Chicago       | 7/12/1998  |
 |         6 | Sophie            | Freeman    | Sophie Freeman         | Miami         | 1/02/1998  |
 |         7 | Edgar Frank "Ted" | Codd       | Edgar Frank "Ted" Codd | Boston        | 12/04/1998 |
 |         8 | Donald D.         | Chamberlin | Donald D. Chamberlin   | Dallas        | 16/11/1998 |
 |         9 | Raymond F.        | Boyce      | Raymond F. Boyce       | Houston       | 30/09/1998 |
 +-----------+-------------------+------------+------------------------+---------------+------------+ 
```


Este ejemplo muestra tres columnas seleccionadas de la tabla "estudiante" y una columna calculada. La base de datos almacena el ID de estudiante, el Nombre y el Apellido del estudiante. Para crear la columna calculada FullName y mostrar el Nombre Completo del estudiante solo tenemos que unir FirstName y LastName.


```sql
select studentID, FirstName, LastName, FirstName + ' ' + LastName as FullName 
 from student; 
```

```text
 +-----------+-------------------+------------+------------------------+ 
 | studentID | FirstName         | LastName   | FullName               | 
 +-----------+-------------------+------------+------------------------+ 
 |         1 | Monique           | Davis      | Monique Davis          | 
 |         2 | Teri              | Gutierrez  | Teri Gutierrez         | 
 |         3 | Spencer           | Pautier    | Spencer Pautier        | 
 |         4 | Louis             | Ramsey     | Louis Ramsey           | 
 |         5 | Alvin             | Greene     | Alvin Greene           | 
 |         6 | Sophie            | Freeman    | Sophie Freeman         | 
 |         7 | Edgar Frank "Ted" | Codd       | Edgar Frank "Ted" Codd | 
 |         8 | Donald D.         | Chamberlin | Donald D. Chamberlin   | 
 |         9 | Raymond F.        | Boyce      | Raymond F. Boyce       | 
 +-----------+-------------------+------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

\* Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te sirva de pequeña introducción y te dé lo suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.
