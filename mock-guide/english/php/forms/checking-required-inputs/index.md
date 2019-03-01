---
title: Checking Required Inputs
---

## Checking Required Inputs

PHP has a few functions to check if the required inputs have been met. Those functions are ```isset```, ```empty```, and ```is_numeric```.

### Checking form to make sure its set
The ```isset``` checks to see if the field has been set and isn't null.
Example:
```php
$firstName = $_GET['firstName']

if(isset($firstName)){
  echo "firstName field is set". "<br>";
}
else{
  echo "The field is not set."."<br>";
}
```
