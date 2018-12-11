---
title: SQL Joins
---

## SQL Joins

### Example of use
For this guide we'll discuss the JOIN section of the SQL statement.

### SQL syntax with focus on Join

```sql
SELECT col1, col2, col3, etc....
FROM  tableNameOne AS a
JOIN tableNameTwo AS b ON a.primeKey = b.primeKey 
etc...
```
The JOIN statement could be just JOIN or INNER JOIN, which are the same, or LEFT JOIN (described below). 

### Different Types of JOINs

- (INNER) JOIN
  - Return records that have matching values in both tables
- LEFT (OUTER) JOIN
  - Return all records from the left table, and the matched records from the right table
- RIGHT (OUTER) JOIN
  - Return all records from the right table, and the matched records from the left table
- FULL (OUTER) JOIN
  - Return all records when there is a match in either left or right table

### Join
The student table will be in the FROM clause so it will be a starting or LEFT table.

We'll JOIN this to the student contact table or RIGHT table.

You'll see that all of the students appear that are also in the contact table.

As shown in the tables below, studentID 9 is in the student table but NOT in the contact table so won't appear in a join.

SQL Statement
```sql
SELECT a.studentID, a.FullName, a.programOfStudy,
b.`student-phone-cell`, b.`student-US-zipcode`
FROM student AS a
JOIN `student-contact-info` AS b ON a.studentID = b.studentID;
```

"Joined" data:
``` text
+-----------+------------------------+------------------+--------------------+--------------------+
| studentID | FullName               | programOfStudy   | student-phone-cell | student-US-zipcode |
+-----------+------------------------+------------------+--------------------+--------------------+
|         1 | Monique Davis          | Literature       | 555-555-5551       |              97111 |
|         2 | Teri Gutierrez         | Programming      | 555-555-5552       |              97112 |
|         3 | Spencer Pautier        | Programming      | 555-555-5553       |              97113 |
|         4 | Louis Ramsey           | Programming      | 555-555-5554       |              97114 |
|         5 | Alvin Greene           | Programming      | 555-555-5555       |              97115 |
|         6 | Sophie Freeman         | Programming      | 555-555-5556       |              97116 |
|         7 | Edgar Frank "Ted" Codd | Computer Science | 555-555-5557       |              97117 |
|         8 | Donald D. Chamberlin   | Computer Science | 555-555-5558       |              97118 |
+-----------+------------------------+------------------+--------------------+--------------------+
```

### Left Join
Using the keyword LEFT before JOIN causes the system to start with the student (LEFT) table but will return NULL from the RIGHT table if there are no rows for the LEFT table student.

Note that studentID 9 appears here but the data from the contact table is just shown as NULL.

```sql
SELECT a.studentID, a.FullName, a.programOfStudy,
b.`student-phone-cell`, b.`student-US-zipcode`
FROM student AS a
LEFT JOIN `student-contact-info` AS b ON a.studentID = b.studentID;
```
``` text
+-----------+------------------------+------------------+--------------------+--------------------+
| studentID | FullName               | programOfStudy   | student-phone-cell | student-US-zipcode |
+-----------+------------------------+------------------+--------------------+--------------------+
|         1 | Monique Davis          | Literature       | 555-555-5551       |              97111 |
|         2 | Teri Gutierrez         | Programming      | 555-555-5552       |              97112 |
|         3 | Spencer Pautier        | Programming      | 555-555-5553       |              97113 |
|         4 | Louis Ramsey           | Programming      | 555-555-5554       |              97114 |
|         5 | Alvin Greene           | Programming      | 555-555-5555       |              97115 |
|         6 | Sophie Freeman         | Programming      | 555-555-5556       |              97116 |
|         7 | Edgar Frank "Ted" Codd | Computer Science | 555-555-5557       |              97117 |
|         8 | Donald D. Chamberlin   | Computer Science | 555-555-5558       |              97118 |
|         9 | Raymond F. Boyce       | Computer Science | NULL               |               NULL |
+-----------+------------------------+------------------+--------------------+--------------------+
9 rows in set (0.00 sec)
```

### Full (Outer) Join
In this type, we're going to try to return everything from both tables. If there is no match, we'll get NULL(empty) at that place.

```sql
SELECT a.studentID, a.FullName, a.sat_score
b.`studentEmailAddr`, b.`student-phone-cell` 
FROM student AS a
FULL JOIN `student-contact-info` AS b ON a.studentID = b.studentID;
```
```text
+-----------+------------------------+-----------+----------------------------------+--------------------+
| studentID | FullName               | sat_score | studentEmailAddr                 | student-phone-cell |
+-----------+------------------------+-----------+----------------------------------+--------------------+
|         1 | Monique Davis          |       400 | Monique.Davis@freeCodeCamp.org   | 555-555-5551       |
|         2 | Teri Gutierrez         |       800 | Teri.Gutierrez@freeCodeCamp.org  | 555-555-5552       |
|         3 | Spencer Pautier        |      1000 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553       | 
|         4 | Louis Ramsey           |      1200 | Louis.Ramsey@freeCodeCamp.org    | 555-555-5554       |
|         5 | Alvin Greene           |      1200 | Alvin.Green@freeCodeCamp.org     | 555-555-5555       |
|         6 | Sophie Freeman         |      1200 | Sophie.Freeman@freeCodeCamp.org  | 555-555-5556       |
|         7 | Edgar Frank "Ted" Codd |      2400 | Maximo.Smith@freeCodeCamp.org    | 555-555-5557       |
|         8 | Donald D. Chamberlin   |      2400 | Michael.Roach@freeCodeCamp.ort   | 555-555-5558       |
|         9 | Raymond F. Boyce       |      2400 |              NULL                |        NULL        |  
+-----------+------------------------+-----------+----------------------------------+--------------------+

```

### Complete table listings for reference
Student table listings

```sql
SELECT a.studentID, a.FullName, sat_score, a.programOfStudy, schoolEmailAdr 
FROM student AS a;
```

student or LEFT table
```text
+-----------+------------------------+-----------+------------------+------------------------+
| studentID | FullName               | sat_score | programOfStudy   | schoolEmailAdr         |
+-----------+------------------------+-----------+------------------+------------------------+
|         1 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu |
|         2 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    |
|         3 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu |
|         4 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   |
|         5 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   |
|         6 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  |
|         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   |
|         8 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  |
|         9 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu |
+-----------+------------------------+-----------+------------------+------------------------+
9 rows in set (0.00 sec)
```sql
SELECT * from `student-contact-info` AS b;
```

student contact or RIGHT table
``` text
+-----------+----------------------------------+--------------------+--------------------+
| studentID | studentEmailAddr                 | student-phone-cell | student-US-zipcode |
+-----------+----------------------------------+--------------------+--------------------+
|         1 | Monique.Davis@freeCodeCamp.org   | 555-555-5551       |              97111 |
|         2 | Teri.Gutierrez@freeCodeCamp.org  | 555-555-5552       |              97112 |
|         3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553       |              97113 |
|         4 | Louis.Ramsey@freeCodeCamp.org    | 555-555-5554       |              97114 |
|         5 | Alvin.Green@freeCodeCamp.org     | 555-555-5555       |              97115 |
|         6 | Sophie.Freeman@freeCodeCamp.org  | 555-555-5556       |              97116 |
|         7 | Maximo.Smith@freeCodeCamp.org    | 555-555-5557       |              97117 |
|         8 | Michael.Roach@freeCodeCamp.ort   | 555-555-5558       |              97118 |
+-----------+----------------------------------+--------------------+--------------------+
8 rows in set (0.00 sec)
```


As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.



