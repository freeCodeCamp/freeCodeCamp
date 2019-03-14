---
title: SQL
---
## SQL

SQL stands for Structured Query Language. It is the most common tool used to create, delete, manipulate and manage data in a relational database (often referred to as a "SQL database").

SQL is commonly pronounced "sequel." Its most popular variants are MySQL, PostgreSQL, and SQLite - a version of SQL which is commonly used for prototyping. It introduced the concept of accessing many records with one single command, using SQL Queries.

SQL is commonly pronounced "sequel." Its most popular variants are Microsoft SQL, MySQL, PostgreSQL, and SQLite - a version of SQL which is commonly used for prototyping. It introduced the concept of accessing many records with one single command, using SQL Queries.

However, SQL code can differ between the different variants. For example, Microsoft SQL is programmed with T-SQL, which sometimes has a different syntax.

SQL is commonly pronounced "sequel." Its most popular variants are MySQL, PostgreSQL, and SQLite (version commonly used for prototyping). It introduced the concept of accessing many records with one single command, using SQL Queries.

SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987.

### Syntax

The SQL language is subdivided into several language elements, including:

* Clauses, which are constituent components of statements and queries. (In some cases, these are optional.)

* Expressions, which can produce either scalar values, or tables consisting of columns and rows of data

* Predicates, which specify conditions that can be evaluated to SQL three-valued logic (3VL) (true/false/unknown) or Boolean truth values   and are used to limit the effects of statements and queries, or to change program flow.

* Queries, which retrieve the data based on specific criteria. This is an important element of SQL.

* Statements, which may have a persistent effect on schemata and data, or may control transactions, program flow, connections, sessions,     or diagnostics.

* SQL statements also include the semicolon (";") statement terminator. Though not required on every platform, it is defined as a standard   part of the SQL grammar.

* Insignificant whitespace is generally ignored in SQL statements and queries, making it easier to format SQL code for readability.


SQL can be broken down further into DDL (Data Definition Language) and  DML (Data manipulation Language). 

DDL is the creating/editing the structure of tables. Functions include CREATE database/role/table/function/, DROP table/function, TRUNCATE table, ALTER table, RENAME table. You can also GRANT and REVOKE permissions to objects using DDL.

DML is selecting data, inserting data, updating data, and deleting data. Another common acronym in SQL DDL is CRUD, which stands for Create, Read, Update and Delete. SQL functions for manipulating data are SELECT, INSERT, UPDATE and DELETE. 

Additionally there is TCL (Transaction Control Language), which allows you to block code together into transactions, ie., complete all of the code successfully or fail back gracefully. Statements include COMMIT and ROLLBACK.
