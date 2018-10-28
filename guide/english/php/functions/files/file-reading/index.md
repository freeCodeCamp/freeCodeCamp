---
title: File Reading
---
## File Reading

### Open a file using 'fopen()' function.
To read or write any file we need to open the file first. We do it using php fopen built in function. We have to make sure the file we want to read is readable.

Suppose we have a file named 'php.txt'. We will use fopen function. The fopen function has two required parameter. First is the file name and second is mode(r, w, a, r+, w+, a+ etc). 

#### Example

```
<?php
$file = fopen(‘php.txt’, ‘r’);
.....
```

Here php open the file named php.text and 'r' indicates read. So we are opening the file for read.


#### More Information:
For more information visit [PHP: fopen - Manual](http://php.net/manual/en/function.fopen.php)
