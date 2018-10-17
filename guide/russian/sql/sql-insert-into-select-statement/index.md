---
title: SQL Insert into Select Statement
localeTitle: Вставка SQL в оператор Select
---
## Вставка SQL в оператор Select

Вы можете вставлять записи в таблицу, используя данные, которые уже хранятся в базе данных. Это только копия данных и не влияет на таблицу происхождения.

`INSERT INTO SELECT` объединяет операторы `INSERT INTO` и `SELECT` и вы можете использовать любые условия, которые вы хотите. Синтаксис:

```sql
INSERT INTO table2 (column1, column2, column3, ...) 
 SELECT column1, column2, column3, ... 
 FROM table1 
 WHERE condition; 
```

Вот пример, который вставляет в таблицу Person все ученики-мужчины из таблицы «Студенты».

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 SELECT Id, Name, DateOfBirth, Gender 
 FROM Students 
 WHERE Gender = 'M' 

```