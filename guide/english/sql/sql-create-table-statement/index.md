---
title: SQL Create Table Statement
---
## SQL Create Table Statement

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

A table is a group of data stored in a database.

To create a table in a database you use the `CREATE TABLE` statement. You give a name to the table and a list of columns with its datatypes.

##### SYNTAX #####
```sql
CREATE TABLE table_name(Attribute1 Datatype,
                       Attribute2 Datatype,
                       ........);
```
here:
 * Attribute1, Attribute2... -> Column Name
 * Datatype... -> type of value you want to column have. For eg. int(size), char(size), Varchar(size),etc.


Here’s an example creating a table named Person:

```sql
CREATE TABLE Person(
  Id int not null,
  Name varchar not null,
  DateOfBirth date not null,
  Gender bit not null,
  PRIMARY KEY( Id )
);
```

In the example above, each Person has a Name, a Date of Birth and a Gender. The Id column is the key that identifies one person in the table. You use the keyword `PRIMARY KEY` to configure one or more columns as a primary key.

A column can be `not null` or `null` indicating whether it is mandatory or not.


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[SQL | CREATE](https://www.geeksforgeeks.org/sql-create/)

