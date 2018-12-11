---
title: Loop
---

# PHP Loop
When you need to repeat same task for many times, you can use loop instead of keep adding same code over and over again.
In PHP you have the following loop statements :
- for - loop through a block of code with specific number of times.
- while - loop through a block of code if condition is true.
- do...while - loop through a block of code one and continue loop if condition is true.
- foreach - loop through a block of code for each value within an array.

Using a `break` within the loop can stop the loop execution.

# For loop
Loop through a block of code with specific number of times.

## Syntax
```php

for (init counter; condition; counter increment or decrement)
{
    // Code to be executed
}

```

## Example
```php

<?php
for($index = 0; $index < 5; $index ++)
{
    echo "Current loop counter ".$index.".\n";
}
?>

```

## Output
```
> Current loop counter 0.
> Current loop counter 1.
> Current loop counter 2.
> Current loop counter 3.
> Current loop counter 4.
```

# While loop
Loop through a block of code if condition is true.

## Syntax
```php

while (condition)
{
    // Code to be executed
}

```

## Example
```php

<?php
$index = 10;
while ($index >= 0)
{
    echo "The index is ".$index.".\n";
    $index--;
}
?>

```

## Output
```
> The index is 10.
> The index is 9.
> The index is 8.
> The index is 7.
> The index is 6.
> The index is 5.
> The index is 4.
> The index is 3.
> The index is 2.
> The index is 1.
> The index is 0.
```

# Do...While loop
Loop through a block of code one and continue loop if condition is true.

## Syntax
```php

do
{
    // Code to be executed
}
while (condition);

```

## Example
```php

<?php
$index = 3;
do
{
    // execute this at least 1 time
    echo "Index: ".$index.".\n"; 
    $index --;
}
while ($index > 0);
?>

```

## Output
```
> Index: 3.
> Index: 2.
> Index: 1.
```

# Foreach loop
Loop through a block of code for each value within an array.

## Syntax
```php
foreach ($array as $value)
{
    // Code to be executed
}

```

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

## Output
```
> Hi, my name is Ali.
> Hi, my name is Ah Kao.
> Hi, my name is Muthu.
> Hi, my name is Gwen.
> Hi, my name is Lucida.
> Hi, my name is Cecily.
> "Hello, Cecily!"
```
