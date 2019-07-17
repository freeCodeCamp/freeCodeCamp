---
title: For Loop
---

## For Loop

The PHP  `for` statement consists of three expressions and a statement:

`for ((initialization); (condition); (final-expression)) statement`

### Description

- initialization
    - Run before the first execution on the loop.
    - This expression is commonly used to create counters. 
    - Variables created here are scoped to the loop. Once the loop has finished it is execution they are destroyed.
- condition 
    - Expression that is checked prior to the execution of every iteration. 
    - If omitted this expression evaluates to `true`.
- final-expression 
    - Expression that is run after every iteration. 
    - Usually used to increment a counter. 
    - But it can be used to run any expression.
- statement
    - Code to be repeated in every loop iteration.

Any of these three expressions or the statement can be ommited. 

The expressions can contain multiple expressions separated by comma. 

In the (condition) expression, all the comma separated expressions will be evaluated. 

The result is obtained from the last one.

For loops are commonly used to count a certain number of iterations to repeat a statement.

### Common Pitfalls

#### Exceeding the bounds of an array

When indexing over an array many times it is easy to exceed the bounds of the array (ex. try to reference the 4th element of a 3 element array).

```php
// This will cause an error.
// The bounds of the array will be exceeded.
$arr = array(1,2,3);

for ($i = 0; $i <= count($arr); $i++) {
    var_dump($arr[$i]);
}
```

This will output:

```shell
int(1) int(2) int(3) NULL
```

There are to ways to fix this code. 

Set the condition to either `$i < count($arr)` or `$i <= count($arr) - 1`.

#### Performance Issues

The above code can became slow, because the array size is fetched in every iteration. 

In order to fix this problem it is possible to put the array size into a variable.

```php
//create the $size variable with a second expression comma separated
for ($i = 0, $size = count($arr); $i < $size; ++$i) {
```

### More Information

- <a href='https://secure.php.net/manual/en/control-structures.for.php' target='_blank' rel='nofollow'>PHP.net - Control Structures</a> 
