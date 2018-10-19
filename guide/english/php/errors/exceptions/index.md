---
title: Error Exceptions
---
## Error Exceptions

Similar to other programming languages, you generally want to throw Exceptions when some sort of error occurs. Consider the following example of a withdraw() function in a theoretical BankAccount class where the balance goes below 0 balance:

```php
function withdraw($amount) {
    $newBalance = $this->balance - $amount;
    if ($newBalance < 0) {
        throw new Exception('Balance would go below zero');
    }
    return $newBalance;
}
```

In this case, if the value of ```$this->balance``` was 5 and ```$amount``` was 10, you wouldn't want to authorize the withdrawl. By throwing the Exception, you ensure that the withdrawl doesn't take place if there is not enough money in the account.

For more information, including how to catch thrown Exceptions, have a look at the <a href="http://php.net/manual/en/language.exceptions.php">php.net Exceptions</a> page.
