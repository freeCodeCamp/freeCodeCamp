---
title: Selecting from Many Options with Switch Statements
---
# Selecting from Many Options with Switch Statements

---
## Problem Explanation 
A switch statement first evaluates its expression. It then looks for the first `case` clause whose expression evaluates to the same value as the result of the input expression (using the [strict comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), (`===`) and transfers control to that clause, executing the associated statements. (If multiple cases match the provided value, the first case that matches is selected, even if the cases are not equal to each other.)

If no matching `case` clause is found, the program looks for the optional `default` clause, and if found, transfers control to that clause, executing the associated statements. If no `default` clause is found, the program continues execution at the statement following the end of `switch`. By convention, the `default` clause is the last clause, but it does not need to be so.

The optional `break` statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If `break` is omitted, the program continues execution at the next statement in the `switch` statement.<sup><a href="#cite1">1</a></sup>


---
## Hints

### Hint 1
Remember that `case` values are tested with strict equality (`===`).
> Try to solve the problem now!

### Hint 2
Do not see _"following conditions"_ as an ordered list as it looks in the original freeCodeCamp demo, but as values and statements, as shown here
>Try to solve the problem now!



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
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
#### Code Explanation
It is common to ignore that `case` values are tested with strict equality with any need of other expression, like so:
`case === value`
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
caseInSwitch(1);
```

#### Code Explanation
Since you already have a variable defined at the beginning of the function named `answer` and it's defined as the last return statement, you can assign new values to it for each case and will return the expected answer depending on the value you pass to the function. 


#### Relevant Links
<span id="cite1">1</span>. [Description of "switch" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#Description).
</details>
