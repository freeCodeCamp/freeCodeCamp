---
title: SQL Joins
localeTitle: SQL连接
---
## SQL连接

### 使用示例

对于本指南，我们将讨论SQL语句的JOIN部分。

### SQL语法，重点是Join

```sql
SELECT col1, col2, col3, etc.... 
 FROM  tableNameOne AS a 
 JOIN tableNameTwo AS b ON a.primeKey = b.primeKey 
 etc... 
```

JOIN语句可以只是JOIN或INNER JOIN，它们是相同的，或LEFT JOIN（如下所述）。

### 不同类型的JOIN

*   （内部联接
*   返回两个表中具有匹配值的记录
*   左（外）加入
*   返回左表中的所有记录，以及右表中的匹配记录
*   右（外）加入
*   返回右表中的所有记录，以及左表中匹配的记录
*   全（外）加入
*   当左表或右表中匹配时返回所有记录

### 加入

student表将在FROM子句中，因此它将是一个起始表或LEFT表。

我们将此加入学生联系表或右表。

你会看到所有学生都出现在联系表中。

如下表所示，studentID 9位于学生表中，但不在联系表中，因此不会出现在联接中。

SQL语句

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

“加入”数据： \`\`\`文字 + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | studentID | FullName | programOfStudy |学生电话| student-US-zipcode | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | 1 |莫妮克戴维斯|文学| 555-555-5551 | 97111 | | 2 | Teri Gutierrez |编程| 555-555-5552 | 97112 | | 3 | Spencer Pautier |编程| 555-555-5553 | 97113 | | 4 |路易斯拉姆齐|编程| 555-555-5554 | 97114 | | 5 | Alvin Greene |编程| 555-555-5555 | 97115 | | 6 |索菲弗里曼|编程| 555-555-5556 | 97116 | | 7 |埃德加弗兰克“特德”科德|计算机科学| 555-555-5557 | 97117 | | 8 |唐纳德D. Chamberlin |计算机科学| 555-555-5558 | 97118 | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- +
```
### Left Join 
 Using the keyword LEFT before JOIN causes the system to start with the student (LEFT) table but will return NULL from the RIGHT table if there are no rows for the LEFT table student. 
 
 Note that studentID 9 appears here but the data from the contact table is just shown as NULL. 
```

SQL SELECT a.studentID，a.FullName，a.programOfStudy， 湾`student-phone-cell` ，b。 `student-US-zipcode` 来自学生AS LEFT JOIN `student-contact-info` AS b ON a.studentID = b.studentID;
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

### 完整的表格列表供参考

学生表列表

```sql
SELECT a.studentID, a.FullName, sat_score, a.programOfStudy, schoolEmailAdr 
 FROM student AS a; 
```

学生或左表

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

SQL SELECT \* from `student-contact-info` AS b;
```
student contact or RIGHT table 
```

文本 + ----------- + ---------------------------------- + - ------------------ + -------------------- + | studentID | studentEmailAddr |学生电话| student-US-zipcode | + ----------- + ---------------------------------- + - ------------------ + -------------------- + | 1 | Monique.Davis@freeCodeCamp.org | 555-555-5551 | 97111 | | 2 | Teri.Gutierrez@freeCodeCamp.org | 555-555-5552 | 97112 | | 3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553 | 97113 | | 4 | Louis.Ramsey@freeCodeCamp.org | 555-555-5554 | 97114 | | 5 | Alvin.Green@freeCodeCamp.org | 555-555-5555 | 97115 | | 6 | Sophie.Freeman@freeCodeCamp.org | 555-555-5556 | 97116 | | 7 | Maximo.Smith@freeCodeCamp.org | 555-555-5557 | 97117 | | 8 | Michael.Roach@freeCodeCamp.ort | 555-555-5558 | 97118 | + ----------- + ---------------------------------- + - ------------------ + -------------------- + 8行（0.00秒） \`\`\`

与所有这些SQL事物一样，它们比本入门指南中的内容更多。

我希望这至少足以让你开始。

请参阅您的数据库管理员手册，并自己尝试不同的选项。