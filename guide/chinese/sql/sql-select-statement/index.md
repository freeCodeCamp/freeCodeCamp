---
title: SQL Select Statement
localeTitle: SQL Select语句
---
## SQL Select语句

## 选择和从子句

查询的SELECT部分​​通常用于确定要在结果中显示哪些数据列。您还可以应用选项来显示非表格列的数据。

此示例显示从“student”表和一个计算列中选择的三列。数据库存储学生的studentID，FirstName和LastName。我们可以组合First和Last name列来创建FullName计算列。

```sql
select studentID, FirstName, LastName, FirstName + ' ' + LastName as FullName 
 from student; 
```

```text
+-----------+-------------------+------------+------------------------+ 
 | studentID | FirstName         | LastName   | FullName               | 
 +-----------+-------------------+------------+------------------------+ 
 |         1 | Monique           | Davis      | Monique Davis          | 
 |         2 | Teri              | Gutierrez  | Teri Gutierrez         | 
 |         3 | Spencer           | Pautier    | Spencer Pautier        | 
 |         4 | Louis             | Ramsey     | Louis Ramsey           | 
 |         5 | Alvin             | Greene     | Alvin Greene           | 
 |         6 | Sophie            | Freeman    | Sophie Freeman         | 
 |         7 | Edgar Frank "Ted" | Codd       | Edgar Frank "Ted" Codd | 
 |         8 | Donald D.         | Chamberlin | Donald D. Chamberlin   | 
 |         9 | Raymond F.        | Boyce      | Raymond F. Boyce       | 
 +-----------+-------------------+------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

\*与所有这些SQL事物一样，它们比本入门指南中的内容更多。

我希望这至少足以让你开始。

请参阅您的数据库管理员手册，并自己尝试不同的选项。