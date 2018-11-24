---
title: SQL Having Clause
localeTitle: SQL有条款
---
## SQL有条款

HAVING为DBA或SQL使用程序员提供了一种过滤GROUP BY子句聚合的数据的方法，以便用户获取一组有限的记录进行查看。

### 使用示例

HAVING子句与WHERE子句类似，但它作用于分组数据。在这种情况下，用户只会看到最大的金额。

这些数据来自我们在其中一些指南中使用的广告系列贡献数据。

这个SQL语句正在回答这个问题：“哪些候选人在2016年获得了最大的捐款，但只有那些拥有超过8千万美元的捐款？”

以降序（DESC）顺序对此数据集进行排序会将总贡献最大的候选项放在列表顶部。

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

与所有这些SQL事物一样，它们比本入门指南中的内容更多。

我希望这至少足以让你开始。

请参阅您的数据库管理员手册，并自己尝试不同的选项。