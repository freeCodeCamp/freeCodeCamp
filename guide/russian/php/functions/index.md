---
title: Functions
localeTitle: функции
---
## Введение в PHP

Функция представляет собой блок операторов, которые могут использоваться повторно в программе.

### Простая функция + вызов

```php
function say_hello() { 
  return "Hello!"; 
 } 
 
 echo say_hello(); 
```

### Простая функция + Параметр + Вызов

```php
function say_hello($friend) { 
  return "Hello " . $friend . "!"; 
 } 
 
 echo say_hello('Tommy'); 
```

### strtoupper - Делает все Chars БОЛЬШИМ И БОЛЬШИМ!

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

#### Дополнительная информация:

*   [Руководство пользователя, определяемое пользователем php.net](https://secure.php.net/manual/en/functions.user-defined.php)