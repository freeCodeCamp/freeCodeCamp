---
title: Session Identifier Acquirement
---
## Session Identifier Acquirement

Session Identifier Acquirement is a vulnerability caused by an attacker being able to either guess the session identifier of a user or exploit vulnerabilities in the application itself or the user's browser to obtain a session identifier. This attack is a prerequisite to performing a session hijacking attack.

### Example
An attacker has a few options to perform a session identifier acquirement attack.
* Guessing the Identifier: A short and guessable session identifier could allow an attacker to brute-force the ID of a session and get in.
* Attacking the Browser: In the event you store your session identifier in the browser's cookies - if your website is vulnerable to cross site scripting an attacker could use the vulnerability to collect session identifier cookies and access high privilege level areas (for example an admin panel).
* Changing the ID to the attacker's choice: In older versions of PHP you were able to set the ID of a session in the URL. It's disabled by default now, if in doubt make sure `session.use_trans_sid` is false. This is not a common issue anymore, however it can still happen, better safe than sorry.


### Defending against Session Identifier Acquirement attacks in PHP
To defend against Session Identifier Acquirement attacks you need to check  the attempted session access against several factors to confirm whether it's a legitimate access and to avoid the user from successfully hijacking the user's session. Below is an example implementation that can help mitigate the effects of a session identifier acquirement attack. It checks the IP Address, User Agent, and if the Session Expired removing a session before it's acquired.
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

**Tips:**
* Store lots of information about the current session (User Agent String, IP Address, Last Access Time, etc)
* Check every request against information stored about the session (Does it match? If not delete the session and require the user to login again )
* Sessions shouldn't last forever - they should expire at a certain point to maintain session security.
* Rate limit the amount of sessions a user can try to access (did a user try to access 1000+ invalid sessions? Chances are they are guessing - prevent the IP address from trying any more sessions for a few hours).


#### More Information:
* <a href="https://secure.php.net/manual/en/session.security.php">php.net session security manual</a>
