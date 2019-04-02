---
title: SQL Update Statement
localeTitle: Заявление об обновлении SQL
---
## Заявление об обновлении SQL

Чтобы обновить запись в таблице, вы используете оператор `UPDATE` .

Быть осторожен. Вы можете обновить все записи таблицы или всего несколько. Используйте условие `WHERE` чтобы указать, какие записи вы хотите обновить. Можно обновлять один или несколько столбцов за раз. Синтаксис:

```sql
UPDATE table_name 
 SET column1 = value1, 
    column2 = value2, ... 
 WHERE condition; 
```

Ниже приведен пример обновления имени записи с идентификатором 4:

```sql
UPDATE Person 
 SET Name = “Elton John” 
 WHERE Id = 4; 
```

Вы также можете обновлять столбцы в таблице, используя значения из других таблиц. Используйте предложение `JOIN` для получения данных из нескольких таблиц. Синтаксис:

```sql
UPDATE table_name1 
 SET table_name1.column1 = table_name2.columnA 
    table_name1.column2 = table_name2.columnB 
 FROM table_name1 
 JOIN table_name2 ON table_name1.ForeignKey = table_name2.Key 
```

Ниже приведен пример обновления Менеджера всех записей:

```sql
UPDATE Person 
 SET Person.Manager = Department.Manager 
 FROM Person 
 JOIN Department ON Person.DepartmentID = Department.ID 

```