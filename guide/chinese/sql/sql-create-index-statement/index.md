---
title: SQL CREATE INDEX Statement
localeTitle: SQL CREATE INDEX语句
---
## SQL CREATE INDEX语句

此语句用于在现有表的列上创建“索引”。

索引要点：

*   它们用于提高搜索数据的效率，在连接表时以特定顺序显示数据（请参阅“JOIN”指南）等。
*   索引是“系统”对象，这意味着它由数据库管理器使用。
*   部分用法是数据库管理器在索引使用的数据在相关表中更改时更新索引。请记住这一点，因为随着数据库中索引数量的增加，整体系统性能可能会受到影响。
*   如果您发现某个表或某些表上的SQL运行缓慢，则首先要考虑创建索引来纠正该问题。

以下是Create Index Statement的语法示例。请注意，语法允许索引超过一列。

```sql
CREATE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

在student表的字段上创建一个新索引，programOfStudy。 作为参考，这是学生表的当前定义。

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/create-index-statement01.JPG?raw=true)

这是创建索引的语句，以及更新的表定义的屏幕截图：

```sql
create index pStudyIndex 
 on student (programOfStudy); 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/create-index-statement02.JPG?raw=true)

在MySQL中，您使用ALTER TABLE命令来更改和删除索引。 MySQL Workbench还提供GUI工具来管理索引。

与所有这些事情一样，还有更多内容，所以请查看数据库管理员的手册，并自己尝试不同的选项。