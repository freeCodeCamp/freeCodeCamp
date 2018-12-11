---
title: PHP 5 Forms - Validate E-mail and URL
localeTitle: Formulários PHP 5 - Valide E-mail e URL
---
Este capítulo mostra como validar nomes, e-mails e URLs.

### PHP - Nome de Validação

O código abaixo mostra uma maneira simples de verificar se o campo de nome contém apenas letras e espaço em branco. Se o valor do campo de nome não for válido, armazene uma mensagem de erro:

```php
$name = test_input($_POST["name"]); 
 if (!preg_match("/^[a-zA-Z ]*$/",$name)) { 
  $nameErr = "Only letters and white space allowed"; 
 } 
```

> **A função preg\_match () procura uma string por padrão, retornando true se o padrão existir, e false caso contrário.**

### PHP - Validar E-mail

A maneira mais fácil e segura de verificar se um endereço de e-mail é bem formado é usar a função filter\_var () do PHP.

No código abaixo, se o endereço de e-mail não for bem formado, armazene uma mensagem de erro:

```php
$email = test_input($_POST["email"]); 
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
  $emailErr = "Invalid email format"; 
 } 
```

### PHP - Validar URL

O código abaixo mostra uma maneira de verificar se uma sintaxe de endereço de URL é válida (essa expressão regular também permite traços na URL). Se a sintaxe do endereço de URL não for válida, armazene uma mensagem de erro:

```php
$website = test_input($_POST["website"]); 
 if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) { 
  $websiteErr = "Invalid URL"; 
 } 
```

### PHP - Validar Nome, E-mail e URL

Agora, o script é assim:

#### Exemplo

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