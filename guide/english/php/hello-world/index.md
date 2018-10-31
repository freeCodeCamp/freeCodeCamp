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
A PHP script is executed on the server, and is returned to the user on the browser as just PHP code.

A PHP script starts with `<?php` and ends with `?>`:
```php
<?php
// PHP code goes here
?>
```
or 
you can also write A PHP script starts with `<?php` and ends without `?>`:
```php
<?php
// PHP code goes here
```


Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function "echo" to output(echo out) the text "Hello World!" on a web page:

```php
<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!";
?>

</body>
</html>
```
