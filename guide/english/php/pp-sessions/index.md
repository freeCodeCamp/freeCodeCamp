---
title: PHP Sessions
---

# PHP Sessions

A session is a way to store information (in variables) to be used across multiple pages.  
Unlike a cookie, the information is not stored on the user's computer.

## What is a PHP Session?

When you work with an application, you open it, do some changes, and then you close it. This is much like a Session.  
The computer knows who you are. It knows when you start the application and when you end.  
But on the internet there is one problem: the web server does not know who you are or what you do, because the HTTP address _doesn't maintain state_.  

Session variables solve this problem by storing user information to be used across multiple pages (e.g. username, favorite color, etc).  
By default, session variables last until the user closes the browser.  

**Session variables hold information about one single user, and are available to all pages in one application.**  

**Note:** If you need a permanent storage, you may want to store the data in a database.


## Start a PHP Session

A session is started with the _session_start()_ function.  
Session variables are set with the PHP global variable: $_SESSION.

**Example:**
```
<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Set session variables
$_SESSION["favcolor"] = "blue";
$_SESSION["favanimal"] = "dog";
echo "Session variables are set.";
?>

</body>
</html>
```

**Note:** The session_start() function must be the **very first thing** in your document. **Before** any HTML tags.

Output:  
Session variables are set.


## Get PHP Session Variable Values

Note that session variables are not passed individually to each new page, instead they are retrieved from the session we open at the beginning of each page (session_start()).

Also note that all session variable values are stored in the global $_SESSION variable:

**Example:**
```
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Echo session variables that were set on previous page
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";
echo "Favorite animal is " . $_SESSION["favanimal"] . ".";
?>

</body>
</html>
```

Output:  
Favorite color is blue.  
Favorite animal is dog.

Another way to show all the session variable values for a user session is to run the following code:

```
<?php
print_r($_SESSION);
?>
```

### How does it work?

Most sessions set a user-key on the user's computer that looks something like this: 765487cf34ert8dede5a562e4f3a7e12.  
Then, when a session is opened on another page, it scans the computer for a user-key.  
If there is a match, it accesses that session, if not, it starts a new session.


## Modify a Session Variable

To change a session variable, just overwrite it:

**Example:**
```
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// to change a session variable, just overwrite it 
$_SESSION["favcolor"] = "pink";
print_r($_SESSION);
?>

</body>
</html>
```


## Destroy a PHP Session

To remove all global session variables and destroy the session, use _session_unset()_ and _session_destroy()_:

**Example:**
```
<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// remove all session variables
session_unset(); 

// destroy the session 
session_destroy(); 
?>

</body>
</html>
```
