---
title: Constants
---
## Constants
A constant is an identifier (name) for a simple value. As the name suggests, that value cannot change during the execution of the script (except for magic constants, which aren't actually constants). A constant is case-sensitive by default. By convention, constant identifiers are always uppercase.

The `define()` function to set a constant takes three arguments - the key name, the key's value, and a Boolean (true or false) which determines whether the key's name is case-insensitive (false by default). A constant's value cannot be altered once it is set. It is used for values which rarely change (for example a database password OR api key).

The name of a constant follows the same rules as any label in PHP. A valid constant name starts with a letter or underscore, followed by any number of letters, numbers, or underscores. As a regular expression, it would be expressed thusly: *[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]* *


### Scope
It is important to know that unlike variables, constants ALWAYS have a global scope and can be accessed from any function in the script.

### Example - Valid and invalid constant names

```PHP
<?php

// Valid constant names
define("FOO",     "something");
define("FOO2",    "something else");
define("FOO_BAR", "something more");

// Invalid constant names
define("2FOO",    "something");

// This is valid, but should be avoided:
// PHP may one day provide a magical constant
// that will break your script
define("__FOO__", "something"); 
```

### Example
```PHP
<?php
define("freeCodeCamp", "Learn to code and help nonprofits", false);
echo freeCodeCamp;
```
**Output:**
```text
Learn to code and help nonprofits
```

#### More Information:
* <a href="https://secure.php.net/manual/en/language.constants.php" rel="nofollow">php.net constants manual</a>
* <a href="https://secure.php.net/manual/en/function.define.php" rel="nofollow">php.net define() manual</a>
