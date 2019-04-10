---
title: SQL and Operator
localeTitle: SQL和运算符
---
## SQL AND运算符

AND在WHERE子句或GROUP BY HAVING子句中用于限制从执行语句返回的行。当需要满足多个条件时使用AND。

我们将使用student表来展示示例。

这是没有WHERE子句的student表：

```sql
select * from student; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator01.JPG?raw=true)

现在添加了WHERE子句以仅显示编程学生：

```sql
select * from student 
 where programOfStudy = 'Programming'; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator02.JPG?raw=true)

现在，使用AND更新WHERE子句，以显示SAT分数大于800的编程学生的结果：

```sql
select * from student 
 where programOfStudy = 'Programming' 
 and sat_score > 800; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator03.JPG?raw=true)

这是广告系列投稿表中更复杂的示例。此示例具有带有HAVING子句的GROUP BY子句，该子句使用AND将返回的记录限制为2016年的奖金，总额为300万美元到1800万美元。

```sql
select Candidate, Office_Sought, Election_Year, FORMAT(sum(Total_$),2) from combined_party_data 
 where Office_Sought = 'PRESIDENT / VICE PRESIDENT' 
 group by Candidate, Office_Sought, Election_Year 
 having Election_Year = 2016 and sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator06.JPG?raw=true)