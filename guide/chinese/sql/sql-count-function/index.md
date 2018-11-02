---
title: SQL COUNT Aggregate Function
localeTitle: SQL COUNT聚合函数
---
## SQL COUNT聚合函数

COUNT运算符通常与GROUP BY子句结合使用。它是SQL“聚合”函数之一，包括AVG（平均值）和SUM。

此函数将计算行数并将该计数作为结果集中的列返回。

以下是您将使用COUNT的示例：

*   计算表中的所有行（不需要按组）
*   计算数据子集的总数（需要语句的Group By部分）

作为参考，这是我们的示例学生数据库中所有行的当前数据。

```sql
select studentID, FullName, programOfStudy, sat_score from student; -- all records with fields of interest 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/count01.JPG?raw=true)

此SQL语句提供所有行的计数。请注意，您可以使用“AS”为生成的COUNT列指定名称。

```sql
select count(*) AS studentCount from student; -- count of all records 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/count02.JPG?raw=true)

在这里，我们得到每个学习领域的学生数量。

```sql
 select studentID, FullName, count(*) AS studentCount from the student table with a group by programOfStudy; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/count03.JPG?raw=true)

在这里，我们得到具有相同SAT分数的学生数。

```sql
 select studentID, FullName, count(*) AS studentCount from the student table with a group by sat_score; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/count04.JPG?raw=true)

以下是使用广告系列基金表的示例。这是2016年美国总统竞选期间每笔交易的美元总额和每个政党的捐款数量。

```sql
select Specific_Party, Election_Year, format(sum(Total_$),2) AS contribution$Total, count(*) AS numberOfContributions 
 from combined_party_data 
 group by Specific_Party,Election_Year 
 having Election_Year = 2016; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/count05.JPG?raw=true)

与所有这些事情一样，还有更多内容，所以请查看数据库管理员的手册，并自己尝试不同的测试。