---
title: SQL Drop View Statement
---

## SQL Drop View Statement

### Introduction

This guide covers the SQL statement for dropping (deleting) one or more view objects. 

A View is an object that presents data from one or more tables.

Note: before deleting or changing data or objects, remember to have a fresh backup.

We will cover:
* Using SQL to drop a table
* Using the workbench to drop a view

We'll be using MySQL for the demontration. Check the manual for this function in other Database Managers.

we'll use student table in this tutorial. 
```sql
select studentID,FullName,sat_score from student;

```
Result :
```text
+------------+---------------------+-----------+
| studentID  | FullName            | sat_score |
+------------+---------------------+-----------+
| 1          | Vincent Uvalle      |  400      |
| 2          | Merle Veres         |  800      |
| 3          | Donte Emmons        |  1000     |
| 4          | Demetrius Mccaster  |  1200     |
| 5          | Tim Goudy           |  1400     |
| 6          | Stephan Monfort     |  1600     |
| 7          | Maximo Backstrom    |  1800     |
| 8          | Dean Pickel         |  200      |
+------------+---------------------+-----------+
```
First of all let's create a view.
```sql
create view [Failures] AS
select studentID, FullName , sat_score
from student
where sat_score <= 400;

```
Let's see what Failures view consists of
```sql
select * from [Failures]

```
Result :
```text
+------------+---------------------+-----------+
| studentID  | FullName            | sat_score |
+------------+---------------------+-----------+
| 1          | Vincent Uvalle      |  400      |
| 8          | Dean Pickel         |  200      |
+------------+---------------------+-----------+
```

### Basic Syntax

```sql
drop view [IF EXISTS]
    view_name [, view_name] ...
```

### Drop View SQL

The if exists portion will "trap" errors, should the view not exist.

```sql
drop view if exists [Failures];
```
Result : 
```text
Failures table dropped successfully.
```

### Using the Workbench

From the workbench:
1) Right click on the view to drop
2) select drop view from the menu
3) Select either either a) run SQL to review the SQL statement to be executed or b) drop new 

*As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.*

