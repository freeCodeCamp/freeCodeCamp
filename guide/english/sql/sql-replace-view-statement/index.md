---
title: SQL Replace VIEW Statement
---

## SQL Replace VIEW Statement

## Introduction

A View is a database object that presents data from in one or more tables. The same SQL statement used to create a view can also be used to replace an existing view.

This guide will update (replace) the existing view "programming-students-v" with one that is slightly different and has a different name.

Safety tip: always backup the schema before making changes to it.

### General sytax

```sql
CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

### SQL Used to create the view and the current data

```sql
create view `programming-students-v` as
select FullName, programOfStudy 
from student 
where programOfStudy = 'Programming';
```

```sql
select * from `programming-students-v`;
```

Current Data:

```text
+-----------------+----------------+
| FullName        | programOfStudy |
+-----------------+----------------+
| Teri Gutierrez  | Programming    |
| Spencer Pautier | Programming    |
| Louis Ramsey    | Programming    |
| Alvin Greene    | Programming    |
| Sophie Freeman  | Programming    |
+-----------------+----------------+
5 rows in set (0.00 sec)
```

A list of the existing views:

```sql
SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW';
```

```text
+-----------------------------------+------------+
| Tables_in_fcc_sql_guides_database | Table_type |
+-----------------------------------+------------+
| programming-students-v            | VIEW       |
| students-contact-info_v           | VIEW       |
| students_dropme_v                 | VIEW       |
+-----------------------------------+------------+
3 rows in set (0.00 sec)
```

### Replacing the view

```sql
create or replace view `programming-students-v` as
select FullName, programOfStudy, sat_score 
from student 
where programOfStudy = 'Programming';    
```

```sql
select * from `programming-students-v`;
```

Note: the view now shows the sat_score.

```text
+-----------------+----------------+-----------+
| FullName        | programOfStudy | sat_score |
+-----------------+----------------+-----------+
| Teri Gutierrez  | Programming    |       800 |
| Spencer Pautier | Programming    |      1000 |
| Louis Ramsey    | Programming    |      1200 |
| Alvin Greene    | Programming    |      1200 |
| Sophie Freeman  | Programming    |      1200 |
+-----------------+----------------+-----------+
```

Note: the list of views hasn't change, our view is replaced.

```text
mysql>  SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW';
+-----------------------------------+------------+
| Tables_in_fcc_sql_guides_database | Table_type |
+-----------------------------------+------------+
| programming-students-v            | VIEW       |
| students-contact-info_v           | VIEW       |
| students_dropme_v                 | VIEW       |
+-----------------------------------+------------+
3 rows in set (0.00 sec)
```

*As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide. I hope this at least gives you enough to get started. Please see the manual for your database manager and have fun trying different options yourself.

