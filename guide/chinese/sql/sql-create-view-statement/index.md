---
title: SQL Create View Statement
localeTitle: SQL创建视图语句
---
## SQL创建视图语句

### 什么是观点？

View是一个数据库对象，它呈现一个或多个表中存在的数据。视图以与表类似的方式使用，但它们不包含任何数据。它们只是“指向”其他地方存在的数据（例如，表或视图）。

### 我们为什么喜欢他们？

*   视图是限制所呈现数据的一种方式。例如，人力资源部门数据被过滤以仅呈现非敏感信息。在这种情况下，敏感信息可以是社会安全号码，员工性别，支付率，家庭住址等。
*   跨多个表的复杂数据可以组合成一个“视图”。这可以使您的业务分析师和程序员的工作更轻松。

### 重要安全提示

*   视图由系统管理。当更改，添加或更新相关表中的数据时，系统将更新视图。我们只在需要管理系统资源的使用时才使用它们。
*   在MySQL中，创建视图后对表设计（即新列或删除列）的更改不会在视图本身中更新。必须更新或重新创建视图。
*   视图是四种标准数据库对象类型之一。其他是表，存储过程和函数。
*   视图通常可以像处理表一样处理，但是当视图包含多个表时，更新会受到限制或不可用。
*   关于视图的许多其他详细信息超出了本入门指南的范围。花时间阅读数据库管理员手册，享受这个功能强大的SQL对象。

### 创建视图语句的语法（MySQL）

```sql
CREATE 
    [OR REPLACE] 
    [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] 
    [DEFINER = { user | CURRENT_USER }] 
    [SQL SECURITY { DEFINER | INVOKER }] 
    VIEW view_name [(column_list)] 
    AS select_statement 
    [WITH [CASCADED | LOCAL] CHECK OPTION] 
```

_本指南将涵盖声明的这一部分......_

```sql
CREATE 
    VIEW view_name [(column_list)] 
    AS select_statement 
```

### 从学生表创建示例视图

笔记：

*   视图的名称末尾有一个“v”。建议视图名称表明它是某种方式的视图，使程序员和数据库管理员的工作更轻松。您的IT商店应该有自己的命名对象规则。
    
*   视图中的列受到WHERE子句的SELECT和数据行的限制。
    
*   由于名称中的“ - ”，视图名称周围的“\`”字符是必需的。 MySQL报告没有它们的错误。
    

```sql
create view `programming-students-v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 
 
 select * from `programming-students-v`; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/create-view-statement01.JPG?raw=true)

### 使用View组合来自多个表的数据的示例

学生人口统计表已添加到数据库中以演示此用法。该视图将组合这些表。

笔记：

*   要“连接”表，表必须具有唯一标识每一行的字段（通常是主键）。在这种情况下，它是学生ID。 （有关[SQL连接](../sql-joins/index.md)指南的更多信息。）
*   注意每个表的“别名”（学生为“s”，学生联系为“sc”）。这是一种缩短表名的工具，可以更轻松地识别正在使用的表。它比重复输入长表名更容易。在此示例中，它是必需的，因为studentID在两个表中都是相同的列名称，并且系统将显示“模糊列名称错误”而不指定要使用的表。

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/create-view-statement02.JPG?raw=true)

_与所有这些事情一样，观点还有很多。请参阅您的数据库管理员手册，并自己尝试不同的选项。_