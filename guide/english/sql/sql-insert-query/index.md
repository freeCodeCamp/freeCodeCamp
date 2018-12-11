---
title: SQL Insert Query
---
## SQL Insert Query

Insert queries are a way to insert data into a table. Let's say we have created a table using

`CREATE TABLE example_table ( name varchar(255), age int)`

**example_table**

| Name | Age |
| --- | --- |

Now to add some data to this table , we'll use **INSERT** in the following way:

`INSERT INTO example_table (column1,column2) VALUES ("Andrew",23)`

**example_table**

| Name | Age |
| --- | --- |
| Andrew | 23 |

Even the following will work, but it's always a good practice to specify which data is going into which column.

`INSERT INTO table_name VALUES ("John", 28)`

**example_table**

| Name | Age |
| --- | --- |
| Andrew | 23 |
| John | 28 |
