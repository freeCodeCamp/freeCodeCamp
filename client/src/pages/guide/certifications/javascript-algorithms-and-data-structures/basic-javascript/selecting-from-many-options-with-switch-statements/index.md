---
title: Selecting from Many Options with Switch Statements
---
## Selecting from Many Options with Switch Statements

If you have many options to choose from, use a `switch` statement. A `switch` statement tests a value and can have many `case` statements which define various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.

Here is a pseudocode example:

```js
  switch(num) {
    case value1:
      statement1;
      break;
    case value2:
      statement2;
      break;
    ...
    case valueN:
      statementN;
      break;
  }
```

### A bit more explanation
A switch statement first evaluates its expression. It then looks for the first `case` clause whose expression evaluates to the same value as the result of the input expression (using the [strict comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), (`===`) and transfers control to that clause, executing the associated statements. (If multiple cases match the provided value, the first case that matches is selected, even if the cases are not equal to each other.)

If no matching `case` clause is found, the program looks for the optional `default` clause, and if found, transfers control to that clause, executing the associated statements. If no `default` clause is found, the program continues execution at the statement following the end of `switch`. By convention, the `default` clause is the last clause, but it does not need to be so.

The optional `break` statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If `break` is omitted, the program continues execution at the next statement in the `switch` statement.


### Problem Explanation: 
Write a switch statement which tests `val` and sets `answer` for the following conditions:
- `1` - "alpha",
- `2` - "beta",
- `3` - "gamma",
- `4` - "delta".

# Hint 1
Remember that `case` values are tested with strict equality (`===`).
#### Try to solve the problem now!

# Hint 2
Do not see "following conditions" as an ordered list as it looks in the original freeCodeCamp demo, but as values and statements, as shown here
#### Try to solve the problem now!

# Spoiler Alert!
### Are you completely sure what you want a look? ...

# Basic Code Solution

```js
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(1);
```
## Code Explanation
It is common to ignore that `case` values are tested with strict equality with any need of other expression, like so:
`case === value`



