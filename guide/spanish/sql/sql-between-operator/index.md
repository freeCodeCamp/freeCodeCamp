---
title: SQL Between Operator
localeTitle: SQL Entre Operador
---
## SQL Entre Operador

El operador BETWEEN es útil debido al optimizador de consultas SQL. Aunque BETWEEN es funcionalmente lo mismo que: x <= element <= y, el Optimizador de consultas SQL reconocerá este comando más rápido y tiene un código optimizado para ejecutarlo.

Este operador se utiliza en una cláusula WHERE o en una cláusula GROUP BY HAVING.

Se seleccionan filas que tienen un valor mayor que el valor mínimo y menor que el valor máximo.

Es importante tener en cuenta que los valores ingresados ​​en el comando se **excluyen** del resultado. Conseguimos justo lo que hay entre ellos.

Aquí está la sintaxis para usar la función en una cláusula WHERE:

```sql
select field1, testField 
 from table1 
 where testField between min and max 
```

Aquí hay un ejemplo usando la tabla de estudiantes y la cláusula WHERE:

```sql
-- no WHERE clause 
 select studentID, FullName, studentID 
 from student; 
 
 -- WHERE clause with between 
 select studentID, FullName, studentID 
 from student 
 where studentID between 2 and 7; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/between01.JPG?raw=true)

Aquí hay un ejemplo usando la tabla de fondos de campaña y la cláusula having. Esto devolverá filas donde la suma de las donaciones para un candidato es de entre $ 3 millones y $ 18 millones, según la cláusula HAVING en la parte de GROUP BY de la declaración. Más sobre agregación en esa guía.

```sql
select Candidate, Office_Sought, Election_Year, format(sum(Total_$),2) 
 from combined_party_data 
 where Election_Year = 2016 
 group by Candidate, Office_Sought, Election_Year 
 having sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/between02.JPG?raw=true)