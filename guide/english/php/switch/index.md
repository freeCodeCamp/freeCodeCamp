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
            break;
	}

```

### Break
The `break;` statement exits the switch and goes on to run the rest of the application's code. If you do not use the `break;` statement you may end up running mulitple cases and statements, sometimes this may be desired in which case you should not include the `break;` statement.

An example of this behavior can be seen below:

```
<?php
    $j = 0;

    switch ($i) {
        case '2':
            $j++;
        case '1':
            $j++;
            break;
        default:
            break;
    }
```

If $i = 1, the value of $j would be:

```
1
```

If $i = 2, the value of $j would be:

```
2
```

While break can be omitted without causing fall-through in some instances (see below), it is generally best practice to include it for legibility and safety (see below):

```
<?php
    switch ($i) {
        case '1':
            return 1;
        case '2':
            return 2;
        default:
            break;
     }
```
```
<?php
    switch ($i) {
        case '1':
            return 1;
            break;
        case '2':
            return 2;
            break;
        default:
            break;
     }
```

#### More Information:
* [php.net docs Switch](https://secure.php.net/manual/en/control-structures.switch.php")
