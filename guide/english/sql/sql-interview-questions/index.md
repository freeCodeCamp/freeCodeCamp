---
title: SQL Interview Questions
---
## SQL Interview Questions

### What is an inner join in SQL?
This is the default type of join if no join is specified. It returns all rows in which there is at least one match in both tables.
```sql
SELECT * FROM A x JOIN B y ON y.aId = x.Id
```

### What is a left join in SQL?
A left join returns all rows from the left table, and the matched rows from the right table. Rows in the left table will be returned even if there was no match in the right table. The rows from the left table with no match in the right table will have `null` for right table values.
```sql
SELECT * FROM A x LEFT JOIN B y ON y.aId = x.Id
```

### What is a right join in SQL?
A right join returns all rows from the right table, and the matched rows from the left table. Opposite of a left join, this will return all rows from the right table even where there is no match in the left table. Rows in the right table that have no match in the left table will have `null` values for left table columns.
```sql
SELECT * FROM A x RIGHT JOIN B y ON y.aId = x.Id
```

### What is a full join in SQL?
A full join returns all rows for which there is a match in either of the tables. So if there are rows in the left table that do not have matches in the right table, those will be included. As well as if there are rows in the right table that do not have matches in the left table, those will be included.
```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders
ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName
```

### What is the result of the following command?
``` 
  DROP VIEW view_name
```
Here it'll be an error because we can't perform a DML operation on a view.

### Can we perform a rollback after using ALTER command?
No, because ALTER is a DDL command and Oracle server performs an automatic COMMIT when the DDL statements are executed.


### Which is the only constraint that enforces rules at column level?
NOT NULL is the only constraint that works at the column level.


### What are the pseudocolumns in SQL? Give some examples?
A pseudocolumn is a function which returns a system generated value. The reason it is known as so because a pseudocolumn is an Oracle assigned value used in the same context as an Oracle database column but not stored on disk.
``` Some examples of it are:
    ROWNUM, ROWID, USER, CURRVAL, NEXTVAL etc.
```   

### Create a user my723acct with password kmd26pt. Use the user_data and temporary data tablespaces provided by PO8 and provide to this user 10M of storage space in user_data and 5M of storage space in temporary_data.
``` sql
    CREATE USER my723acct IDENTIFIED BY kmd26pt
    DEFAULT TABLESPACE user_data
    TEMPORARY TABLESPACE temporary_data
    QUOTA 10M on user_data QUOTA 5M on temporary_data
```   


### Create the role role_tables_and_views.
``` sql
    CREATE ROLE role_tables_and_views
``` 


### Grant to the role of the previous question the privileges to connect to the database and the privileges to create tables and views.
The privilege to connect to the database is CREATE SESSION
The privilege to create table is CREATE TABLE
The privilege to create view is CREATE VIEW
``` sql
    GRANT Create session, create table, create view TO role_tables_and_views
``` 


### Grant the previous role in the question to the users anny and rita
``` sql    
    GRANT role_tables_and_views TO anny, rita
``` 

### Create a user my723acct with password kmd26pt. Use the user_data and temporary data tablespaces provided by PO8 and provide to this user 10M of storage space in user_data and 5M of storage space in temporary_data.
``` sql
    CREATE USER my723acct IDENTIFIED BY kmd26pt
    DEFAULT TABLESPACE user_data
    TEMPORARY TABLESPACE temporary_data
    QUOTA 10M on user_data QUOTA 5M on temporary_data
```   


### Grant to the role of the previous question the privileges to connect to the database and the privileges to create tables and views.
The privilege to connect to the database is CREATE SESSION
The privilege to create table is CREATE TABLE
The privilege to create view is CREATE VIEW
``` sql
    GRANT Create session, create table, create view TO role_tables_and_views
``` 


### Grant the previous role in the question to the users anny and rita
``` sql    
    GRANT role_tables_and_views TO anny, rita
``` 

### Write a command to change the password of the user rita from abcd to dfgh
``` sql    
    ALTER USER rita IDENTIFIED BY dfgh
``` 


### The users rita and anny do not have SELECT privileges on the table INVENTORY that was created by SCOTT. Write a command to allow SCOTT to grant the users SELECT priviliges on these tables.
``` sql    
    GRANT select ON inventory TO rita, anny
``` 

### User rita has been transferred and no longer needs the privilege that was granted to her through the role role_tables_and_views. Write a command to remove her from her previous given priviliges except that she still could connect to the database.
``` sql    
    REVOKE select ON scott.inventory FROM rita
    REVOKE create table, create view FROM rita
``` 

### The user rita who was transferred is now moving to another company. Since the objects that she created is of no longer use, write a commmand to remove this user and all her objects.
Here CASCADE option is necessary to remove all the objects of the user in the database.
``` sql    
   DROP USER rita CASCADE
``` 

### User rita has been transferred and no longer needs the privilege that was granted to her through the role role_tables_and_views. Write a command to remove her from her previous given priviliges except that she still could connect to the database.
``` sql    
    REVOKE select ON scott.inventory FROM rita
    REVOKE create table, create view FROM rita
``` 


### The user rita who was transferred is now moving to another company. Since the objects that she created is of no longer use, write a commmand to remove this user and all her objects.
Here CASCADE option is necessary to remove all the objects of the user in the database.
``` sql    
   DROP USER rita CASCADE
```


### Write SQL query to find the nth highest salary from table.
``` sql    
   SELECT TOP 1 Salary
   FROM (
      SELECT DISTINCT TOP N Salary
      FROM Employee
      ORDER BY Salary DESC
      )
    ORDER BY Salary ASC
```
