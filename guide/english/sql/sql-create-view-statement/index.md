---
title: SQL Create View Statement
---
## SQL Create View Statement

### What is a View?

A View is a database object that presents data existing in one or more tables. Views are used in a similar way to tables, but they don't contain any data. They just "point" to the data that exists elsewhere (tables or views, for example).

### Why do we like them?

* Views are a way to limit the data presented. For example, the human resources department data filtered to only present non-sensitve information. Sensitive information in this case could be social security numbers, sex of employee, payrate, home address, etc.
* Complex data across more than one table can be combined into a single "view." This can make life easier for your business analysts and programmers.

### Important Safety Tips
* Views are managed by the system. When data in the related tables are changed, added, or updated, the View is updated by the system. We want to use these only when needed to manage use of system resources.
* In MySQL, changes to the table design (that is, new or dropped columns) made AFTER a view is created are not updated in the view itself. The view would have to be updated or recreated.
* Views are one of the four standard database object types. The others are tables, stored procedures, and functions.  
* Views can usually be treated as you would a table, but updates are limited or not available when the view contains more than one table.
* There are many other details about views that are beyond the scope of this introductory guide. Spend time with your database managers manual and have fun with this powerful SQL object.

### Syntax of the Create View Statement (MySQL)

```sql
CREATE
    [OR REPLACE]
    [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]
    [DEFINER = { user | CURRENT_USER }]
    [SQL SECURITY { DEFINER | INVOKER }]
    VIEW view_name [(column_list)]
    AS select_statement
	[WITH [CASCADED | LOCAL] CHECK OPTION]
```

*This guide will cover this part of of the statement....*

```sql
CREATE
    VIEW view_name [(column_list)]
    AS select_statement
```

* ### Sample View creation from the student tables :

  Notes:

  * The name of the view has a "v" at the end.  It's recommended that the view name indicate that it's a view in some way to make life easier for programmers and database administrators. Your IT shop should have its own rules on naming objects.

  * The columns in the view are limited by the SELECT and the rows of data by the WHERE clause.

  * the "\`" character around the view names is required because of the "-" in the names. MySQL reports an error without them.

  ```sql
  create view `programming-students-v` as
  select FullName, programOfStudy 
  from student 
  where programOfStudy = 'Programming';

  select * from `programming-students-v`;
  ```
  Result :

  ```text
  +------------------------+------------------+
  | FullName               | programOfStudy   |
  +------------------------+------------------+
  | Teri Gutierrez         | Programming      |
  | Spencer Pautier        | Programming      |
  | Louis Ramsey           | Programming      |
  | Alvin Greene           | Programming      |
  | Sophie Freeman         | Programming      |
  +------------------------+------------------+
  ```

* ### Sample of using a View to combine data from more than one table :

  A Student demographics table was added to the database to demonstrate this usage. This view will combine these tables.

  Notes:

  * To "join" tables, the tables must have fields in common (usually primary keys) that uniquely identity each row. In this case it's the student ID. (More on this in the [SQL Joins](../sql-joins/index.md) guide.)

  ```sql
  CREATE VIEW View_name AS
      SELECT Table1_name.Column1_name , Table1_name.Column2_name , Table2_name.Column1_name , 
      Table1_name.Column2_name
      FROM Table1 , Table2
      WHERE Table1_name.Column1_name = Table2_name.Column1_name;

  ```


*As with all of these things there is MUCH MORE to Views.  Please see the manual for your database manager and have fun trying different options yourself.*
