---
title: Catch Missing Open and Closing Parenthesis After a Function Call
---
# Catch Missing Open and Closing Parenthesis After a Function Call


---
## Hints

### Hint 1
- Remember to add opening and closing parentheses when calling a function.
- FunctionName + ();


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);
``` 
</details>
