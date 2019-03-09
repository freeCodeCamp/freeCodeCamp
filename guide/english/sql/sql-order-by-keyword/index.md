---
title: SQL Order By Keyword
---
## SQL Order By Keyword

### Order By (ASC, DESC)
ORDER BY gives us a way to SORT the result set by one or more of the items in the SELECT section. It sorts the result set in lexicographical order to cater data which have both digits & alphabets together. Here is an SQL sorting the students by FullName in descending order. The default sort order is ascending (ASC) but to sort in the opposite order (descending) you use DESC.

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
|        10 | 2monk Zeph             |       700 |
+-----------+------------------------+-----------+
10 rows in set (0.00 sec)
```
We see that the name starting with digits goes to the top since digits are prefered over alphabets in lexicographical sorting.


*Here is the UN-ORDERED, current, full student list to compare to the above.*

```sql
SELECT studentID, FullName, sat_score, rcd_updated FROM student;
```

```text
+-----------+------------------------+-----------+---------------------+
| studentID | FullName               | sat_score | rcd_updated         |
+-----------+------------------------+-----------+---------------------+
|        10 | 2monk Zeph             |       700 | 2017-08-19 19:56:13 |
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
10 rows in set (0.00 sec)
```
As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.
