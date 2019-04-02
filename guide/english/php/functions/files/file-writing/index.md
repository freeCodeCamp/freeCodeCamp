---
title: File Writing
---
## File Writing

PHP has prepared a few functions to help user save information outside of PHP to be used later.

## fopen("fileName.txt","w")
Like most of the file handling functions, before conducting any file operation we must prepare the file for the operation first.
```PHP
<?php

  $fileHandler = fopen("fileName.txt", "w");
  
?>
```
$fileHandler is the file handling variable, the function to write should pass this variable as an argument.

## fwrite()
This is the function to add content to your file. This function should contain two variables, the first one should be the file handling variable and the second should be the content you wish to add to the file.
```PHP
<?php

  //pass the content as literal string
  fwrite($fileHandler, "PHP is fun!");
 
?>
```
```PHP
<?php
  
  //pass the content as variable
  $sampleString = "PHP is fun!"
  
  fwrite($fileHandler, $sampleString);

?>
```
## fopen("fileName.txt", "a")
If the file chosen previously contained content, the fwrite function will overwrite the previous content.
If you wish to add content to the file but didn't want to overwrite the existed content in the file, you should use append mode ("a") for the fopen() function.
```PHP
<?php

  $fileHandler = fopen("fileName.txt", "a");
  
  fwrite($fileHandler, "PHP is easy to learn!");

?>
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [fopen Function](http://php.net/manual/en/function.fopen.php)
- [fwrite Function](http://php.net/manual/en/function.fwrite.php)
