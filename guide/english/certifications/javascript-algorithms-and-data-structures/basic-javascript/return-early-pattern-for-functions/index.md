---
title: Return Early Pattern for Functions
---
# Return Early Pattern for Functions


---
## Hints

### Hint 1
We need to modify the function ```abTest``` so that if ```a``` or ```b``` are less than ```0``` the function will immediately exit with a value of ```undefined```.

We add in body of function simple ```if``` statement, which, under the conditions "if ```a``` or ```b``` are less than ```0``` - immediately exit with a value of ```undefined```":

```javascript
if (a < 0 || b < 0) {
  return undefined;
}
```

### Hint 2
Now, if ```a``` or ```b``` are less than ```0``` - function exit with a value of ```undefined```, in other cases -

```javascript
return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
```


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2, 2);
```

</details>