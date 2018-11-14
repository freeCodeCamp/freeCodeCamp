---
title: For Loop
---
### Syntax

```javascript
for ([initialization]); [condition]; [final-expression]) {
   // statement
}
```

The javascript `for` statement consists of three expressions and a statement:

## Description

*   initialization - Run before the first execution on the loop. This expression is commonly used to create counters. Variables created here are scoped to the loop. Once the loop has finished its execution they are destroyed.
*   condition - Expression that is checked prior to the execution of every iteration. If omitted, this expression evaluates to true. If it evaluates to true, the loop's statement is executed. If it evaluates to false, the loop stops. 
*   final-expression - Expression that is run after every iteration. Usually used to increment a counter. But it can be used to decrement a counter too.
*   statement - Code to be repeated in the loop

any of these three expressions or the statement can be omitted. For loops are commonly used to count a certain number of iterations to repeat a statement. Use a `break` statement to exit the loop before the condition expression evaluates to false. 

## Common Pitfalls

**Exceeding the bounds of an array**

When indexing over an array many times it is easy to exceed the bounds of the array (ex. try to reference the 4th element of a 3 element array).

```javascript
    // This will cause an error.
    // The bounds of the array will be exceeded.
    var arr = [ 1, 2, 3 ];
    for (var i = 0; i <= arr.length; i++) {
       console.log(arr[i]);
    }

    output:
    1
    2
    3
    undefined
```

There are two ways to fix this code. Set the condition to either `i < arr.length` or `i <= arr.length - 1`

### Examples

Iterate through integers from 0-8
    
```javascript
for (var i = 0; i < 9; i++) {
   console.log(i);
}

output:
0
1
2
3
4
5
6
7
8
```

Break out of a loop before condition expression is false

```javascript
for (var elephant = 1; elephant < 10; elephant+=2) {
    if (elephant === 7) {
        break;
    }
    console.info('elephant is ' + elephant);
}

output:
elephant is 1
elephant is 3
elephant is 5
```
    
### Other Resources
* [MDN - for statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
