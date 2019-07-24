---
title: Replacing If Else Chains with Switch
---
# Replacing If Else Chains with Switch


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

We need to change the chained ```if/else if``` statements into a ```switch``` statement.

Now, we need to comment (```//``` - select all lines and ```ctrl+/```) all chained ```if/else if``` statements:

```javascript
//   if (val === "bob") {
//     answer = "Marley";
//   } else if (val === 42) {
//     answer = "The Answer";
//   } else if (val === 1) {
//     answer = "There is no #1";
//   } else if (val === 99) {
//     answer = "Missed me by this much!";
//   } else if (val === 7) {
//     answer = "Ate Nine";
//   }
```

Next, we need to create simple ```switch``` statement:

```javascript
switch (val) {
}
```

and add in this ```switch``` statement ```case``` - for all ```if/else if``` statement (just copy it from our commented code above):

```javascript
switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}
```

Dont forget to use ```break``` in each ```case```!
Now, we can delete commented code with ```if/else if``` statement above.

Here’s a full solution:

```javascript
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
chainToSwitch(7);
```

</details>