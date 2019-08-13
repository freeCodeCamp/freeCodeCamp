---
title: SQL Alter Table Statement
---
## SQL Guide - ALTER TABLE

## Introduction

This guide will introduce you to and attempt to explain some of the basics of the SQL alter table functions within a relational database.
ALTER TABLE statement is used to add, remove, change datatype or rename columns. It can be also used to add or remove the constraints of the table.
**IMPORTANT Safety Tip:  ALWAYS backup your data before making changes!**

We will be using MySQL for all examples throughout this freeCodeCamp SQL guide. The reasons for selecting MySQL are 
1) it is very commonly used on websites for the backend database, 
2) it's free, and is fun and easy to use.

## Covered in this Guide 
We will use the tables created in the “CREATE TABLE” guide.  Feel free to review that guide if you are not familiar with creating a table.
* Adding a new column 
* Change column name
* Change column definition
* Remove a Column
* Rename the Table


## Alter Table:

We will use the student table created in the “CREATE TABLE” guide.
To view all column names and their description of student Table, we will use below command through out this guide.
```sql
desc student;

```
Result : 

```text
+--------------------+----------------------+--------------+-------------+------------+
| column_name        | column_default       | is_nullable  | column_type | key        |
+--------------------+----------------------+--------------+-------------+------------+
| studentID          | NULL                 | NO           | int(11)     | PRI        |
| FullName           | NULL                 | YES          | varchar(90) |            |
| studentIO          | NULL                 | YES          | int(3)      |            |
| sat_score          | NULL                 | YES          | int(4)      |            |
| timeStampA         | CURRENT TIMESTAMP    | NO           | timestamp   |            |
| timeStampB         | 0000-00-00 00:00:00  | NO           | timestamp   |            |
+--------------------+----------------------+--------------+-------------+------------+
```
* Adding a new column :
  Let's add a new column, emailAddress.
  ```sql
  alter table student add column emailAddress varchar(30) NULL ;

  ```
  Result : 
  ```sql
  desc student;
  
  ```
  ```text
  +--------------------+----------------------+--------------+-------------+------------+
  | column_name        | column_default       | is_nullable  | column_type | key        |
  +--------------------+----------------------+--------------+-------------+------------+
  | studentID          | NULL                 | NO           | int(11)     | PRI        |
  | FullName           | NULL                 | YES          | varchar(90) |            |
  | studentIO          | NULL                 | YES          | int(3)      |            |
  | sat_score          | NULL                 | YES          | int(4)      |            |
  | timeStampA         | CURRENT TIMESTAMP    | NO           | timestamp   |            |
  | timeStampB         | 0000-00-00 00:00:00  | NO           | timestamp   |            |
  | emailAddress       | NULL                 | YES          | varchar(30) |            |
  +--------------------+----------------------+--------------+-------------+------------+
  ```
* Change column name :
  Let's Change the column name sat_score to satScore .
  ```sql
  alter table student change sat_score satScore int(4) NULL ;

  ```
  Result : 
  ```sql
  desc student;

  ```
  ```text
  +--------------------+----------------------+--------------+-------------+------------+
  | column_name        | column_default       | is_nullable  | column_type | key        |
  +--------------------+----------------------+--------------+-------------+------------+
  | studentID          | NULL                 | NO           | int(11)     | PRI        |
  | FullName           | NULL                 | YES          | varchar(90) |            |
  | studentIO          | NULL                 | YES          | int(3)      |            |
  | satScore           | NULL                 | YES          | int(4)      |            |
  | timeStampA         | CURRENT TIMESTAMP    | NO           | timestamp   |            |
  | timeStampB         | 0000-00-00 00:00:00  | NO           | timestamp   |            |
  | emailAddress       | NULL                 | YES          | varchar(30) |            |
  +--------------------+----------------------+--------------+-------------+------------+
  ```
* Change column definition :
  Let's Change the emailAddress field size from varchar(30) to varchar(50).
  ```sql
  alter table student change emailAddress emailAddress varchar(50) NULL ;

  ```
  Result : 
  ```sql
  desc student;

  ```
  ```text
  +--------------------+----------------------+--------------+-------------+------------+
  | column_name        | column_default       | is_nullable  | column_type | key        |
  +--------------------+----------------------+--------------+-------------+------------+
  | studentID          | NULL                 | NO           | int(11)     | PRI        |
  | FullName           | NULL                 | YES          | varchar(90) |            |
  | studentIO          | NULL                 | YES          | int(3)      |            |
  | satScore           | NULL                 | YES          | int(4)      |            |
  | timeStampA         | CURRENT TIMESTAMP    | NO           | timestamp   |            |
  | timeStampB         | 0000-00-00 00:00:00  | NO           | timestamp   |            |
  | emailAddress       | NULL                 | YES          | varchar(50) |            |
  +--------------------+----------------------+--------------+-------------+------------+
  ```

* Remove a Column :
  Let's remove emailAddress column which we added earlier.
  ```sql
  alter table student drop column emailAddress ;

  ```
  Result :
  ```sql
  desc student;

  ```
  ```text
  +--------------------+----------------------+--------------+-------------+------------+
  | column_name        | column_default       | is_nullable  | column_type | key        |
  +--------------------+----------------------+--------------+-------------+------------+
  | studentID          | NULL                 | NO           | int(11)     | PRI        |
  | FullName           | NULL                 | YES          | varchar(90) |            |
  | studentIO          | NULL                 | YES          | int(3)      |            |
  | satScore           | NULL                 | YES          | int(4)      |            |
  | timeStampA         | CURRENT TIMESTAMP    | NO           | timestamp   |            |
  | timeStampB         | 0000-00-00 00:00:00  | NO           | timestamp   |            |
  +--------------------+----------------------+--------------+-------------+------------+
  ```
* Rename the Table :
  Let's rename the table student to students. 
  ```sql
  alter table student rename to students ;

  ```
  Result :
  we can also use describe command (alternative to desc) to see table description.
  ```sql
  describe students

  ```
  ```text
  +--------------------+----------------------+--------------+-------------+------------+
  | column_name        | column_default       | is_nullable  | column_type | column_key |
  +--------------------+----------------------+--------------+-------------+------------+
  | studentID          | NULL                 | NO           | int(11)     | PRI        |
  | FullName           | NULL                 | YES          | varchar(90) |            |
  | studentIO          | NULL                 | YES          | int(3)      |            |
  | satScore           | NULL                 | YES          | int(4)      |            |
  | timeStampA         | CURRENT TIMESTAMP    | NO           | timestamp   |            |
  | timeStampB         | 0000-00-00 00:00:00  | NO           | timestamp   |            |
  +--------------------+----------------------+--------------+-------------+------------+
  ```

There is much more that can be done, check the manual of your database management software to learn more.

