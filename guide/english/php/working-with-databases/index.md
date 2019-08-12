---
title: Working With Databases
---

## What options are available for PHP to connect to a database?

PHP can connect to a variety of different databases including MongoDB, MS SQL and MySQL.
Both PHP and MySQL are very popular and provide an easy, free and open source websites 
to be created and are often found together to produce websites of all types. 
Both PHP and MySQL can scale to support large numbers of users.

PHP even supports more than one way to deal with connections to MySQL including MySQLi Procedural, 
PHP Data Objects (PDO) and MySQLi Object Orientated along with the now deprecated MySQL Connect. 
With PHP there are many features built into the core functionality of the language that make links to a 
database simple and easy.

### Example of MYSQL Connection
Here we are connecting to a database on the phpmyadmin structure, with no password, and database named `db_name`.

```php
$con=mysqli_connect("localhost","root","","db_name") or die("Invalid User or Password...cannot connect");
```

### Example of PDO Connection
```
<?php
$servername = "localhost";
$username = "root";
$password = "password";

try {
    $conn = new PDO("mysql:host=$servername;dbname=someDB", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
```
