---
title: SQL Min Function
---
## SQL Minimum (MIN) Function

SQL MIN Function is used to get the minimum value of a column in a table. 

Here is the syntax for using the function:

```sql
SELECT column1, column2, ..., columnN, MIN(aggregated_column)
FROM table1
GROUP BY column1, column2, ..., columnN
```
### Example 1
Our table looks like the following:

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
```
For the above table we would like to find out the minimum SAT score. Here is the SQL statement that we will use:
 
```sql
SELECT MIN(sat_score) FROM student;
```
The result will be:

```text
+-----------+
| sat_score |
+-----------+
|       400 |
+-----------+
```

### Example 2
Our table looks like the following:

```text
+-----------+------------------------+---------+-----------+---------------------+
| studentID | FullName               | state   | sat_score | rcd_updated         |
+-----------+------------------------+---------+-----------+---------------------+
|         1 | Monique Davis          | TX      |       400 | 2017-08-16 15:34:50 |
|         2 | Teri Gutierrez         | NY      |       800 | 2017-08-16 15:34:50 |
|         3 | Spencer Pautier        | CA      |      1000 | 2017-08-16 15:34:50 |
|         4 | Louis Ramsey           | IA      |      1200 | 2017-08-16 15:34:50 |
|         5 | Alvin Greene           | CA      |      1200 | 2017-08-16 15:34:50 |
|         6 | Sophie Freeman         | CO      |      1200 | 2017-08-16 15:34:50 |
|         7 | Edgar Frank "Ted" Codd | NY      |      2400 | 2017-08-16 15:35:33 |
|         8 | Donald D. Chamberlin   | CA      |      2400 | 2017-08-16 15:35:33 |
|         9 | Raymond F. Boyce       | TX      |      2400 | 2017-08-16 15:35:33 |
+-----------+------------------------+---------+-----------+---------------------+
```
For the above table we would like to find out the minimum SAT score per State. Here is the SQL statement that we will use:
 
```sql
SELECT state, MIN(sat_score) 
  FROM student
GROUP BY state;
```
The result will be:

```text
+---------+-----------+
| state   | sat_score |
+---------+-----------+
| TX      |       400 |
| NY      |       800 |
| CA      |      1000 |
| IA      |      1200 |
| CO      |      1200 |
+---------+-----------+
```
