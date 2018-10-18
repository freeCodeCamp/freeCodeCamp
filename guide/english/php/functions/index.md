---
title: Functions
---

## PHP Functions Introduction

A function is a block of statements that can be used repeatedly in a program.

### Simple Function + Call

```php
function say_hello() {
  return "Hello!";
}

echo say_hello();
```

### Simple Function + Parameter + Call

```php
function say_hello($friend) {
  return "Hello " . $friend . "!";
}

echo say_hello('Tommy');
```

### strtoupper - Makes all Chars BIGGER AND BIGGER!

```php
function makeItBIG($a_lot_of_names) {
  foreach($a_lot_of_names as $the_simpsons) {
    $BIG[] = strtoupper($the_simpsons);
  }
  return $BIG;
}

$a_lot_of_names = ['Homer', 'Marge', 'Bart', 'Maggy', 'Lisa'];
var_dump(makeItBIG($a_lot_of_names));
```

#### More Information:

* <a href="https://secure.php.net/manual/en/functions.user-defined.php">php.net user defined functions manual</a>
