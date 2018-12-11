---
title: SQL Group By Statement
localeTitle: Group By en declaración SQL
---
## Group By en declaración SQL

### Declaración Group By

La declaración GROUP BY generalmente es usada cuando se usan funciones de agregación (Conteos, Máximos, Mínimos, Sumas, Promedios) para agrupar el resultado por una o más columnas y que su resultado sea resumido.

### Ejemplo de uso

GROUP BY nos da una forma de combinar filas y datos agregados.

Los datos utilizados son de los datos de contribuciones de campaña que hemos estado usando en algunas de estas guías.

La siguiente declaración SQL responde a la pregunta: "¿Qué candidatos recibieron la mayor contribución total en 2016, PERO solo aquellos que tenían más de $ 20 millones de dólares?"

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
### Errores comunes al usar Group By

Al usar la clausula GROUP BY el error más frecuente en el que se puede caer es poner más campos en la agrupación que en el select, haciendo que nuestros datos no sean del todo resumidos y se repitan en algunas ocasiones.


Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.
