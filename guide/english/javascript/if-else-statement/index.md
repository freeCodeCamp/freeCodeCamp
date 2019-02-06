---
title: If-Else Statement
---
## Introduction

The `if` statement executes a statement if a specified condition is `true`. If the condition is `false`, then the statement inside `else` block gets executed.

**Note:** The `else` statement is optional.

```javascript
if (condition) {
    /* do this if condition is TRUE */
} else {
    /* do this if condition is FALSE (or not TRUE) */
}
```

The conditions can be as simple as just checking booleans, but you can also check the value of variables using operators. One of the most commonly used operators is the equality operator, "==". It checks if two values are equal to each other. Note that there are two equal signs and not just one. This is because of the fact that one equal sign would set the first value to equal the second, not compare them.

Some other common operators are the greater/smaller than operator (> and < respectively) and the not equal to operator (!=).

Multiple `if...else` statements can be chained to create an `else if` clause. This specifies a new condition to test and can be repeated to test multiple conditions, checking until a true statement is presented to execute.

```javascript
if (condition1) {
    /* do something */
} else if (condition2) {
    /* do something else */
} else if (condition3) {
    /* do something else */
} else {
    /* final statement */
}
```

**Note:** If you want to execute more than one statement in the `if`, `else` or `else if` part, curly braces are required around the statements:

```javascript
if (condition) {
    /* do */
    /* something */
    /* with multiple statements */
} else {
    /* do something */
    /* else */
}
```

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/library/85yyde5c.aspx' target='_blank' rel='nofollow'>MSDN link</a>

### Additional ternary operator
For a simple operation like assigning a value to a variable conditionally you can use a ternary operator, which is a shorthand syntax for an `if...else` clause in JavaScript
```javascript
// Normal if...else
let num  = 1;
if (someCondition){
    num = 1;
} else {
    num = 0;
}

// Using ternary operator
const num = someCondition ? 1 : 2;
// condition ? true case : false case
```

## Examples

**Using** `if...else`:

```javascript
// If x is equal to 5, then the condition is TRUE. This results in z being set to 7 and q being set to 42.
// If x does not equal to 5, then the condition is FALSE. This results in z being set to 19.
if (x == 5) {
  z = 7;
  q = 42;
} else {
  z = 19;
}
```

**Using** `else if`:
```javascript
if (x < 10) {
  return "Small number";
} else if (x < 50) {
  return "Medium number";
} else if (x < 100) {
  return "Large number";
} else {
  flag = 1;
  return "Invalid number";
}
```

**Using** `if` **alone**:
```javascript
    // This function can also act as a Boolean
    if (x < 30) {
        return "true";
    }
