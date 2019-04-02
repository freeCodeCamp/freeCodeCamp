---
title: PHP - Hello World
---
## PHP - Hello World

PHP scripts are executed on the server.

Before you continue you should have a basic understanding of the following:

### HTML - A webpage's blueprint
### CSS - A webpage's design plan and instruction
### JavaScript - A webpages power worker, that makes it function dynamically. 
PHP files can contain Text, HTML, CSS, JavaScript, and PHP code.
A PHP script is executed on the server, and is returned to the user on the browser as just HTML markup, with some styling.

A PHP script starts with `<?php` and ends with `?>`:
```php
<?php
// PHP code goes here
?>
```
or 
you can also write A PHP script which starts with `<?php` and ends without `?>` when writing it in an external file i.e. "filename.php":
```php
<?php
// PHP code goes here
```

The code can later be called using include:
```php
<?php
include 'filename.php';
?>
```
or
using require
```php
<?php
require 'filename.php';
?>
```

Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function "echo" to output(echo out) the text "Hello World!" on a web page:

```php
<!DOCTYPE html>
<html>
<body>

<?php
echo "Hello World!";
?>

</body>
</html>
```

Note: You cannot simply open this file with your browser as you could with an html file. In order for this file to display properly in your browser, you must place it in an accessible folder on a server. A simple example: To do this in apache, you would be replacing the "index.html" file with this file and naming it "index.php" (You should check that php is enabled on your apache server).
