---
title: SQL CREATE INDEX Statement
localeTitle: SQL CREATE INDEX语句
---
CREATE INDEX语句用于在表中创建索引。

索引用于非常快速地从数据库中检索数据。用户无法看到索引，它们只是用于加速搜索/查询。

> **注意：**使用索引更新表比没有表更新表需要更多时间（因为索引也需要更新）。因此，只在经常搜索的列上创建索引。

#### CREATE INDEX语法

在表上创建索引。允许重复的值：

```sql
CREATE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

#### CREATE UNIQUE INDEX语法

在表上创建唯一索引。不允许重复值：

```sql
CREATE UNIQUE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

> **注意：**创建索引的语法因不同的数据库而异。因此：检查在数据库中创建索引的语法。

#### CREATE INDEX示例

下面的SQL语句在“Persons”表的“LastName”列中创建名为“idx\_lastname”的索引：

```sql
CREATE INDEX idx_lastname 
 ON Persons (LastName); 
```

如果要在列组合上创建索引，可以在括号中列出列名，用逗号分隔： CREATE INDEX idx\_pname

```sql
ON Persons (LastName, FirstName); 
```

#### DROP INDEX声明

DROP INDEX语句用于删除表中的索引。

**MS Access：**

```sql
DROP INDEX index_name ON table_name; 
```

**SQL Server：**

```sql
DROP INDEX table_name.index_name; 
```

**DB2 / Oracle数据库：**

```sql
DROP INDEX index_name; 
```

**MySQL的：**

```sql
ALTER TABLE table_name 
 DROP INDEX index_name; 

```