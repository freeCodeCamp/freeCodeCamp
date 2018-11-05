---
title: Ternary Operator
---
The Ternary operator replaces an `if`/`else` block in a condensed format. The following is the general format of the ternary operator.

```
condition ? expr1 : expr2
```

## Description

If condition is true, the operator resolves to the value of expr1; otherwise, it resolves to the value of expr2. 

For example, to display a different message based on the value of the isMember variable, you could use this statement:

```javascript
let isMember = true;

let message = isMember ? 'Welcome Back!' : 'You need to login'; // 'Welcome Back'
```

Another useful method to using a Ternary operator would be to envoke it to conditionally execute a function or method 

```javascript
    
    function memberOpen(){
        console.log("open");
    }
    
    function memberClose(){
        console.log("close");
    }
    
    let isMember = true;
    
    (isMember) ? memberOpen() : memberClose();
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/M8Ge/1' target='_blank' rel='nofollow'>Run Code</a>

## Running functions with ternary operator

It's also possible to run functions using the ternary operator, which sometimes can be useful and more readable. However, use it carefully, because then code is harder to debug.

```javascript
    const runFirst = true;
    runFirst ? first() : second();
```

## Chaining using the ternary operator

You can also chain a ternary operator indefinitely, in a similar way to using `else if's` before the final else of an an `if`/`else` block. Each time the colon is used to state the else part of the ternary operator a new condition can be stated until the final termination condition is used.

```javascript
    function displayNum(num) {
     return  num === 3 ? 'number is 3' : num === 2 ? 'number is 2' : num === 1 ? 'number is 1 ' : 'number is not in range';
    }
```

To ease readability, this is often formatted across multiple lines.

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

This method needs to be used sparingly in the right places however, as with multiple `else if's` it can sometimes lead to more readable code using a switch statement.


**Read more:** <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' target='_blank' rel='nofollow'>MDN</a>
