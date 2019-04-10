---
title: SQL Insert into Select Statement
localeTitle: SQL插入Select语句
---
## SQL插入Select语句

您可以使用已存储在数据库中的数据在表中插入记录。这只是数据的副本，不会影响原始表。

`INSERT INTO SELECT`语句结合了`INSERT INTO`和`SELECT`语句，您可以使用任何您想要的条件。语法是：

```sql
INSERT INTO table2 (column1, column2, column3, ...) 
 SELECT column1, column2, column3, ... 
 FROM table1 
 WHERE condition; 
```

这是一个示例，在表格中插入所有来自表格Student的男学生。

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 SELECT Id, Name, DateOfBirth, Gender 
 FROM Students 
 WHERE Gender = 'M' 

```