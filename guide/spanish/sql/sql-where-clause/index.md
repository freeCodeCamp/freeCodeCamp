---
title: SQL Where Clause
localeTitle: SQL donde la cláusula
---
## SQL donde la cláusula

### Cláusula `WHERE` (y / o, `IN` , `BETWEEN` y `LIKE` )

La cláusula `WHERE` se utiliza para condicionar los registros que se quieren mostrar en la consulta.

En este caso, los cinco que se utilizarán son una cláusula `WHERE` ridícula.

Aquí está la lista completa actual de estudiantes para comparar con el conjunto de resultados de la cláusula `WHERE` :

```sql
select studentID, FullName, sat_score, rcd_updated from student; 
```

```text
+-----------+------------------------+-----------+---------------------+ 
 | studentID | FullName               | sat_score | rcd_updated         | 
 +-----------+------------------------+-----------+---------------------+ 
 |         1 | Monique Davis          |       400 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez         |       800 | 2017-08-16 15:34:50 | 
 |         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey           |      1200 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene           |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman         |      1200 | 2017-08-16 15:34:50 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 | 
 |         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 | 
 +-----------+------------------------+-----------+---------------------+ 
 9 rows in set (0.00 sec) 
```

La condición que se utilizará serán que aquellos estudiantes cuyo ID estén entre 1 y 5, o que el ID sea 8:

*   `WHERE` identificaciones de los estudiantes están entre 1 y 5 (incluyendo)
*   `OR` studentID = 8

A continuación se muestra el ejemplo del NOT IN, el cuál excluye de los registros la condición que se le ponga. Para este ejemplo no se tendrán en cuenta los estudiantes cuya calificación SAT sean (1000, 1400):

```sql
select  studentID, FullName, sat_score, recordUpdated 
 from    student 
 where   (studentID between 1 and 5 or studentID = 8) 
        and 
        sat_score NOT in (1000, 1400); 
```

```text
+-----------+----------------------+-----------+---------------------+ 
 | studentID | FullName             | sat_score | rcd_updated         | 
 +-----------+----------------------+-----------+---------------------+ 
 |         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez       |       800 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey         |      1200 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene         |      1200 | 2017-08-16 15:34:50 | 
 |         8 | Donald D. Chamberlin |      2400 | 2017-08-16 15:35:33 | 
 +-----------+----------------------+-----------+---------------------+ 
 5 rows in set (0.00 sec) 
```
Finalmente el LIKE se usa para buscar en el resultado una caracter que esté contenido. Se usa el % para obviar el resultado antes o despues de la palabra. Por ejemplo vamos a buscar un estudiante que empiece por Monique:

```
select  studentID, FullName, sat_score, recordUpdated 
 from    student 
 where   FullName LIKE 'Monique%'; 
 
 +-----------+----------------------+-----------+---------------------+ 
 | studentID | FullName             | sat_score | rcd_updated         | 
 +-----------+----------------------+-----------+---------------------+ 
 |         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 | 
 +-----------+----------------------+-----------+---------------------+ 
```

\* Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.
