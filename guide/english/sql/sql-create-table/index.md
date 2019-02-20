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

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/create_table01.JPG?raw=true)

## Creating a MySQL schema

The schema is a container for a the objects required to manage the data for a given subject or process.  We show examples as we progress in this guide.

We’ll create the schema for our learning and testing using the SQL command;

```
create database fCC_alterTableGuide;
```

This instances schema structure prior to running this command

![image-2](https://github.com/SteveChevalier/guide-images/blob/master/create_table02.JPG?raw=true)

This instances schema structure after running the SQL statement

![image-3](https://github.com/SteveChevalier/guide-images/blob/master/create_table03.JPG?raw=true)

## Creating a table, add test data with "insert", rename the table (alter)

We’ll create a Student Table.

The steps will be: 

1. make sure we don’t have the table already 




2. create the table 
3. insert the test data.

* Data Types: the student name is a character field limited to 90 characters
* The student ID is a number (integer) (range of -2147483648 to 2147483647). This will be the primary key for the table and will auto increment when a record is added.
* There will also be two "time-stamp" fields to play with as well

Create statement and display of results from execution;

![image-4](https://github.com/SteveChevalier/guide-images/blob/master/create_table04.JPG?raw=true)

Using a Select statement we'll see that the table is there but now records have been added.

![image-5](https://github.com/SteveChevalier/guide-images/blob/master/create_table05.JPG?raw=true)

Now to insert some data and see what our new table looks like with records in it (and understand create and update timestamps);

![image-6](https://github.com/SteveChevalier/guide-images/blob/master/create_table06.JPG?raw=true)

The first time stamp is the creation data and time and the 2nd is the update date and time.  Changing a record should update ts2 but not ts1. Let's take a look.

![image-7](https://github.com/SteveChevalier/guide-images/blob/master/create_table07.JPG?raw=true)

## Create a table with the MySql Workbench

Right click on the "Tables" under the schema you want the new file placed in. Select Create Table.

![image-8](https://github.com/SteveChevalier/guide-images/blob/master/create_table08.JPG?raw=true)

Complete the form as desired and click Apply

![image-9](https://github.com/SteveChevalier/guide-images/blob/master/create_table09.JPG?raw=true)

## Create Table as Select (CTAS)

A quick way to create a copy of a table, including data is to create table as select.

CREATE TABLE my_table as (SELECT * FROM orig_tbl);

## Create and populate a table by importing a CSV file

Right click on the "Tables" under the schema you want the new file placed in. Select Table Data Import.

![image-10](https://github.com/SteveChevalier/guide-images/blob/master/create_table10.JPG?raw=true)

Select the CSV file to import and click NEXT
Usually you create a new table from the data, select the options desired and click NEXT

![image-11](https://github.com/SteveChevalier/guide-images/blob/master/create_table11.JPG?raw=true)

Adjust the data types as needed and click NEXT

![image-12](https://github.com/SteveChevalier/guide-images/blob/master/create_table12.JPG?raw=true)

Click NEXT (on this screen and the next one that is displayed) to import the data into the table
You’ll see completion status, review and click FINISH

![image-13](https://github.com/SteveChevalier/guide-images/blob/master/create_table13.JPG?raw=true)

![image-14](https://github.com/SteveChevalier/guide-images/blob/master/create_table14.JPG?raw=true)
  

## Other Material

There is a lot more detail to cover on this topic so install MySQL and have fun!

### Where to get MySQL

Try [this download for Windows users[(https://dev.mysql.com/downloads/windows/)


### MySQL documentation
* <a href='https://dev.mysql.com/doc/refman/5.7/en/alter-table.html' target='_blank' rel='nofollow'>manual page</a>
* <a href='https://dev.mysql.com/doc/refman/5.7/en/alter-table-examples.html' target='_blank' rel='nofollow'>examples from manual</a>

### SQL Server documentation
* <a href='https://docs.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql' target='_blank' rel='nofollow'>Microsoft Docs</a>
