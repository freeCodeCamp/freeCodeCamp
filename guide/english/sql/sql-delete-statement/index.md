---
title: SQL Delete Statement
---
## SQL Delete Statement

To delete a record in a table you use the `DELETE` statement. 

Be careful. You can delete all records of the table or just a few. Use the `WHERE` condition to specify which records do you want to delete. The syntax is:

```sql
DELETE FROM table_name
WHERE condition;
```

Here is an example deleting from the table Person the record with Id 3:

```sql
DELETE FROM Person
WHERE Id = 3;
```

Using DELETE to remove all records from a given table 

```sql
DELETE * FROM Person
;
```

Or depending on your RDBMS you could use the TRUNCATE TABLE statement which deletes all records from a table and depending on your RDBMS may or may not allow rollback.  DELETE is DML and TRUNCATE is DDL.

```sql
TRUNCATE TABLE Person;
```
#### More Information
- [SQL Delete](https://www.w3schools.com/sql/sql_delete.asp)
