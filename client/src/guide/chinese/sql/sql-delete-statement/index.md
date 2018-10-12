---
title: SQL Delete Statement
localeTitle: SQL删除语句
---
## SQL删除语句

要删除表中的记录，请使用`DELETE`语句。

小心。您可以删除表格的所有记录或只删除一些记录。使用`WHERE`条件指定要删除的记录。语法是：

```sql
DELETE FROM table_name 
 WHERE condition; 
```

下面是从表中删除Id 3记录的示例：

```sql
DELETE FROM Person 
 WHERE Id = 3; 
```

使用DELETE删除给定表中的所有记录

```sql
DELETE * FROM Person 
 ; 
```

或者，根据您的RDBMS，您可以使用TRUNCATE TABLE语句删除表中的所有记录，并且根据您的RDBMS可能允许或不允许回滚。 DELETE是DML，TRUNCATE是DDL。

```sql
TRUNCATE TABLE Person; 

```