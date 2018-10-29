---
title: SQL Between Operator
localeTitle: 运算符之间的SQL
---
## 运算符之间的SQL

由于SQL查询优化器，BETWEEN运算符很有用。虽然BETWEEN在功能上与以下相同： x <= element <= y，SQL查询优化器将更快地识别此命令，并具有用于运行它的优化代码。

此运算符用于WHERE子句或GROUP BY HAVING子句中。

选择的行的值大于最小值且小于最大值。

请务必记住，命令中输入的值将从结果中**排除** 。我们得到它们之间的东西。

以下是在WHERE子句中使用该函数的语法：

```sql
select field1, testField 
 from table1 
 where testField between min and max 
```

以下是使用student表和WHERE子句的示例：

```sql
-- no WHERE clause 
 select studentID, FullName, studentID 
 from student; 
 
 -- WHERE clause with between 
 select studentID, FullName, studentID 
 from student 
 where studentID between 2 and 7; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/between01.JPG?raw=true)

以下是使用广告系列基金表和having子句的示例。 这将返回行，其中候选人的捐款总额在300万美元到1800万美元之间，基于声明的GROUP BY部分中的HAVING子句。更多关于该指南中的汇总。

```sql
select Candidate, Office_Sought, Election_Year, format(sum(Total_$),2) 
 from combined_party_data 
 where Election_Year = 2016 
 group by Candidate, Office_Sought, Election_Year 
 having sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/between02.JPG?raw=true)