---
title: Chaining If Else Statements
---
## Chaining If Else Statements

* ```If```: the first conditional in every if/else statement, case the conditional is *true*, execute the code and ignore the rest.
* ```Else if```: can never be used as the first conditional. It is always a conditional after an ```if```, case the conditional is true, execute the code. Otherwise jumps into the next conditional.
* ```Else```: case all the previous conditionals are *false*, **else** is executed.

## Solution:
```javascript
function testSize(num) {

  if(num < 5)
    return 'Tiny';
  else if(num < 10)
    return 'Small';
  else if(num < 15)
    return 'Medium';
  else if(num < 20)
    return 'Large';
  else
    return 'Huge';

}
```