---
title: SQL Avg Function
localeTitle: Función de promedio de SQL
---
## Función de promedio de SQL (AVG)

"Promedio" es una función agregada (Agrupar por). Se utiliza para calcular el promedio de una columna numérica del conjunto de filas devueltas por una declaración SQL.

Aquí está la sintaxis para usar la función:

```sql
select groupingField, avg(num_field) 
 from table1 
 group by groupingField 
```

Aquí hay un ejemplo usando la tabla de estudiantes:

```sql
select studentID, FullName, avg(sat_score) 
 from student 
 group by studentID, FullName; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/avg_function01.JPG?raw=true)