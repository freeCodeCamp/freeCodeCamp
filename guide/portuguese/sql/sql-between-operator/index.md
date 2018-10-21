---
title: SQL Between Operator
localeTitle: SQL entre o operador
---
## SQL entre o operador

O operador BETWEEN é útil por causa do SQL Query Optimizer. Embora BETWEEN seja funcionalmente o mesmo que: x <= element <= y, o SQL Query Optimizer reconhecerá esse comando mais rapidamente e terá um código otimizado para executá-lo.

Este operador é usado em uma cláusula WHERE ou em uma cláusula GROUP BY HAVING.

São selecionadas linhas que possuem um valor maior que o valor mínimo e menor que o valor máximo.

É importante ter em mente que os valores inseridos no comando são **excluídos** do resultado. Nós temos exatamente o que há entre eles.

Aqui está a sintaxe para usar a função em uma Cláusula WHERE:

```sql
select field1, testField 
 from table1 
 where testField between min and max 
```

Aqui está um exemplo usando a tabela de alunos e a cláusula WHERE:

```sql
-- no WHERE clause 
 select studentID, FullName, studentID 
 from student; 
 
 -- WHERE clause with between 
 select studentID, FullName, studentID 
 from student 
 where studentID between 2 and 7; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/between01.JPG?raw=true)

Aqui está um exemplo usando a tabela de fundos da campanha e a cláusula having. Isso retornará linhas em que a soma das doações para um candidato está entre US $ 3 milhões e US $ 18 milhões com base na cláusula HAVING na parte GROUP BY da instrução. Mais sobre agregação nesse guia.

```sql
select Candidate, Office_Sought, Election_Year, format(sum(Total_$),2) 
 from combined_party_data 
 where Election_Year = 2016 
 group by Candidate, Office_Sought, Election_Year 
 having sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/between02.JPG?raw=true)