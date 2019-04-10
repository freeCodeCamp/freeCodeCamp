---
title: SQL Date Functions
localeTitle: SQL日期函数
---
## SQL日期函数

### 介绍

MySQL中定义了61个日期函数。别担心，我们不会在这里查看它们。本指南将向您介绍一些常见的，并为您提供足够的曝光，让您自己探索。

我们将涵盖：

*   获取当前日期
*   日期数学
*   在where或having子句中的日期

### 获取当前日期

从系统中获取日期对于使用SQL处理数据非常方便。

```sql
-- current date 
 select now(), sysdate(), current_date(), current_time(), -- date and time from the system on execution 
 dayofyear(now()) as NumDaysSoFarThisYr, 
 EXTRACT(YEAR FROM now()) as theYearPart, 
 EXTRACT(YEAR_MONTH FROM now()) as theYrMonPart, 
 date_format(now(), '%W %M %Y') as oneOfManyFormats; 
 ; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions04.JPG)

在SQL查询中，我们看到以下内容：

*   结果中的前两列是获取相同信息的两种方法：执行SQL时系统上的日期。
*   接下来的两列仅切出系统日期的日期和时间部分。
*   下一个显示今年系统日期的“日期编号”。您会注意到，这比下一个示例中显示的数学要多一天。
*   接下来的两个只提取年份，然后提取年和月
*   最后，但并非最不重要的是，有一个格式化日期的方法之一的例子。

### 日期数学

```sql
select now(), current_date(), 
 datediff(now(),'2017-01-01') as daysThisYear, 
 subdate(current_date(), interval 150 day) as '150DaysAgo', 
 adddate(now(), interval 7 day) as dateInA_Week -- date in a week 
 ; 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions02.jpg)

我们在这里看到：

*   前两列只是系统日期和时间供参考。
*   第二列是2017年1月1日到系统日期之间的日期差异（datediff）。
*   最后两列是减去和添加日期的示例。

### 在where或having子句中

以下是在where子句中使用日期数学的两个示例：

```sql
select * from student; - to show the current data being used for the example 
 select * from student where recordCreated < '2017-01-01'; 
 select * from student where recordCreated < subdate(current_date(), interval 225 day); 
```

![图像-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions03.jpg)

关于HAVING部分：请记住，大多数WHERE子句逻辑也适用于GROUP BY的HAVING子句。两者之间的区别在于WHERE子句针对完整数据运行，HAVING针对GROUP BY子句聚合的数据运行。

_与所有这些事情一样，对于他们来说，还有比这本入门指南更多的内容。我希望这至少足以让你开始。请参阅您的数据库管理员手册，并自己尝试不同的选项。_