---
title: Ternary Operator
---
The Ternary operator replaces an `if`/`else` block in a condensed format. It is also referred to as the conditional operator, inline if (iif), or ternary if. The following is the general format of the ternary operator.

```
condition ? expr1 : expr2
```

## Description

If `condition` evaluates to true, the operator resolves to the value of `expr1`; otherwise, it resolves to the value of `expr2`. 

For example, to display a different message based on the value of the isMember variable, you can use the following statements:

```javascript
let isMember = true;

let message = (isMember) ? 'Welcome Back!' : 'You need to login'; // 'Welcome Back'
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/M8Ge/1' target='_blank' rel='nofollow'>Run Code</a>

## Running functions with ternary operator

It's also possible to run functions using ternary operator, which sometimes can be useful and more readable.

```javascript
    const runFirst = true;
    (runFirst) ? first() : second();
```

## Chaining using the ternary operator

You can also chain a ternary operator indefinitely, in a similar way to using `else if's` before the final `else` of an an `if`/`else` block. Each time the colon is used to state the `else` part of the ternary operator a new condition can be stated until the final termination condition is used.

```javascript
    function displayNum (num) {
     return  num === 3 ? 'number is 3' : num === 2 ? 'number is 2' : num === 1 ? 'number is 1 ' : 'number is not in range';
    }
```

To ease readability, the code using ternary operators is often formatted across multiple lines as follows:

```javascript
    function displayNum(num) {
        return num === 3
            ? 'number is 3'
            : num === 2
                ? 'number is 2'
                : num === 1
                    ? 'number is 1'
                    : 'number is not in range';
    }
```

This way of using the ternary operator needs to be done sparingly and in the right places, which is why (as is the case with using multiple `else if's`), it can sometimes lead to more readable code by using a `switch` statement instead.

It is advisable to use the ternary operator only in cases which include both `if` and `else` conditions, otherwise using an `if` block is recommended. Chaining ternary operators without care may cause unforeseen bugs.


**Read more:** <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' target='_blank' rel='nofollow'>MDN</a>
