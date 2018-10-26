---
title: Confirm the Ending
---
## Confirm the Ending



<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
# 🌻 Intermediate Code Solution:
 (Declarative approach)

```javascript
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
```

#### 🚀 [Run Code](https://repl.it/repls/SardonicRoundAfkgaming)

# Code Explanation:
 - First we use the `slice` method copy the string.
 - In order to get the last characters in `str` equivalent to the `target`'s length we use the `slice` method.
 - The first parameter inside the `slice` method is the starting index and the second parameter would be the ending index.
 - For example `str.slice(10, 17)` would return `give me`.
 - In this case we only include one parameter which it will copy everything from the starting index.
 - We substract the length of `str` and the length of `target`, that way, we shall get the last remaining characters equivalent to the `target`'s length.
 - Finally we compare the return result of slice to `target` and check if they have the same characters.

### Relevant Links
 - [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
