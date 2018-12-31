---
title: SQL Interview Questions
localeTitle: Вопросы по SQL-интервью
---
## Вопросы по SQL-интервью

### Что такое внутреннее соединение в SQL?

Это тип соединения по умолчанию, если не указано соединение. Он возвращает все строки, в которых есть как минимум одно совпадение в обеих таблицах.

```sql
SELECT * FROM A x JOIN B y ON y.aId = x.Id 
```

### Что такое левое соединение в SQL?

Левое соединение возвращает все строки из левой таблицы и сопоставленные строки из правой таблицы. Строки в левой таблице будут возвращены, даже если в правой таблице не было соответствия. Строки из левой таблицы без соответствия в правой таблице будут иметь `null` для значений правой таблицы.

```sql
SELECT * FROM A x LEFT JOIN B y ON y.aId = x.Id 
```

### Что такое правильное соединение с SQL?

Правильное соединение возвращает все строки из правой таблицы и сопоставленные строки из левой таблицы. Напротив левого соединения это приведет к возврату всех строк из правой таблицы, даже если в левой таблице нет совпадений. Строки в правой таблице, не имеющие совпадений в левой таблице, будут иметь `null` значения для столбцов левой таблицы.

```sql
SELECT * FROM A x RIGHT JOIN B y ON y.aId = x.Id 
```

### Что такое полное присоединение к SQL?

Полное соединение возвращает все строки, для которых есть совпадение в любой из таблиц. Поэтому, если в левой таблице есть строки, которые не имеют совпадений в правой таблице, они будут включены. Также, если в правой таблице есть строки, которые не имеют совпадений в левой таблице, они будут включены.

```sql
SELECT Customers.CustomerName, Orders.OrderID 
 FROM Customers 
 FULL OUTER JOIN Orders 
 ON Customers.CustomerID=Orders.CustomerID 
 ORDER BY Customers.CustomerName 
```

### Что является результатом следующей команды?

\`\` \` DROP VIEW view\_name
```
Here it'll be an error because we can't perform a DML operation on a view. 
 
 ### Can we perform a rollback after using ALTER command? 
 No, because ALTER is a DDL command and Oracle server performs an automatic COMMIT when the DDL statements are executed. 
 
 
 ### Which is the only constraint that enforces rules at column level? 
 NOT NULL is the only constraint that works at the column level. 
 
 
 ### What are the pseudocolumns in SQL? Give some examples? 
 A pseudocolumn is a function which returns a system generated value. The reason it is known as so because a pseudocolumn is an Oracle assigned value used in the same context as an Oracle database column but not stored on disk. 
```

Вот некоторые примеры: ROWNUM, ROWID, USER, CURRVAL, NEXTVAL и т. Д. \`\` \`

### Создайте пользователя my723acct с паролем kmd26pt. Используйте пользовательские _данные и временные табличные пространства данных, предоставляемые PO8, и предоставите этому пользователю 10M пространства для хранения в пользовательских_ данных и 5M пространства для хранения во временных\_данных.

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### Создайте _таблицы_ роли ролей and\_views.

`sql CREATE ROLE role_tables_and_views`

### Предоставьте роли предыдущего вопроса привилегии для подключения к базе данных и привилегии для создания таблиц и представлений.

Привилегия подключения к базе данных - CREATE SESSION Привилегия создания таблицы - CREATE TABLE Привилегия создания представления - CREATE VIEW `sql GRANT Create session, create table, create view TO role_tables_and_views`

### Предоставьте предыдущую роль в вопросе пользователям anny и rita

`sql GRANT role_tables_and_views TO anny, rita`

### Создайте пользователя my723acct с паролем kmd26pt. Используйте пользовательские _данные и временные табличные пространства данных, предоставляемые PO8, и предоставите этому пользователю 10M пространства для хранения в пользовательских_ данных и 5M пространства для хранения во временных\_данных.

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### Создайте _таблицы_ роли ролей and\_views.

`sql CREATE ROLE role_tables_and_views`

### Предоставьте роли предыдущего вопроса привилегии для подключения к базе данных и привилегии для создания таблиц и представлений.

Привилегия подключения к базе данных - CREATE SESSION Привилегия создания таблицы - CREATE TABLE Привилегия создания представления - CREATE VIEW `sql GRANT Create session, create table, create view TO role_tables_and_views`

### Предоставьте предыдущую роль в вопросе пользователям anny и rita

`sql GRANT role_tables_and_views TO anny, rita`

### Напишите команду для изменения пароля пользователя rita от abcd до dfgh

`sql ALTER USER rita IDENTIFIED BY dfgh`

### Пользователи rita и anny не имеют привилегий SELECT в таблице INVENTORY, созданной SCOTT. Напишите команду, чтобы позволить SCOTT предоставлять пользователям SELECT priviliges в этих таблицах.

`sql GRANT select ON inventory TO rita, anny`

### Пользователь rita был передан и больше не нуждается в привилегии, предоставленной ей через _таблицы_ ролевой роли and\_views. Напишите команду, чтобы удалить ее из ее предыдущих заданий, за исключением того, что она все еще могла подключиться к базе данных.

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### Пользователь rita, который был переведен, теперь переезжает в другую компанию. Поскольку созданные ею объекты больше не используются, напишите комманд, чтобы удалить этого пользователя и все ее объекты.

Здесь параметр CASCADE необходим для удаления всех объектов пользователя в базе данных. \`\` \`sql  
DROP USER Рита КАСКАД

### Пользователь rita был передан и больше не нуждается в привилегии, предоставленной ей через _таблицы_ ролевой роли and\_views. Напишите команду, чтобы удалить ее из ее предыдущих заданий, за исключением того, что она все еще могла подключиться к базе данных.

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### Пользователь rita, который был переведен, теперь переезжает в другую компанию. Поскольку созданные ею объекты больше не используются, напишите комманд, чтобы удалить этого пользователя и все ее объекты.

Здесь параметр CASCADE необходим для удаления всех объектов пользователя в базе данных. \`\` \`sql  
DROP USER Рита КАСКАД
```
### Write SQL query to find the nth highest salary from table. 
```

SQL  
ВЫБЕРИТЕ ТОП 1 Зарплата ОТ ( SELECT DISTINCT TOP N Зарплата ОТ сотрудника ЗАКАЗАТЬ Зарплата DESC ) ЗАКАЗАТЬ ЗАРУБЕЖЬЮ ASC \`\` \`