---
title: PHP 5 Forms - Validate E-mail and URL
localeTitle: Formularios PHP 5 - Validar correo electrónico y URL
---
Este capítulo muestra cómo validar nombres, correos electrónicos y URL.

### PHP - Validar Nombre

El siguiente código muestra una forma sencilla de verificar si el campo de nombre solo contiene letras y espacios en blanco. Si el valor del campo de nombre no es válido, almacene un mensaje de error:

```php
$name = test_input($_POST["name"]); 
 if (!preg_match("/^[a-zA-Z ]*$/",$name)) { 
  $nameErr = "Only letters and white space allowed"; 
 } 
```

> **La función preg\_match () busca una cadena para el patrón, devolviendo verdadero si el patrón existe, y falso en caso contrario.**

### PHP - Validar correo electrónico

La forma más fácil y segura de verificar si una dirección de correo electrónico está bien formada es usar la función filter\_var () de PHP.

En el código a continuación, si la dirección de correo electrónico no está bien formada, almacene un mensaje de error:

```php
$email = test_input($_POST["email"]); 
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
  $emailErr = "Invalid email format"; 
 } 
```

### PHP - Validar URL

El siguiente código muestra una forma de verificar si la sintaxis de una dirección URL es válida (esta expresión regular también permite guiones en la URL). Si la sintaxis de la dirección URL no es válida, almacene un mensaje de error:

```php
$website = test_input($_POST["website"]); 
 if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) { 
  $websiteErr = "Invalid URL"; 
 } 
```

### PHP - Validar nombre, correo electrónico y URL

Ahora, el script se ve así:

#### Ejemplo

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