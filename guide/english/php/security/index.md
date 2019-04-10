---
title: Security
---
## Security

When writing PHP code it is very important to get security concepts in mind to avoid writing vulnerable code.

### Types Of Vulnerabilities
* <a href="/php/security/cross-site-request-forgery">Cross Site Request Forgery</a> A vulnerability in the application caused by the programmer not checking where a request was sent from - this attack is sent to a high privilege level user to gain higher level access to the application.
* <a href="/php/security/cross-site-scripting">Cross Site Scripting</a> A vulnerability in the application caused by the programmer not sanitizing input before outputting the input to the browser (for example a comment on a blog). It is commonly used to run malicious javascript in the browser to do attacks such as stealing session cookies among other malicious actions to gain higher level privileges in the application.
* <a href="/php/security/local-file-inclusion">Local File Inclusion</a> A vulnerability in the application caused by the programmer requiring a file input provided by the user and not sanitizing the input before accessing the requested file. This results in a file being included where it should not of been.
* <a href="/php/security/remote-file-inclusion">Remote File Inclusion</a> A vulnerability in the application caused by the programmer requiring a file input provided by the user and not sanitizing the input before accessing the requested file. This results in a file being pulled from a remote server and included where it should not of been.
* <a href="/php/security/session-hijacking">Session Hijacking</a> A vulnerability caused by an attacker gaining access to a user's session identifier and being able to use another user's account impersonating them. This is often used to gain access to an administrative user's account.
* <a href="/php/security/session-identifier-acquirement">Session Identifier Acquirement</a> Session Identifier Acquirement is a vulnerability caused by an attacker being able to either guess the session identifier of a user or exploit vulnerabilities in the application itself or the user's browser to obtain a session identifier.
* <a href="/php/security/sql-injection">SQL Injection</a> A vulnerability in the application caused by the programmer not sanitizing input before including it into a query into the database. This leads to the attacker having full read and more often than not write access to the database. With this type of access an attacker can do very bad things.

#### More Information:
<a href="https://www.owasp.org/index.php/Category:Attack" rel="nofollow">OWASP Wiki's Attacks Page</a>
