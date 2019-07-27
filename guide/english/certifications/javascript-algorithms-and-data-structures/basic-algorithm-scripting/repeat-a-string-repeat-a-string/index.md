---
title: Repeat a String Repeat a String
---

# Repeat a String Repeat a String

---
## Problem Explanation

The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank' rel='nofollow'>Global String Object</a>


---
## Hints

### Hint 1
The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

### Hint 2

You can't edit strings, you will need to create a variable to store the new string.


### Hint 3

Create a loop to repeat the code as many times as needed.


### Hint 4

Make the variable created store the current value and append the word to it.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
```

#### Code Explanation

*   Create an empty string variable to store the repeated word.
*   Use a while loop or for loop to repeat code as many times as needed according to `num`
*   Then we just have to add the string to the variable created on step one, and increase or decrease `num` depending on how you set the loop.
*   At the end of the loop, return the variable for the repeated word.

#### Relevant Links

*   <a>JS while Loop</a>
*   <a href='https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained' target='_blank' rel='nofollow'>JS For Loops Explained</a>
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```js
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
```

#### Code Explanation

*   This solution uses recursion.
*   We check if `num` is negative and return an empty string if true.
*   Then we check if it's equal to 1 and in that case we return the string itself.
*   If not, we add the string to a call of our function with `num` being decreased by 1, which will add another `str` and another.. until eventually `num` is 1\. And return that whole process.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion' target='_blank' rel='nofollow'>Functions - Recursion</a>

</details>

<details><summary>Solution 3 (Click to Show/Hide)</summary>

```js
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);
```

#### Code Explanation

*   This solution takes a declarative approach.
*   It is similar to the third solution, except it uses the ternary operator form of the `if` statement.

#### Relevant Links

*   <a href='https://forum.freecodecamp.com/t/javascript-ternary-operator/15973' target='_blank' rel='nofollow'>JS Ternary</a>
</details>