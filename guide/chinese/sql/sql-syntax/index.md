---
title: SQL Syntax
localeTitle: SQL语法
---
## SQL语法

### 介绍

本指南提供了SQL语句语法的基本高级描述。

SQL是一个国际标准（ISO），但您会发现实现之间存在许多差异。本指南以MySQL为例。如果您使用许多其他关系数据库管理器（DBMS）之一，则需要在需要时检查该DBMS的手册。

### 我们将涵盖哪些内容

*   使用（设置语句将使用的数据库）
*   选择和从子句
*   条款（和/或，IN，之间，LIKE）
*   订购方式（ASC，DESC）
*   分组和拥有

### 如何使用这个

这用于选择包含SQL语句表的数据库：

```sql
use fcc_sql_guides_database; -- select the guide sample database 
```

### 选择和从子句

选择部分通常用于确定要在结果中显示哪些数据列。您还可以使用选项来显示非表格列的数据。

此示例显示从“student”表中选择的两列和两个计算列。第一个计算列是无意义的数字，另一个是系统日期。

```sql
    select studentID, FullName, 3+2 as five, now() as currentDate 
    from student; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax01.JPG)

### 条款（和/或，IN，介于和LIKE之间）

WHERE子句用于限制返回的行数。

在这种情况下，所有这五个将被使用是一个有点荒谬的Where子句。

将此结果与上述SQL语句进行比较，以遵循此逻辑。

行将呈现：

*   学生证在1到5之间（含）
*   或studentID = 8
*   或者名字中有“Maxmimo”

以下示例类似，但它进一步指定如果任何学生具有某些SAT分数（1000,1400），则不会显示它们：

```sql
    select studentID, FullName, sat_score, recordUpdated 
    from student 
    where ( 
        studentID between 1 and 5 
        or studentID = 8 
        or FullName like '%Maximo%' 
        ) 
        and sat_score NOT in (1000, 1400); 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax02.JPG)

### 订购方式（ASC，DESC）

Order By为我们提供了一种方法，可以通过SELECT部分​​中的一个或多个项对结果集进行排序。这是与上面相同的列表，但按学生姓名排序。默认排序顺序是升序（ASC），但要按相反顺序（降序）排序，您使用DESC，如下例所示：

```sql
    select studentID, FullName, sat_score 
    from student 
    where (studentID between 1 and 5 -- inclusive 
        or studentID = 8 
        or FullName like '%Maximo%') 
        and sat_score NOT in (1000, 1400) 
    order by FullName DESC; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax03.JPG)

### 分组和拥有

Group By为我们提供了一种组合行和聚合数据的方法。 Having子句与上面的Where子句类似，不同之处在于它对分组数据起作用。

这些数据来自我们在其中一些指南中使用的广告系列贡献数据。

这个SQL语句回答了这个问题：“哪些候选人在2016年收到了最多的捐款（不是$ amount，但是count（\*）），但只有那些捐款超过80的人呢？”

按降序（DESC）顺序对此数据集进行排序会将具有最大贡献数的候选项放在列表顶部。

```sql
    select Candidate, Election_year, sum(Total_$), count(*) 
    from combined_party_data 
    where Election_year = 2016 
    group by Candidate, Election_year 
    having count(*) > 80 
    order by count(*) DESC; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax04.JPG)

_与所有这些SQL事物一样，它们比本入门指南中的内容更多。我希望这至少足以让你开始。请参阅您的数据库管理员手册，并自己尝试不同的选项。_