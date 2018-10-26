---
title: SQL Foreign Key Constraint
---

## SQL Foreign Key Constraint
A Foreign Key is a key used to link two tables. The table with the Foreign Key Constraint (aka "child table") is connected to another table (aka, the "parent table"). The connection is between the child table's Foreign Key Constraint and the parent table's Primary Key.

Foreign Key Constraints are used to help maintain consistency between the tables.  For example, if a parent table record is deleted and the child table has records, the system could also delete the child records.

They also help prevent entering inaccurate data in the child table by requiring that a parent table record exists for every record that is entered in the child table.

### Example of use
For this guide we'll take a closer look at the student (parent) and student contact (child) tables.

### The parent table's primary key
Note that the student table has a one column primary key of studentID.

```sql
SHOW index FROM student;
```
```text
+---------+------------+----------+--------------+-------------+
| Table   | Non_unique | Key_name | Seq_in_index | Column_name |
+---------+------------+----------+--------------+-------------+
| student |          0 | PRIMARY  |            1 | studentID   |
+---------+------------+----------+--------------+-------------+
1 row in set (0.00 sec) (some columns removed on the right for clarity)
```

### The child table's primary and foreign keys
The student contact info table has one primary key that is also the studentID.  This is because there is a one-to-one relationship between the two tables. In other words, we expect only one student and one student contact record per student.

```sql
SHOW index FROM `student-contact-info`;
```

```text
+----------------------+------------+----------+--------------+-------------+
| Table                | Non_unique | Key_name | Seq_in_index | Column_name |
+----------------------+------------+----------+--------------+-------------+
| student-contact-info |          0 | PRIMARY  |            1 | studentID   |
+----------------------+------------+----------+--------------+-------------+
1 row in set (0.00 sec) (some columns removed on the right for clarity)
```

```sql
SELECT concat(table_name, '.', column_name) AS 'foreign key',
concat(referenced_table_name, '.', referenced_column_name) AS 'references'
FROM information_schema.key_column_usage
WHERE referenced_table_name IS NOT NULL
AND table_schema = 'fcc_sql_guides_database' 
AND table_name = 'student-contact-info';
```

```text
+--------------------------------+-------------------+
| foreign key                    | references        |
+--------------------------------+-------------------+
| student-contact-info.studentID | student.studentID |
+--------------------------------+-------------------+
1 row in set (0.00 sec)
```

### Example report using the student parent table and the contact child table

```sql
SELECT a.studentID, a.FullName, a.programOfStudy,
b.`student-phone-cell`, b.`student-US-zipcode`
FROM student AS a
JOIN `student-contact-info` AS b ON a.studentID = b.studentID;
```

```text
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

### Conclusion

Foreign Key Constraints are a great data integrity tool.  Take the time to learn them well.

As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.

