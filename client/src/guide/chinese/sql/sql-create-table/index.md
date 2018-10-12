---
title: SQL Create Table
localeTitle: SQL创建表
---
# SQL CREATE TABLE

## 介绍

本指南概述了SQL `CREATE TABLE`函数的基础知识。

我们将在这些freeCodeCamp SQL指南中使用MySQL作为所有示例。 MySQL经常在后端数据库的网站上使用，2）它是免费的，而且有趣且易于使用。

## 本指南涵盖的内容

*   创建模式，即所有数据库对象的容器。
*   创建一个表，以便我们有一些改变。
*   通过导入CSV文件并更改该表来创建表
*   使用MySQL工作台工具创建表

我们使用MySQL工作台脚本工具中的SQL语句完成大部分工作。我们还将了解如何使用工作台界面而不是SQL语句创建表。

## 关系数据库的高级结构

1.  最高水平;数据库;数据库系统安装。在这种情况下，它是MySQL。在上面的屏幕截图中称为“本地实例MySQL路由器”。
2.  接下来是Schema;关系数据库系统中托管数据所需对象的容器。
3.  我们创建的对象（表，索引，存储过程，函数）来管理系统及其数据

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/create_table01.JPG?raw=true)

## 创建MySQL架构

模式是管理给定主题或过程的数据所需的对象的容器。我们在本指南中展示了示例。

我们将使用SQL命令为我们的学习和测试创建模式;
```
create database fCC_alterTableGuide; 
```

在运行此命令之前，此实例是模式结构

![图像-2-](https://github.com/SteveChevalier/guide-images/blob/master/create_table02.JPG?raw=true)

运行SQL语句后，此实例模式结构

![图像-3-](https://github.com/SteveChevalier/guide-images/blob/master/create_table03.JPG?raw=true)

## 创建表，使用“insert”添加测试数据，重命名表（alter）

我们将创建一个学生表。

步骤将是：

1.  确保我们没有桌子
    
2.  创建表
    
3.  插入测试数据。
    

*   数据类型：学生姓名是一个限制为90个字符的字符字段
*   学生ID是一个数字（整数）（范围-2147483648到2147483647）。这将是表的主键，并在添加记录时自动递增。
*   还有两个“时间戳”字段也可以使用

创建声明并显示执行结果;

![图像-4-](https://github.com/SteveChevalier/guide-images/blob/master/create_table04.JPG?raw=true)

使用Select语句，我们将看到该表存在，但现在已添加记录。

![图像-5-](https://github.com/SteveChevalier/guide-images/blob/master/create_table05.JPG?raw=true)

现在插入一些数据，看看我们的新表中包含记录的内容（并了解创建和更新时间戳）;

![图像-6-](https://github.com/SteveChevalier/guide-images/blob/master/create_table06.JPG?raw=true)

第一个时间戳是创建数据和时间，第二个是更新日期和时间。更改记录应更新ts2但不更新ts1。让我们来看看。

![图像-7-](https://github.com/SteveChevalier/guide-images/blob/master/create_table07.JPG?raw=true)

## 使用MySql Workbench创建一个表

右键单击要放入新文件的架构下的“Tables”。选择Create Table。

![图像-8-](https://github.com/SteveChevalier/guide-images/blob/master/create_table08.JPG?raw=true)

根据需要填写表单，然后单击“应用”

![图像-9](https://github.com/SteveChevalier/guide-images/blob/master/create_table09.JPG?raw=true)

## 创建表选择（CTAS）

创建表副本（包括数据）的快速方法是将表创建为select。

CREATE TABLE我的_表为（SELECT \* FROM orig_ tbl）;

## 通过导入CSV文件创建并填充表

右键单击要放入新文件的架构下的“Tables”。选择Table Data Import。

![图像10](https://github.com/SteveChevalier/guide-images/blob/master/create_table10.JPG?raw=true)

选择要导入的CSV文件，然后单击“下一步” 通常，您可以从数据中创建新表，选择所需的选项，然后单击“下一步”

![图像-11](https://github.com/SteveChevalier/guide-images/blob/master/create_table11.JPG?raw=true)

根据需要调整数据类型，然后单击“下一步”

![图像-12](https://github.com/SteveChevalier/guide-images/blob/master/create_table12.JPG?raw=true)

单击“下一步”（在此屏幕上显示下一个屏幕）将数据导入表中 您将看到完成状态，查看并单击“完成”

![图像-13](https://github.com/SteveChevalier/guide-images/blob/master/create_table13.JPG?raw=true)

![图像-14](https://github.com/SteveChevalier/guide-images/blob/master/create_table14.JPG?raw=true)

## 其他材料

有更多的细节来涵盖这个主题所以安装MySQL，玩得开心！

### 哪里可以获得MySQL

尝试\[Windows用户下载\[（https://dev.mysql.com/downloads/windows/）

### MySQL文档

*   [手册页](https://dev.mysql.com/doc/refman/5.7/en/alter-table.html)
*   [手册中的例子](https://dev.mysql.com/doc/refman/5.7/en/alter-table-examples.html)

### SQL Server文档

*   [Microsoft Docs](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql)