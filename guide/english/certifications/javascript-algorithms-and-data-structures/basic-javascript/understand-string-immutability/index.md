---
title: Understand String Immutability
---
# Understand String Immutability


---
## Hints

### Hint 1
Instead of  ```Jello World ```, ```myStr``` should be assigned ```Hello World```.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
// Setup
var myStr = "Jello World";
// Only change code below this line
myStr = "Hello World";
```
#### Code Explanation
String literals such as ```"Jello World"``` cannot be changed by the individual letter (hence being *immutable*), so the variable containing the incorrect string must be replaced with the desired string using the assignment operator ```=```
</details>
