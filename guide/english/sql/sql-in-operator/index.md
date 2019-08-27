---
title: SQL IN Operator
---
## SQL IN Operator

## IN Operator defined

The `IN` operator is used in a `WHERE` or `HAVING` (as part of the `GROUP BY`) to limit the selected rows to the items "IN" a list.

Here is the current full student list to compare to the `WHERE` clause result set:

```sql
select studentID, FullName, sat_score, rcd_updated from student;
```

```text
+-----------+------------------------+-----------+---------------------+
| studentID | FullName               | sat_score | rcd_updated         |
+-----------+------------------------+-----------+---------------------+
|         1 | Monique Davis          |       400 | 2017-08-16 15:34:50 |
|         2 | Teri Gutierrez         |       800 | 2017-08-16 15:34:50 |
|         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 |
|         4 | Louis Ramsey           |      1200 | 2017-08-16 15:34:50 |
|         5 | Alvin Greene           |      1200 | 2017-08-16 15:34:50 |
|         6 | Sophie Freeman         |      1200 | 2017-08-16 15:34:50 |
|         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 |
|         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 |
|         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 |
+-----------+------------------------+-----------+---------------------+
9 rows in set (0.00 sec)
```
**Example 1:**

Rows will be presented that have an SAT score in this list (1000, 2400):

```sql
select studentID, FullName, sat_score, rcd_updated
from student
where sat_score in (1000, 2400);
```

```text
+-----------+------------------------+-----------+---------------------+
| studentID | FullName               | sat_score | rcd_updated         |
+-----------+------------------------+-----------+---------------------+
|         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 |
|         7 | Edgar Frank "Ted" Codd |      2400 | 2017-08-16 15:35:33 |
|         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 |
|         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 |
+-----------+------------------------+-----------+---------------------+
4 rows in set (0.00 sec)
```

**Example 2:**

Suppose, we wish to select the details of Customers whose names are one among ['Spencer Pautier', 'Raymond F. Boyce', 'Donald D. Chamberlin', 'Louis Ramsey']. Instead of writing four equality conditions separated by `OR` we could use the `IN` operator.

```sql
select studentID, FullName, sat_score, rcd_updated 
from student 
where FullName in ('Spencer Pautier', 'Raymond F. Boyce', 'Louis Ramsey', 'Donald D. Chamberlin');
```

```text
+-----------+------------------------+-----------+---------------------+
| studentID | FullName               | sat_score | rcd_updated         |
+-----------+------------------------+-----------+---------------------+
|         3 | Spencer Pautier        |      1000 | 2017-08-16 15:34:50 |
|         4 | Louis Ramsey           |      1200 | 2017-08-16 15:34:50 |
|         8 | Donald D. Chamberlin   |      2400 | 2017-08-16 15:35:33 |
|         9 | Raymond F. Boyce       |      2400 | 2017-08-16 15:35:33 |
+-----------+------------------------+-----------+---------------------+
4 rows in set (0.00 sec)
```
