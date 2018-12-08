---
title: SQL Left Join
---

## SQL Left Join

### Example of use
For this guide we'll discuss the SQL LEFT JOIN.

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

### Complete table listings for reference
student or LEFT table SQL

```sql
SELECT a.studentID, a.FullName, sat_score, a.programOfStudy, schoolEmailAdr 
FROM student AS a;
```

student or LEFT table data
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
```

student contact or RIGHT table SQL	
```sql
select * from `student-contact-info` as b;
```

student contact or RIGHT table data
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

