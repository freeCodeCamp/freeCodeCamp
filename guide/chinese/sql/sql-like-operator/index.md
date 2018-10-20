---
title: SQL LIKE Operator
localeTitle: SQL LIKE运算符
---
## SQL LIKE运算符

### LIKE运营商定义

`LIKE`运算符用于`WHERE`或`HAVING` （作为`GROUP BY`一部分），以便在列中包含特定字符模式时将所选行限制为项。

### 本指南将演示：

*   确定字符串是否以给定的字符串模式开始或结束
*   确定字符串中间是否存在模式
*   确定字符串中是否包含字符串

### 列以给定的字符串模式开始或结束

此SQL将选择`FullName`以“Monique”开头或以“Greene”结尾的学生。

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE 
 FullName LIKE 'Monique%' OR -- note the % at the end but not the beginning 
 FullName LIKE '%Greene'; -- note the % at the beginning but not the end 
```

```text
+-----------+---------------+-----------+---------------------+ 
 | studentID | FullName      | sat_score | rcd_updated         | 
 +-----------+---------------+-----------+---------------------+ 
 |         1 | Monique Davis |       400 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene  |      1200 | 2017-08-16 15:34:50 | 
 +-----------+---------------+-----------+---------------------+ 
 2 rows in set (0.00 sec) 
```

### 字符串模式位于列的中间

此SQL将选择名称中包含“ree”的学生。

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE FullName LIKE '%ree%'; -- note the % at the beginning AND at the end 
```

```text
+-----------+----------------+-----------+---------------------+ 
 | studentID | FullName       | sat_score | rcd_updated         | 
 +-----------+----------------+-----------+---------------------+ 
 |         5 | Alvin Greene   |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman |      1200 | 2017-08-16 15:34:50 | 
 +-----------+----------------+-----------+---------------------+ 
 2 rows in set (0.00 sec) 
```

### 字符串不在列中

您可以在LIKE之前放置“NOT”以使用字符串模式排除行而不是选择它们。 此SQL排除FullName列中包含“cer Pau”和“Ted”的记录。

```sql
SELECT studentID, FullName, sat_score, rcd_updated 
 FROM student 
 WHERE FullName NOT LIKE '%cer Pau%' AND FullName NOT LIKE '%"Ted"%'; 
```

```text
+-----------+----------------------+-----------+---------------------+ 
 | studentID | FullName             | sat_score | rcd_updated         | 
 +-----------+----------------------+-----------+---------------------+ 
 |         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez       |       800 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey         |      1200 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene         |      1200 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman       |      1200 | 2017-08-16 15:34:50 | 
 |         8 | Donald D. Chamberlin |      2400 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce     |      2400 | 2017-08-16 15:35:33 | 
 +-----------+----------------------+-----------+---------------------+ 
 7 rows in set (0.00 sec) 
```

_以下是与上面的where子句结果集进行比较的当前完整学生列表。_

```sql
SELECT studentID, FullName, sat_score, rcd_updated FROM student; 
```

\`\`\`文本 + ----------- + ------------------------ + ----------- + --------------------- + | studentID | FullName |坐_得分| rcd_更新了| + ----------- + ------------------------ + ----------- + --------------------- + | 1 |莫妮克戴维斯| 400 | 2017-08-16 15:34:50 | | 2 | Teri Gutierrez | 800 | 2017-08-16 15:34:50 | | 3 | Spencer Pautier | 1000 | 2017-08-16 15:34:50 | | 4 |路易斯拉姆齐| 1200 | 2017-08-16 15:34:50 | | 5 | Alvin Greene | 1200 | 2017-08-16 15:34:50 | | 6 |索菲弗里曼| 1200 | 2017-08-16 15:34:50 | | 7 |埃德加弗兰克“特德”科德| 2400 | 2017-08-16 15:35:33 | | 8 |唐纳德D. Chamberlin | 2400 | 2017-08-16 15:35:33 | | 9 |雷蒙德F.博伊斯| 2400 | 2017-08-16 15:35:33 | + ----------- + ------------------------ + ----------- + --------------------- + 9行（0.00秒）