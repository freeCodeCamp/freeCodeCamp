---
title: SQL Select Statement
---

# SQL Select Statement

## Select and From clauses

The SELECT part of a query is normally to determine which columns of the data to show in the results. There are also options you can apply to show data that is not a table column.

This example shows three columns selected from the "student" table and one calculated column. The database stores the studentID, FirstName, and LastName of the student. We can combine the First and the Last name columns to create the FullName calculated column. 

```sql
select studentID, FirstName, LastName, FirstName + ' ' + LastName as FullName
from student;
```

```text
+-----------+-------------------+------------+------------------------+
| studentID | FirstName         | LastName   | FullName               |
+-----------+-------------------+------------+------------------------+
|         1 | Monique           | Davis      | Monique Davis          |
|         2 | Teri              | Gutierrez  | Teri Gutierrez         |
|         3 | Spencer           | Pautier    | Spencer Pautier        |
|         4 | Louis             | Ramsey     | Louis Ramsey           |
|         5 | Alvin             | Greene     | Alvin Greene           |
|         6 | Sophie            | Freeman    | Sophie Freeman         |
|         7 | Edgar Frank "Ted" | Codd       | Edgar Frank "Ted" Codd |
|         8 | Donald D.         | Chamberlin | Donald D. Chamberlin   |
|         9 | Raymond F.        | Boyce      | Raymond F. Boyce       |
+-----------+-------------------+------------+------------------------+
9 rows in set (0.00 sec)
```
**NOTE**: You can also select all the data from the table using the `*` operator, like so:
```sql
SELECT * from <table_name>
```

## Select All Data in a table

As defined in above section, there is another way of selecting all data without defining names of each and every attribute in query.
This technique is short and very helpfull in querying faster:

```Select query 
select * 
from student;
```
```text
+-----------+-------------------+------------+
| studentID | FirstName         | LastName   |
+-----------+-------------------+------------+
|         1 | Monique           | Davis      |
|         2 | Teri              | Gutierrez  |
|         3 | Spencer           | Pautier    |
|         4 | Louis             | Ramsey     |
|         5 | Alvin             | Greene     |
|         6 | Sophie            | Freeman    |
|         7 | Edgar Frank "Ted" | Codd       |
|         8 | Donald D.         | Chamberlin |
|         9 | Raymond F.        | Boyce      |
+-----------+-------------------+------------+
9 rows in set (0.00 sec)
```


*As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.

One thing to note for beginners, the select statement is not destructive and can be used as a great place to start learning sql.
