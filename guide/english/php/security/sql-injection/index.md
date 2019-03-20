---
title: SQL Injection
---
## SQL Injection

A vulnerability in the application caused by the programmer not sanitizing input before including it into a query into the database. This leads to the attacker having full read and more often than not write access to the database. With this type of access an attacker can do very bad things.

### Example SQL Injection attack
The below PHP Script runs an SQL Statement to get a user's email by ID. However the input is not sanitized making it vulnerable to SQL Injection
```PHP
<?php
$input = $_GET['id'];
$dbserver = "localhost";
$dbuser = "camper";
$dbpass = "supersecretcampsitepassword";
$dbname = "freecodecamp";

$conn = new mysqli($dbserver, $dbuser, $dbpass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT email FROM users WHERE id =" . $input;

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row["email"];
    }
} else {
    echo "no results";
}

$conn->close();
```
```SQL
SELECT email FROM users WHERE id = `$input`;
```

So with the above the input is not type casted (I.e. casting the input with `(int)` so only a number is allowed) nor escaped allowing someone to perform an SQL Injection attack - for example the URL `getemailbyuserid.php?id=1; My Query Here--` would allow you to run arbitrary SQL queries with little effort.

As the SQL code is a string which can be controlled by an attacker, the `id` variable in the example above effectively becomes `1; My Query Here--`. The `$sql` string thus becomes `SELECT email FROM users WHERE id =1; My Query Here--`. You can see that arbitrary queries can be appended to the original query. The double-dash `--` comments out any trailing characters which can cause an issue with the payload, like closing quotes if available.

### Defending your website from sql injection attacks in PHP
There are a few approaches to defend your website from SQL Injection Attacks. These approaches are Whitelisting, Type Casting, and Character Escaping

**Whitelisting:**
The whitelisting approach is used in cases where only a few inputs are expected. You can list each expected input in a PHP Switch and then have a default for invalid input. You do not have to worry about a type casting issue or a character escape bypass but the allowed input is extreamly limited. It remains an option, see the example below.
```PHP
<?php
switch ($input) {
  case "1":
    //db query 1
    break;
  case "2":
    //db query 2
    break;
  default:
    // invalid input return error
}
```

**Type Casting:**
The type casting approach is commonly used for an application using numeric input. Simply cast the input with `(int) $input` and only a numeric value will be allowed.

**Character Escaping:**
The character escaping approach will escape characters such as quotes and slashes provided by the user to prevent an attack. If you are using MySQL Server and the MySQLi library to access your database, the  `mysqli_real_escape_string($conn, $string)` function will take two arguments, the MySQLi connection, and the string and will properly escape the user's input to block an sql injection attack. The exact function you use depends on the database type and php library you are using check the php library's documentation for more information on escaping user input.

#### More Information:
* <a href="https://www.owasp.org/index.php/SQL_Injection" rel="nofollow">OWASP Wiki - SQL Injection</a>
* <a href="https://secure.php.net/manual/en/security.database.sql-injection.php" rel="nofollow">php.net SQL Injection manual</a>
* <a href="https://secure.php.net/manual/en/mysqli.real-escape-string.php" rel="nofollow">php.net MySQLi Real Escape String manual</a>
