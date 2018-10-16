---
title: Local File Inclusion
---
## Local File Inclusion

A vulnerability in the application caused by the programmer requiring a file input provided by the user and not sanitizing the input before accessing the requested file. This results in a file being included where it should not of been.

### Example local file inclusion attacks
A website allows you to view PDFs as `download.php?file=myfile.php`, due to a lack of proper checking a malicious user is able to request /etc/passwd and get sensitive configuration information from the web server.

### Defending your website from local file inclusion attacks in PHP
```PHP
<?php
if(basename($_GET['file]) !== $_GET['file']) {
  die('INVALID FILE REQUESTED');
}
```
#### More Information:
* <a href="https://www.owasp.org/index.php/Testing_for_Local_File_Inclusion" rel="nofollow">OWASP Wiki - Testing for Local File Inclusion</a>
