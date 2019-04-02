---
title: SQL not Operator
localeTitle: SQL不是运算符
---
## SQL不是运算符

您可以在`SELECT`语句的`WHERE`子句中使用`NOT`运算符。如果要选择不正确的条件，请使用它。

这是一个选择所有不是男性的人的例子：

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE NOT Gender = "M" 

```