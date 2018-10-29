---
title: SQL Create Table Statement
localeTitle: SQL创建表语句
---
## SQL创建表语句

表是存储在数据库中的一组数据。

要在数据库中创建表，请使用`CREATE TABLE`语句。您为表命名，并列出其数据类型的列。
```
CREATE TABLE TABLENAME(Attribute1 Datatype, Attribute2 Datatype,........); 
```

这是一个创建名为Person的表的示例：

```sql
CREATE TABLE Person( 
  Id int not null, 
  Name varchar not null, 
  DateOfBirth date not null, 
  Gender bit not null, 
  PRIMARY KEY( Id ) 
 ); 
```

在上面的示例中，每个人都有一个姓名，一个出生日期和一个性别。 Id列是标识表中一个人的键。您可以使用关键字`PRIMARY KEY`将一个或多个列配置为主键。

列不能为`not null`或`null`表示它是否是必需的。

#### 更多信息：