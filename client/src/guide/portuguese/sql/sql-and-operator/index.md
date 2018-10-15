---
title: SQL and Operator
localeTitle: SQL e Operador
---
## Operador SQL AND

AND é usado em uma cláusula WHERE ou uma cláusula GROUP BY HAVING para limitar as linhas retornadas da instrução executada. Use AND quando for necessário ter mais de uma condição satisfeita.

Vamos usar a tabela do aluno para apresentar exemplos.

Aqui está a tabela de alunos sem uma cláusula WHERE:

```sql
select * from student; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator01.JPG?raw=true)

Agora, a cláusula WHERE é adicionada para exibir apenas os alunos de programação:

```sql
select * from student 
 where programOfStudy = 'Programming'; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator02.JPG?raw=true)

Agora, a cláusula WHERE é atualizada com AND para mostrar resultados para estudantes de programação que também têm uma pontuação SAT maior que 800:

```sql
select * from student 
 where programOfStudy = 'Programming' 
 and sat_score > 800; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator03.JPG?raw=true)

Este é um exemplo mais complexo da tabela de contribuições da campanha. Este exemplo tem uma cláusula GROUP BY com a cláusula HAVING usando um AND para restringir os registros retornados aos candes de 2016 com contribuições entre US $ 3 milhões e US $ 18 milhões no total.

```sql
select Candidate, Office_Sought, Election_Year, FORMAT(sum(Total_$),2) from combined_party_data 
 where Office_Sought = 'PRESIDENT / VICE PRESIDENT' 
 group by Candidate, Office_Sought, Election_Year 
 having Election_Year = 2016 and sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator06.JPG?raw=true)