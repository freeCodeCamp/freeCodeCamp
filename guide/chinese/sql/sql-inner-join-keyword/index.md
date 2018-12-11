---
title: SQL Inner Join Keyword
localeTitle: SQL内部联接关键字
---
## SQL内部联接关键字

### 使用示例

对于本指南，我们将讨论SQL（INNER）连接

### 加入（与内部加入相同）

student表将在FROM子句中，因此它将是一个起始表或LEFT表。

我们将此加入学生联系表或右表。 您将看到所有学生都显示ALSO在联系表中。如下表所示，studentID 9位于学生表中，但不在联系表中，因此不会出现在联接中。

SQL语句

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 INNER JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

“加入”数据 \`\`\`文字 + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | studentID | FullName | programOfStudy |学生电话| student-US-zipcode | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | 1 |莫妮克戴维斯|文学| 555-555-5551 | 97111 | | 2 | Teri Gutierrez |编程| 555-555-5552 | 97112 | | 3 | Spencer Pautier |编程| 555-555-5553 | 97113 | | 4 |路易斯拉姆齐|编程| 555-555-5554 | 97114 | | 5 | Alvin Greene |编程| 555-555-5555 | 97115 | | 6 |索菲弗里曼|编程| 555-555-5556 | 97116 | | 7 |埃德加弗兰克“特德”科德|计算机科学| 555-555-5557 | 97117 | | 8 |唐纳德D. Chamberlin |计算机科学| 555-555-5558 | 97118 | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- +
```
### Complete table listings for reference 
 
 Student table SQL 
```

SQL SELECT a.studentID，a.FullName，sat\_score，a.programOfStudy，schoolEmailAdr 来自学生AS;
```
student or LEFT table 
```

文本 + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + | studentID | FullName | sat\_score | programOfStudy | schoolEmailAdr | + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + | 1 |莫妮克戴维斯| 400 |文学| Monique@someSchool.edu | | 2 | Teri Gutierrez | 800 |编程| Teri@someSchool.edu | | 3 | Spencer Pautier | 1000 |编程| Spencer@someSchool.edu | | 4 |路易斯拉姆齐| 1200 |编程| Louis@someSchool.edu | | 5 | Alvin Greene | 1200 |编程| Alvin@someSchool.edu | | 6 |索菲弗里曼| 1200 |编程| Sophie@someSchool.edu | | 7 |埃德加弗兰克“特德”科德| 2400 |计算机科学| Edgar@someSchool.edu | | 8 |唐纳德D. Chamberlin | 2400 |计算机科学| Donald@someSchool.edu | | 9 |雷蒙德F.博伊斯| 2400 |计算机科学| Raymond@someSchool.edu | + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + 9行（0.00秒）

```sql
SELECT * FROM `student-contact-info` AS b; 
```

学生联系表或右表 `text +-----------+----------------------------------+--------------------+--------------------+ | studentID | studentEmailAddr | student-phone-cell | student-US-zipcode | +-----------+----------------------------------+--------------------+--------------------+ | 1 | Monique.Davis@freeCodeCamp.org | 555-555-5551 | 97111 | | 2 | Teri.Gutierrez@freeCodeCamp.org | 555-555-5552 | 97112 | | 3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553 | 97113 | | 4 | Louis.Ramsey@freeCodeCamp.org | 555-555-5554 | 97114 | | 5 | Alvin.Green@freeCodeCamp.org | 555-555-5555 | 97115 | | 6 | Sophie.Freeman@freeCodeCamp.org | 555-555-5556 | 97116 | | 7 | Maximo.Smith@freeCodeCamp.org | 555-555-5557 | 97117 | | 8 | Michael.Roach@freeCodeCamp.ort | 555-555-5558 | 97118 | +-----------+----------------------------------+--------------------+--------------------+ 8 rows in set (0.00 sec)`

### 结论

与所有这些SQL事物一样，它们比本入门指南中的内容更多。

我希望这至少足以让你开始。

请参阅您的数据库管理员手册，并自己尝试不同的选项。