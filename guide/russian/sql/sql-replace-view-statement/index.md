---
title: SQL Replace VIEW Statement
localeTitle: Заявление SQL REplace VIEW
---
## Заявление SQL REplace VIEW

## Введение

Просмотр - это объект базы данных, представляющий данные из одной или нескольких таблиц. Тот же оператор SQL, который используется для создания представления, также может использоваться для замены существующего представления.

Это руководство обновит (заменит) существующее представление «programming-students-v» тем, что немного отличается и имеет другое имя.

Совет безопасности: всегда создавайте резервную копию схемы, прежде чем вносить в нее изменения.

### Общий ситакс

```sql
CREATE OR REPLACE VIEW view_name AS 
 SELECT column1, column2, ... 
 FROM table_name 
 WHERE condition; 
```

### SQL Используется для создания представления и текущих данных

```sql
create view `programming-students-v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 
```

```sql
select * from `programming-students-v`; 
```

Текущие данные:

```text
+-----------------+----------------+ 
 | FullName        | programOfStudy | 
 +-----------------+----------------+ 
 | Teri Gutierrez  | Programming    | 
 | Spencer Pautier | Programming    | 
 | Louis Ramsey    | Programming    | 
 | Alvin Greene    | Programming    | 
 | Sophie Freeman  | Programming    | 
 +-----------------+----------------+ 
 5 rows in set (0.00 sec) 
```

Список существующих просмотров:

```sql
SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
```

```text
+-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
```

### Замена вида

```sql
create or replace view `programming-students-v` as 
 select FullName, programOfStudy, sat_score 
 from student 
 where programOfStudy = 'Programming'; 
```

```sql
select * from `programming-students-v`; 
```

Примечание: в представлении теперь отображается sat\_score.

```text
+-----------------+----------------+-----------+ 
 | FullName        | programOfStudy | sat_score | 
 +-----------------+----------------+-----------+ 
 | Teri Gutierrez  | Programming    |       800 | 
 | Spencer Pautier | Programming    |      1000 | 
 | Louis Ramsey    | Programming    |      1200 | 
 | Alvin Greene    | Programming    |      1200 | 
 | Sophie Freeman  | Programming    |      1200 | 
 +-----------------+----------------+-----------+ 
```

Примечание: список просмотров не изменился, наш взгляд заменен.

```text
mysql>  SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
 +-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
```

\* Как и все эти SQL-вещи, им гораздо БОЛЬШЕ, чем тому, что находится в этом вводном руководстве. Надеюсь, это, по крайней мере, даст вам достаточно, чтобы начать. Пожалуйста, ознакомьтесь с руководством для своего менеджера баз данных и получайте удовольствие от различных вариантов.