---
title: PHP Cookies
---

# PHP COOKIES

## What is a Cookie?

A cookie is often used to identify a user. It is a small file that the server embeds on the user's computer.
Each time the same computer requests a page with a browser, it will send the cookie too.  
Cookies were designed to be a reliable mechanism to remember stateful information or to record the user's browsing activity.  
They can also be used to remember arbitrary pieces of information that the user previously entered into form fields such as names, addresses, passwords, etc.

## Creating Cookies with PHP

With PHP, you can both create and retrieve cookie values.
A cookie is created with the setcookie() function.

`setcookie(name, value, expire, path, domain, secure, httponly);`  

Only the _name_ parameter is a required parameter. All other parameters are optional.


## PHP Create/Retrieve a Cookie

The following example creates a cookie named "user" with the value "John Doe".  
The cookie will expire after 30 days (86400 * 30).  
The "/" means that the cookie is available in entire website (else, you can select the directory you prefer).  
We then retrieve the value of the cookie "user" (using the global variable $_COOKIE).  
We also use the isset() function to find out if the cookie is set:

**Example:**
```
<?php
$cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");  // 86400 = 1 day
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}
?>
</body>
</html>
```

**Note:** The setcookie() function must appear **BEFORE** the <html> tag.


Output:  
Cookie 'user' is set!  
Value is: John Doe


## PHP Modify a Cookie Value

To modify a cookie, just set the value again using the setcookie() function:

**Example:**
```
<?php
$cookie_name = "user";
$cookie_value = "Jane Porter";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>
```

Output:  
Cookie 'user' is set!  
Value is: Alex Porter


## PHP Delete a Cookie

To delete a cookie, use the setcookie() function with an expiration date in the past:

**Example:**
```
<?php
// set the expiration date to one hour ago
setcookie("user", "", time() - 3600);
?>
<html>
<body>

<?php
echo "Cookie 'user' is deleted.";
?>

</body>
</html>
```

Output:  
Cookie 'user' is deleted.
