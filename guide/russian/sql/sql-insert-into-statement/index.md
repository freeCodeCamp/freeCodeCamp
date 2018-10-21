---
title: SQL Insert into Statement
localeTitle: Вставка SQL в Statement
---
## Вставка SQL в Statement

Чтобы вставить запись в таблицу, вы используете `INSERT INTO` .

Вы можете сделать это двумя способами: если вы хотите вставлять значения только в некоторые столбцы, вы должны указать их имена, включая все обязательные столбцы. Синтаксис:

```sql
INSERT INTO table_name (column1, column2, column3, ...) 
 VALUES (value1, value2, value3, ...); 
```

Другой способ - вставить значения ко всем столбцам в таблице, нет необходимости указывать имена столбцов. Синтаксис:

```sql
INSERT INTO table_name 
 VALUES (value1, value2, value3, ...); 
```

Вот пример вставки записи в столбец Person в обоих направлениях:

```sql
INSERT INTO Person 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
```

А также

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
```

Некоторые версии SQL (например, MySQL) поддерживают вставку сразу нескольких строк. Например:

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'), (2, 'Paul McCartney', '1942-06-18', 'M'), 
 (3, 'George Harrison', '1943-02-25', 'M'), (4, 'Ringo Starr', '1940-07-07', 'M') 
```

Обратите внимание, что весь исходный запрос остается неповрежденным - мы просто добавляем строки данных, закодированные paranthesis и разделенные запятыми.