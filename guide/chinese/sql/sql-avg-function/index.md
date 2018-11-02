---
title: SQL Avg Function
localeTitle: SQL平均功能
---
## SQL平均（AVG）功能

“Average”是Aggregate（Group By）函数。它用于计算SQL语句返回的行集中的数字列的平均值。

以下是使用该函数的语法：

```sql
select groupingField, avg(num_field) 
 from table1 
 group by groupingField 
```

以下是使用学生表的示例：

```sql
select studentID, FullName, avg(sat_score) 
 from student 
 group by studentID, FullName; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/avg_function01.JPG?raw=true)