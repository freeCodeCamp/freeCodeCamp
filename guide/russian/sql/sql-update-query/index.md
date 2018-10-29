---
title: SQL Update Query
localeTitle: Запрос на обновление SQL
---
## Запрос на обновление SQL

### Что может сделать запрос Update

Запрос на обновление дает программисту DBA или SQL возможность обновлять многие записи одной командой.

Важный совет по безопасности! Всегда имейте резервную копию того, что вы собираетесь изменить, прежде чем вы его измените!

Это руководство будет:

*   добавить новое поле в таблицу учеников
*   проверить логику, чтобы обновить это поле с помощью назначенного школьным адресом электронной почты
*   обновите новое поле.

Вот стол студента, когда мы начинаем этот процесс

```sql
SELECT * FROM student; 
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

### Измените таблицу и добавьте новое поле

```sql
    ALTER TABLE `fcc_sql_guides_database`.`student` 
    ADD COLUMN `schoolEmailAdr` VARCHAR(125) NULL AFTER `programOfStudy`; 
```

Выполняется таблица ученика после изменения.

```text
mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+----------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr | 
 +------------------------+-----------+------------------+----------------+ 
 | Monique Davis          |       400 | Literature       | NULL           | 
 | Teri Gutierrez         |       800 | Programming      | NULL           | 
 | Spencer Pautier        |      1000 | Programming      | NULL           | 
 | Louis Ramsey           |      1200 | Programming      | NULL           | 
 | Alvin Greene           |      1200 | Programming      | NULL           | 
 | Sophie Freeman         |      1200 | Programming      | NULL           | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | NULL           | 
 | Donald D. Chamberlin   |      2400 | Computer Science | NULL           | 
 | Raymond F. Boyce       |      2400 | Computer Science | NULL           | 
 +------------------------+-----------+------------------+----------------+ 
 9 rows in set (0.00 sec) 
```

### ИСПЫТАНИЕ логики (ОЧЕНЬ важный шаг!)

```sql
SELECT FullName, instr(FullName," ") AS firstSpacePosition, 
 concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") AS schoolEmail 
 FROM student; 
```

```text
+------------------------+--------------------+------------------------+ 
 | FullName               | firstSpacePosition | schoolEmail            | 
 +------------------------+--------------------+------------------------+ 
 | Monique Davis          |                  8 | Monique@someSchool.edu | 
 | Teri Gutierrez         |                  5 | Teri@someSchool.edu    | 
 | Spencer Pautier        |                  8 | Spencer@someSchool.edu | 
 | Louis Ramsey           |                  6 | Louis@someSchool.edu   | 
 | Alvin Greene           |                  6 | Alvin@someSchool.edu   | 
 | Sophie Freeman         |                  7 | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |                  6 | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |                  7 | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |                  8 | Raymond@someSchool.edu | 
 +------------------------+--------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

_Заметка о concat (): в MySQL эта команда используется для объединения строк, а не в других версиях SQL (проверьте свое руководство). В этом использовании он работает следующим образом: Подстрока поля FullName до, но не включая первое пространство, объединяется с «@ someSchool.edu». В реальном мире это было бы намного сложнее, и вам нужно было бы убедиться, что адрес электронной почты уникален._

### Выполнение обновления

Мы притворимся, что это то, что мы хотим, и обновим таблицу этой информацией:

```sql
UPDATE student SET schoolEmailAdr = concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") 
 WHERE schoolEmailAdr is NULL; 
```

Успех!

```text
mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+------------------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr         | 
 +------------------------+-----------+------------------+------------------------+ 
 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu | 
 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    | 
 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu | 
 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   | 
 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   | 
 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu | 
 +------------------------+-----------+------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

Как и для всех этих SQL-вещей, MUCH MORE им больше, чем в этом вводном руководстве.

Надеюсь, это, по крайней мере, даст вам достаточно, чтобы начать.

Пожалуйста, ознакомьтесь с руководством для своего менеджера баз данных и получайте удовольствие от различных вариантов.