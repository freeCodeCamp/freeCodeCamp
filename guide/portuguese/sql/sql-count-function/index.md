---
title: SQL COUNT Aggregate Function
localeTitle: Função Agregada do SQL COUNT
---
## Função Agregada do SQL COUNT

O operador COUNT geralmente é usado em combinação com uma cláusula GROUP BY. É uma das funções "agregadas" do SQL, que inclui AVG (média) e SUM.

Essa função contará o número de linhas e retornará essa contagem como uma coluna no conjunto de resultados.

Veja alguns exemplos de como você usa COUNT:

*   Contando todas as linhas em uma tabela (sem grupo por obrigatório)
*   Contando os totais de subconjuntos de dados (requer uma seção Agrupar por da instrução)

Para referência, aqui estão os dados atuais para todas as linhas em nosso exemplo de banco de dados de alunos.

```sql
select studentID, FullName, programOfStudy, sat_score from student; -- all records with fields of interest 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/count01.JPG?raw=true)

Esta instrução SQL fornece uma contagem de todas as linhas. Observe que você pode atribuir um nome à coluna COUNT resultante usando "AS".

```sql
select count(*) AS studentCount from student; -- count of all records 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/count02.JPG?raw=true)

Aqui temos uma contagem de estudantes em cada área de estudo.

```sql
 select studentID, FullName, count(*) AS studentCount from the student table with a group by programOfStudy; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/count03.JPG?raw=true)

Aqui temos uma contagem de alunos com as mesmas pontuações do SAT.

```sql
 select studentID, FullName, count(*) AS studentCount from the student table with a group by sat_score; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/count04.JPG?raw=true)

Aqui está um exemplo usando a tabela de fundos da campanha. Esta é uma soma total dos dólares em cada transação e o número de contribuições para cada partido político durante a campanha presidencial dos EUA em 2016.

```sql
select Specific_Party, Election_Year, format(sum(Total_$),2) AS contribution$Total, count(*) AS numberOfContributions 
 from combined_party_data 
 group by Specific_Party,Election_Year 
 having Election_Year = 2016; 
```

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/count05.JPG?raw=true)

Tal como acontece com todas estas coisas, há muito mais do que isso, por isso, consulte o manual do seu gestor de bases de dados e divirta-se a experimentar diferentes testes.