---
title: Sessions
---
## Sessions

Sessions are a feature in PHP that allow you to store data server side about a user. When a session is setup, a browser cookie is set which identifies the user to PHP so the PHP knows which server side variables to access.

### Starting A Session
On every page you want to access the session you will need to start (or load) the session. To do so run the `session_start()` function which loads the PHP Session System.
```PHP
<?php
session_start();
```

Please note, that when using cookie-based sessions, session_start() must be called before outputing anything to the browser. anything else will result in an error.

### Accessing And Setting Data In A Session
The `$_SESSION['key']` variable is a special type of array (using a browser cookie to determine which session to access).

In the below example you see the user's choice of theme is set to theme number one.
```PHP
<?php
session_start();
$_SESSION['themechoice'] = 1;
```
Accessing a session variable is similar to setting one. Simply include the variable where it needs to be accessed. For example echoing it out as shown in the code example below.
```PHP
<?php
session_start();
echo $_SESSION['themechoice'];
```

### Removing A Session
To remove a session from the system run the following PHP code. It will unset the session variables and delete it from the system.
```PHP
<?php
session_unset();
session_destroy();
```

### Sessions Are Temporary
It is important to not treat a session as permanent storage. They get cleared from time to time by the developer, whenever the application is moved to a new host server, by the application itself (for example a logout button), and even during server maintenance. For long term storage of data make sure to use a database.

### Security
Last but not least it's important to use php sessions securely. Read our article on [Session Identifier Acquirement](/php/security/session-identifier-acquirement) and [Session Hijacking](/php/security/session-hijacking) for more information.

#### More Information:
* <a href="https://secure.php.net/manual/en/book.session.php">php.net session manual</a>
