---
title: PHP - Hello World
---
## PHP - Hello World

PHP scripts are executed on the server.

PHP files can contain Text, HTML, CSS, JavaScript, and PHP code.
A PHP script is executed on the server, and the plain HTML result is sent back to the browser.

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


Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function "echo" to output the text "Hello World!" on a web page:

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

Obviously it seems weird that we are writting a Hello World message with PHP instead of just using HTML. PHP can handle dynamic contents. For example outputting the username, database query results and so on.
