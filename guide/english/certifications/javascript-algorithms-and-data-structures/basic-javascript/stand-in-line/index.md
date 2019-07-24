---
title: Stand in Line
---

# Stand in Line


---
## Hints

### Hint 1

The `push()` method adds an item to the end of an array.


### Hint 2

The `shift()` method removes the first element of an array. It also returns the element removed.


### Hint 3

The function `nextInLine` uses **arr** and **item**. Those are what the tests will use to pass the array elements they will test with. It allows the function to be reusable. Do not hardcode any of the tests inside the function.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed; // Change this line
}
```

#### Code Explanation

*   Push **item** at the end of **arr**.
*   Call the `shift()` method on **arr** to get the first item and store it in **removed**.
*   Return **removed**.

**Example Run**

*   Test `nextInLine([2,1]);` runs.
*   The `nextInLine` function is called. **arr** becomes [2]. **item** becomes 1.
*   `arr.push(item);` Pushes 1 to [2]. So **arr** is now [2,1].
*   `var removed = arr.shift();` removes the first element. So **arr** is now [1]. 2 has been removed and is stored in **removed**.
*   `return removed;` 2 is returned.

**_Note_**: You don't actually need the variable **removed**. The element removed can be returned directly using `return arr.shift();`.

#### Relevant Links

*   <a href='http://www.freecodecamp.com/challenges/manipulate-arrays-with-push' target='_blank' rel='nofollow'>Challenge: Manipulate Arrays With push()</a>
*   <a href='http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift' target='_blank' rel='nofollow'>Challenge: Manipulate Arrays With shift()</a>
*   <a href='http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments' target='_blank' rel='nofollow'>Challenge: Passing Values to Functions with Arguments</a>
</details>
