---
title: SQL LIKE Operator
localeTitle: Operador SQL LIKE
---
## Operador SQL LIKE

### LIKE Operador definido

El operador `LIKE` se utiliza en un `WHERE` o `HAVING` (como parte de `GROUP BY` ) para limitar las filas seleccionadas a los elementos cuando una columna tiene un patrón determinado de caracteres contenidos en él.

### Esta guía demostrará:

*   Determinar si una cadena comienza o termina con un patrón de cadena dado
*   Determinar si existe un patrón en medio de la cadena
*   Determinar si una cadena no está contenida en la cadena

### Una columna comienza o termina con un patrón de cadena dado

Este SQL seleccionará a los estudiantes que tengan `FullName` comenzando con "Monique" o terminando con "Greene".

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE 
 FullName LIKE 'Monique%' OR -- note the % at the end but not the beginning 
 FullName LIKE '%Greene'; -- note the % at the beginning but not the end 
```

```text
+-----------+---------------+-----------+---------------------+ 
 | studentID | FullName      | sat_score | rcd_updated         | 
 +-----------+---------------+-----------+---------------------+ 
 |         1 | Monique Davis |       400 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene  |      1200 | 2017-08-16 15:34:50 | 
 +-----------+---------------+-----------+---------------------+ 
 2 rows in set (0.00 sec) 
```

### Un patrón de cadena está en el centro de la columna

Este SQL seleccionará a los estudiantes que tengan "ree" en cualquier parte del nombre.

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE FullName LIKE '%ree%'; -- note the % at the beginning AND at the end 
```

```text
+-----------+----------------+-----------+---------------------+ 
 | studentID | FullName       | sat_score | rcd_updated         | 
 +-----------+----------------+-----------+---------------------+ 
 |         5 | Alvin Greene   |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman |      1200 | 2017-08-16 15:34:50 | 
 +-----------+----------------+-----------+---------------------+ 
 2 rows in set (0.00 sec) 
```

### Una cadena NO está en la columna

Puede colocar "NO" antes de LIKE para excluir las filas con el patrón de cadena en lugar de seleccionarlas. Este SQL excluye los registros que contienen "cer Pau" y "Ted" en la columna FullName.

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE FullName NOT LIKE '%cer Pau%' AND FullName NOT LIKE '%"Ted"%'; 
```

```text
+-----------+----------------------+-----------+---------------------+ 
 | studentID | FullName             | sat_score | rcd_updated         | 
 +-----------+----------------------+-----------+---------------------+ 
 |         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez       |       800 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey         |      1200 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene         |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman       |      1200 | 2017-08-16 15:34:50 | 
 |         8 | Donald D. Chamberlin |      2400 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce     |      2400 | 2017-08-16 15:35:33 | 
 +-----------+----------------------+-----------+---------------------+ 
 7 rows in set (0.00 sec) 
```

_Aquí está la lista completa de estudiantes actual para comparar con los conjuntos de resultados de la cláusula where arriba._

```sql
SELECT studentID, FullName, sat_score, rcd_updated FROM student; 
```

\`\` \`texto + ----------- + ------------------------ + ----------- + --------------------- + | StudentID | Nombre completo | _puntaje_ sat _rcd_ actualizado | + ----------- + ------------------------ + ----------- + --------------------- + | 1 | Monique Davis | 400 | 2017-08-16 15:34:50 | | 2 | Teri Gutierrez | 800 | 2017-08-16 15:34:50 | | 3 | Spencer Pautier | 1000 | 2017-08-16 15:34:50 | | 4 | Louis Ramsey | 1200 | 2017-08-16 15:34:50 | | 5 | Alvin Greene | 1200 | 2017-08-16 15:34:50 | | 6 | Sophie Freeman | 1200 | 2017-08-16 15:34:50 | | 7 | Edgar Frank "Ted" Codd | 2400 | 2017-08-16 15:35:33 | | 8 | Donald D. Chamberlin | 2400 | 2017-08-16 15:35:33 | | 9 | Raymond F. Boyce | 2400 | 2017-08-16 15:35:33 | + ----------- + ------------------------ + ----------- + --------------------- + 9 filas en conjunto (0,00 seg)