---
title: SQL and Operator
localeTitle: SQL y Operador
---
## Operador SQL Y

AND se utiliza en una cláusula WHERE o GROUP BY HAVING para limitar las filas devueltas desde la sentencia ejecutada. Use Y cuando se requiera que se cumpla más de una condición.

Usaremos la tabla de estudiantes para presentar ejemplos.

Aquí está la tabla de estudiantes sin una cláusula WHERE:

```sql
select * from student; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator01.JPG?raw=true)

Ahora se agrega la cláusula WHERE para mostrar solo los estudiantes de programación:

```sql
select * from student 
 where programOfStudy = 'Programming'; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator02.JPG?raw=true)

Ahora, la cláusula WHERE se actualiza con AND para mostrar los resultados para los estudiantes de programación que también tienen una calificación SAT superior a 800:

```sql
select * from student 
 where programOfStudy = 'Programming' 
 and sat_score > 800; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator03.JPG?raw=true)

Este es un ejemplo más complejo de la tabla de contribuciones de la campaña. Este ejemplo tiene una cláusula GROUP BY con la cláusula HAVING que usa un AND para restringir los registros devueltos a los candidatos de 2016 con contribuciones entre $ 3 millones y $ 18 millones en total.

```sql
select Candidate, Office_Sought, Election_Year, FORMAT(sum(Total_$),2) from combined_party_data 
 where Office_Sought = 'PRESIDENT / VICE PRESIDENT' 
 group by Candidate, Office_Sought, Election_Year 
 having Election_Year = 2016 and sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator06.JPG?raw=true)