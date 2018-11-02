---
title: SQL not Operator
---
## SQL not Operator

You can use the `NOT` operator in the `WHERE` clause of `SELECT` statement. You use it when you want to select a condition that is not true.

Here is an example that selects all persons that are not male:

```sql
SELECT Id, Name, DateOfBirth, Gender
FROM Person
WHERE NOT Gender = "M"
```



