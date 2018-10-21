---
title: PHP 5 Forms - Validate E-mail and URL
localeTitle: PHP 5 Forms - проверка электронной почты и URL-адреса
---
В этой главе показано, как проверять имена, электронные письма и URL-адреса.

### PHP - Проверить имя

В приведенном ниже коде показан простой способ проверить, содержит ли поле имени только буквы и пробелы. Если значение поля имени недопустимо, сохраните сообщение об ошибке:

```php
$name = test_input($_POST["name"]); 
 if (!preg_match("/^[a-zA-Z ]*$/",$name)) { 
  $nameErr = "Only letters and white space allowed"; 
 } 
```

> **Функция preg\_match () выполняет поиск строки для шаблона, возвращает true, если шаблон существует, и false в противном случае.**

### PHP - проверка электронной почты

Самый простой и безопасный способ проверить, правильно ли сформирован адрес электронной почты, - использовать функцию filter\_var () PHP.

В приведенном ниже коде, если адрес электронной почты не был правильно сформирован, сохраните сообщение об ошибке:

```php
$email = test_input($_POST["email"]); 
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
  $emailErr = "Invalid email format"; 
 } 
```

### PHP - проверка URL-адреса

В приведенном ниже коде показан способ проверки правильности синтаксиса URL-адреса (это регулярное выражение также позволяет тире в URL-адресе). Если синтаксис URL-адреса недействителен, сохраните сообщение об ошибке:

```php
$website = test_input($_POST["website"]); 
 if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) { 
  $websiteErr = "Invalid URL"; 
 } 
```

### PHP - подтверждение имени, электронной почты и URL-адреса

Теперь сценарий выглядит так:

#### пример

```php
<?php 
 // define variables and set to empty values 
 $nameErr = $emailErr = $genderErr = $websiteErr = ""; 
 $name = $email = $gender = $comment = $website = ""; 
 
 if ($_SERVER["REQUEST_METHOD"] == "POST") { 
  if (empty($_POST["name"])) { 
    $nameErr = "Name is required"; 
  } else { 
    $name = test_input($_POST["name"]); 
    // check if name only contains letters and whitespace 
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) { 
      $nameErr = "Only letters and white space allowed"; 
    } 
  } 
 
  if (empty($_POST["email"])) { 
    $emailErr = "Email is required"; 
  } else { 
    $email = test_input($_POST["email"]); 
    // check if e-mail address is well-formed 
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
      $emailErr = "Invalid email format"; 
    } 
  } 
 
  if (empty($_POST["website"])) { 
    $website = ""; 
  } else { 
    $website = test_input($_POST["website"]); 
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL) 
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) { 
      $websiteErr = "Invalid URL"; 
    } 
  } 
 
  if (empty($_POST["comment"])) { 
    $comment = ""; 
  } else { 
    $comment = test_input($_POST["comment"]); 
  } 
 
  if (empty($_POST["gender"])) { 
    $genderErr = "Gender is required"; 
  } else { 
    $gender = test_input($_POST["gender"]); 
  } 
 } 
 ?> 

```