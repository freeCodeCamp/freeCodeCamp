---
title: Switch
---
## Switch
In PHP, the `Switch` statement is very similar to the Javascript `Switch` statement (See the <a href="/javascript/switch-statements">Javascript Switch Guide</a> to compare and contrast). It allows rapid case testing with a lot of different possible conditions, the code is also more readable.

### Syntax
```php
<?php
	// Switch Statement Example
	switch ($i) {
    	case "free":
    	    echo "i is free";
    	    break;
    	case "code":
    	    echo "i is code";
    	    break;
    	case "camp":
    	    echo "i is camp";
    	    break;
    	default:
    		echo "i is freecodecamp";
	}

```

### Break
The `break;` statement exits the switch and goes on to run the rest of the application's code. If you do not use the `break;` statement you may end up running mulitple cases and statements, sometimes this may be desired in which case you should not include the `break;` statement.

#### More Information:
* <a href="https://secure.php.net/manual/en/control-structures.switch.php" rel="nofollow">php.net docs Switch</a>
