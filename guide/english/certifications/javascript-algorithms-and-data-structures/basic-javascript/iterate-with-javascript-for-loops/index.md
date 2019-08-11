---
title: Iterate with JavaScript For Loops
---
# Iterate with JavaScript For Loops

---
## Hints

### Hint 1
```javascript
for(var i = 0; i < 5; i++) {  // There are 3 parts here
```

There are three parts to for loop. They are separated by semicolons.

1. The initialization: `var i = 0;` - This code runs only once at the start of the loop. It's usually used to declare the counter variable (with `var`) and initialize the counter (in this case it is set to 0).

2. The condition: `i < 5;` - The loop will run as long as this is `true`. That means that as soon as `i` is equal to 5, the loop will stop looping. Note that the inside of the loop will never see `i` as 5 because it will stop before then. If this condition is initially `false`, the loop will never execute.

3. The increment: `i++` - This code is run at the end of each loop. It's usually a simple increment (`++` operator), but can really be any expression. It is used to move the counter (`i`) forward (or backwards, or whatever).

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
```

</details>
