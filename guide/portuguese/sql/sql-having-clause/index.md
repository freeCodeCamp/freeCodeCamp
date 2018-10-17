---
title: SQL Having Clause
localeTitle: SQL tendo cláusula
---
## SQL tendo cláusula

O HAVING oferece ao programador DBA ou SQL uma maneira de filtrar os dados agregados pela cláusula GROUP BY para que o usuário obtenha um conjunto limitado de registros para visualização.

### Exemplo de uso

A cláusula HAVING é como a cláusula WHERE, exceto que ela age nos dados agrupados. Nesse caso, o usuário verá apenas os maiores valores.

Esses dados são dos dados das contribuições da campanha que estamos usando em alguns desses guias.

Esta declaração SQL está respondendo à pergunta: "quais candidatos receberam as maiores contribuições totais em 2016, MAS apenas aqueles que tiveram mais de 8 $ 20 milhões de USD?"

A ordenação desse conjunto de dados em uma ordem descendente (DESC) coloca os candidatos com as maiores contribuições totais no topo da lista.

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

Como acontece com todas essas coisas SQL, MUITO MAIS para elas é o que está neste guia introdutório.

Espero que pelo menos isso lhe dê o suficiente para começar.

Por favor, consulte o manual do seu gerenciador de banco de dados e divirta-se tentando opções diferentes.