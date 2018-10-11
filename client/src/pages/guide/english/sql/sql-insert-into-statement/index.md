---
title: SQL Insert into Statement
---
## SQL Insert into Statement

To insert a record in a table you use the `INSERT INTO` statement. 

You can do it in two ways, if you want to insert values only in some columns, you have to list their names including all mandatory columns.  The syntax is:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

The other way is inserting values to all columns in the table, it is not necessary to specify the columns names. The syntax is:
 
```sql
INSERT INTO table_name 
VALUES (value1, value2, value3, ...);
```

Here’s an example inserting a record in the table Person in both ways:
```sql
INSERT INTO Person
VALUES (1, ‘John Lennon’, ‘1940-10-09’, ‘M’);
```

And

```sql
INSERT INTO Person(Id, Name, DateOfBirth, Gender)
VALUES (1, ‘John Lennon’, ‘1940-10-09’, ‘M’);
```




