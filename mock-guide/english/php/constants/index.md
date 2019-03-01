---
title: Constants
---
## Constants
Constants are a type of variable in PHP. The `define()` function to set a constant takes three arguments - the key name, the key's value, and a Boolean (true or false) which determines whether the key's name is case-insensitive (false by default). A constant's value cannot be altered once it is set. It is used for values which rarely change (for example a database password OR api key).

### Scope
It is important to know that unlike variables, constants ALWAYS have a global scope and can be accessed from any function in the script.

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

Also, when you are creating classes, you can declare your own constants.

```php
class Human {
  const TYPE_MALE = 'm';
  const TYPE_FEMALE = 'f';
  const TYPE_UNKNOWN = 'u'; // When user didn't select his gender
  
  .............
}
```

**Note:** If you want to use those constants inside the `Human` class, you can refer them as `self::CONSTANT_NAME`. If you want to use them outside the class, you need to refer them as `Human::CONSTANT_NAME`.

#### More Information:
* <a href="https://secure.php.net/manual/en/language.constants.php" rel="nofollow">php.net constants manual</a>
* <a href="https://secure.php.net/manual/en/function.define.php" rel="nofollow">php.net define() manual</a>
* <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/php/class/index.md" rel="nofollow">Create your first PHP class</a>
