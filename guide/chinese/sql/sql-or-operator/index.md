---
title: SQL or Operator
localeTitle: SQL或运算符
---
## SQL或运算符

您可以在`SELECT`语句的`WHERE`子句中使用`OR`运算符。当您想要选择满足`OR`语句中至少一个条件的记录时，可以使用它。

下面是一个示例，它选择Person表中所有男性或名称为“Mary”的记录：

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE Gender = “M” OR Name = “Mary” 
```

您可以在`WHERE`子句中组合其他运算符（使用括号表示操作的顺序），如下例所示：

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE Gender = “M” AND (Name = “Peter” OR Name = “John”) 
```

此示例选择Gender为“M”且Name为“Peter”的所有记录，以及Gender为“M”且名称为“John”的记录。