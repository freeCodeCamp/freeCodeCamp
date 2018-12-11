---
title: SQL Alter Table Statement
localeTitle: SQL Alter Table语句
---
## SQL指南 - ALTER TABLE

## 介绍

本指南将向您介绍并尝试解释关系数据库中SQL alter table函数的一些基础知识。 **重要安全提示：在进行更改之前，务必备份数据！**

我们将在这个freeCodeCamp SQL指南中使用MySQL作为所有示例。选择MySQL的原因是1）它在后端数据库的网站上非常常用，2）它是免费的，而且有趣且易于使用。

## 本指南涵盖的内容

我们将使用“CREATE TABLE”指南中创建的表。如果您不熟悉创建表格，请随时查看该指南。

*   更改创建的表将以几种不同的方式改变它。
*   我们将更改其名称并修改列
*   添加列（添加列时，我们还将查看几个最重要的列类型及其用途）。
*   删除列（意味着删除列）。
*   通过导入CSV文件并更改该表来创建表。
*   使用MySQL工作台工具创建和修改表。

其中大部分内容将使用MySQL工作台脚本工具中的SQL语句完成，但我们还将介绍如何使用工作台界面而不是SQL语句更改表。

## 变更前的表格：

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table01a.JPG?raw=true)

添加日期和电子邮件地址列（日期和字符列）： ![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table01.JPG?raw=true)

添加数字列（请注意，它已添加到表中的特定位置）： ![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table02.JPG?raw=true)

重命名一些列： ![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table03.JPG?raw=true)

删除列： ![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table04.JPG?raw=true)

您还可以使用alter table workbench工具。只需右键单击要更改的表格，然后根据需要进行更改。 ![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table05.JPG?raw=true)

还有更多工作要做，请查看数据库管理软件的手册以了解更多信息。