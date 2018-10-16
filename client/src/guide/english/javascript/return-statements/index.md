---
title: Return Statement
---
## Introduction

When a **return** statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, `undefined` is returned instead.

```js
    return expression;
```

Functions can return:
* Primitive values (string, number, boolean, etc.)
* Object types (arrays, objects, functions, etc.)

Never return something on a new line without using parentheses. This is a JavaScript quirk and the result will be undefined. Try to always use parentheses when returning something on multiple lines.

```javascript
function foo() {
    return 
      1;
}

function boo() {
    return (
      1
    );
}

foo(); --> undefined
boo(); --> 1
```

## Examples

The following function returns the square of its argument, **x**, where **x** is a number.

```js
    function square(x) {
       return x * x;
    }
```
![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/C7VT/0' target='_blank' rel='nofollow'>Run Code</a>

The following function returns the product of its arguments, **arg1** and **arg2**.

```js
    function myfunction(arg1, arg2){
       var r;
       r = arg1 * arg2;
       return(r);
    }
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/C7VU/0' target='_blank' rel='nofollow'>Run Code</a>

When a function `return`s a value, the value can be assigned to a variable using the assigment operator (`=`). In the example below, the function returns the square of the argument. When the function resolves or ends, its value is the `return`ed value. The value is then assigned to the variable `squared2`.

```javascript
    function square(x) {
        return x * x;
    }
    
    let squared2 = square(2); // 4
```

If there is no explicit return statement, meaning the function is missing the `return` keyword, the function automatically returns `undefined`. In the following example, the `square` function is missing the `return` keyword. When the result of calling the function is assigned to a variable, the variable has a value of `undefined`.

```javascript
    function square(x) {
        let y = x * x;
    }
    
    let squared2 = square(2); // undefined
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/M8BE' target='_blank' rel='nofollow'>Run Code</a>

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return' target='_blank' rel='nofollow'>MDN link</a>

<a href='https://msdn.microsoft.com/en-us/library/22a685h9.aspx' target='_blank' rel='nofollow'>MSDN link</a>
