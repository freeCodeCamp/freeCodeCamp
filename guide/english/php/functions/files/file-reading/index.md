---
title: File Reading
---
## File Reading

PHP prepared File Reading functions to ease user to only retrieve information outside PHP.

### fopen("fileName.txt", "r")
Before we read a file, we need to prepare the file in PHP using fopen function reading mode("r"). The $fileHandler will be the file handler variable in the file reading operation.
```PHP
<?php

$fileHandler = fopen("fileName.txt", "r");

?>
```

### fread()
After the desired file to be read has been prepared for reading, user can proceed to fread function to read contents of the file.
```PHP
<?php

$content = fread($fileHandler, filesize("fileName.txt"));

?>
```
Content in the file "file.txt" will be stored in the variable $content.

### file_get_contents()
This file reading function is rather easy. This function doesn't need the file to be prepare by fopen().

```PHP
<?php

$content = file_get_contents("fileName.txt");

?>
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [fopen Function](http://php.net/manual/en/function.fopen.php)
- [fread](http://php.net/manual/en/function.fread.php)
- [filesize](http://php.net/manual/en/function.filesize.php)
- [file_get_contents](http://php.net/manual/en/function.file-get-contents.php)
