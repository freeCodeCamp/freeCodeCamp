---
title: SQL Injection
localeTitle: SQL注入
---
## SQL注入

应用程序中的一个漏洞，程序员在将输入包含到数据库的查询中之前不会对其进行清理。这导致攻击者具有完全读取并且通常不会对数据库进行写访问。通过这种类型的访问，攻击者可以做很糟糕的事情。

### 示例SQL注入攻击

下面的PHP脚本运行SQL语句以按ID获取用户的电子邮件。但是输入没有被清理，因此容易受到SQL注入攻击

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

因此，使用上面的输入不是类型转换（即使用（int）转换输入，因此只允许一个数字）也不转义允许某人执行SQL注入攻击 - 例如URL `getemailbyuserid.php?id=1'; My Query Here-- -`允许您`getemailbyuserid.php?id=1'; My Query Here-- -`运行任意SQL查询。

### 在PHP中保护您的网站免受SQL注入攻击

有一些方法可以保护您的网站免受SQL注入攻击。这些方法是白名单，类型转换和字符转义

**白名单：** 白名单方法用于预期只有少量输入的情况。您可以在PHP Switch中列出每个预期输入，然后为无效输入设置默认值。您不必担心类型转换问题或字符转义旁路，但允许的输入极度有限。它仍然是一个选项，请参见下面的示例。

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

**类型铸造：** 类型转换方法通常用于使用数字输入的应用程序。只需使用`(int) $input` ，只允许使用数值。

**角色逃脱：** 字符转义方法将转义用户提供的引号和斜杠等字符以防止攻击。如果您使用MySQL Server和MySQLi库来访问您的数据库， `mysqli_real_escape_string($conn, $string)`函数将采用两个参数，MySQLi连接和字符串，并将正确地转义用户的输入以阻止SQL注入攻击。您使用的确切功能取决于您使用的数据库类型和php库检查php库的文档，以获取有关转义用户输入的更多信息。

#### 更多信息：

*   [OWASP Wiki - SQL注入](https://www.owasp.org/index.php/SQL_Injection)
*   [php.net SQL注入手册](https://secure.php.net/manual/en/security.database.sql-injection.php)
*   [php.net MySQLi Real Escape字符串手册](https://secure.php.net/manual/en/mysqli.real-escape-string.php)