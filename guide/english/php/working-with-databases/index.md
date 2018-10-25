---
title: Working With Databases
---

## What options are available for PHP to connect to a database?

PHP can connect to a variety of different databases including MongoDB, MsSQL and MySQL.
Both PHP and MySQL are very popular and provide an easy, free and open source websites 
to be created and are often found together to produce websites of all types. 
Both PHP and MySQL can scale to support large numbers of users.

PHP even supports more than one way to deal with connections to MySQL including MySQLi Procedural, 
PHP Data Objects (PDO) and MySQLi Object Orientated along with the now deprecated MySQL Connect. 
With PHP there are many features built into the core functionality of the language that make links to a 
database simple and easy.

Some Examples from Mysqli are-

`<?php
$con=mysqli_connect("localhost","root","","db_name") or die("Invalid User or Password...cannot connect");
?>`


here we are connecting to a database on the phpmyadmin structure with no password and database name-db_name

### To create a new table in mysql database using php mysqli.
The CREATE TABLE statement is used to create a table in MySQL.

#### Example
`$query = "CREATE TABLE any (
rowname int (10) NOT NULL AUTO_INCREMENT PRIMARY KEY
)";
if(mysqli_query($dbc, $query)){
    echo "success";
} else {
    echo "failed";
}`

After the data type, you can specify other optional attributes for each column:

NOT NULL - Each row must contain a value for that column, null values are not allowed. 
DEFAULT value - Set a default value that is added when no other value is passed. 
UNSIGNED - Used for number types, limits the stored data to positive numbers and zero. 
AUTO INCREMENT - MySQL automatically increases the value of the field by 1 each time a new record is added. 
PRIMARY KEY - Used to uniquely identify the rows in a table. The column with PRIMARY KEY setting is often an ID number, and is often used with AUTO_INCREMENT.
We can ad as many as rows as we want using comma (,) separated commands.

#### Example
`
$query = "CREATE TABLE any (
rowname int (10) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
rowname varchar (nuberofcharecter) NULL, 
rowname varchar (nuberofcharecter)
)";
`
