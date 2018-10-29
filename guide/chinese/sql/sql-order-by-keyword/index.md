---
title: SQL Order By Keyword
localeTitle: SQL按顺序排序
---
## SQL按顺序排序

### 订购方式（ASC，DESC）

ORDER BY为我们提供了一种方法，可以通过SELECT部分​​中的一个或多个项来对结果集进行排序。这是一个按FullName降序排列学生的SQL。默认排序顺序是升序（ASC），但要按相反顺序（降序）排序，请使用DESC。

```sql
SELECT studentID, FullName, sat_score 
 FROM student 
 ORDER BY FullName DESC; 
```

```text
+-----------+------------------------+-----------+ 
 | studentID | FullName               | sat_score | 
 +-----------+------------------------+-----------+ 
 |         2 | Teri Gutierrez         |       800 | 
 |         3 | Spencer Pautier        |      1000 | 
 |         6 | Sophie Freeman         |      1200 | 
 |         9 | Raymond F. Boyce       |      2400 | 
 |         1 | Monique Davis          |       400 | 
 |         4 | Louis Ramsey           |      1200 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | 
 |         8 | Donald D. Chamberlin   |      2400 | 
 |         5 | Alvin Greene           |      1200 | 
 +-----------+------------------------+-----------+ 
 9 rows in set (0.00 sec) 
```

_这是与上述相比较的UN-ORDERED，当前，完整学生列表。_

```sql
SELECT studentID, FullName, sat_score, rcd_updated FROM student; 
```

```text
+-----------+------------------------+-----------+---------------------+ 
 | studentID | FullName               | sat_score | rcd_updated         | 
 +-----------+------------------------+-----------+---------------------+ 
 |         1 | Monique Davis          |       400 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez         |       800 | 2017-08-16 15:34:50 | 
 |         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey           |      1200 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene           |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman         |      1200 | 2017-08-16 15:34:50 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 | 
 |         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 | 
 +-----------+------------------------+-----------+---------------------+ 
 9 rows in set (0.00 sec) 
```

与所有这些SQL事物一样，它们比本入门指南中的内容更多。

我希望这至少足以让你开始。

请参阅您的数据库管理员手册，并自己尝试不同的选项。