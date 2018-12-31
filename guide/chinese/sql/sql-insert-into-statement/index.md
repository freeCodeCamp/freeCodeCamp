---
title: SQL Insert into Statement
localeTitle: SQL插入语句
---
## SQL插入语句

要在表中插入记录，请使用`INSERT INTO`语句。

您可以通过两种方式执行此操作，如果只想在某些列中插入值，则必须列出其名称，包括所有必需列。语法是：

```sql
INSERT INTO table_name (column1, column2, column3, ...) 
 VALUES (value1, value2, value3, ...); 
```

另一种方法是将值插入表中的所有列，不必指定列名。语法是：

```sql
INSERT INTO table_name 
 VALUES (value1, value2, value3, ...); 
```

这是一个以两种方式在表Person中插入记录的示例：

```sql
INSERT INTO Person 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
```

和

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
```

某些SQL版本（例如，MySQL）支持一次插入多行。例如：

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'), (2, 'Paul McCartney', '1942-06-18', 'M'), 
 (3, 'George Harrison', '1943-02-25', 'M'), (4, 'Ringo Starr', '1940-07-07', 'M') 
```

请注意，整个原始查询保持不变 - 我们简单地添加由paranthesis包围的数据行并用逗号分隔。