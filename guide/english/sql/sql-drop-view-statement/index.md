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

We'll drop the view called `students_dropMe_v`, which was created just for this purpose.

### Basic Syntax

```sql
DROP VIEW [IF EXISTS]
    view_name [, view_name] ...
```

### Drop View SQL

The if exists portion will "trap" errors, should the view not exist.

```sql
drop view if exists students_dropMe_v;
```

The view after creation:

![image-1](https://github.com/SteveChevalier/guide-images/blob/master/drop-view01.JPG)

Above command executed and views shown:

![image-2](https://github.com/SteveChevalier/guide-images/blob/master/drop-view02.JPG)

### Using the Workbench

From the workbench:
1) Right click on the view to drop
2) select drop view from the menu
3) Select either either a) run SQL to review the SQL statement to be executed or b) drop new 

![image-3](https://github.com/SteveChevalier/guide-images/blob/master/drop-view03.JPG)

*As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.*

### Extra

Here's the SQL I used to create the table that we just dropped:

```sql
create view `students_dropMe_v` as
select FullName, programOfStudy 
from student 
where programOfStudy = 'Programming';
```
