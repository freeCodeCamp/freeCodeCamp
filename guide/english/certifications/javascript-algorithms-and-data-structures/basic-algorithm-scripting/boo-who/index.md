---
title: Boo Who
---

# Boo Who

---
## Problem Explanation

This program is very simple, the trick is to understand what a boolean primitive is. The programs requires a true or false answer.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean' target='_blank' rel='nofollow'>Boolean</a>


---
## Hints

### Hint 1

You will need to check for the type of the parameter to see if it is a boolean.

### Hint 2
To check for the type of a parameter, you can use `typeof`.

### Hint 3
Since you must return true or false you can use if statements or just have it return the boolean used for the if statement.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function booWho(bool) {
  return typeof bool === "boolean";
}

// test here
booWho(null);
```

#### Code Explanation

* Uses the operator `typeof` to check if the variable is a boolean. If it is, it will return `true`. Otherwise, if it is any other type it will return `false`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof' target='_blank' rel='nofollow'>typeof</a>

</details>