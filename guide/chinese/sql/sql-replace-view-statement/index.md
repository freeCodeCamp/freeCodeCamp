---
title: SQL Replace VIEW Statement
localeTitle: SQL替换VIEW语句
---
## SQL替换VIEW语句

## 介绍

View是一个数据库对象，它在一个或多个表中显示数据。用于创建视图的相同SQL语句也可用于替换现有视图。

本指南将使用略有不同且名称不同的视图更新（替换）现有视图“programming-students-v”。

安全提示：在对模式进行更改之前始终备份模式。

### 一般sytax

```sql
CREATE OR REPLACE VIEW view_name AS 
 SELECT column1, column2, ... 
 FROM table_name 
 WHERE condition; 
```

### SQL用于创建视图和当前数据

```sql
create view `programming-students-v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 
```

```sql
select * from `programming-students-v`; 
```

当前数据：

```text
+-----------------+----------------+ 
 | FullName        | programOfStudy | 
 +-----------------+----------------+ 
 | Teri Gutierrez  | Programming    | 
 | Spencer Pautier | Programming    | 
 | Louis Ramsey    | Programming    | 
 | Alvin Greene    | Programming    | 
 | Sophie Freeman  | Programming    | 
 +-----------------+----------------+ 
 5 rows in set (0.00 sec) 
```

现有视图的列表：

```sql
SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
```

```text
+-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
```

### 替换视图

```sql
create or replace view `programming-students-v` as 
 select FullName, programOfStudy, sat_score 
 from student 
 where programOfStudy = 'Programming'; 
```

```sql
select * from `programming-students-v`; 
```

注意：视图现在显示sat\_score。

```text
+-----------------+----------------+-----------+ 
 | FullName        | programOfStudy | sat_score | 
 +-----------------+----------------+-----------+ 
 | Teri Gutierrez  | Programming    |       800 | 
 | Spencer Pautier | Programming    |      1000 | 
 | Louis Ramsey    | Programming    |      1200 | 
 | Alvin Greene    | Programming    |      1200 | 
 | Sophie Freeman  | Programming    |      1200 | 
 +-----------------+----------------+-----------+ 
```

注意：视图列表没有更改，我们的视图被替换。

```text
mysql>  SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
 +-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
```

\*与所有这些SQL事物一样，它们比本入门指南中的内容更多。我希望这至少足以让你开始。请参阅您的数据库管理员手册，并自己尝试不同的选项。