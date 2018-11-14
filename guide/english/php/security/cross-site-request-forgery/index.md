---
title: Cross Site Request Forgery
---
## Cross Site Request Forgery

Cross Site Request Forgery is a vulnerability in the application caused by the programmer not checking where a request was sent from - this attack is sent to a high privilege level user to gain higher level access to the application.

### Example Cross Site Request Forgery Attack
An online blog allows users to submit comments and include an image in the comment, the blog's admin panel allows the blog's author to delete a comment by loading the URL `/admin/deletecomment.php?id=123`. A malicious user could make an image tag that loads the delete comment url for example `<img src="/admin/deletecomment.php?id=123" />` so next time an admin views the comment, the admin's computer will load the url and delete comment number 123.

### Defending your website from cross site request forgery attacks in PHP
To defend against a cross site request forgery attack, you should check against a regularly changed token. The url `/admin/deletecomment.php?id=123` would change to `/admin/deletecomment.php?id=123&csrf-token=random-per-user-unique-string-here`.

```PHP
<?php
// Checking a request's CSRF Token (if true the comment is deleted, if false the comment remains.)
session_start();
if ($_GET['csrf-token'] == $_SESSION['csrf-token']){
  return true;
} else {
  return false;
}
```

**Tips:**
* Keep a CSRF Token completely random and change per session (the openssl functions can help with this)
* PHP sessions are useful for storing a CSRF Token accessible to both the user and the server, you could also make this process database driven if you are so inclined.
* Change the CSRF Token on a session every 24 hours. On a high risk application you might want to change it upon every successful request however that will cause issues with users using multiple tabs.

#### Securely generating a Token
When setting a CSRF Token it is important that it is impossible to guess the key. The OpenSSL functions in PHP can generate a randomized key for you and store as a session variable.

```PHP
<?php
session_start();
$_SESSION['csrf-token'] = bin2hex(openssl_random_pseudo_bytes(16));
```

#### Using a CSRF Token to complete legitimate requests
You can include the session variable you saved earlier with your CSRF token in the URL make sure a legitimate administrator is allowed to delete comments. Without the correct token the request will be blocked.

```PHP
<?php
session_start();
echo '<a href="/admin/?id=123&csrf-token='.$_SESSION['csrf-token'].'">Delete Comment</a>'; // Only the logged in user has access to the CSRF Token - the token isn't accessible to the attacker preventing their attack from being successful.
```

#### More Information:
* <a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)" rel="nofollow">OWASP Wiki - Cross Site Request Forgery</a>
* <a href="https://secure.php.net/manual/en/function.bin2hex.php">php.net bin2hex() manual</a>
* <a href="https://secure.php.net/manual/en/function.openssl-random-pseudo-bytes.php">php.net openssl&#x5F;random&#x5F;pseudo&#x5F;bytes() manual</a> <!-- I used html special entities here due to issues displaying the underscore characters -->
