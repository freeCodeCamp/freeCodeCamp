---
title: SQL Avg Function
localeTitle: Função média do SQL
---
## Função Média SQL (AVG)

"Média" é uma função Agregada (Agrupar por). É usado para calcular a média de uma coluna numérica do conjunto de linhas retornadas por uma instrução SQL.

Aqui está a sintaxe para usar a função:

```sql
select groupingField, avg(num_field) 
 from table1 
 group by groupingField 
```

Aqui está um exemplo usando a tabela de alunos:

```sql
select studentID, FullName, avg(sat_score) 
 from student 
 group by studentID, FullName; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/avg_function01.JPG?raw=true)