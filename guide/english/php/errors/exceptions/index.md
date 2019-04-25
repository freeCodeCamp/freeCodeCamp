---
title: Error Exceptions
---
## Error Exceptions

Similar to other programming languages, you generally want to throw Exceptions when some sort of error occurs. Consider the following example of a `withdraw()` function in a theoretical `BankAccount` class where the balance goes below 0:

```php
function withdraw($amount) {
    $newBalance = $this->balance - $amount;
    if ($newBalance < 0) {
        throw new Exception('Balance would go below zero');
    }
    return $newBalance;
}
```

In this case, if the value of ```$this->balance``` was 5 and ```$amount``` was 10, you wouldn't want to authorize the withdrawal. By throwing an Exception, you ensure that the withdrawal doesn't take place if there is not enough money in the account.

#### More Information

- [PHP Manual: Exceptions](http://php.net/manual/en/language.exceptions.php)
