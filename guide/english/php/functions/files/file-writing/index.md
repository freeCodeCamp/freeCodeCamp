---
title: File Writing
---
## File Writing

Write data into existing file can be done by two functions.

### fwrite

You first open the file on writing mode (w) and write content into file handler.

```php
<?php

$file = fopen('file.txt', 'w');
$content = 'Foo';
fwrite($file, $content);
fclose($file);
```

### file_put_contents

Call this function is identical to apply the previous method. It calls `fopen()`, `fwrite()` and `fclose()` successively to write data to a file.

```php
<?php

$file = 'file.txt';
$content = 'Foo';
file_put_contents($file, $content);
```
