---
title: SQL Having Clause
localeTitle: Cláusula de tener SQL
---
## Cláusula de tener SQL

HAVING le da al programador que usa DBA o SQL una forma de filtrar los datos agregados por la cláusula GROUP BY para que el usuario obtenga un conjunto limitado de registros para ver.

### Ejemplo de uso

La cláusula HAVING es como la cláusula WHERE, excepto que actúa sobre los datos agrupados. En este caso, el usuario solo verá las cantidades más grandes.

Esta información proviene de las contribuciones de la campaña que hemos estado usando en algunas de estas guías.

Esta declaración SQL responde a la pregunta: "¿Qué candidatos recibieron las mayores contribuciones totales en 2016, PERO solo aquellos que tenían más de 8 $ 20 millones de dólares?"

Al ordenar este conjunto de datos en un orden descendente (DESC), los candidatos con las mayores contribuciones totales se encuentran en la parte superior de la lista.

```sql
SELECT Candidate, Election_year, sum(Total_$), count(*) 
 FROM combined_party_data 
 WHERE Election_year = 2016 
 GROUP BY Candidate, Election_year -- this tells the DBMS to summarize by these two columns 
 HAVING sum(Total_$) > 20000000  -- limits the rows presented from the summary of money ($20 Million USD) 
 ORDER BY sum(Total_$) DESC; -- orders the presented rows with the largest ones first. 
```

```text
+--------------------------------------------------+---------------+-------------------+----------+ 
 | Candidate                                        | Election_year | sum(Total_$)      | count(*) | 
 +--------------------------------------------------+---------------+-------------------+----------+ 
 | CLINTON, HILLARY RODHAM & KAINE, TIMOTHY M (TIM) |          2016 | 568135094.4400003 |      126 | 
 | TRUMP, DONALD J & PENCE, MICHAEL R (MIKE)        |          2016 | 366853142.7899999 |      114 | 
 | SANDERS, BERNARD (BERNIE)                        |          2016 |      258562022.17 |      122 | 
 | CRUZ, RAFAEL EDWARD (TED)                        |          2016 | 93430700.29000005 |      104 | 
 | CARSON, BENJAMIN S (BEN)                         |          2016 | 62202411.12999996 |       93 | 
 | RUBIO, MARCO ANTONIO                             |          2016 |        44384313.9 |      106 | 
 | BUSH, JOHN ELLIS (JEB)                           |          2016 |       34606731.78 |       97 | 
 +--------------------------------------------------+---------------+-------------------+----------+ 
 7 rows in set (0.01 sec) 
```

Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.