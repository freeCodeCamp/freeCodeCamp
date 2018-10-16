---
title: Foreach Loop
---

# Foreach loop
The PHP  `foreach` statement consists of three expressions and a statement:

`foreach ($array as value) statement`

It loops through a block of code for each value within an array.

## Example
```php

<?php
$array = ["Ali", "Ah Kao", "Muthu", "Gwen", "Lucida", "Cecily", "Arthur", "Flora"];
foreach ($array as $name)
{
    echo "Hi, my name is ".$name.".\n";

    if ($name == "Cecily")
    {
        echo "\"Hello, ".$name."!\"";

        // stop the loop if name is Cecily
        break;
    }
}
?>

```
This will output
```
> Hi, my name is Ali.
> Hi, my name is Ah Kao.
> Hi, my name is Muthu.
> Hi, my name is Gwen.
> Hi, my name is Lucida.
> Hi, my name is Cecily.
> "Hello, Cecily!"
```
### More Information

- <a href='https://secure.php.net/manual/en/control-structures.foreach.php' target='_blank' rel='nofollow'>PHP.net - Control Structures Foreach</a>
