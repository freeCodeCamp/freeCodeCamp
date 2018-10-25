---
title: SQL Drop View Statement
localeTitle: SQL Drop View语句
---
## SQL Drop View语句

### 介绍

本指南介绍了删除（删除）一个或多个视图对象的SQL语句。

视图是一个呈现来自一个或多个表的数据的对象。

注意：在删除或更改数据或对象之前，请记住要进行全新备份。

我们将涵盖：

*   使用SQL删除表
*   使用工作台删除视图

我们将使用MySQL进行转换。在其他数据库管理器中查看此功能的手册。

我们将删除名为`students_dropMe_v`的视图，该视图是为此目的而创建的。

### 基本语法

```sql
DROP VIEW [IF EXISTS] 
    view_name [, view_name] ... 
```

### 删除视图SQL

如果视图不存在，if exists部分将“陷阱”错误。

```sql
drop view if exists students_dropMe_v; 
```

创建后的视图：

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/drop-view01.JPG)

上面执行的命令和显示的视图：

![图像-2-](https://github.com/SteveChevalier/guide-images/blob/master/drop-view02.JPG)

### 使用Workbench

从工作台： 1）右键单击要删除的视图 2）从菜单中选择下拉视图 3）选择a）运行SQL以查看要执行的SQL语句或b）删除new

![图像-3-](https://github.com/SteveChevalier/guide-images/blob/master/drop-view03.JPG)

\*与所有这些SQL事物一样，它们比本入门指南中的内容更多。我希望这至少足以让你开始。

请参阅您的数据库管理员手册，并亲自尝试不同的选项。\*

### 额外

这是我用来创建刚刚删除的表的SQL：

```sql
create view `students_dropMe_v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 

```