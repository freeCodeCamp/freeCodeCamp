---
title: SQL Alter Table Statement
---
## SQL Guide - ALTER TABLE

## Introduction

This guide will introduce you to and attempt to explain some of the basics of the SQL alter table functions within a relational database.
**IMPORTANT Safety Tip:  ALWAYS backup your data before making changes!**

We will be using MySQL for all examples throughout this freeCodeCamp SQL guide because MySQL is commonly used for many websites' backend database and is free, fun, and easy to use.

## Covered in this Guide 
We will use the tables created in the “CREATE TABLE” guide.  Feel free to review that guide if you are not familiar with creating a table. Topics this guide will cover include:
* Alter an existing table. 
* Modify existing columns.
* Add columns (and review several of the most important column types and their uses).
* Drop (remove) columns.
* Create a table by importing a CSV file.
* Create and modify tables with MySQL workbench tools.

Most of this will be done using SQL statements via the MySQL workbench scripting tool, but we will also review how to alter a table using the workbench interface instead of with SQL statements.

## The table before alterations:
![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table01a.JPG?raw=true)

Add date and email address columns (a date and a character column):
![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table01.JPG?raw=true)

Add a numeric column (note that it was added in a specific location in the table):
![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table02.JPG?raw=true)

Rename some columns:
![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table03.JPG?raw=true)

Remove a column:
![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table04.JPG?raw=true)

You can also use the alter table workbench tool. Just RIGHT click on the table you want to change and change as you wish.
![image-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table05.JPG?raw=true)

There is much more that can be done, check the manual of your database management software to learn more.

