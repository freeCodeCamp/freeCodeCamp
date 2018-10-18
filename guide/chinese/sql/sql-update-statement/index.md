---
title: SQL Update Statement
localeTitle: SQL Update语句
---
## SQL Update语句

要更新表中的记录，请使用`UPDATE`语句。

小心。您可以更新表格的所有记录或仅更新一些记录。使用`WHERE`条件指定要更新的记录。可以一次更新一个或多个列。语法是：

```sql
UPDATE table_name 
 SET column1 = value1, 
    column2 = value2, ... 
 WHERE condition; 
```

以下是使用Id 4更新记录名称的示例：

```sql
UPDATE Person 
 SET Name = “Elton John” 
 WHERE Id = 4; 
```

您还可以使用其他表中的值更新表中的列。使用`JOIN`子句从多个表中获取数据。语法是：

```sql
UPDATE table_name1 
 SET table_name1.column1 = table_name2.columnA 
    table_name1.column2 = table_name2.columnB 
 FROM table_name1 
 JOIN table_name2 ON table_name1.ForeignKey = table_name2.Key 
```

以下是更新所有记录管理器的示例：

```sql
UPDATE Person 
 SET Person.Manager = Department.Manager 
 FROM Person 
 JOIN Department ON Person.DepartmentID = Department.ID 

```