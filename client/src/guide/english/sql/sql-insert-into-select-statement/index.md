---
title: SQL Insert into Select Statement
---
## SQL Insert into Select Statement

You can insert records in a table using data that are already stored in the database. This is only a copy of data and it doesn’t affect the origin table. 

The `INSERT INTO SELECT` statement combines `INSERT INTO` and `SELECT` statements and you can use any conditions you want. The syntax is:

```sql
INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;
```

Here is an example that inserts in the table Person all the male students from the table Students.

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender)
SELECT Id, Name, DateOfBirth, Gender
FROM Students
WHERE Gender = ‘M’
```



