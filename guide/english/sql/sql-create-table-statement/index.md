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
  Id           int      not null,
  Name         varchar  not null,
  DateOfBirth  date     not null,
  Gender       bit      not null,
  Height       numeric(5, 2) default 0 not null, 
  Weight       numeric(5, 2) default 50,
  WaistSize    numeric(5, 2),
  PRIMARY KEY( Id )
);
```

##### PrimaryKey
In the example above, each Person has a Name, Date of Birth,  Gender and Height. The Id column is the key that identifies one person in the table. You use the keyword `PRIMARY KEY` to configure one or more columns as a primary key.

##### Datatypes
Each column also has it's datatype mentioned. 

Just to understand the above code, the datatype mentioned indicates the following type of values approximately. 
```
int          : A whole number
varchar      : Strings
date         : A Date Value without Time component
bit          : A Boolean value
numeric(5, 2): A decimal value with ( Precision 5 and Scale 2 ) 
              ie. Total of 5 digits with 3 digits before the decimal point and 2 digits after decimal point.
```
Proper List and meaning of datatypes can be refered from resources like this: ( https://www.w3schools.com/sql/sql_datatypes.asp )

##### Default and Not NULL
When a row of values are inserted into a table, any column which is marked as `not null` and without a `default` value will be compulsary. Insert fails otherwise.

If no value is provided for a column which has a `default` value, insert will succeed with the column being assigned the default value defined in the table definition.
>e.g Column Weight  has default value as 50.

By default all columns are nullable ie. `null` is assumed unless explicity set as `not null`. So any column without `default` and `not null` keyword can be skipped in insert commands. They will have *null* value on querying. 
>e.g Column WaistSize  can be *null*

>Please note that `null` and `` (Blank) are queried and handled differently in most Databases.


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[SQL | CREATE](https://www.geeksforgeeks.org/sql-create/)

