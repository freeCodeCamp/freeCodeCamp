---
title: SQL Select Statement
localeTitle: SQL Select Statement
---
## SQL Select Statement

## Seleccionar y cláusulas de

La parte SELECT de una consulta es normalmente para determinar qué columnas de los datos se mostrarán en los resultados. También hay opciones que puede aplicar para mostrar datos que no son una columna de tabla.

Este ejemplo muestra tres columnas seleccionadas de la tabla "estudiante" y una columna calculada. La base de datos almacena el ID de estudiante, el Nombre y el Apellido del estudiante. Podemos combinar las columnas First y Last name para crear la columna calculada FullName.

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

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.