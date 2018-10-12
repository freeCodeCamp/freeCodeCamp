---
title: SQL Joins
localeTitle: Подключения SQL
---
## Подключения SQL

### Пример использования

В этом руководстве мы обсудим раздел JOIN инструкции SQL.

### Синтаксис SQL с акцентом на Join

```sql
SELECT col1, col2, col3, etc.... 
 FROM  tableNameOne AS a 
 JOIN tableNameTwo AS b ON a.primeKey = b.primeKey 
 etc... 
```

Оператор JOIN может быть просто JOIN или INNER JOIN, которые являются одинаковыми, или LEFT JOIN (описано ниже).

### Различные типы ОБЪЕДИНЕНИЙ

*   (ВНУТРЕННЕЕ СОЕДИНЕНИЕ
*   Возвращаемые записи, имеющие соответствующие значения в обеих таблицах
*   ВЛЕВО (ВНЕШНЯЯ) ВСТУПЛЕНИЕ
*   Верните все записи из левой таблицы и соответствующие записи из правой таблицы
*   ВПЕРЕД (ВНЕШНИЙ)
*   Верните все записи из правой таблицы и соответствующие записи из левой таблицы
*   ПОЛНЫЙ (ВНЕШНИЙ) ПРИСОЕДИНЕНИЕ
*   Возвращать все записи, когда есть совпадение в левой или правой таблице

### Присоединиться

Таблица учеников будет в предложении FROM, поэтому это будет начальная или левая таблица.

Мы подключим его к контактному столу или таблице RIGHT.

Вы увидите, что все ученики появляются в таблице контактов.

Как показано в приведенных ниже таблицах, studentID 9 находится в таблице учеников, но НЕ в таблице контактов, поэтому не появляется в соединении.

Заявление SQL

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

«Регистрация»: \`\` \`текст + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | studentID | FullName | программаОфстудии | студенческая телефонная ячейка | student-US-zipcode | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | 1 | Моник Дэвис | Литература | 555-555-5551 | 97111 | | 2 | Тери Гутьеррес | Программирование | 555-555-5552 | 97112 | | 3 | Спенсер Потье | Программирование | 555-555-5553 | 97113 | | 4 | Луи Рэмси | Программирование | 555-555-5554 | 97114 | | 5 | Элвин Грин | Программирование | 555-555-5555 | 97115 | | 6 | Софи Фримен | Программирование | 555-555-5556 | 97116 | | 7 | Эдгар Фрэнк «Тед» Кодд | Компьютерные науки | 555-555-5557 | 97117 | | 8 | Дональд Д. Чемберлен | Компьютерные науки | 555-555-5558 | 97118 | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- +
```
### Left Join 
 Using the keyword LEFT before JOIN causes the system to start with the student (LEFT) table but will return NULL from the RIGHT table if there are no rows for the LEFT table student. 
 
 Note that studentID 9 appears here but the data from the contact table is just shown as NULL. 
```

SQL SELECT a.studentID, a.FullName, a.programOfStudy, б. `student-phone-cell` , б. `student-US-zipcode` ОТ студента AS a LEFT JOIN `student-contact-info` AS b ON a.studentID = b.studentID;
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

### Полный список таблиц для справки

Списки студенческих таблиц

```sql
SELECT a.studentID, a.FullName, sat_score, a.programOfStudy, schoolEmailAdr 
 FROM student AS a; 
```

студент или таблица LEFT

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

SQL SELECT \* от `student-contact-info` AS b;
```
student contact or RIGHT table 
```

текст + ----------- + ---------------------------------- + - ------------------ + -------------------- + | studentID | studentEmailAddr | студенческая телефонная ячейка | student-US-zipcode | + ----------- + ---------------------------------- + - ------------------ + -------------------- + | 1 | Monique.Davis@freeCodeCamp.org | 555-555-5551 | 97111 | | 2 | Teri.Gutierrez@freeCodeCamp.org | 555-555-5552 | 97112 | | 3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553 | 97113 | | 4 | Louis.Ramsey@freeCodeCamp.org | 555-555-5554 | 97114 | | 5 | Alvin.Green@freeCodeCamp.org | 555-555-5555 | 97115 | | 6 | Sophie.Freeman@freeCodeCamp.org | 555-555-5556 | 97116 | | 7 | Maximo.Smith@freeCodeCamp.org | 555-555-5557 | 97117 | | 8 | Michael.Roach@freeCodeCamp.ort | 555-555-5558 | 97118 | + ----------- + ---------------------------------- + - ------------------ + -------------------- + 8 строк в наборе (0,00 сек) \`\` \`

Как и для всех этих SQL-вещей, MUCH MORE им больше, чем в этом вводном руководстве.

Надеюсь, это, по крайней мере, даст вам достаточно, чтобы начать.

Пожалуйста, ознакомьтесь с руководством для своего менеджера баз данных и получайте удовольствие от различных вариантов.