---
title: SQL Create Table
---
# SQL CREATE TABLE

## Introduction

This guide is an overview to the basics of the SQL `CREATE TABLE` functions. 

We will be using MySQL for all examples throughout these freeCodeCamp SQL guides. MySQL is a used frequently on websites for the backend database, 2) it's free, and is fun and easy to use.

## Covered in this Guide

* Creating a schema, the container for all our database objects.
* Create a table so we have something to alter. 
* Creating a table by importing a CSV file and altering that table
* Creating a table using the MySQL workbench tool

We do most of this work with SQL statements in the MySQL workbench scripting tool.  We will also see how to Create a table using the workbench interface instead of with SQL statements.

## High level structure of a Relational Database

1. Highest level; The Database; the database system installation.  In this case, it’s MySQL. Called “Local instance MySQL Router” in the screen shots above.
2. Next is a Schema; a container for the objects needed to managed data in a relational database system.
3. Objects we create (tables, indexes, stored procedures, functions) to manage the system and its data

## Creating a MySQL schema

The schema is a container for a the objects required to manage the data for a given subject or process.  We show examples as we progress in this guide.

We’ll create the schema for our learning and testing using the SQL command;

```sql
create database fCC_alterTableGuide;
```

* ## Creating a table, add test data with "insert".

  We’ll create a Student Table.

  The steps will be: 

  1. make sure we don’t have the table already 
  2. create the table 
  3. insert the test data.

  Data Types: the student name is a character field limited to 90 characters. <br/>
  The student ID is a number (integer) (range of -2147483648 to 2147483647). This will be the primary key for the table and will auto increment when a record is added.<br/>
  There will also be two "time-stamp" fields to play with as well.

  Let's create a student table statement.

  ```sql
  create table student(
  studentId int(11) not null primary key , 
  FullName varchar(90),
  sat_score int(4),
  ts1 timestamp,
  ts2 timestamp default current_timestamp,
  programOfStudy varchar(200)
  );
  ```

  Now to insert some data and see what our new table looks like with records in it.
  ```sql
  insert into student(studentId, FullName,sat_score,ts1,ts2,programOfStudy) 
  values(1, "Lorah sey", 400 ,now(),now(),"programming");
  
  --to display records in table
  select * from student;

  ```
  Result :
  ```text 
  +-----------+----------------+-----------+---------------------+----------------------+----------------+
  | studentId | FullName       | sat_score | ts1                 | ts2                  | programOfStudy |
  +-----------+----------------+-----------+---------------------+----------------------+----------------+
  | 1         | Lorah sey      | 400       | 2019-04-28 13:55:11 | 2019-04-28 13:55:11  | programming    |  
  +-----------+----------------+-----------+---------------------+----------------------+----------------+

  ```


* ## Create a table with the MySql Workbench

  * Right click on the "Tables" under the schema you want the new file placed in. Select Create Table.
  * Complete the form as desired and click Apply

* ## Create Table as Select (CTAS)

  A quick way to create a copy of a table, including data is to create table as select.
  ```sql
  CREATE TABLE my_table as (SELECT * FROM orig_tbl);
  ```

* ## Create and populate a table by importing a CSV file

  * Right click on the "Tables" under the schema you want the new file placed in. Select Table Data Import.
  * Select the CSV file to import and click NEXT.
  * Usually you create a new table from the data, select the options desired and click NEXT.
  * Adjust the data types as needed and click NEXT
  * Click NEXT to import the data into the table
  * You’ll see completion status, review and click FINISH

## Other Material

There is a lot more detail to cover on this topic so install MySQL and have fun!

### Where to get MySQL

Try [this download for Windows users[(https://dev.mysql.com/downloads/windows/)


### MySQL documentation
* <a href='https://dev.mysql.com/doc/refman/5.7/en/alter-table.html' target='_blank' rel='nofollow'>manual page</a>
* <a href='https://dev.mysql.com/doc/refman/5.7/en/alter-table-examples.html' target='_blank' rel='nofollow'>examples from manual</a>

### SQL Server documentation
* <a href='https://docs.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql' target='_blank' rel='nofollow'>Microsoft Docs</a>
