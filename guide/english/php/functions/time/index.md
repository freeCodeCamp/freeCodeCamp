---
title: Time
---
## Time

The `time()` function returns the current unix timestamp (number of seconds since the Unix Epoch - January 1 1970 00:00:00 GMT).

### Example
```php
<?php
echo time();
```
**Output:**
```text
1511732226
```
#### More Information:
* <a href="https://secure.php.net/manual/en/function.time.php">php.net time() manual</a>

## Default timezone

You can set or get the settings using `date_default_timezone_set()` and `date_default_timezone_get()`.

### Example
```php
<?php
date_default_timezone_set(‘Asia/Dhaka’);  //To set the time zone.
$variable = date_default_timezone_get();  //To get the timezone.
```
**Output:**
```text
Asia/Dhaka
```
#### More Information:
* <a href="http://php.net/manual/en/function.date-default-timezone-set.php">php.net date_default_timezone_set() manual</a>
* <a href="http://php.net/manual/en/function.date-default-timezone-get.php">php.net date_default_timezone_set() manual</a>
