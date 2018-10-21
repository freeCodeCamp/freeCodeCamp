---
title: SQL Select Distinct Statement
---
## SQL Select Distinct Statement

### Introduction
This keyword allows us to get lists of unique values in a column. This guide will demonstrate that.

### Full display of the data in the student table 
```sql
USE fcc_sql_guides_database;
SELECT studentID, FullName, sat_score, programOfStudy, rcd_Created, rcd_Updated FROM student;
```
```text
+-----------+------------------------+-----------+------------------+---------------------+---------------------+
| studentID | FullName               | sat_score | programOfStudy   | rcd_Created         | rcd_Updated         |
+-----------+------------------------+-----------+------------------+---------------------+---------------------+
|         1 | Monique Davis          |       400 | Literature       | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |
|         2 | Teri Gutierrez         |       800 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |
|         3 | Spencer Pautier        |      1000 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |
|         4 | Louis Ramsey           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |
|         5 | Alvin Greene           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |
|         6 | Sophie Freeman         |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 |
|         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 |
|         8 | Donald D. Chamberlin   |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 |
|         9 | Raymond F. Boyce       |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 |
+-----------+------------------------+-----------+------------------+---------------------+---------------------+
9 rows in set (0.00 sec)
```

### Get list of fields of study
```sql
SELECT DISTINCT programOfStudy FROM student;
```
```text
+------------------+
| programOfStudy   |
+------------------+
| Literature       |
| Programming      |
| Computer Science |
+------------------+
3 rows in set (0.00 sec)
```

As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.

