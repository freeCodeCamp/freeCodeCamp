---
title: SQL Insert Query
localeTitle: SQL插入查询
---
## SQL插入查询

插入查询是一种将数据插入表格的方法。假设我们已经创建了一个表格

`CREATE TABLE example_table ( name varchar(255), age int)`

**example\_table**

|名称|年龄| | --- | --- |

现在要向此表添加一些数据，我们将以下列方式使用**INSERT** ：

`INSERT INTO example_table (column1,column2) VALUES ("Andrew",23)`

**example\_table**

|名称|年龄| | --- | --- | |安德鲁| 23 |

即使以下内容也可以使用，但指定哪些数据进入哪一列始终是一个好习惯。

`INSERT INTO table_name VALUES ("John", 28)`

**example\_table**

|名称|年龄| | --- | --- | |安德鲁| 23 | |约翰| 28 |