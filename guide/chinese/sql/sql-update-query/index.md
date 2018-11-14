---
title: SQL Update Query
localeTitle: SQL Update查询
---
## SQL Update查询

### Update查询可以执行什么操作

更新查询使DBA或SQL使用程序员能够使用一个命令更新许多记录。

重要安全提示！在更改之前，请始终备份您要更改的内容！

本指南将：

*   在学生表中添加一个新字段
*   测试逻辑以使用学校指定的电子邮件地址更新该字段
*   更新新字段。

这是我们开始这个过程的学生表

```sql
SELECT * FROM student; 
```

```text
+-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 | studentID | FullName               | sat_score | programOfStudy   | rcd_Created         | rcd_Updated         | 
 +-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 |         1 | Monique Davis          |       400 | Literature       | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez         |       800 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         3 | Spencer Pautier        |      1000 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman         |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 |         8 | Donald D. Chamberlin   |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce       |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 +-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 9 rows in set (0.00 sec) 
```

### 更改表格并添加新字段

```sql
    ALTER TABLE `fcc_sql_guides_database`.`student` 
    ADD COLUMN `schoolEmailAdr` VARCHAR(125) NULL AFTER `programOfStudy`; 
```

执行alter后的student表。

```text
mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+----------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr | 
 +------------------------+-----------+------------------+----------------+ 
 | Monique Davis          |       400 | Literature       | NULL           | 
 | Teri Gutierrez         |       800 | Programming      | NULL           | 
 | Spencer Pautier        |      1000 | Programming      | NULL           | 
 | Louis Ramsey           |      1200 | Programming      | NULL           | 
 | Alvin Greene           |      1200 | Programming      | NULL           | 
 | Sophie Freeman         |      1200 | Programming      | NULL           | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | NULL           | 
 | Donald D. Chamberlin   |      2400 | Computer Science | NULL           | 
 | Raymond F. Boyce       |      2400 | Computer Science | NULL           | 
 +------------------------+-----------+------------------+----------------+ 
 9 rows in set (0.00 sec) 
```

### 测试逻辑（非常重要的一步！）

```sql
SELECT FullName, instr(FullName," ") AS firstSpacePosition, 
 concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") AS schoolEmail 
 FROM student; 
```

```text
+------------------------+--------------------+------------------------+ 
 | FullName               | firstSpacePosition | schoolEmail            | 
 +------------------------+--------------------+------------------------+ 
 | Monique Davis          |                  8 | Monique@someSchool.edu | 
 | Teri Gutierrez         |                  5 | Teri@someSchool.edu    | 
 | Spencer Pautier        |                  8 | Spencer@someSchool.edu | 
 | Louis Ramsey           |                  6 | Louis@someSchool.edu   | 
 | Alvin Greene           |                  6 | Alvin@someSchool.edu   | 
 | Sophie Freeman         |                  7 | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |                  6 | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |                  7 | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |                  8 | Raymond@someSchool.edu | 
 +------------------------+--------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

_关于concat（）的注释：在MySQL中，此命令用于组合字符串，而在其他SQL版本中则不然（请查看手册）。在这种用法中，它的工作方式如下：FullName字段的子字符串（但不包括第一个空格）与“@ someSchool.edu”组合在一起。在现实世界中，这将变得更加复杂，您需要确保电子邮件地址是唯一的。_

### 进行更新

我们假装这是我们想要的，并使用以下信息更新表：

```sql
UPDATE student SET schoolEmailAdr = concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") 
 WHERE schoolEmailAdr is NULL; 
```

成功！

```text
mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+------------------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr         | 
 +------------------------+-----------+------------------+------------------------+ 
 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu | 
 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    | 
 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu | 
 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   | 
 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   | 
 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu | 
 +------------------------+-----------+------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

与所有这些SQL事物一样，它们比本入门指南中的内容更多。

我希望这至少足以让你开始。

请参阅您的数据库管理员手册，并自己尝试不同的选项。