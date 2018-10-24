---
title: SQL Inner Join Keyword
localeTitle: SQL Inner Join Ключевое слово
---
## SQL Inner Join Ключевое слово

### Пример использования

В этом руководстве мы обсудим объединения SQL (INNER)

### Присоединиться (как и Inner Join)

Таблица учеников будет в предложении FROM, поэтому это будет начальная или левая таблица.

Мы подключим его к контактному столу или таблице RIGHT. Вы увидите, что все студенты выглядят так же, как и в таблице контактов. Как показано в приведенных ниже таблицах, studentID 9 находится в таблице учеников, но НЕ в таблице контактов, поэтому не появляется в соединении.

Заявление SQL

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 INNER JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```
"Объединённая" информация 
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
### Полный список таблиц для справки
 
Student table SQL 

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
SELECT * FROM `student-contact-info` AS b; 
```

student contact table or RIGHT table
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

### Вывод

Как и для всех этих SQL-вещей, MUCH MORE им больше, чем в этом вводном руководстве.

Надеюсь, это, по крайней мере, даст вам достаточно, чтобы начать.

Пожалуйста, ознакомьтесь с руководством для своего менеджера баз данных и получайте удовольствие от различных вариантов.
