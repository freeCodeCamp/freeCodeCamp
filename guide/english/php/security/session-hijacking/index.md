---
title: Session Hijacking
---
## Session Hijacking

Session Hijacking is a vulnerability caused by an attacker gaining access to a user's session identifier and being able to use another user's account impersonating them. This is often used to gain access to an administrative user's account.

### Defending against Session Hijacking attacks in PHP
To defend against Session Hijacking attacks you need to check the current user's browser and location information against information stored about the session. Below is an example implementation that can help mitigate the effects of a session hijacking attack. It checks the IP Address, User Agent, and if the Session Expired removing a session before it's resumed.
```PHP
<?php
session_start();

// Does IP Address match?
if ($_SERVER['REMOTE_ADDR'] != $_SESSION['ipaddress'])
{
session_unset();
session_destroy();
}

// Does user agent match?
if ($_SERVER['HTTP_USER_AGENT'] != $_SESSION['useragent'])
{
  session_unset();
  session_destroy();
}

// Is the last access over an hour ago?
if (time() > ($_SESSION['lastaccess'] + 3600))
{
  session_unset();
  session_destroy();
}
else
{
  $_SESSION['lastaccess'] = time();
}
```

#### More Information:
* <a href="https://secure.php.net/manual/en/session.security.php">php.net session security manual</a>
