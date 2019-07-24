---
title: Iterate Odd Numbers With a For Loop
---
# Iterate Odd Numbers With a For Loop


---
## Hints

### Hint 1
 After string `// Only change code below this line.` we add `for` loop. You need to copy loop from the top:
 
```javascript
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

### Hint 2
 And change `initialization` `var i = 0` to `var i = 1`, also you need change name of the array `ourArray` to `myArray`:
 
```javascript
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
 

---
## Solutions
  
<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
</details>
