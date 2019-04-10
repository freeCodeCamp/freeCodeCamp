---
title: SQL Delete Statement
localeTitle: SQL-запрос
---
## SQL-запрос

Чтобы удалить запись в таблице, вы используете оператор `DELETE` .

Быть осторожен. Вы можете удалить все записи таблицы или несколько. Используйте условие `WHERE` чтобы указать, какие записи вы хотите удалить. Синтаксис:

```sql
DELETE FROM table_name 
 WHERE condition; 
```

Вот пример удаления из таблицы Person записи с Id 3:

```sql
DELETE FROM Person 
 WHERE Id = 3; 
```

Использование DELETE для удаления всех записей из данной таблицы

```sql
DELETE * FROM Person 
 ; 
```

Или в зависимости от вашей РСУБД вы можете использовать инструкцию TRUNCATE TABLE, которая удаляет все записи из таблицы и в зависимости от вашей СУБД может или не может откатить. DELETE - это DML, а TRUNCATE - DDL.

```sql
TRUNCATE TABLE Person; 

```