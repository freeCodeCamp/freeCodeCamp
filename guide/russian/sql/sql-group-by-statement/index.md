---
title: SQL Group By Statement
localeTitle: SQL-группа по заявлению
---
## Группа SQL по Statemet

### Пример использования

GROUP BY дает нам способ объединения строк и совокупных данных.

Данные используются из данных о взносах кампании, которые мы использовали в некоторых из этих руководств.

Следующий запрос SQL отвечает на вопрос: «Какие кандидаты получили наибольшие общие взносы в 2016 году, но только те, у которых было более 20 миллионов долларов США?»

Заказ этого набора данных в порядке убывания (DESC) помещает кандидатов с наибольшим общим вкладом в верхней части списка.

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

Как и для всех этих SQL-вещей, MUCH MORE им больше, чем в этом вводном руководстве.

Надеюсь, это, по крайней мере, даст вам достаточно, чтобы начать.

Пожалуйста, ознакомьтесь с руководством для своего менеджера баз данных и получайте удовольствие от различных вариантов.