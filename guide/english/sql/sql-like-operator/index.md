---
title: SQL LIKE Operator
---
## SQL LIKE Operator

### LIKE Operator defined
The `LIKE` operator is used in a `WHERE` or `HAVING` (as part of the `GROUP BY`) to limit the selected rows to the items when a column has a certain pattern of characters contained in it. 

### ILIKE Opeartor 
The 'ILIKE' works same as 'LIKE' but it ignores case-sensitivity in the string. The provided pattern string should be the case-sensitive else you will get an error. To avoid these errors, just write `ILIKE` instead of `LIKE`.
For Example,
```sql
FullName LIKE 'monique%'                   // --you will face error because the name saved in Database is 'Monique'.
FullName ILIKE 'monique%'                  // --you will not see any error now.
```

### This guide will demonstrate:
* Determining if a string starts or ends with a given string pattern
* Determining if a pattern exists in the middle of the string
* Determining if a string is not contained in the string

### A column starts or ends with a given string pattern
This SQL will select students that have `FullName` starting with "Monique" or ending with "Greene".

```sql
SELECT studentID, FullName, sat_score, rcd_updated
FROM student 
WHERE 
FullName LIKE 'Monique%' OR -- note the % at the end but not the beginning
FullName LIKE '%Greene'; -- note the % at the beginning but not the end
```
```text
+-----------+---------------+-----------+---------------------+
| studentID | FullName      | sat_score | rcd_updated         |
+-----------+---------------+-----------+---------------------+
|         1 | Monique Davis |       400 | 2017-08-16 15:34:50 |
|         5 | Alvin Greene  |      1200 | 2017-08-16 15:34:50 |
+-----------+---------------+-----------+---------------------+
2 rows in set (0.00 sec)
```

### A string pattern is in the middle of the column
This SQL will select students that have "ree" anywhere in the name.
```sql
SELECT studentID, FullName, sat_score, rcd_updated
FROM student 
WHERE FullName LIKE '%ree%'; -- note the % at the beginning AND at the end
```
```text
+-----------+----------------+-----------+---------------------+
| studentID | FullName       | sat_score | rcd_updated         |
+-----------+----------------+-----------+---------------------+
|         5 | Alvin Greene   |      1200 | 2017-08-16 15:34:50 |
|         6 | Sophie Freeman |      1200 | 2017-08-16 15:34:50 |
+-----------+----------------+-----------+---------------------+
2 rows in set (0.00 sec)
```

### A string is NOT in the column
You can place "NOT" before LIKE to exclude the rows with the string pattern instead of selecting them.
This SQL excludes records that contain "cer Pau" and "Ted" in the FullName column.

```sql
SELECT studentID, FullName, sat_score, rcd_updated
FROM student 
WHERE FullName NOT LIKE '%cer Pau%' AND FullName NOT LIKE '%"Ted"%';
```
```text
+-----------+----------------------+-----------+---------------------+
| studentID | FullName             | sat_score | rcd_updated         |
+-----------+----------------------+-----------+---------------------+
|         1 | Monique Davis        |       400 | 2017-08-16 15:34:50 |
|         2 | Teri Gutierrez       |       800 | 2017-08-16 15:34:50 |
|         4 | Louis Ramsey         |      1200 | 2017-08-16 15:34:50 |
|         5 | Alvin Greene         |      1200 | 2017-08-16 15:34:50 |
|         6 | Sophie Freeman       |      1200 | 2017-08-16 15:34:50 |
|         8 | Donald D. Chamberlin |      2400 | 2017-08-16 15:35:33 |
|         9 | Raymond F. Boyce     |      2400 | 2017-08-16 15:35:33 |
+-----------+----------------------+-----------+---------------------+
7 rows in set (0.00 sec)
```

*Here is the current full student list to compare to the where clause result sets above.*

```sql
SELECT studentID, FullName, sat_score, rcd_updated FROM student;
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
