---
title: Cross Site Scripting
---
## Cross Site Scripting

Cross Site Scripting is a type of vulnerability in a web application caused by the programmer not sanitizing input before outputting the input to the web browser (for example a comment on a blog). It is commonly used to run malicious javascript in the web browser to do attacks such as stealing session cookies among other malicious actions to gain higher level privileges in the web application.

### Example Cross Site Scripting Attack
A blog allows users to style their comments with HTML tags, however the script powering the blog does not strip out `<script>` tags allowing any user to run javascript on the page. An attacker can use this to their advantage to run malicious javascript in the browser. They could infect users with malware, steal session cookies, and more.

```HTML
<script>
  alert('Cross Site Scripting!');
</script>
```

### Defending your website from cross site scripting attacks in PHP
In PHP there are two primary functions, `htmlspecialchars()` and `strip_tags()`, built in to protect yourself from cross site scripting attacks.

The `htmlspecialchars($string)` function will prevent an HTML string from rendering as HTML and display it as plain text to the web browser.
**htmlspecialchars() code example**
```PHP
<?php
$usercomment = "<string>alert('Cross Site Scripting!');</script>";
echo htmlspecialchars($usercomment);
```

The other approach is the `strip_tags($string, $allowedtags)` function which removes all HTML tags except for the HTML tags that you've whitelisted. It's important to note that with the `strip_tags()` function you have to be more careful, this function does not prevent the user from including javascript as a link, you'll have to sanitize that on our own.

**strip_tags() code example**
```php
<?php
$usercomment = "<string>alert('Cross Site Scripting!');</script>";
$allowedtags = "<p><a><h1><h2><h3>";
echo strip_tags($usercomment, $allowedtags);
```

**Setting the X-XSS-Protection Header:**

In PHP you can send the `X-XSS-Protection` Header which will tell browsers to check for a reflected Cross Site Scripting attack and block the page from loading. This does not prevent all cross site scripting attacks only reflected ones and should be used in combination with other methods.
```PHP
<?php
header("X-XSS-Protection: 1; mode=block");
```

**Writing your own sanitization function**
Another option, if you would like more control over how the sanitization works, is to write your own HTML Sanitization function, this is not recommended for PHP Beginners as a mistake would make your website vulnerable.

### Defending your website from cross site scripting attacks with a Content Security Policy
An effective approach to preventing cross site scripting attacks, which may require a lot of adjustments to your web application's design and code base, is to use a content security policy.

#### Set a Content Security Policy as an HTTP Header
The most common way of setting a Content Security Policy is by setting it directly in the HTTP Header. This can be done by the web server by editing it's configuration or by sending it through PHP.

**Example of a Content Security Policy set in a HTTP Header**
```php
<?php
header("content-security-policy: default-src 'self'; img-src https://*; child-src 'none';");
```
#### Set a Content Security Policy as a Meta tags
You can include your Content Security Policy in the page's HTML and set on a page by page basis. This method requires you to set on every page or you lose the benefit of the policy.

**Example of a Content Security Policy set in a HTML Meta Tag**
```HTML
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
```

#### More Information:
* <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)" rel="nofollow">OWASP Wiki - Cross Site Scripting</a>
* <a href="https://secure.php.net/manual/en/function.strip-tags.php" rel="nofollow">php.net strip_tags() manual</a>
* <a href="https://secure.php.net/manual/en/function.htmlspecialchars.php" rel="nofollow">php.net htmlspecialchars() manual</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" rel="nofollow">MDN - Content Security Policy (CSP)</a>
