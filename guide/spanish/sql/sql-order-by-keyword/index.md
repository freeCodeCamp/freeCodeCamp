---
title: SQL Order By Keyword
localeTitle: Orden de SQL por palabra clave
---
## Orden de SQL por palabra clave

### Ordenar por (ASC, DESC)

ORDER BY nos da una manera de ordenar el resultado establecido por uno o más de los ítems en la sección SELECT. Aquí hay un SQL clasificando a los estudiantes por FullName en orden descendente. El orden de clasificación predeterminado es ascendente (ASC), pero para ordenar en el orden opuesto (descendente) se usa DESC.

```sql
SELECT studentID, FullName, sat_score 
 FROM student 
 ORDER BY FullName DESC; 
```

```text
+-----------+------------------------+-----------+ 
 | studentID | FullName               | sat_score | 
 +-----------+------------------------+-----------+ 
 |         2 | Teri Gutierrez         |       800 | 
 |         3 | Spencer Pautier        |      1000 | 
 |         6 | Sophie Freeman         |      1200 | 
 |         9 | Raymond F. Boyce       |      2400 | 
 |         1 | Monique Davis          |       400 | 
 |         4 | Louis Ramsey           |      1200 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | 
 |         8 | Donald D. Chamberlin   |      2400 | 
 |         5 | Alvin Greene           |      1200 | 
 +-----------+------------------------+-----------+ 
 9 rows in set (0.00 sec) 
```

_Aquí está la lista de estudiantes actual, ordenada por la ONU, para compararla con la anterior._

```sql
SELECT studentID, FullName, sat_score, rcd_updated FROM student; 
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
Otra forma de ordenar sin necesidad de poner los campos por los cuales se quiere ordenar, es poner el consecutivo de la columna en que aparecen en la cláusula SELECT. Es decir, si tenemos un select que nos trae 4 columnas, y queremos ordenar por la última, podemos poner la cláusula ORDER BY 4 DESC por ejemplo:

```sql
SELECT  subscriber_id, subscriber_name, subscriber_age
  FROM  ge_subscriber
 ORDER BY 3 desc
```
Lo anterior hará que nuestros datos sean ordenados de forma descendente por la coumna 3 del SELECT, la cual es subscriber_age


Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.
