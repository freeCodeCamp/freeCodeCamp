---
title: Chaining If Else Statements
---
## Chaining If Else Statements

* ```If```: the first conditional in every if/else statement, case the conditional is *true*, execute the code and ignore the rest.
* ```Else if```: can never be used as the first conditional. It is always a conditional after an ```if```, case the conditional is true, execute the code. Otherwise jumps into the next conditional.
* ```Else```: case all the previous conditionals are *false*, **else** is executed.

### Problem explanation:
_Write chained  `if`/`else if`statements to fulfill the following conditions_:

_`num < 5`- return "Tiny"  
`num < 10`- return "Small"  
`num < 15`- return "Medium"  
`num < 20`- return "Large"  
`num >= 20`- return "Huge"_

#### Hint 1
Remember that you can combine (chain) several `if...else` statements one after the other until your last one using `else if (condition) {do this}`.
> _try to solve the problem now_
> 
> 
#### Hint 2
Sometimes, when you write more code than you are used to and it doesn't work, the little things are what betray us. Checking for missing semicolons, brackets, etc. can prove very useful.
> _try to solve the problem now_

## Spoiler alert!

**Solution ahead!**


## Solution:
```javascript
function testSize(num) {
  // Only change code below this line
  if (num < 5){
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15){
    return "Medium";
  }
  else if (num < 20){
    return "Large";
  }
  else {
    return "Huge";
  }
  // Only change code above this line
}
```

· Run code at [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Chaining-ifelse-statements)

### Code explanation
The function first checks the `if` condition `(num < 5)`. If it evaluates to `true`, it returns the statement between the curly braces ("Tiny"). If it doesn't, it checks the next condition until the last `else` statement. 


### Resources

- ["if...else" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
